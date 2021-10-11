import { useEffect, useState, createContext, useContext } from 'react';
import { supabase } from '@supabase/client';
import { User, Session } from '@supabase/supabase-js';

import { UserI } from '@lib/user';

interface useAuthI {
  session: Session | null;
  authUser: User | null;
  user: UserI | null;
  userLoaded: Boolean;
  signIn: () => void;
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
  signUpWithEmailAndPassword: () => {},
  signOut: () => {},
});

export const UserContextProvider = (props) => {
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [user, setUser] = useState<UserI | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [userLoaded, setUserLoaded] = useState<Boolean>(false);

  useEffect(() => {
    const session = supabase.auth.session();
    setSession(session);
    setAuthUser(session?.user ?? null);

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (_, session) => {
        setSession(session);
        setAuthUser(session?.user ?? null);
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

  useEffect(() => {
    if (authUser) {
      getUserFromDB(authUser.id).then((data) => {
        console.log(data, 'db user data');

        setUser(data.data);
        setUserLoaded(true);
      });
    }
  }, [authUser]);

  const value = {
    session,
    authUser,
    user,
    userLoaded,
    signIn: (options) => supabase.auth.signIn(options),
    signUpWithEmailAndPassword,
    signOut: () => {
      setUser(null);
      return supabase.auth.signOut();
    },
  };

  return <UserContext.Provider value={value} {...props} />;
};

export const useAuth = (): useAuthI => {
  return useContext(UserContext);
};