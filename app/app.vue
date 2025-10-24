<script setup lang="ts">
import type { User } from '~~/server/types/users'
import type { TableColumn } from '#ui/types'

const number = ref(1)
const { data: users } = await useFetch<User[]>(() => `/api/users/info/allUsers`)
const { data: user } = await useFetch(() => `/api/users/${number.value}`)

const { data: recentUsers } = await useFetch(() => `/api/users/info/recent`, {
  watch: [user],
})

// Table columns with nested address access
const columns: TableColumn<User>[] = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'username', header: 'Username' },
  { accessorKey: 'email', header: 'Email' },
  { accessorKey: 'address.city', header: 'City' },
]

const sorting = ref([
  {
    id: 'name',
    desc: false,
  },
])
</script>

<template>
  <main class="pa-10 d-flex flex-row ga-4 w-100">
    <!-- Table Section -->
    <div class="w-100 pt-4 d-flex flex-column ga-4">
      <h4 class="font-bold">All Users</h4>
      <UTable
        v-model:sorting="sorting"
        :data="users"
        :columns="columns"
      />
    </div>

    <div class="vertical-line" />

    <!-- Buttons Section -->
    <div class="d-flex flex-column w-100 ga-4 pt-9">
      <div class="grid grid-cols-1 md:grid-cols-6 gap-4 w-100 pa-4">
        <h4 class="font-bold row-span-6 col-span-1">Select a User to add it to the list of recent users</h4>
        <UButton
          v-for="n in 10"
          :key="n"
          class="d-flex justify-center items-center rounded-full"
          :style="{ maxHeight: '40px' }"
          color="primary"
          variant="solid"
          size="xs"
          @click="number = n"
        >
          <span class="text-center w-full">User {{ n }}</span>
        </UButton>
      </div>

      <!-- Recent Users Section -->
      <UPageList divide class="w-100">
        <UPageCard
          v-for="recentUser in recentUsers"
          :key="recentUser.id"
          class="h7 d-flex pa-4 mx-3 my-1 rounded"
          :style="{ maxWidth: '200px' }"
        >
          <template #body>
            <UUser
              :name="user?.name"
              :description="user?.username"
            />
          </template>
        </UPageCard>
      </UPageList>
    </div>
  </main>
</template>

<style scoped>
:deep(.px-4) {
  padding-left: 0px !important;
}

:deep(.vertical-line) {
  border-left: 1px solid darkslategray;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 0;
}
</style>