import type { Meta, StoryObj } from '@storybook/react';
import { Box, Text, TextArea, TextAreaProps } from '@ignite-ui/react';

export default {
  title: 'Form/Text Area',
  component: TextArea,
  decorators: [
    (Story) => (
      <Box
        as='label'
        css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
      >
        <Text size='sm'>Comments:</Text>
        {Story()}
      </Box>
    ),
  ],
} as Meta<TextAreaProps>;

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add your comments',
  },
};

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
};
