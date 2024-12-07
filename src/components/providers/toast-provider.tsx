'use client'
import { Toaster } from 'sonner'

export const ToastProvider = () => {
  return (
    <Toaster
      position="bottom-center"
      toastOptions={{
        style: {
          background: 'hsl(var(--background))',
          color: 'hsl(var(--foreground))',
          border: '1px solid hsl(var(--border))',
          // fontFamily: '--irsans',
        },
        classNames: {
          toast: 'shadow',
          icon: 'text-emerald-500',
        },
      }}
    />
  )
}
