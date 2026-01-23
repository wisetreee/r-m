import type { FC, ReactNode, HTMLAttributes } from 'react';

import styles from './FieldWithLabel.module.scss';

import { clsx } from '@/shared/helpers';

interface FieldWithLabelProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  children?: ReactNode;
  labelClassName?: string;
}

export const FieldWithLabel: FC<FieldWithLabelProps> = ({
  label,
  children,
  className,
  labelClassName,
  ...props
}) => (
  <div
    className={styles.fieldContainer}
    {...props}
  >
    <label className={clsx(styles.label, labelClassName)}>{label}</label>
    <div className={clsx(styles.field, className)}>{children}</div>
  </div>
);
