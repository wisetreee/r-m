import { Footer, Header } from '@/shared/components';
import type { FC } from 'react';
import styles from './MainLayout.module.css';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({
  children
}: MainLayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};
