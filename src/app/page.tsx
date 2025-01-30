'use client'
import { ModeToggle } from '@/components/common/mode-toggle'
import { Button, buttonVariants } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useState } from 'react'

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
    <div className="flex h-screen w-screen items-center justify-center">
      <section className="flex max-w-sm animate-delay-200 animate-fade-up flex-col gap-3">
        <ModeToggle />
        <h1 className="font-extrabold text-3xl tracking-tight">
          Welcome to NaaS Stack
        </h1>
        <p className="text-foreground/85 text-sm/6">{siteConfig.description}</p>
        <div className="grid grid-cols-2 gap-4">
          <CounterButton />
          <Link
            target="_blank"
            rel="noreferrer"
            href={'https://github.com/soheilghanbary/naas'}
            className={cn(buttonVariants())}
          >
            Get Started 🚀
          </Link>
        </div>
        <span className="text-foreground/85 text-xs">
          © {new Date().getFullYear()} NaaS Stack - Soheil Ghanbary
        </span>
      </section>
    </div>
  )
}
