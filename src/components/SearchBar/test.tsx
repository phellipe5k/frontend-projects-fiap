import { render, screen } from '@testing-library/react';

import SearchBar from '.';

describe('<SearchBar />', () => {
  const { container } = render(<SearchBar />);

  it('should title be the component name', () => {
    expect(screen.getByRole('heading', { name: /SearchBar/i }));
  });

  it('should snapshot', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
