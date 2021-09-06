import React from 'react';
import { render } from '@testing-library/react';

import CommonUiForm from './common-ui-form';

describe('CommonUiForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommonUiForm />);
    expect(baseElement).toBeTruthy();
  });
});
