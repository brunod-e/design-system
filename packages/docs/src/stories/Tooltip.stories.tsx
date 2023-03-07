import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, TooltipProps, Button, Box } from '@brunod-e-ignite-ui/react';

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  args: {
    children: <Button>Hover me</Button>,
    content: 'This is a Tooltip',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => (
      <Box
        css={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '$20',
          backgroundColor: '$gray500',
        }}
      >
        {Story()}
      </Box>
    ),
  ],
} as Meta<TooltipProps>;

export const Primary: StoryObj<TooltipProps> = {};
