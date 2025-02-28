import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { AuthContextType } from './types';

// Экспортируем как именованный экспорт
export const useAuth = () => {
  const context = useContext<AuthContextType | null>(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Экспортируем по умолчанию для тестов
export default useAuth;
