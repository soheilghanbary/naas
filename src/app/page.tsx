import { ModeToggle } from '@/components/common/mode-toggle'
import { buttonVariants } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default () => {
  return (
    <section className="flex h-dvh w-dvw flex-col items-center justify-center gap-4 p-8 text-center">
      <ModeToggle />
      <h1 className="animate-fade-up bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text font-black text-6xl text-transparent">
        {siteConfig.title}
      </h1>
      <p className="animate-delay-150 animate-fade-up text-foreground/85 text-sm/5 tracking-wide lg:text-base">
        {siteConfig.description}
      </p>
      <Link
        target="_blank"
        rel="noreferrer"
        href={'https://github.com/soheilghanbary/naas'}
        className={cn(
          buttonVariants(),
          'mb-8 animate-delay-200 animate-fade-up rounded-full'
        )}
      >
        Get Started 🚀
      </Link>
    </section>
  )
}
