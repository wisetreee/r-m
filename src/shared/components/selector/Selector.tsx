import type { FC, FocusEvent, HTMLAttributes, ReactNode } from 'react';
import { useMemo, useState } from 'react';
import clsx from 'clsx';

import styles from './Selector.module.css';

import { ArrowIcon } from '@/assets/icons';

export type TSelectorSize = 'big' | 'small';

export interface ISelectorOption {
  label: ReactNode;
  value: string;
}

interface SelectorProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  'onChange'
> {
  placeholder: string;
  options: ISelectorOption[];
  value?: string;
  size?: TSelectorSize;
  onChange?: (value: string) => void;
}

export const Selector: FC<SelectorProps> = ({
  placeholder,
  options,
  value,
  size = 'big',
  onChange,
  className,
  tabIndex,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = useMemo(
    () => options.find((option) => option.value === value),
    [options, value]
  );

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (selectedValue: string) => {
    onChange?.(selectedValue);
    setIsOpen(false);
  };

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node)) {
      setIsOpen(false);
    }
  };

  return (
    <div
      className={clsx(
        styles.selector,
        styles[size],
        isOpen && styles.open,
        className
      )}
      tabIndex={tabIndex ?? -1}
      onBlur={handleBlur}
      {...rest}
    >
      <button
        type='button'
        className={styles.controlButton}
        aria-haspopup='listbox'
        aria-expanded={isOpen}
        onClick={handleToggle}
      >
        <span
          className={clsx(
            selectedOption ? styles.value : styles.placeholder,
            size === 'big' ? 'text-input-label' : 'text-reg14'
          )}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ArrowIcon
          className={clsx(styles.chevron, isOpen && styles.chevronOpen)}
        />
      </button>

      {isOpen && (
        <ul
          className={styles.dropdown}
          role='listbox'
          aria-label={placeholder}
        >
          {options.map((option) => (
            <li
              key={option.value}
              className={clsx(
                styles.option,
                option.value === value && styles.optionActive
              )}
              role='option'
              aria-selected={option.value === value}
              tabIndex={-1}
              onClick={() => handleOptionClick(option.value)}
            >
              <span className={styles.optionLabel}>{option.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
