import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'

export default function NotFoundPage() {
  return (
    <div className="my-32 space-y-4 text-center">
      <h1 className="text-center font-black text-2xl">Page Not Found!</h1>
      <Link href="/" className={buttonVariants({ variant: 'secondary' })}>
        Back to /
      </Link>
    </div>
  )
}
