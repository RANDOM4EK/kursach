import React, { useState, ReactNode } from 'react';
import AuthContext from './AuthContext';
interface IAuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const [gmail, setGmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <AuthContext.Provider value={{ gmail, password, setGmail, setPassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
