'use client'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { api } from '@/lib/api'

export const MessageCSR = () => {
  const [responseTime, setResponseTime] = useState<number | null>(null)
  const { data, isPending } = useQuery({
    queryKey: ['hello'],
    queryFn: async () => {
      const startTime = performance.now()
      const res = await api.hello.$get()
      const endTime = performance.now()
      setResponseTime(Math.round(endTime - startTime))
      return res.json()
    },
  })
  if (isPending) return <p>Loading Data...</p>
  return (
    <div className="w-full">
      <span className="font-medium text-sm">
        Client Response - {responseTime}ms
      </span>
      <pre className="mt-1 rounded-md bg-muted p-2 font-mono text-xs shadow-sm">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  )
}
