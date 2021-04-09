<template>
  <div :class="isDark ? 'dark' : ''">
    <div class="min-h-screen bg-eelg dark:bg-tb">
      <div
        class="flex justify-center divide-x text-4xl text-black pl-32 2xl:pl-0 dark:divide-eelg dark:text-eelg"
      >
        <!-- navbar -->
        <div
          class="px-4 ml-32 2xl:mx-auto flex flex-col justify-between max-h-screen top-0 bottom-0 left-0 fixed"
        >
          <div>
            <div v-for="item in leftNavbarItems" :key="item.icon">
              <button
                class="flex p-4 rounded-full mx-auto 2xl:mx-0 2xl:space-x-4 focus:outline-none hover:text-blue hover:bg-blue hover:bg-opacity-20"
              >
                <div class="2xl:w-16">
                  <div
                    v-if="item.blueInLightMode"
                    class="text-blue dark:text-eelg"
                  >
                    <fa :icon="item.icon" />
                  </div>
                  <div v-else>
                    <fa :icon="item.icon" />
                  </div>
                </div>
                <div v-if="item.text" class="font-bold hidden 2xl:flex">
                  {{ item.text }}
                </div>
              </button>
            </div>

            <button
              @click="isDark = !isDark"
              class="flex p-4 rounded-full mx-auto 2xl:mx-0 2xl:space-x-4 focus:outline-none hover:text-blue hover:bg-blue hover:bg-opacity-20"
            >
              <div class="2xl:w-16">
                <fa v-if="isDark" :icon="['fas', 'toggle-on']" />
                <fa v-else :icon="['fas', 'toggle-off']" />
              </div>
              <div class="font-bold hidden 2xl:flex">Dark Mode</div>
            </button>

            <!-- class="flex w-24 p-5 mt-2 rounded-full bg-blue focus:outline-none 2xl:w-full" -->
            <button
              class="flex p-4 mt-2 mx-auto bg-blue rounded-full 2xl:w-full focus:outline-none"
            >
              <div class="2xl:hidden">
                <fa :icon="['fas', 'feather-alt']" class="text-eelg" />
              </div>
              <div
                class="mx-auto text-2xl font-black text-eelg hidden 2xl:flex"
              >
                Tweet
              </div>
            </button>
          </div>

          <div class="pb-4">
            <button
              class="flex p-4 space-x-2 rounded-full place-items-center text-2xl 2xl:w-full focus:outline-none hover:text-blue hover:bg-blue hover:bg-opacity-20"
            >
              <div class="w-16">
                <div class="px-auto">
                  <img
                    src="/images/profile_pic.png"
                    alt=""
                    class="rounded-full"
                  />
                </div>
              </div>
              <div class="hidden 2xl:flex 2xl:flex-col">
                <div class="font-bold">Suboptimal Eng...</div>
                <div class="font-thin">@SuboptimalEng</div>
              </div>
              <div class="hidden 2xl:flex">
                <fa :icon="['fas', 'ellipsis-h']" class="" />
              </div>
            </button>
          </div>
        </div>

        <!-- content -->
        <div
          class="min-h-screen flex flex-col flex-grow divide-y divide-eeelg ml-32 2xl:ml-392px"
        >
          <!-- back -->
          <div class="flex place-items-center w-full py-2">
            <div
              class="mx-4 p-5 rounded-full text-blue hover:text-blue hover:bg-blue hover:bg-opacity-20"
            >
              <fa :icon="['fas', 'arrow-left']" class="" />
            </div>
            <div class="text-3xl flex flex-col text-black dark:text-eelg">
              <div class="flex place-items-center space-x-2">
                <div class="font-black">Elon Musk</div>
                <div class="text-blue dark:text-eelg">
                  <fa :icon="['fas', 'check-circle']" />
                </div>
              </div>
              <div class="text-xl">6.9k Tweets</div>
            </div>
          </div>

          <!-- profile -->
          <div class="w-full">
            <!-- profile: pic -->
            <div class="relative">
              <div class="bg-dg h-72">.</div>
              <div
                class="absolute rounded-full bg-eelg dark:bg-dg h-48 w-48 top-2/3 left-4"
              >
                <div class="h-44 w-44 m-2">
                  <img
                    src="/images/profile_pic.png"
                    alt=""
                    class="rounded-full"
                  />
                </div>
              </div>
            </div>

            <!-- profile: notifs -->
            <div
              class="flex text-2xl text-blue justify-end mt-4 mr-5 space-x-4 place-items-center"
            >
              <button
                class="rounded-full hover:text-blue hover:bg-blue hover:bg-opacity-20 focus:outline-none"
              >
                <fa
                  :icon="['fas', 'ellipsis-h']"
                  class="text-6xl border rounded-full p-4"
                />
              </button>
              <button
                class="rounded-full hover:text-blue hover:bg-blue hover:bg-opacity-20 focus:outline-none"
              >
                <fa
                  :icon="['fas', 'bell']"
                  class="text-6xl border rounded-full p-4"
                />
              </button>
              <button
                class="p-4 px-6 bg-blue text-eelg font-bold border border-blue rounded-full focus:outline-none"
              >
                <div>Following</div>
              </button>
            </div>

            <!-- profile: name -->
            <div class="pt-14 pl-5 flex flex-col space-y-4">
              <div>
                <div class="flex place-items-center space-x-2">
                  <div class="font-black">{{ user.name }}</div>
                  <div class="text-blue dark:text-eelg">
                    <fa :icon="['fas', 'check-circle']" />
                  </div>
                </div>
                <div class="text-2xl text-dg">{{ user.handle }}</div>
              </div>

              <!-- profile: info -->
              <div class="text-xl">
                {{ user.description }}
              </div>

              <!-- profile: join -->
              <div class="flex text-xl text-dg space-x-2">
                <div>
                  <fa :icon="['fas', 'calendar']" />
                </div>
                <div>
                  {{ user.date }}
                </div>
              </div>

              <!-- profile: followers -->
              <div class="flex text-2xl text-dg space-x-4">
                <div class="flex space-x-2">
                  <div class="font-bold text-black dark:text-eelg">
                    {{ user.following }}
                  </div>
                  <div>Following</div>
                </div>
                <div class="flex space-x-2">
                  <div class="font-bold text-black dark:text-eelg">
                    {{ user.followers }}
                  </div>
                  <div>Followers</div>
                </div>
              </div>
            </div>
            <!-- profile: misc -->
            <div class="relative grid grid-cols-4 text-2xl font-bold pt-4">
              <button
                v-for="item in misc"
                :key="item.name"
                class="p-6 hover:text-blue hover:bg-blue hover:bg-opacity-20 focus:outline-none focus:text-blue"
              >
                <div class="font-black">
                  {{ item.name }}
                </div>
              </button>
              <div class="absolute bg-blue h-1 w-1/4 bottom-0"></div>
            </div>
          </div>

          <!-- tweets -->
          <div>
            <div v-for="tweet in tweets" :key="tweet" class="h-60 w-60 m-auto">
              hi
            </div>
          </div>
        </div>

        <!-- right -->
        <!-- <div class="min-h-screen hidden 2xl:flex 2xl:flex-grow">right</div> -->
        <div class="min-h-screen hidden 2xl:flex">right</div>
        <div class="min-h-screen flex w-32 2xl:hidden" />
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
          blueInLightMode: true,
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
      user: {
        name: 'Elon Musk',
        handle: '@elonmusk',
        description: 'Technoking of Tesla',
        date: 'Joined June 2009',
        following: '104',
        followers: '50.4M',
      },
      misc: [
        {
          name: 'Tweets',
          isActive: true,
        },
        {
          name: 'Tweets & replies',
          isActive: false,
        },
        {
          name: 'Media',
          isActive: false,
        },
        {
          name: 'Likes',
          isActive: false,
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
