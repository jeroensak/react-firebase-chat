import React from 'react';
import { auth } from '../firebase';

const SignOut = () => {
  if (!auth.currentUser) return null;

  return <button onClick={auth.signOut}>Sign out</button>;
};

export default SignOut;
