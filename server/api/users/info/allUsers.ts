export default defineEventHandler(async () => {
  const users = await getAllUsers()

  return users
})