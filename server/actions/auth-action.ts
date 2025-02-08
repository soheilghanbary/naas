'use server'
import { auth, signIn, signOut } from '@/server/auth'

// sign in
export const onSignIn = async (provider: 'github' | 'google') => {
  await signIn(provider, {
    redirectTo: '/',
  })
}

// sign out
export const onSignOut = async () => {
  await signOut({
    redirectTo: '/',
  })
}

// get session
export const getSession = async () => await auth()
