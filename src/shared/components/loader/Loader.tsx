import type { FC, HTMLAttributes } from 'react';

import styles from './Loader.module.css';

import { clsx } from '@/shared/helpers';
import loadingBig from '@/assets/loading_big.png';
import loadingSmall from '@/assets/loading_small.png';

interface LoaderProps extends HTMLAttributes<HTMLDivElement> {
  size: 'big' | 'small';
  footer?: string;
}

export const Loader: FC<LoaderProps> = ({
  size,
  footer,
  className,
  ...rest
}) => (
  <div
    className={clsx(styles.loaderContainer, className)}
    {...rest}
  >
    <img
      className={styles.loader}
      src={size === 'big' ? loadingBig : loadingSmall}
      alt='Loading…'
    />
    <h3 className={clsx(styles.footer, 'heading-md')}>{footer}</h3>
  </div>
);
