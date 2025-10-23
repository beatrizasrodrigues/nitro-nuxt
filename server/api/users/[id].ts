// Getting user through its id

import { addRecentUser, getUser } from "../../utils/users"

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  if (!id) {
    throw createError({
      statusCode: 400,
      message: 'No id provided.'
    })
  }

  const user = await getUser(event, id)

  await addRecentUser(user)
  return user
})