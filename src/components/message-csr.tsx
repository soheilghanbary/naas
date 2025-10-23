'use client'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { api } from '@/lib/api'

export const MessageCSR = () => {
  const [responseTime, setResponseTime] = useState<number | null>(null)
  const { data } = useQuery({
    queryKey: ['hello'],
    queryFn: async () => {
      const startTime = performance.now()
      const res = await api.hello.$get()
      const endTime = performance.now()
      setResponseTime(Math.round(endTime - startTime))
      return res.json()
    },
  })
  return (
    <div className="mt-4 space-y-2">
      <div className="flex items-center gap-4 text-xs">
        <span>
          Client Side:{' '}
          {responseTime !== null && (
            <span className="font-mono text-green-600 dark:text-green-400">
              {responseTime}ms
            </span>
          )}
        </span>
      </div>
      <pre className="overflow-x-auto rounded-md bg-muted p-3 font-mono text-sm">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  )
}
