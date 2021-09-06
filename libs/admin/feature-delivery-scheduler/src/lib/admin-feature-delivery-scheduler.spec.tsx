import React from 'react';
import { render } from '@testing-library/react';

import AdminFeatureDeliveryScheduler from './admin-feature-delivery-scheduler';

describe('AdminFeatureDeliveryScheduler', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AdminFeatureDeliveryScheduler />);
    expect(baseElement).toBeTruthy();
  });
});
