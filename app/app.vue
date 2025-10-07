<script setup lang="ts">
  const number = ref(1)
  const { data: user } = await useFetch( () => `/api/users/${number.value}`)

  const { data: recentUsers } = await useFetch( () => `/api/users/info/recent`, {
    watch: [user]
  })
</script>

<template>
  <pre>
    {{ user }}
    <button 
      v-for="n in 5" 
      :key="n" 
      class="mr-1 bg-white"
      :style="{ border: 'solid 1px black'}" 
      @click="number = n">
      Fetch user {{ n }}
    </button>
  </pre>

  <h2 class="pa-4">Recent Users</h2>
  <div class="pa-4">
    <v-card 
      v-for="recentUser in recentUsers" 
      :key="recentUser.id"
      class="d-flex pa-4" 
      :style="{ border: 'solid 1px white', maxWidth: '200px' }"
    >{{ recentUser.name }}</v-card>
  </div>
</template>
