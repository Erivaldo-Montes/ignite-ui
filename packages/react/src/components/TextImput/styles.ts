import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  boxSizing: 'border-box',
  borderRadius: '$sm',
  border: '2px solid $gray900',
  display: 'flex',
  alignItems: 'baseline',

  '&:has(input:focus)': {
    borderColor: '$ignite300',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontWeight: '$regular',
  fontSize: '$sm',
  color: '$gray400',
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontWeight: '$regular',
  fontSize: '$sm',
  color: '$white',
  background: 'transparent',
  border: 'none',
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})
