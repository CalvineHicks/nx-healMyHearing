import React from 'react';
import { render } from '@testing-library/react';

import ContactUsFeature from './contact-us-feature';

describe('ContactUsFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContactUsFeature />);
    expect(baseElement).toBeTruthy();
  });
});
