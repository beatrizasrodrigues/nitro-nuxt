<template>
  <div>
    <AppNavBar />
    <main class="container">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.container {
  color: black;
  display: flex;
  flex-direction: row;
} 

.button-container {
  display: flex;
  justify-content: flex-end;
}
</style>