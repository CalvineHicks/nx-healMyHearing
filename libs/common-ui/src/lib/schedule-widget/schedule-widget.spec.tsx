import React from 'react';
import { render } from '@testing-library/react';

import ScheduleWidget from './schedule-widget';

describe('ScheduleWidget', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ScheduleWidget />);
    expect(baseElement).toBeTruthy();
  });
});
