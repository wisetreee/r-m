import type { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'ghost' | 'icon';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Button = ({
  variant = 'primary',
  leftIcon,
  rightIcon,
  children,
  className,
  ...rest
}: ButtonProps) => {
  const isIconOnly = !children && (leftIcon || rightIcon);

  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        isIconOnly && styles.iconOnly,
        className
      )}
      {...rest}
    >
      {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
      {children && <span className={styles.label}>{children}</span>}
      {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
    </button>
  );
};
