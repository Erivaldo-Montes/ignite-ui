import { Box, BoxProps, Text } from '@erivaldo-ignite-ui/react/dist/index'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'FORM/box',
  component: Box,
  args: {
    children: (
      <>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          provident nam ipsum fuga cum eaque, incidunt distinctio neque dolor
          aliquid eos, voluptates temporibus tempora porro, repellat aliquam
          maxime ipsa voluptatibus!
        </Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

// variações do components (obrigatórios)

export const Primary: StoryObj<BoxProps> = {}
