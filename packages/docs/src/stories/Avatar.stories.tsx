import { Avatar, AvatarProps } from '@ignite-ui/react/dist'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/Erivaldo-Montes.png',
    alt: 'erivaldo montes',
  },
} as Meta<AvatarProps>

// variações do components (obrigatórios)

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
