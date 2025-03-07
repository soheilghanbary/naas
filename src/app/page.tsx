'use client'
import { ModeToggle } from '@/components/common/mode-toggle'
import { TextField } from '@/components/ui/text-field'
import { buttonVariants } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import { api } from '@/lib/api'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'

const Message = () => {
  const { data, status } = useQuery({
    queryKey: ['hello'],
    queryFn: async () => {
      const res = await api.hello.$get()
      return res.json()
    },
  })

  return (
    <div>
      <span className="text-xs">Response: {status}</span>
      <pre className="font-mono text-sm">{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center p-6">
      <section className="flex max-w-sm animate-delay-200 animate-fade-up flex-col gap-3">
        <div className="flex items-center justify-center">
          <ModeToggle />
        </div>
        <h1 className="font-extrabold text-xl tracking-tight md:text-3xl">
          Next.js Starter
        </h1>
        <p className="text-foreground/85 text-sm/5">{siteConfig.description}</p>
        <Link
          href="https://github.com/soheilghanbary/naas"
          className={buttonVariants()}
        >
          Get Started
        </Link>
        <span className="text-foreground/85 text-xs">
          © {new Date().getFullYear()} NaaS Stack - Soheil Ghanbary
        </span>
        <Message />
        <TextField label="Email" />
        <TextField label="Password" />
      </section>
    </div>
  )
}
