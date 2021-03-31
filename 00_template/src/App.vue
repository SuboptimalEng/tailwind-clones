<template>
  <div class="flex w-full h-full min-h-screen">
    <div class="mx-auto my-auto text-6xl">
      <fa icon="home" class="hover:text-gray-400" />
      <fa :icon="['fab', 'youtube']" class="hover:text-gray-400" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
