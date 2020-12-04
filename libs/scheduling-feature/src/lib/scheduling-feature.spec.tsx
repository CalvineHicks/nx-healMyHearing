import React from 'react';
import { render } from '@testing-library/react';

import SchedulingFeature from './scheduling-feature';

describe('SchedulingFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SchedulingFeature />);
    expect(baseElement).toBeTruthy();
  });
});
