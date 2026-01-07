import { useState } from 'react';

import styles from './HomePage.module.css';

import {
  BigLogo,
  Loader,
  Selector,
  type ISelectorOption
} from '@/shared/components';

const bigMockOptions: ISelectorOption[] = [
  { label: 'label', value: 'value' },
  { label: 'label2', value: 'value2' },
  { label: 'label3', value: 'value3' }
];

const smallMockOptions: ISelectorOption[] = [
  { label: 'label4', value: 'value4' },
  { label: 'label5', value: 'value5' },
  { label: 'label6', value: 'value6' }
];

export const HomePage = () => {
  const [valueBig, setValueBig] = useState<string>('');
  const [valueSmall, setValueSmall] = useState<string>('');

  const handleBigChange = (value: string) => setValueBig(value);
  const handleSmallChange = (value: string) => setValueSmall(value);

  return (
    <section className={`container ${styles.charactersSection}`}>
      <BigLogo />

      <Selector
        placeholder='Querty'
        options={bigMockOptions}
        onChange={handleBigChange}
        value={valueBig}
      />
      <Selector
        placeholder='Qwerty'
        size='small'
        onChange={handleSmallChange}
        options={smallMockOptions}
        value={valueSmall}
      />
      <Loader
        size='big'
        footer='Loading characters...'
      />
    </section>
  );
};
