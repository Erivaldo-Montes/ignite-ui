import { TootipContent, TooltipArrow } from './styles'
import * as TooltipRadix from '@radix-ui/react-tooltip'
import { ComponentProps, ReactNode, useEffect, useState } from 'react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export interface TooltipProps extends ComponentProps<typeof TootipContent> {
  children: ReactNode
  date: Date
  available: boolean
}

export function Tooltip(props: TooltipProps) {
  const [availability, setAvailability] = useState<boolean>(false)

  useEffect(() => {
    setAvailability(props.available)
  }, [props.available])

  const date = format(props.date, "d 'de' MMMM", {
    locale: ptBR,
  })

  return (
    <TooltipRadix.Provider>
      <TooltipRadix.Root>
        <TooltipRadix.Trigger asChild>{props.children}</TooltipRadix.Trigger>

        <TootipContent sideOffset={4}>
          {date} - {availability ? 'Disponível' : 'Indisponível'}
          <TooltipArrow />
        </TootipContent>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  )
}
