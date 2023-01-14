import { styled } from './styles'
import { ComponentProps } from 'react'

export const Button = styled('button', {
  color: '$white',
  backgroundColor: '$ignite300',
  borderRadius: '$sm',
  fontFamily: '$default',

  border: 0,
  fontWeight: 'bold',

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },
      big: {
        fontSize: 16,
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

// exporta as propriedades o componente button diretamente pelo stiches
export type ButtonProps = ComponentProps<typeof Button>

export const ls = 24
