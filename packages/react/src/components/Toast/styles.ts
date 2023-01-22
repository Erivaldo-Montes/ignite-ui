import { keyframes, styled } from '../../styles'
import * as Toast from '@radix-ui/react-toast'

const slideIn = keyframes({
  from: {
    transform: 'translateX(100%)',
  },

  to: {
    transform: 'translateX(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateX(0)',
  },

  to: {
    transform: 'translateX(100%)',
  },
})

const hide = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
})

export const ToastContainer = styled(Toast.Root, {
  padding: '$3 $5',
  borderRadius: '$sm',
  border: '2px solid $gray600',
  backgroundColor: '$gray800',
  fontFamily: '$default',

  '&[data-state="open"]': {
    animation: `${slideIn} 100ms ease-out`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 200ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
  },
  '&[data-swipe="end"] ': {
    animation: `${slideOut} 100ms ease-out`,
  },

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})

export const ToastTitle = styled(Toast.Title, {
  color: '$white',
  fontSize: '$xl',
  lineHeight: '$base',
  fontWeight: '$bold',
})

export const ToastDescription = styled(Toast.Description, {
  color: '$gray200',
  fontWeight: '$regular',
})

export const ToastAction = styled(Toast.Action, {
  color: '$gray200',
  cursor: 'pointer',

  '&:hover': {
    color: '$white',
  },
})

export const ToastViewport = styled(Toast.Viewport, {
  display: 'flex',
  flexDirection: 'column',
  listStyle: 'none',
  position: 'fixed',
  bottom: 0,
  right: 0,
  width: '22.5rem',
  padding: '2rem',
})
