import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react/dist/index'

export default {
  title: 'FORM/Button',
  component: Button,
  args: {
    children: 'enviar',
  },
} as Meta<ButtonProps>

// variações do components (obrigatórios)

export const Primary: StoryObj<ButtonProps> = {}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}
