import loadingBig from '@/assets/loading_big.png';
import loadingSmall from '@/assets/loading_small.png';
import type { FC, HTMLAttributes } from 'react';
import styles from './Loader.module.css';

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
    className={[styles.loaderContainer, className].join(' ')}
    {...rest}
  >
    <img
      className={styles.loader}
      src={size === 'big' ? loadingBig : loadingSmall}
      alt='Loading…'
    />
    <h3 className={styles.footer}>{footer}</h3>
  </div>
);
