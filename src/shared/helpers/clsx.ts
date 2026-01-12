import clsxLib from 'clsx';

export const clsx = (...args: Parameters<typeof clsxLib>) => {
  return clsxLib(...args);
};
