<template>
  <div class="flex min-h-screen bg-lb">
    <div class="min-w-full min-h-full p-4">
      <div class="grid grid-cols-2 h-full bg-white">
        <!-- users section -->
        <div class="grid grid-rows-2 h-full">
          <!-- fixed: options -->
          <div class="flex border"></div>
          <!-- scrollable: users -->
          <div class="flex border"></div>
        </div>

        <!-- messages section -->
        <div class="flex flex-col border">
          <div class="grid grid-rows-3 h-full">
            <!-- fixed: details  -->
            <div class="flex border"></div>
            <!-- scrollable: messages -->
            <div class="flex border"></div>
            <!-- fixed: send -->
            <div class="flex border"></div>
          </div>
        </div>
      </div>
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
