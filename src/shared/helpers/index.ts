export const getSession = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  })
  return session
}
