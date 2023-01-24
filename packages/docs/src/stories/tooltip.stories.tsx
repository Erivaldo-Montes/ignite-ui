import { Tooltip, TooltipProps } from '@erivaldo-ignite-ui/react/dist'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    date: new Date(),
    available: false,
    children: (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#e1e1e6',
          background: '#202024',
          borderRadius: '6px',
          height: '50px',
          width: '50px',
          cursor: 'pointer',
        }}
      >
        Hover
      </div>
    ),
  },

  argTypes: {
    available: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<TooltipProps>
// variações do components (obrigatórios)

export const Primary: StoryObj<TooltipProps> = {}
