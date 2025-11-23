import {
  type ForwardedRef,
  forwardRef,
  type TextareaHTMLAttributes,
} from 'react'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

type TextFieldAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string
  description?: string
  error?: string
}

export const TextFieldArea = forwardRef(function MyInput(
  { label, className, error, description, ...rest }: TextFieldAreaProps,
  ref: ForwardedRef<HTMLTextAreaElement>
) {
  return (
    <div className={cn('grid gap-2 [&>label]:text-sm', className)}>
      <Label>{label}</Label>
      <Textarea ref={ref} {...rest} />
      {description && (
        <span className="text-muted-foreground text-xs">{description}</span>
      )}
      {error && (
        <span className="font-medium text-destructive text-xs">{error}</span>
      )}
    </div>
  )
})
