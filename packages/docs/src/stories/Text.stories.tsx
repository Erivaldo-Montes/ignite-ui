import { Text, TextProps } from '@ignite-ui/react/dist/'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'typography/text',
  component: Text,
  args: {
    children: 'Example text',
  },
} as Meta<TextProps>

// variações do components (obrigatórios)

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    size: 'lg',
    as: 'strong',
  },
}
