import { createContext, FC } from 'react';

interface IAuthContext {
  gmail: string;
  password: string;
  token: boolean;
  setGmail: FC;
  setPassword: FC;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export default AuthContext;
