import React from 'react';
import { render } from '@testing-library/react';

import ServicesNav from './services-nav';

describe('ServicesNav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ServicesNav />);
    expect(baseElement).toBeTruthy();
  });
});
