import { ComponentProps } from 'react'
import { styled } from '../styles/index'

export const TextArea = styled('textarea', {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  boxSizing: 'border-box',
  borderRadius: '$sm',
  border: '2px solid $gray900',

  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$regular',
  resize: 'vertical',
  minHeight: 80,

  '&:focus': {
    outline: 0,
    borderColor: '$ignite300',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}

// altera o nome que é exibido do componente
TextArea.displayName = 'TextArea'
