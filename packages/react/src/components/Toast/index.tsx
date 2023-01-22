import {
  ToastContainer,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastViewport,
} from './styles'
import { X } from 'phosphor-react'
import React, { ComponentProps, useEffect, useState } from 'react'
import * as ToastRadix from '@radix-ui/react-toast'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  isOpen: boolean
}

export function Toast(props: ToastProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    setIsOpen(props.isOpen)
  }, [props.isOpen])

  return (
    <ToastRadix.Provider swipeDirection="left" duration={5000}>
      <ToastContainer open={isOpen} onOpenChange={setIsOpen}>
        <div>
          <ToastTitle>Agendamento realizado</ToastTitle>
          <ToastAction asChild altText="close">
            <X weight="bold" size={20} />
          </ToastAction>
        </div>
        <ToastDescription>Quarta-feira, 23 de outubro ás 16h</ToastDescription>
      </ToastContainer>
      <ToastViewport />
    </ToastRadix.Provider>
  )
}
