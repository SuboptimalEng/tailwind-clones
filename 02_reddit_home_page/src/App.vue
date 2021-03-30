<template>
  <div class="bg-gray-200 text-black">
    <!-- navbar -->
    <div
      class="bg-white w-full fixed py-2 flex place-items-center justify-evenly space-x-2 shadow"
    >
      <div class="flex text-3xl space-x-2 place-items-center">
        <fa
          :icon="['fab', 'reddit']"
          :style="{ color: 'FF5700' }"
          class="bg-white text-4xl"
        />
        <div class="font-medium hidden lg:block">reddit</div>
      </div>

      <!-- subreddit dropdown -->
      <div>
        <button
          type="button"
          v-on:click="displayDropdown = !displayDropdown"
          class="flex place-items-center space-x-4 lg:space-x-32 p-2 rounded hover:bg-gray-200 focus:outline-none"
        >
          <div class="flex place-items-center space-x-2">
            <fa icon="chart-line" class="text-blue-600 text-2xl" />
            <div class="text-xl font-medium hidden md:block">Popular</div>
          </div>
          <fa icon="caret-down" />
        </button>
        <div class="relative">
          <div
            v-if="displayDropdown"
            class="absolute bg-white rounded py-4 border border-solid border-gray-200 w-60 z-10"
          >
            <div>
              <div class="px-6 py-2 text-xs font-bold text-gray-400">
                REDDIT FEEDS
              </div>
              <div
                v-for="dropdownOption in dropdownOptions"
                :key="dropdownOption.name"
                class="flex place-items-center space-x-4 px-6 py-2 hover:bg-gray-200"
              >
                <fa
                  :icon="dropdownOption.icon"
                  class="text-blue-600 text-2xl"
                />
                <div>
                  {{ dropdownOption.name }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- search bar -->
      <div class="flex place-items-center bg-gray-100 rounded w-60 lg:w-80">
        <div class="pl-4 pr-2">
          <fa icon="search" />
        </div>
        <input
          type="text"
          placeholder="Search"
          class="bg-gray-100 py-2 rounded outline-none"
        />
      </div>

      <div class="flex xl:divide-x xl:divide-gray-200">
        <!-- common options -->
        <div class="hidden xl:block pr-2">
          <div class="flex space-x-2">
            <div
              v-for="option in commonOptions"
              :key="option"
              class="p-2 rounded hover:bg-gray-200"
            >
              <fa :icon="option" class="text-2xl" />
            </div>
          </div>
        </div>

        <!-- actions -->
        <div class="flex space-x-2 pl-2">
          <div
            v-for="action in actions"
            :key="action"
            class="p-2 rounded hover:bg-gray-200"
          >
            <fa :icon="action" class="text-2xl" />
          </div>
        </div>
      </div>

      <div class="flex space-x-2">
        <!-- coins -->
        <div
          class="flex place-items-center rounded-full border border-solid border-yellow-300 px-4 py-2 space-x-2 bg-yellow-200 hover:bg-yellow-500"
        >
          <div
            class="rounded-full px-2 bg-yellow-500 border-2 border-solid border-white font-black text-white"
          >
            C
          </div>
          <div>Free</div>
        </div>
        <!-- profile -->
        <div
          class="flex space-x-2 place-items-center rounded px-2 hover:bg-gray-200"
        >
          <img
            src="/images/profile_pic.png"
            alt=""
            class="w-8 rounded flex-shrink-0"
          />
          <div class="text-sm font-medium hidden xl:block">
            <div>@SuboptimalEng</div>
            <div class="flex place-items-center space-x-1">
              <div>
                <fa icon="star" class="text-red-600" />
              </div>
              <div>1.8k karma</div>
            </div>
          </div>
          <fa icon="caret-down" />
        </div>
      </div>
    </div>

    <!-- content -->
    <div class="flex flex-col pt-20 bg-gray-200 mx-auto min-h-screen max-w-6xl">
      <div class="grid grid-cols-1 gap-y-10">
        <div class="flex flex-col space-y-2">
          <div class="font-medium">Trending Today</div>
          <div class="flex space-x-4">
            <div v-for="post in trending" v-bind:key="post.title">
              <div class="relative z-auto">
                <img
                  :src="post.thumbnail"
                  alt=""
                  class="rounded-xl h-48 object-cover"
                />
                <div
                  class="absolute top-0 rounded-xl w-full h-full bg-gradient-to-b from-transparent to-black"
                ></div>
                <div class="absolute bottom-4 left-4 right-4 text-white">
                  <div class="text-lg font-bold">{{ post.creator }}</div>
                  <div class="font-bold">{{ post.title }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="flex flex-col space-y-8 pt-16 bg-gray-600">
      <div class="flex-row">
        <div class="flex flex-col">
          popular posts
          <div>filter</div>
          <div>feed</div>
        </div>
        <div>communities</div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      displayDropdown: false,
      dropdownOptions: [
        {
          name: 'Home',
          icon: 'home',
        },
        {
          name: 'Popular',
          icon: 'chart-line',
        },
        {
          name: 'All',
          icon: 'globe',
        },
        {
          name: 'Top',
          icon: 'sort-amount-up',
        },
        {
          name: 'Live',
          icon: 'video',
        },
      ],
      commonOptions: ['chart-line', 'globe', 'video'],
      actions: ['comment-dots', 'envelope', 'edit'],
      trending: [
        {
          thumbnail: '/images/01.png',
          video_length: '10:05',
          profile_pic: '/images/profile_pic.png',
          title: 'Coding a Tinder for Memes with the Giphy API and Vue.js',
          creator: '@SuboptimalEng',
          views: '2.5k',
          upload: '1 day ago',
        },
        {
          thumbnail: '/images/02.png',
          video_length: '08:50',
          profile_pic: '/images/profile_pic.png',
          title: 'Getting Started with Vue.js, Vetur and Airbnb ESLint Config',
          creator: '@SuboptimalEng',
          views: '3k',
          upload: '6 day ago',
        },
        {
          thumbnail: '/images/03.png',
          video_length: '09:42',
          profile_pic: '/images/profile_pic.png',
          title: 'Coding a Todo App with Vue.js in 10 Minutes',
          creator: '@SuboptimalEng',
          views: '2k',
          upload: '2 weeks ago',
        },
        {
          thumbnail: '/images/04.png',
          video_length: '08:08',
          profile_pic: '/images/profile_pic.png',
          title: 'Getting Started with Vim and Visual Studio Code',
          creator: '@SuboptimalEng',
          views: '10k',
          upload: '2 months ago',
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
