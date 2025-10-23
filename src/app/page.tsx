'use client'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { useState } from 'react'
import { ModeToggle } from '@/components/common/mode-toggle'
import { buttonVariants } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import { api } from '@/lib/api'

const GITHUB_REPO_URL = 'https://github.com/soheilghanbary/naas'
const COPYRIGHT_TEXT = `© ${new Date().getFullYear()} NaaS Stack - Soheil Ghanbary`

const Message = () => {
  const [responseTime, setResponseTime] = useState<number | null>(null)
  const { data, status } = useQuery({
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
          Status: <span className="font-medium">{status}</span>
        </span>
        {responseTime !== null && (
          <span className="font-mono text-green-600 dark:text-green-400">
            Response: {responseTime}ms
          </span>
        )}
      </div>
      <pre className="overflow-x-auto rounded-md bg-muted p-3 font-mono text-sm">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  )
}

export default () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center p-6">
      <section className="flex max-w-sm animate-duration-700 animate-fade-up flex-col gap-3">
        <div className="flex items-center justify-center">
          <ModeToggle />
        </div>
        <h1 className="font-extrabold text-xl tracking-tight md:text-3xl">
          Next.js Starter
        </h1>
        <p className="text-foreground/85 text-sm/5">{siteConfig.description}</p>
        <Link href={GITHUB_REPO_URL} className={buttonVariants()}>
          Get Started
        </Link>
        <span className="text-foreground/85 text-xs">{COPYRIGHT_TEXT}</span>
        <Message />
      </section>
    </div>
  )
}
