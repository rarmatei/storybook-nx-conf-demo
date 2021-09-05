import React from 'react';
import { render } from '@testing-library/react';

import CommonUiImageRadioButtons from './common-ui-image-radio-buttons';

describe('CommonUiImageRadioButtons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommonUiImageRadioButtons />);
    expect(baseElement).toBeTruthy();
  });
});
