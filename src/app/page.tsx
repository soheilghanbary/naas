import { ModeToggle } from '@/components/common/mode-toggle'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import Link from 'next/link'
import { Suspense } from 'react'

const MessageSkeleton = () => (
  <div className="h-6 w-48 animate-pulse rounded-full bg-muted" />
)

const getHello = async () => {
  const res = await fetch('http://localhost:3000/api/hello', {
    cache: 'force-cache',
  })
  return await res.json()
}

const Message = async () => {
  const data = await getHello()
  return <p>{data.message}</p>
}

export default () => {
  return (
    <section className="flex h-dvh w-dvw flex-col items-center justify-center gap-4 p-4 text-center">
      <h1 className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text font-black text-3xl text-transparent lg:text-5xl dark:from-gray-300 dark:to-gray-500">
        {siteConfig.title}
      </h1>
      <p>{siteConfig.description}</p>
      <Button asChild className="rounded-full">
        <Link target="_blank" href={'https://github.com/soheilghanbary/nix'}>
          Get Started 🚀
        </Link>
      </Button>
      <ModeToggle />
      <Suspense fallback={<MessageSkeleton />}>
        <Message />
      </Suspense>
    </section>
  )
}
