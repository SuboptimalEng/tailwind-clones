<template>
  <div :class="isDark ? 'dark' : ''">
    <div class="min-h-screen bg-eelg dark:bg-tb">
      <div class="flex divide-x-2 text-4xl text-black dark:text-eelg">
        <!-- left -->
        <div class="px-4 flex flex-col justify-between">
          <div>
            <div v-for="item in leftNavbarItems" :key="item.icon">
              <button
                class="flex p-6 space-x-8 rounded-full focus:outline-none hover:text-blue hover:bg-blue hover:bg-opacity-20"
              >
                <div class="w-16">
                  <fa :icon="item.icon" />
                </div>
                <div v-if="item.text" class="font-black hidden 2xl:flex">
                  {{ item.text }}
                </div>
              </button>
            </div>

            <button
              @click="isDark = !isDark"
              class="flex p-5 space-x-8 rounded-full focus:outline-none hover:text-blue hover:bg-blue hover:bg-opacity-20"
            >
              <div class="w-16">
                <fa v-if="isDark" :icon="['fas', 'toggle-on']" />
                <fa v-else :icon="['fas', 'toggle-off']" />
              </div>
              <div class="font-black hidden 2xl:flex">Mode</div>
            </button>

            <button
              class="flex w-full p-5 mt-2 space-x-8 rounded-full bg-blue focus:outline-none"
            >
              <div class="mx-auto">
                <div class="flex 2xl:hidden">
                  <fa :icon="['fas', 'feather-alt']" />
                </div>
                <div class="text-2xl font-black text-eelg hidden 2xl:flex">
                  Tweet
                </div>
              </div>
            </button>
          </div>

          <div class="pb-4">
            <button
              class="flex p-6 space-x-8 rounded-full focus:outline-none hover:text-blue hover:bg-blue hover:bg-opacity-20"
            >
              <!-- <div class="w-16">
                <img :icon="item.icon" />
              </div> -->
              <!-- <div v-if="item.text" class="font-black hidden 2xl:flex">
                {{ item.text }}
              </div> -->
            </button>
          </div>
        </div>

        <!-- content -->
        <div class="min-h-screen flex-grow">content</div>

        <!-- right -->
        <div class="min-h-screen hidden 2xl:flex 2xl:flex-grow">right</div>
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
          icon: ['fas', 'list-alt'],
        },
        {
          text: 'Profile',
          icon: ['fas', 'user'],
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
