import React from 'react';

import styles from './app.module.css';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';
import { CommonUiImageRadioButtons } from '@storybook-test/common/ui-image-radio-buttons';

export function App() {
  const options = [
    { value: 'first', image: <div>FIRST</div> },
    { value: 'half', image: <div>HALF</div> },
    { value: 'full', image: <div>FULL</div> },
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
