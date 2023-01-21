import { Box, Text, TextArea, TextAreaProps } from '@ignite-ui/react/dist/'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/Text area',
  component: TextArea,
  args: {},
  decorators: [
    (story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size={'sm'}>Observation</Text>
          {story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

// variações do components (obrigatórios)

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add your observations...',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
