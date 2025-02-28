import '@testing-library/jest-dom';
import { expect, afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

// Определяем тип для матчеров
type Matchers = typeof matchers;

// Расширяем матчеры vitest матчерами testing-library
expect.extend(matchers as Matchers);

// Мокаем useAuth глобально
vi.mock('../hooks/useAuthHook', () => ({
  __esModule: true,
  useAuth: vi.fn(() => ({
    login: vi.fn(),
    user: null,
  })),
}));

// Очищаем после каждого теста
afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});
