import type { ChangeEvent, FC, HTMLAttributes, ReactNode } from 'react';

import styles from './Input.module.css';

import { CrossIcon } from '@/assets/icons';
import { clsx } from '@/shared/helpers';

interface InputProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  variant?: 'underline' | 'border';
  icon?: ReactNode;
  placeholder?: string;
  value: string;
  onChange?: (value: string) => void;
  onReset?: () => void;
}
export const Input: FC<InputProps> = ({
  variant = 'border',
  icon,
  placeholder,
  value,
  onChange,
  onReset,
  className,
  ...rest
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };
  const handleReset = () => {
    onReset?.();
  };

  return (
    <div
      className={clsx(styles[variant], styles.inputContainer, className)}
      {...rest}
    >
      {icon && <div className={styles.icon}>{icon}</div>}
      <input
        className={clsx(styles.input, variant === 'underline' && 'text-h6-med')}
        onChange={handleChange}
        placeholder={placeholder}
        value={value}
      />
      {value !== '' && (
        <button
          onClick={handleReset}
          className={styles.resetButton}
        >
          <CrossIcon />
        </button>
      )}
    </div>
  );
};
