import Link from 'next/link'
import { Suspense } from 'react'
import { MessageCSR } from '@/components/message-csr'
import { MessageSSR } from '@/components/message-ssr'
import { ModeToggle } from '@/components/mode-toggle'
import { appConfig } from '@/config'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/ui/button'
import { Separator } from '@/ui/separator'

const GITHUB_REPO_URL = 'https://github.com/soheilghanbary/naas'
const COPYRIGHT_TEXT = `© ${new Date().getFullYear()} NaaS Stack - Soheil Ghanbary`

export default () => {
  return (
    <div className="flex h-svh w-svw flex-col place-items-center items-center justify-center">
      <div className="fade-in flex max-w-sm animate-duration-700 animate-fade flex-col items-center gap-y-3 p-4">
        <ModeToggle />
        <h1 className="flex flex-col gap-y-1 text-center font-black text-4xl">
          <span>{appConfig.name}</span>
          <span className="font-normal text-base">{appConfig.description}</span>
        </h1>
        <Separator />
        <Link href={GITHUB_REPO_URL} className={cn(buttonVariants(), 'w-full')}>
          Get Started
        </Link>
        <p className="text-muted-foreground text-xs">{COPYRIGHT_TEXT}</p>
        <p className="text-muted-foreground text-xs">
          Mode: {process.env.NODE_ENV}
        </p>
        <Suspense fallback={<p>Loading Data...</p>}>
          <MessageSSR />
        </Suspense>
        <MessageCSR />
      </div>
    </div>
  )
}
