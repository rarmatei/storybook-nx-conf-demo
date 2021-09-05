import React from 'react';
import { render } from '@testing-library/react';

import CommonUiProgressMeter from './common-ui-progress-meter';

describe('CommonUiProgressMeter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommonUiProgressMeter />);
    expect(baseElement).toBeTruthy();
  });
});
