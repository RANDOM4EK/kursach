import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import * as RTL from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AuthRequired from './AuthRequired';

describe('AuthRequired Component', () => {
  // Проверяем отображение компонента
  it('renders auth required message', () => {
    render(
      <BrowserRouter>
        <AuthRequired />
      </BrowserRouter>
    );

    // Проверяем наличие всех элементов сообщения
    expect(RTL.screen.getByText('Требуется авторизация')).toBeInTheDocument();
    expect(
      RTL.screen.getByText(
        'Для доступа к этой странице необходимо авторизоваться'
      )
    ).toBeInTheDocument();
    expect(RTL.screen.getByText('Перейти к авторизации')).toBeInTheDocument();
  });

  // Проверяем наличие ссылки на страницу логина
  it('contains link to login page', () => {
    render(
      <BrowserRouter>
        <AuthRequired />
      </BrowserRouter>
    );

    const loginLink = RTL.screen.getByText('Перейти к авторизации');
    expect(loginLink.closest('a')).toHaveAttribute('href', '/login');
  });
});
