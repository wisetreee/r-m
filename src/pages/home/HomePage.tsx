import { useState } from 'react';

import styles from './HomePage.module.scss';

import {
  BigLogo,
  Input,
  Loader,
  Selector,
  type ISelectorOption
} from '@/shared/components';
import { SearchIcon } from '@/assets/icons';

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
  const [inputValue, setInputValue] = useState<string>('');

  const handleBigChange = (value: string) => setValueBig(value);
  const handleSmallChange = (value: string) => setValueSmall(value);
  const handleInputChange = (value: string) => setInputValue(value);
  const handleInputReset = () => setInputValue('');
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
      <Input
        placeholder='qwer'
        value={inputValue}
        onChange={handleInputChange}
        onReset={handleInputReset}
        icon={SearchIcon}
      />

      <Input
        placeholder='qwer'
        value={inputValue}
        variant='underline'
        onChange={handleInputChange}
        onReset={handleInputReset}
        icon={SearchIcon}
      />
      <Loader
        size='big'
        footer='Loading characters...'
      />
    </section>
  );
};
