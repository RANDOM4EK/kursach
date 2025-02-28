import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import * as RTL from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AuthorizationForm from './AuthorizationForm';
import { AuthProvider } from '../../providers/AuthProvider';

// Мокаем useNavigate
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

// Мокаем useAuth
const mockLogin = vi.fn();
vi.mock('../../hooks/useAuthHook', () => {
  return {
    __esModule: true, // Важно для ES модулей
    useAuth: () => ({
      login: mockLogin,
      user: null,
    }),
  };
});

// Создаем тестовую обертку
const AuthFormWrapper = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AuthorizationForm />
      </BrowserRouter>
    </AuthProvider>
  );
};

describe('AuthorizationForm Component', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
    mockLogin.mockClear();
    vi.clearAllMocks();
  });

  // Проверяем рендеринг формы
  it('renders form with all fields', () => {
    render(<AuthFormWrapper />);

    // Проверяем наличие всех элементов формы
    expect(RTL.screen.getByText('Авторизация')).toBeInTheDocument();
    expect(RTL.screen.getByLabelText('Email')).toBeInTheDocument();
    expect(RTL.screen.getByLabelText('Пароль')).toBeInTheDocument();
    expect(
      RTL.screen.getByRole('button', { name: 'Войти' })
    ).toBeInTheDocument();
  });

  // Проверяем процесс авторизации
  it('handles form submission correctly', () => {
    render(<AuthFormWrapper />);

    // Находим поля ввода
    const emailInput = RTL.screen.getByLabelText('Email');
    const passwordInput = RTL.screen.getByLabelText('Пароль');
    const submitButton = RTL.screen.getByRole('button', { name: 'Войти' });

    // Вводим данные
    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    // Отправляем форму
    fireEvent.click(submitButton);

    // Проверяем, что функция login была вызвана с правильными параметрами
    expect(mockLogin).toHaveBeenCalledWith('test@test.com', 'password123');
    // Проверяем, что произошла навигация на главную
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  // Проверяем валидацию формы
  it('validates required fields', () => {
    render(<AuthFormWrapper />);

    // Пытаемся отправить пустую форму
    const submitButton = RTL.screen.getByRole('button', { name: 'Войти' });
    fireEvent.click(submitButton);

    // Проверяем, что появились сообщения об ошибках
    expect(RTL.screen.getByLabelText('Email')).toBeInvalid();
    expect(RTL.screen.getByLabelText('Пароль')).toBeInvalid();
  });
});
