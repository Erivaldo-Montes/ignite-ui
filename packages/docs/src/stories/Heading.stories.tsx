import { Heading, HeadingProps } from '@erivaldo-ignite-ui/react/dist'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'typography/Heading',
  component: Heading,
  args: {
    children: 'Customs title',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

// variações do components (obrigatórios)

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    as: 'h1',
    children: 'h1 heading',
    size: 'md',
  },

  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade ´as´',
      },
    },
  },
}
