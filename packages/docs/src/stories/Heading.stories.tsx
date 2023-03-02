import type { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from '@brunod-e-ignite-ui/react';

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Heading title',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};
export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'Custom title',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story: 'You can use any HTML tag as a heading. Default is `h2`.',
      },
    },
  },
};
