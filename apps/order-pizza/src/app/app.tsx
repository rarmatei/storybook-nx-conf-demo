import React from 'react';

import styles from './app.module.css';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';
import { CommonUiImageRadioButtons } from '@storybook-test/common/ui-image-radio-buttons';
import { Image } from '@chakra-ui/react';

export function App() {
  const options = [
    {
      value: 'first',
      image: <Image maxW="100px" maxH="100px" src="/assets/slice.png"></Image>,
    },
    {
      value: 'half',
      image: <Image maxW="100px" maxH="100px" src="/assets/half.png"></Image>,
    },
    {
      value: 'full',
      image: <Image maxW="100px" maxH="100px" src="/assets/full.png"></Image>,
    },
  ];

  return (
    <div className={styles.app}>
      <CommonUiImageRadioButtons
        options={options}
        onChange={(v) => console.log(v)}
      />
    </div>
  );
}

export default App;
