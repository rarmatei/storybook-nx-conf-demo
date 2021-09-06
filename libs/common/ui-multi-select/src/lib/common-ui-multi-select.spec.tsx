import React from 'react';
import { render } from '@testing-library/react';

import CommonUiMultiSelect from './common-ui-multi-select';

describe('CommonUiMultiSelect', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommonUiMultiSelect />);
    expect(baseElement).toBeTruthy();
  });
});
