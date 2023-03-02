import type { Meta, StoryObj } from '@storybook/react';
import {
  Box,
  Text,
  MultiStep,
  MultiStepProps,
} from '@brunod-e-ignite-ui/react';

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  decorators: [
    (Story) => (
      <Box
        as='label'
        css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
      >
        {Story()}
      </Box>
    ),
  ],
  args: {
    size: 4,
    currentStep: 1,
  },
} as Meta<MultiStepProps>;

export const Primary: StoryObj<MultiStepProps> = {};
export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
};
