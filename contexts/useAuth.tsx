import { useEffect, useState, createContext, useContext } from 'react';
import { supabase } from '@supabase/client';
import { User, Session, AuthChangeEvent } from '@supabase/supabase-js';

import { UserI } from '@lib/user';

interface useAuthI {
  session: Session | null;
  authUser: User | null;
  user: UserI | null;
  userLoaded: Boolean;
  signIn: () => void;
  signinWithGoogle: () => void;
  signUpWithEmailAndPassword: (
    name: string,
    email: string,
    password: string
  ) => void;
  signOut: () => void;
}

export const UserContext = createContext<useAuthI>({
  session: null,
  authUser: null,
  user: null,
  userLoaded: false,
  signIn: () => {},
  signinWithGoogle: () => {},
  signUpWithEmailAndPassword: () => {},
  signOut: () => {},
});

export const UserContextProvider = (props) => {
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [user, setUser] = useState<UserI | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [userLoaded, setUserLoaded] = useState<Boolean>(false);

  const setServerSession = async (
    event: AuthChangeEvent,
    session: Session | null
  ) => {
    await fetch('/api/auth', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      credentials: 'same-origin',
      body: JSON.stringify({ event, session }),
    });
  };

  useEffect(() => {
    const session = supabase.auth.session();
    setSession(session);
    setAuthUser(session?.user ?? null);

    // supabase.auth.api.refreshAccessToken

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setAuthUser(session?.user ?? null);

        console.log(event);

        switch (event) {
          case 'SIGNED_IN':
            break;
          case 'SIGNED_OUT':
            setUser(null);
            setAuthUser(null);
            setSession(null);
            setUserLoaded(true);

            break;
          case 'USER_UPDATED':
            break;
        }

        await setServerSession(event, session);

        //  headers: new Headers({ 'Content-Type': 'application/json' }),
        // credentials: 'same-origin',
        // body: JSON.stringify({ event, session }),
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  const getUserFromDB = (id: string) => {
    return supabase.from('users').select(`*`).eq('authId', id).single();
  };

  const signUpWithEmailAndPassword = async (
    formFullName: string,
    formEmail: string,
    formPassword: string
  ) => {
    const { user: authUser, error: authError } = await supabase.auth.signUp({
      email: formEmail,
      password: formPassword,
    });

    setAuthUser(authUser);

    if (authError) {
      console.log(authError);
      return new Error(authError.message);
    }

    const { data: newUser, error: newUserError } = await supabase
      .from('users')
      .insert([
        {
          email_personal: formEmail,
          fullName: formFullName,
          avatar: 'https://i.pravatar.cc/20',
          verified: false,
          authId: authUser?.id,
        },
      ])
      .single();

    console.log(newUser, 'signup user');

    if (newUserError) return new Error(newUserError.message);

    setUser(newUser[0]);

    return newUser[0];
  };

  const signinWithGoogle = async () => {
    const {
      user: authUser,
      session: authSession,
      error: authError,
    } = await supabase.auth.signIn({
      provider: 'google',
    });

    setAuthUser(authUser);
    setSession(authSession);

    if (authError) {
      console.log(authError);
      return new Error(authError.message);
    }

    const { data: newUser, error: newUserError } = await supabase
      .from('users')
      .insert([
        {
          email_personal: authUser?.email,
          fullName: authUser?.id,
          avatar: 'https://i.pravatar.cc/20',
          verified: false,
          authId: authUser?.id,
        },
      ])
      .single();

    console.log(newUser, 'login with google user');

    if (newUserError) return new Error(newUserError.message);

    setUser(newUser[0]);

    return user;
  };

  useEffect(() => {
    if (authUser) {
      getUserFromDB(authUser.id).then((data) => {
        console.log(data, 'db user data');

        setUser(data.data);
        setUserLoaded(true);
      });
    }
  }, [authUser]);

  const signIn = (options) => supabase.auth.signIn(options);
  const signOut = () => {
    setUser(null);
    return supabase.auth.signOut();
  };

  const value = {
    session,
    authUser,
    user,
    userLoaded,
    signIn,
    signinWithGoogle,
    signUpWithEmailAndPassword,
    signOut,
  };

  return <UserContext.Provider value={value} {...props} />;
};

export const useAuth = (): useAuthI => {
  return useContext(UserContext);
};
