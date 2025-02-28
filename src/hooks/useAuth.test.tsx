import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { AuthProvider } from './useAuth';
import { useAuth } from './useAuthHook';

// Создаем обертку для тестирования хука
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <AuthProvider>{children}</AuthProvider>
);

describe('useAuth Hook', () => {
  // Мокаем localStorage перед каждым тестом
  beforeEach(() => {
    const mockLocalStorage = {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
    };
    Object.defineProperty(window, 'localStorage', {
      value: mockLocalStorage,
    });
  });

  // Проверяем начальное состояние
  it('provides initial null state', () => {
    const { result } = renderHook(() => useAuth(), { wrapper });

    expect(result.current.user).toBeNull();
  });

  // Проверяем процесс логина
  it('handles login correctly', () => {
    const { result } = renderHook(() => useAuth(), { wrapper });

    act(() => {
      result.current.login('test@test.com', 'password123');
    });

    expect(result.current.user).toEqual({
      email: 'test@test.com',
      password: 'password123',
    });
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  // Проверяем процесс логаута
  it('handles logout correctly', () => {
    const { result } = renderHook(() => useAuth(), { wrapper });

    // Сначала логинимся
    act(() => {
      result.current.login('test@test.com', 'password123');
    });

    // Затем разлогиниваемся
    act(() => {
      result.current.logout();
    });

    expect(result.current.user).toBeNull();
    expect(localStorage.removeItem).toHaveBeenCalled();
  });

  // Проверяем восстановление сессии из localStorage
  it('restores session from localStorage', () => {
    // Мокаем данные в localStorage
    const userData = { email: 'test@test.com', password: 'password123' };
    localStorage.getItem = vi.fn(() => JSON.stringify(userData));

    const { result } = renderHook(() => useAuth(), { wrapper });

    expect(result.current.user).toEqual(userData);
  });
});
