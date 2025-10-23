// Caching user information

import type { User } from "../types/users"
import type { H3Event } from 'h3'

export const getUser = defineCachedFunction(async (_event: H3Event, id: string) => {
  // We want to cache this part to implement the "latest clicked users" feature
  const result = await $fetch<Record<string, unknown>>(`https://jsonplaceholder.typicode.com/users/${id}`)
  return {
    id: result.id,
    name: result.name,
    username: result.username,
    email: result.email
  } as User
}, {
  // Caching in Nitro video - Alexander Lichter
  swr: false,
  maxAge: 1000
})

const KEY = 'recent-users'
export async function getRecentUsers(): Promise<User[]> {
  const users = await useStorage().getItem<User[]>(KEY) ?? []
  return users
}

const RECENT_USERS_LIMIT = 3
export async function addRecentUser(user: User): Promise<User[]> {
  const currentUsers = await getRecentUsers()
  currentUsers.unshift(user)
  
  if (currentUsers.length > RECENT_USERS_LIMIT) {
    currentUsers.pop()
  }

  // save the users
  await useStorage().setItem(KEY, currentUsers) 
  
  return currentUsers
}