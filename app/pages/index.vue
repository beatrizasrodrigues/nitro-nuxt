<script setup lang="ts">
const { data: tasks, error, status } = await useFetch('api/resources/tasks', {
    lazy: true,
})

</script>

<template>
  <div class="container">
    <div v-if="status === 'pending'" class="card">Loading...</div>
    <div v-else-if="error" class="card-error">{{ error.statusMessage }}</div>
    <div v-else>
      <div >
        <div v-for="task in tasks" :key="task.id" class="card">
          {{ task.title }}
        </div>
        </div>
      </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  padding: 40px;
  -ms-flex-align: space-between;
}
.card {
  border-radius: 4px;
  background-color: lightblue;
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
}

.card-error {
  border-radius: 4px;
  background-color: red;
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
}
</style>