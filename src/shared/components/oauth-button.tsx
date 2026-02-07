'use client'
import { signIn } from '../lib/api'
import { Button } from './ui/button'

export const OAuthButton = () => {
  return (
    <Button onClick={() => signIn.social({ provider: 'google' })}>
      Sign in with Google
    </Button>
  )
}
