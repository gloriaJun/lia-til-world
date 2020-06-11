import React from 'react';

import { render } from 'tests/helpers';
import { Utterances } from './index';

describe('<Utterances />', () => {
  test('should generate script tag', () => {
    const { getByTestId } = render(<Utterances />);
    const container = getByTestId('utterances');

    expect(container).not.toEqual(null);
  });
});