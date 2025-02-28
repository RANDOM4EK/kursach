import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import * as RTL from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
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

// Мокаем useAuth с разными состояниями для разных тестов
const mockLogout = vi.fn();
let mockUser: { email: string } | null = null;

vi.mock('../../hooks/useAuthHook', () => ({
  useAuth: () => ({
    logout: mockLogout,
    user: mockUser,
  }),
}));

const NavbarWrapper = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </AuthProvider>
  );
};

describe('Navbar Component', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
    mockLogout.mockClear();
    mockUser = null; // Сбрасываем состояние пользователя
    vi.clearAllMocks();
  });

  // Проверяем отображение для неавторизованного пользователя
  it('shows login button when user is not authenticated', () => {
    render(<NavbarWrapper />);

    // Проверяем наличие кнопки входа
    expect(RTL.screen.getByText('Регистрация/Вход')).toBeInTheDocument();
  });

  // Проверяем работу кнопки выхода для авторизованного пользователя
  it('handles logout correctly', () => {
    // Устанавливаем авторизованного пользователя для этого теста
    mockUser = { email: 'test@test.com' };

    render(<NavbarWrapper />);

    // Проверяем, что email пользователя отображается
    expect(RTL.screen.getByText('test@test.com')).toBeInTheDocument();

    // Находим и кликаем по кнопке выхода
    const logoutButton = RTL.screen.getByRole('button', { name: 'Выйти' });
    fireEvent.click(logoutButton);

    // Проверяем, что функции были вызваны
    expect(mockLogout).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith('/login');
  });

  // Проверяем наличие SpeedDial
  it('renders SpeedDial button', () => {
    render(<NavbarWrapper />);

    // Проверяем наличие кнопки SpeedDial
    const speedDialButton = document.querySelector('.MuiSpeedDial-fab');
    expect(speedDialButton).toBeInTheDocument();
  });

  // Проверяем действия SpeedDial после клика
  it('shows SpeedDial actions when clicked', async () => {
    render(<NavbarWrapper />);

    // Находим и кликаем по кнопке SpeedDial
    const speedDialButton = document.querySelector(
      '.MuiSpeedDial-fab'
    ) as HTMLElement;
    fireEvent.click(speedDialButton);

    // Ждем, пока действия появятся в DOM
    const actions = await RTL.screen.findAllByRole('menuitem');
    expect(actions).toHaveLength(4); // Проверяем количество действий
  });
});
