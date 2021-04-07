<template>
  <div class="min-h-screen bg-gray-200 text-gray-900">
    <!-- navbar -->
    <div
      class="bg-white w-full fixed p-2 mt-36 flex place-items-center justify-evenly space-x-2 shadow z-10 border border-black"
    >
      <!-- logo -->
      <div
        class="flex text-3xl space-x-2 place-items-center border border-black"
      >
        <fa
          :icon="['fab', 'reddit']"
          :style="{ color: 'FF5700' }"
          class="bg-white text-4xl"
        />
        <div
          class="font-medium hidden lg:block border border-black bg-gray-600"
        >
          reddit
        </div>
      </div>

      <!-- subreddit dropdown -->
      <div class="relative">
        <!-- subreddit search dropdown -->
        <button
          type="button"
          v-on:click="displayDropdown = !displayDropdown"
          class="flex place-items-center space-x-4 xl:space-x-48 p-2 rounded hover:bg-gray-200 focus:outline-none border border-black"
        >
          <div class="flex place-items-center space-x-2">
            <fa icon="chart-line" class="text-blue-600 text-2xl" />
            <div
              class="font-medium text-xl md:text-6xl border border-black bg-gray-600"
            >
              Popular
            </div>
          </div>
          <fa icon="caret-down" class="border border-black" />
        </button>

        <!-- reddit feeds -->
        <div
          v-if="displayDropdown"
          class="absolute bg-white rounded py-4 border border-solid border-gray-200 w-80"
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
              <fa :icon="dropdownOption.icon" class="text-blue-600 text-2xl" />
              <div>
                {{ dropdownOption.name }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- search bar -->
      <div
        class="flex place-items-center rounded w-60 lg:w-80 border border-black bg-gray-600"
      >
        <div class="pl-4 pr-2">
          <fa icon="search" />
        </div>
        <input
          type="text"
          placeholder="Search"
          class="bg-gray-600 py-2 rounded outline-none"
        />
      </div>

      <!-- common actions -->
      <div class="flex xl:divide-x xl:divide-gray-200 border border-black">
        <div class="hidden xl:block pr-2 border border-black bg-gray-600">
          <div class="flex space-x-2">
            <div
              v-for="option in commonOptions"
              :key="option"
              class="p-2 rounded hover:bg-gray-200 border border-black"
            >
              <fa :icon="option" class="text-2xl" />
            </div>
          </div>
        </div>

        <div class="flex space-x-2 pl-2 border border-black">
          <div
            v-for="action in actions"
            :key="action"
            class="p-2 rounded hover:bg-gray-200 border border-black"
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
          class="flex space-x-2 place-items-center rounded px-2 hover:bg-gray-200 border border-black"
        >
          <img
            src="/images/profile_pic.png"
            alt=""
            class="w-8 rounded flex-shrink-0"
          />
          <div
            class="text-sm font-medium hidden xl:block border border-black bg-gray-600"
          >
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
          thumbnail: '/images/clone.png',
          video_length: '10:05',
          profile_pic: '/images/profile_pic.png',
          title: 'Reddit UI Clone Built with Tailwind CSS',
          creator: '@SuboptimalEng',
          views: '2.5k',
          upload: '1 day ago',
        },
        {
          thumbnail: '/images/clone.png',
          video_length: '08:50',
          profile_pic: '/images/profile_pic.png',
          title: 'Recreating the Reddit UI with Tailwind and Vue.js',
          creator: '@SuboptimalEng',
          views: '3k',
          upload: '6 day ago',
        },
        {
          thumbnail: '/images/clone.png',
          video_length: '09:42',
          profile_pic: '/images/profile_pic.png',
          title: 'Coding a Reddit Clone with Tailwind CSS',
          creator: '@SuboptimalEng',
          views: '2k',
          upload: '2 weeks ago',
        },
        {
          thumbnail: '/images/clone.png',
          video_length: '08:08',
          profile_pic: '/images/profile_pic.png',
          title: 'Simple Reddit UI Clone with Tailwind CSS and Vue 3',
          creator: '@SuboptimalEng',
          views: '10k',
          upload: '2 months ago',
        },
      ],
      popularItems: [
        {
          name: 'Hot',
          icon: 'fire',
          isBlue: true,
        },
        {
          name: 'United States',
          isBlue: true,
          caretDown: true,
        },
        {
          name: 'All',
          isBlue: true,
          caretDown: true,
        },
        {
          name: 'New',
          icon: 'certificate',
        },
        {
          name: 'Top',
          icon: 'sort-amount-up',
        },
        {
          name: 'Rising',
          icon: 'arrow-circle-up',
        },
      ],
      posts: [
        {
          image: '/images/js.png',
          upvotes: '6.9k',
          subreddit: 'r/learnjavascript',
          postedBy: '@SuboptimalEng',
          date: '4 hrs ago',
          title: 'How to Clone the Reddit UI with Tailwind CSS',
        },
        {
          image: '/images/js.png',
          upvotes: '4.2k',
          subreddit: 'r/learnjavascript',
          postedBy: '@SuboptimalEng',
          date: '10 hrs ago',
          title: 'Cracking the YouTube Algorithm with Suboptimal UI Clones',
        },
        {
          image: '/images/js.png',
          upvotes: '1.1k',
          subreddit: 'r/learnjavascript',
          postedBy: '@SuboptimalEng',
          date: '10 hrs ago',
          title: 'Tech Coding Interviews are Kinda Sus',
        },
      ],
      interactions: [
        {
          name: 'Comments',
          icon: 'comment',
        },
        {
          name: 'Award',
          icon: 'trophy',
        },
        {
          name: 'Share',
          icon: 'share',
        },
        {
          name: 'Save',
          icon: 'bookmark',
        },
        {
          name: '',
          icon: 'ellipsis-h',
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
