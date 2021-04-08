<template>
  <div :class="isDark ? 'dark' : ''">
    <div class="min-h-screen bg-eelg dark:bg-tb">
      <div
        class="flex justify-around divide-x-2 text-4xl text-black dark:text-eelg"
      >
        <!-- left -->
        <div
          class="px-4 pl-32 flex flex-col justify-between max-h-screen top-0 bottom-0 left-0 fixed"
        >
          <div>
            <div v-for="item in leftNavbarItems" :key="item.icon">
              <button
                class="flex p-5 rounded-full mx-auto 2xl:mx-0 2xl:space-x-8 focus:outline-none hover:text-blue hover:bg-blue hover:bg-opacity-20"
              >
                <div class="2xl:w-16">
                  <fa :icon="item.icon" />
                </div>
                <div v-if="item.text" class="font-black hidden 2xl:flex">
                  {{ item.text }}
                </div>
              </button>
            </div>

            <button
              @click="isDark = !isDark"
              class="flex p-5 rounded-full mx-auto 2xl:mx-0 2xl:space-x-8 focus:outline-none hover:text-blue hover:bg-blue hover:bg-opacity-20"
            >
              <div class="2xl:w-16">
                <fa v-if="isDark" :icon="['fas', 'toggle-on']" />
                <fa v-else :icon="['fas', 'toggle-off']" />
              </div>
              <div class="font-black hidden 2xl:flex">Mode</div>
            </button>

            <!-- class="flex w-24 p-5 mt-2 rounded-full bg-blue focus:outline-none 2xl:w-full" -->
            <button
              class="flex p-5 mt-2 mx-auto bg-blue rounded-full 2xl:w-full focus:outline-none"
            >
              <div class="2xl:hidden">
                <fa :icon="['fas', 'feather-alt']" class="text-eelg" />
              </div>
              <div
                class="mx-auto text-2xl content-center font-black text-eelg hidden 2xl:flex"
              >
                Tweet
              </div>
            </button>
          </div>

          <div class="pb-4">
            <button
              class="flex p-5 space-x-2 rounded-full place-items-center text-2xl 2xl:w-full focus:outline-none hover:text-blue hover:bg-blue hover:bg-opacity-20"
            >
              <div class="w-20">
                <img
                  src="/images/profile_pic.png"
                  alt=""
                  class="rounded-full"
                />
              </div>
              <div class="flex flex-col">
                <div class="font-bold hidden 2xl:flex">Suboptimal Eng...</div>
                <div class="font-thin hidden 2xl:flex">@SuboptimalEng</div>
              </div>
              <div>
                <fa :icon="['fas', 'ellipsis-h']" class="hidden 2xl:flex" />
              </div>
            </button>
          </div>
        </div>

        <!-- content -->
        <!-- <div class="min-h-screen flex-grow">content</div> -->
        <div class="ml-64 2xl:ml-506px min-h-screen flex-grow">
          content
          <div v-for="tweet in tweets" :key="tweet" class="h-60 w-60 m-auto">
            hi
          </div>
        </div>

        <!-- right -->
        <!-- <div class="min-h-screen hidden 2xl:flex 2xl:flex-grow">right</div> -->
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
      tweets: ['hi', 'hi', 'hi', 'hi', 'hi', 'hi', 'hi', 'hi', 'hi', 'hi'],
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
