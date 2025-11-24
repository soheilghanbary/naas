'use cache: private'
import { cacheLife } from 'next/cache'

const getMessage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/hello`)
  return await res.json()
}

export const MessageSSR = async () => {
  cacheLife('days')
  const data = await getMessage()
  return (
    <div className="w-full">
      <span className="font-medium text-sm">Server Response</span>
      <pre className="mt-1 rounded-md bg-muted p-2 font-mono text-xs shadow-sm">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  )
}
