'use client'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { type PropsWithChildren, useState } from 'react'

export const QueryProvider = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient())
  const dehydratedState = dehydrate(queryClient)
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  )
}
