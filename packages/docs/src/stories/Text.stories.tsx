import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from '@ignite-ui/react';

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto a provident libero assumenda ex ducimus laudantium porro minima beatae id, adipisci saepe sunt, ea sequi, rerum deserunt inventore dignissimos magnam!',
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Custom tag',
    as: 'strong',
  },
};
