import { MultiStep, MultiStepProps, Box } from '@erivaldo-ignite-ui/react/dist/'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'form/multi step',
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {story()}
        </Box>
      )
    },
  ],
} as Meta<MultiStepProps>

// variações do components (obrigatórios)

export const Primary: StoryObj<MultiStepProps> = {}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
}
