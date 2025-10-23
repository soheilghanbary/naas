import Link from 'next/link'
import { Suspense } from 'react'
import { ModeToggle } from '@/components/common/mode-toggle'
import { MessageCSR } from '@/components/message-csr'
import { MessageSSR } from '@/components/message-ssr'
import { buttonVariants } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'
import { siteConfig } from '@/config/site'

const GITHUB_REPO_URL = 'https://github.com/soheilghanbary/naas'
const COPYRIGHT_TEXT = `© ${new Date().getFullYear()} NaaS Stack - Soheil Ghanbary`

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
        <MessageCSR />
        <Suspense
          fallback={
            <p className="flex items-center gap-2 text-xs">
              Loading for server side{' '}
              <Spinner className="size-3 text-primary" />
            </p>
          }
        >
          <MessageSSR />
        </Suspense>
      </section>
    </div>
  )
}
