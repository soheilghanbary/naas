const getMessage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/hello`, {
    cache: 'no-store',
  })
  return await res.json()
}

export const MessageSSR = async () => {
  const data = await getMessage()
  return (
    <div className="mt-4 space-y-2">
      <p className="font-medium text-xs">Server Side</p>
      <pre className="overflow-x-auto rounded-md bg-muted p-3 font-mono text-sm">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  )
}
