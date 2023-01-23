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
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  isOpen: boolean
  date: Date
}

export function Toast(props: ToastProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const date = format(props.date, "EEEE',' d 'de' MMMM 'às' H'h'", {
    locale: ptBR,
  })

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
        <ToastDescription>{date}</ToastDescription>
      </ToastContainer>
      <ToastViewport />
    </ToastRadix.Provider>
  )
}
