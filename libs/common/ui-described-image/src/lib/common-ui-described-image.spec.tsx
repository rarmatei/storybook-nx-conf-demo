import React from 'react';
import { render } from '@testing-library/react';

import CommonUiDescribedImage from './common-ui-described-image';

describe('CommonUiDescribedImage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommonUiDescribedImage />);
    expect(baseElement).toBeTruthy();
  });
});
