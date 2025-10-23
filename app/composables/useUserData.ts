export const useUserData = async (id: string) => {
  const config = useRuntimeConfig()
  const baseUrl = config.public.apiBase

  const user = await $fetch(`/${baseUrl}/api/users/${id}`)

  return {
    ...user,
    apiBase: baseUrl,
  }
}