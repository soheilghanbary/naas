import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import {
  type ForwardedRef,
  type TextareaHTMLAttributes,
  forwardRef,
} from 'react'

type TextFieldAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string
}

export const TextFieldArea = forwardRef(function MyInput(
  { label, className, ...rest }: TextFieldAreaProps,
  ref: ForwardedRef<HTMLTextAreaElement>
) {
  return (
    <div className={cn('grid gap-2 [&>label]:text-sm', className)}>
      <Label>{label}</Label>
      <Textarea ref={ref} {...rest} />
    </div>
  )
})
