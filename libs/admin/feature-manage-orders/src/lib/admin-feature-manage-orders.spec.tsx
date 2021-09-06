import React from 'react';
import { render } from '@testing-library/react';

import AdminFeatureManageOrders from './admin-feature-manage-orders';

describe('AdminFeatureManageOrders', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AdminFeatureManageOrders />);
    expect(baseElement).toBeTruthy();
  });
});
