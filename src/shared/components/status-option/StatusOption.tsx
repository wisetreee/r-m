// src/shared/components/StatusOption/StatusOption.tsx
import type { FC } from 'react';

import styles from './StatusOption.module.scss';

import { clsx } from '@/shared/helpers';
import type { Status } from '@/shared/types';

interface StatusOptionProps {
  status: Status;
}

export const StatusOption: FC<StatusOptionProps> = ({ status }) => {
  const colorMap: Record<Status, string> = {
    Alive: 'var(--color-success)',
    Dead: 'var(--color-danger)',
    Unknown: 'var(--color-warning)'
  };
  return (
    <div className={clsx(styles.statusOption)}>
      <span className={clsx(styles.text, 'body-sm')}>{status}</span>
      <div
        className={styles.dot}
        style={{
          backgroundColor: colorMap[status]
        }}
      />
    </div>
  );
};
