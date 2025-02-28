import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import * as RTL from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../hooks/useAuth';
import Header from './Header';

// Создаем обертку для тестов, которая предоставляет необходимые провайдеры
const HeaderWrapper = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
      </AuthProvider>
    </BrowserRouter>
  );
};

describe('Header Component', () => {
  // Проверяем, что компонент корректно рендерится с основными элементами
  it('renders header with all necessary elements', () => {
    render(<HeaderWrapper />);

    // Проверяем наличие основного header элемента
    expect(RTL.screen.getByRole('banner')).toBeInTheDocument();

    // Проверяем наличие навигации
    expect(RTL.screen.getByRole('navigation')).toBeInTheDocument();
  });

  // Проверяем наличие всех навигационных ссылок
  it('displays all navigation links', () => {
    render(<HeaderWrapper />);

    // Проверяем каждую ссылку по отдельности
    const links = ['Главная', 'Каталог', 'Наши работы', 'Корзина', 'Вопросы'];
    links.forEach((linkText) => {
      expect(RTL.screen.getByText(linkText)).toBeInTheDocument();
    });
  });

  // Проверяем отображение кнопки входа для неавторизованного пользователя
  it('shows login button when user is not authenticated', () => {
    render(<HeaderWrapper />);

    expect(RTL.screen.getByText('Регистрация/Вход')).toBeInTheDocument();
  });
});
