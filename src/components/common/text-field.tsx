import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { type ForwardedRef, type InputHTMLAttributes, forwardRef } from 'react'

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  description?: string
  error?: string
}

export const TextField = forwardRef(function MyInput(
  { label, description, error, className, ...rest }: TextFieldProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <div className={cn('grid gap-2 [&>label]:text-sm', className)}>
      <Label>{label}</Label>
      <Input type="text" autoComplete="off" ref={ref} {...rest} />
      {description && (
        <span className="text-muted-foreground text-xs">{description}</span>
      )}
      {error && (
        <span className="font-medium text-destructive text-xs">{error}</span>
      )}
    </div>
  )
})
