// import { observable, action, computed, makeObservable } from 'mobx';
// import { supabase } from '@supabase/client';
// import { AuthSession, User } from '@supabase/supabase-js';
// import { UserI } from '@lib/user';

// export default class AuthStore {
//   @observable authUser: User | undefined | null = null;
//   @observable loading: boolean = false;

//   @observable session: AuthSession | null = null;

//   @observable user: UserI | null = null;

//   constructor() {
//     makeObservable(this);

//     supabase.auth.onAuthStateChange((event, session) => {
//       console.log(event, session, 'authState');

//       this.session = session;

//       switch (event) {
//         case 'SIGNED_IN' || 'USER_UPDATED':
//           this.setAuthUser(session?.user);
//           this.getUser();

//         case 'SIGNED_OUT':
//           this.setAuthUser(null);
//           this.user = null;
//           this.session = null;

//         default:
//           this.setAuthUser(null);
//           this.user = null;
//           this.session = null;
//       }
//     });

//     this.getUser();
//   }

//   @action
//   setAuthUser(newUser: User | null | undefined) {
//     this.authUser = newUser;
//   }

//   @action
//   setUser(user: UserI) {
//     this.user = user;
//   }

//   @action
//   async signUpWithEmailAndPassword(formFullName, formEmail, formPassword) {
//     const { user: authUser, error: authError } = await supabase.auth.signUp({
//       email: formEmail,
//       password: formPassword,
//     });

//     this.setAuthUser(authUser);

//     if (authError) return;

//     const { data: newUser, error: newUserError } = await supabase
//       .from('users')
//       .insert([
//         {
//           email_personal: formEmail,
//           fullName: formFullName,
//           avatar: 'https://i.pravatar.cc/20',
//           verified: false,
//           authId: authUser?.id, 
//         },
//       ])
//       .single();

//     if (newUserError) return;
//     console.log(newUser, 'signup user');

//     this.setUser(newUser[0]);
//   }

//   @computed
//   get isUser() {
//     return !!this.authUser;
//   }

//   @action
//   async getUser() {
//     const authUser = supabase.auth.user();
//     if (!authUser) return;

//     const { data: user, error } = await supabase
//       .from('users')
//       .select(`*`)
//       .eq('authId', authUser.id)
//       .single();

//     if (error) return;

//     this.setUser(user);
//     console.log(user, 'hydrated user');

//     return user;
//   }

//   @action hydrate(data) {
//     if (!data) return;

//     this.authUser = data.user;
//     this.loading = data.loading;
//     this.session = data.session;

//     // Auth User
//     const user = supabase.auth.user();
//     this.authUser = user;

//     // fetching from DB
//     this.getUser();
//   }
// }
