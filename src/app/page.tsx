'use client'
import { ModeToggle } from '@/components/common/mode-toggle'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import { api, signIn, useSession } from '@/lib/api'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

const UserCookie = () => {
  const { data } = useSession()
  return (
    <pre className="overflow-hidden font-mono text-sm">
      {JSON.stringify(data?.user, null, 2)}
    </pre>
  )
}

const Message = () => {
  const { data } = useQuery({
    queryKey: ['hello'],
    queryFn: async () => {
      const res = await api.hello.$get()
      return res.json()
    },
  })

  return (
    <pre className="font-mono text-sm">{JSON.stringify(data, null, 2)}</pre>
  )
}

const CounterButton = () => {
  const [count, setCount] = useState(0)
  return (
    <Button onClick={() => setCount((prev) => prev + 1)} variant={'secondary'}>
      Count: {count}
    </Button>
  )
}

export default () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center p-6">
      <section className="flex max-w-sm animate-delay-200 animate-fade-up flex-col gap-3">
        <ModeToggle />
        <h1 className="font-extrabold text-xl tracking-tight md:text-3xl">
          Welcome to NaaS Stack
        </h1>
        <p className="text-foreground/85 text-sm/6">{siteConfig.description}</p>
        <div className="grid grid-cols-2 gap-4">
          <CounterButton />
          <Button
            onClick={() =>
              signIn.social({
                provider: 'google',
                callbackURL: '/',
              })
            }
          >
            Sign In with Google
          </Button>
        </div>
        <span className="text-foreground/85 text-xs">
          © {new Date().getFullYear()} NaaS Stack - Soheil Ghanbary
        </span>
        <UserCookie />
        <Message />
      </section>
    </div>
  )
}
