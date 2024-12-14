'use server'
import { signIn, signOut } from '@/server/auth'

const onSignIn = async (provider: 'github' | 'google') => await signIn(provider)
const onSignOut = async () => await signOut()

export { onSignIn, onSignOut }
