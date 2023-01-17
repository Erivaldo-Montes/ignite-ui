import { Checkbox, CheckboxProps, Box, Text } from '@ignite-ui/react/dist/'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {story()}
          <Text size={'sm'}>Accept terms of use</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>

// variações do components (obrigatórios)

export const Primary: StoryObj<CheckboxProps> = {}
