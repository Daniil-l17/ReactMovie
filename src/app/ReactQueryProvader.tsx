'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


  const quryClient = new QueryClient()

export const ReactQueryProvader = ({children}: {children: React.ReactNode}) => {
  return (
    <QueryClientProvider client={quryClient}>
        {children}
    </QueryClientProvider>
  )
}
