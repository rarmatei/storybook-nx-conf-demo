import React from 'react';
import { render } from '@testing-library/react';

import OrderPizzaFeaturePaymentGateway from './order-pizza-feature-payment-gateway';

describe('OrderPizzaFeaturePaymentGateway', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OrderPizzaFeaturePaymentGateway />);
    expect(baseElement).toBeTruthy();
  });
});
