'use server'
import { auth, signIn, signOut } from 'server/auth'

// sign in
export const onSignIn = async (provider: 'github' | 'google') =>
  await signIn(provider)
// sign out
export const onSignOut = async () => await signOut()
// get session
export const getSession = async () => await auth()
