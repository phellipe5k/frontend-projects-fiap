import { Meta, Story } from '@storybook/react';
import SearchBar from '.';

export default {
  title: 'SearchBar',
  component: SearchBar,
  args: {
    title: 'SearchBar'
  }
} as Meta;

export const Basic: Story = (args) => <SearchBar {...args} />;
