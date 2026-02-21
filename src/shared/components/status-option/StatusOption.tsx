import type { FC } from 'react';

import styles from './StatusOption.module.scss';

import { capitalizeFirstLetter, clsx } from '@/shared/helpers';
import type { Status } from '@/shared/types';

interface StatusOptionProps {
  status: Status;
}

export const StatusOption: FC<StatusOptionProps> = ({ status }) => {
  const styleMap: Record<Status, string> = {
    alive: 'alive',
    dead: 'dead',
    unknown: 'unknown'
  };
  return (
    <div className={clsx(styles.statusOption)}>
      <span className={clsx(styles.text, 'body-sm')}>
        {capitalizeFirstLetter(status)}
      </span>
      <div className={clsx(styles.dot, styles[styleMap[status]])} />
    </div>
  );
};
