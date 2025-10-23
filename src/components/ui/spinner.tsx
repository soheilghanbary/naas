import { LoaderIcon } from '@/assets/icons'
import { cn } from '@/lib/utils'

function Spinner({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <LoaderIcon
      role="status"
      aria-label="Loading"
      className={cn('size-4 fill-current', className)}
      {...props}
    />
  )
}

export { Spinner }
