import type { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from '@ignite-ui/react';

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Heading title',
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
