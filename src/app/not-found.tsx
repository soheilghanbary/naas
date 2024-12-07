'use client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function NotFoundPage() {
  const router = useRouter()
  return (
    <div className="my-32 space-y-4 text-center">
      <h1 className="text-center font-black text-2xl">Page Not Found!</h1>
      <Button variant={'outline'} onClick={() => router.back()}>
        Back
      </Button>
    </div>
  )
}
