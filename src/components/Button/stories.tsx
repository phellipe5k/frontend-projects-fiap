import { Meta, Story } from '@storybook/react';
import Button from '.';

export default {
  title: 'Button',
  component: Button,
  args: {
    title: 'Button'
  }
} as Meta;

export const Basic: Story = (args) => <Button {...args} />;
