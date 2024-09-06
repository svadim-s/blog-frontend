import { ReactNode } from 'react'

import { queryClient } from '@/shared/api/query-client'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

type Props = {
  children: ReactNode
}

export const AppQueryClientProvider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} /> {/* вкл. девтулз реакт-квери */}
    </QueryClientProvider>
  )
}
