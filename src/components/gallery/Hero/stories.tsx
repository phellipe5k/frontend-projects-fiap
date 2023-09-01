import { Meta, Story } from '@storybook/react';
import Hero from '.';

export default {
  title: 'Hero',
  component: Hero,
  args: {
    title: 'Hero'
  }
} as Meta;

export const Basic: Story = (args) => <Hero {...args} />;
