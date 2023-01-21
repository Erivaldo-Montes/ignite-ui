import {
  Box,
  Text,
  TextInput,
  TextInputProps,
} from '@erivaldo-ignite-ui/react/dist/'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'typography/Text input',
  component: TextInput,
  args: {},
  decorators: [
    (story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size={'sm'}>Email address</Text>
          {story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

// variações do components (obrigatórios)

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
  },
}
export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}
