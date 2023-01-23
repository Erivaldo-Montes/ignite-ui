import { Toast, ToastProps } from '@erivaldo-ignite-ui/react/dist'
import type { StoryObj, Meta } from '@storybook/react'

const date = new Date()

export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {
    isOpen: false,
    date,
  },
  decorators: [],
} as Meta<ToastProps>

// variações do components (obrigatórios)

export const Primary: StoryObj<ToastProps> = {}
