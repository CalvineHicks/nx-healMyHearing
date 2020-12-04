import React from 'react';
import { render } from '@testing-library/react';

import DeviceCard from './device-card';

describe('DeviceCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DeviceCard />);
    expect(baseElement).toBeTruthy();
  });
});
