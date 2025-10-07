<template>
  <nav class="container">
      <ul>
        <li>
          <NuxtLink to="/">  
            <strong>Tasks App</strong>
          </NuxtLink>
        </li>
      </ul>
      <ul>
        <li>
          <NuxtLink :to="{ name: 'create' }">Create Task</NuxtLink>
        </li>
      </ul>
    </nav>
</template>

<style scoped>
ul {
  display: flex;
  flex-direction: row;
  gap: 20px; 
  list-style: none; 
  margin: 0;
}

nav {
  display: flex;
  justify-content: space-between; 
  align-items: center;
  padding-right: 40px;
}
</style>