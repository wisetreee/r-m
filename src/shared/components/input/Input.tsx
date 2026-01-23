import type { ChangeEvent, ComponentType, FC, HTMLAttributes } from 'react';

import styles from './Input.module.scss';

import { InputCrossIcon } from '@/assets/icons';
import { clsx } from '@/shared/helpers';

interface IconProps {
  className?: string;
}

interface InputProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  variant?: 'underline' | 'border';
  icon?: ComponentType<IconProps>;
  placeholder?: string;
  value: string;
  onChange?: (value: string) => void;
  onReset?: () => void;
}
export const Input: FC<InputProps> = ({
  variant = 'border',
  icon: Icon,
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
      {Icon && <Icon className={styles.icon} />}
      <input
        className={clsx(styles.input, variant === 'underline' && 'heading-sm')}
        onChange={handleChange}
        placeholder={placeholder}
        value={value}
      />
      {value !== '' && (
        <button
          onClick={handleReset}
          className={styles.resetButton}
        >
          <InputCrossIcon />
        </button>
      )}
    </div>
  );
};
