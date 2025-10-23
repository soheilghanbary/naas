import { caller } from '@/lib/api'

export const MessageSSR = async () => {
  const data = await caller.get('/hello').then((res) => res.data)
  return (
    <div className="mt-4 space-y-2">
      <p className="font-medium text-xs">Server Side</p>
      <pre className="overflow-x-auto rounded-md bg-muted p-3 font-mono text-sm">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  )
}
