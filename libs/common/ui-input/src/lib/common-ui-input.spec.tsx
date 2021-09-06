import React from 'react';
import { render } from '@testing-library/react';

import CommonUiInput from './common-ui-input';

describe('CommonUiInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommonUiInput />);
    expect(baseElement).toBeTruthy();
  });
});
