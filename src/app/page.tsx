import { ModeToggle } from '@/components/common/mode-toggle'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import Link from 'next/link'
import { Suspense } from 'react'

const MessageSkeleton = () => (
  <div className="h-6 w-48 animate-pulse rounded-full bg-muted" />
)

const getHello = async () => {
  const res = await fetch('http://localhost:3000/api/hello')
  return await res.json()
}

const Message = async () => {
  const data = await getHello()
  return <p>Result: {data.message}</p>
}

export default () => {
  return (
    <section className="flex h-dvh w-dvw flex-col items-center justify-center gap-4 p-8 text-center">
      <ModeToggle />
      <h1 className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text font-black text-4xl text-transparent lg:text-5xl dark:from-gray-300 dark:to-gray-500">
        {siteConfig.title}
      </h1>
      <p className="text-sm/5">{siteConfig.description}</p>
      <Button asChild className="mb-8 rounded-full">
        <Link target="_blank" href={'https://github.com/soheilghanbary/naas'}>
          Get Started 🚀
        </Link>
      </Button>
      <Suspense fallback={<MessageSkeleton />}>
        <Message />
      </Suspense>
    </section>
  )
}
