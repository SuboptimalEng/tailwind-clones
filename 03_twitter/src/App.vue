<template>
  <div :class="isDark ? 'dark' : ''">
    <div class="flex min-h-screen bg-eelg dark:bg-black">
      <div
        class="grid grid-cols-2 xl:grid-cols-3 p-4 text-4xl text-black dark:text-eelg"
      >
        <!-- left -->
        <div>
          <div
            v-for="item in leftNavbarItems"
            :key="item.icon"
            class="flex space-x-4"
          >
            <fa :icon="item.icon" />
            <div v-if="item.text">
              {{ item.text }}
            </div>
          </div>
          <button @click="isDark = !isDark" class="focus:outline-none">
            <fa v-if="isDark" :icon="['fas', 'toggle-on']" />
            <fa v-else :icon="['fas', 'toggle-off']" />
          </button>
        </div>
        <!-- content -->
        <div>content</div>
        <!-- right -->
        <div class="hidden xl:flex">right</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isDark: true,
      leftNavbarItems: [
        {
          icon: ['fab', 'twitter'],
        },
        {
          text: 'Home',
          icon: ['fas', 'home'],
        },
        {
          text: 'Explore',
          icon: ['fas', 'hashtag'],
        },
        {
          text: 'Notifications',
          icon: ['fas', 'bell'],
        },
        {
          text: 'Messages',
          icon: ['fas', 'envelope'],
        },
        {
          text: 'Bookmarks',
          icon: ['fas', 'bookmark'],
        },
        {
          text: 'Lists',
          icon: ['fas', 'bell'],
        },
        {
          text: 'Profile',
          icon: ['fas', 'bell'],
        },
      ],
    };
  },
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
