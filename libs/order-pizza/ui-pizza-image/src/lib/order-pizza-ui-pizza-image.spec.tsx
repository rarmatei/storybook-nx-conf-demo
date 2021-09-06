import React from 'react';
import { render } from '@testing-library/react';

import OrderPizzaUiPizzaImage from './order-pizza-ui-pizza-image';

describe('OrderPizzaUiPizzaImage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OrderPizzaUiPizzaImage />);
    expect(baseElement).toBeTruthy();
  });
});
