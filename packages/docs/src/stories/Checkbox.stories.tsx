import type { Meta, StoryObj } from '@storybook/react';
import { Box, Text, Checkbox, CheckboxProps } from '@brunod-e-ignite-ui/react';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => (
      <Box as='label' css={{ display: 'flex', gap: '$2' }}>
        {Story()}
        <Text size='sm'>Accept terms of use</Text>
      </Box>
    ),
  ],
} as Meta<CheckboxProps>;

export const Primary: StoryObj<CheckboxProps> = {};
