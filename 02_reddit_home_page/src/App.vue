<template>
  <div class="bg-gray-200 text-black relative">
    <!-- navbar -->
    <div
      class="bg-white w-full fixed py-2 px-2 flex place-items-center justify-evenly space-x-2 shadow z-10"
    >
      <!-- logo -->
      <div class="flex text-3xl space-x-2 place-items-center">
        <fa
          :icon="['fab', 'reddit']"
          :style="{ color: 'FF5700' }"
          class="bg-white text-4xl"
        />
        <div class="font-medium hidden lg:block">reddit</div>
      </div>

      <!-- subreddit dropdown -->
      <div class="relative">
        <!-- subreddit search dropdown -->
        <button
          type="button"
          v-on:click="displayDropdown = !displayDropdown"
          class="flex place-items-center space-x-4 xl:space-x-48 p-2 rounded hover:bg-gray-200 focus:outline-none"
        >
          <div class="flex place-items-center space-x-2">
            <fa icon="chart-line" class="text-blue-600 text-2xl" />
            <div class="text-xl font-medium hidden md:block">Popular</div>
          </div>
          <fa icon="caret-down" />
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

      <!-- common actions -->
      <div class="flex xl:divide-x xl:divide-gray-200">
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
    <div
      class="flex flex-col pt-20 bg-gray-200 mx-auto min-h-screen max-w-4xl lg:max-w-5xl xl:max-w-6xl"
    >
      <div class="grid grid-cols-1 gap-y-4">
        <!-- trending today -->
        <div class="flex flex-col space-y-2">
          <div class="font-2xl font-medium">Trending Today</div>
          <div class="flex space-x-4">
            <div v-for="post in trending" v-bind:key="post.title">
              <div class="relative">
                <img
                  :src="post.thumbnail"
                  alt=""
                  class="rounded-xl object-cover h-36 xl:h-48 shadow"
                />
                <div
                  class="absolute top-0 w-full h-full rounded-xl bg-gradient-to-b from-transparent to-black"
                ></div>
                <div class="absolute bottom-4 left-4 right-4 text-white z-0">
                  <div class="text-sm xl:text-lg font-bold">
                    {{ post.creator }}
                  </div>
                  <div class="text-sm xl:text-base font-bold overflow-hidden">
                    {{ post.title }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- popular posts -->
        <div class="flex flex-col space-y-2">
          <div class="font-2xl font-medium">Popular Posts</div>
          <div class="flex flex-col space-y-4">
            <!-- filter -->
            <div
              class="flex place-items-center justify-between border border-solid border-gray-400 bg-white p-4 rounded shadow"
            >
              <div class="flex space-x-1 lg:space-x-4">
                <div v-for="item in popularItems" :key="item.name">
                  <div
                    v-if="item.isBlue"
                    class="text-blue-500 bg-gray-200 rounded-full px-4 py-2 font-black flex place-items-center space-x-2 hover:bg-gray-300"
                  >
                    <div v-if="item.icon">
                      <fa :icon="item.icon" class="text-xl" />
                    </div>
                    <div>{{ item.name }}</div>
                    <div v-if="item.caretDown">
                      <fa icon="caret-down" />
                    </div>
                  </div>

                  <div
                    v-else
                    class="text-gray-500 rounded-full p-2 font-black space-x-2 flex place-items-center hover:bg-gray-300"
                  >
                    <div v-if="item.icon">
                      <fa :icon="item.icon" class="text-xl" />
                    </div>
                    <div>{{ item.name }}</div>
                    <div v-if="item.caretDown">
                      <fa icon="caret-down" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  class="text-blue-500 bg-gray-200 rounded-full px-4 py-2 font-black flex place-items-center space-x-2 hover:bg-gray-300"
                >
                  <fa icon="columns" class="text-xl" />
                  <fa icon="caret-down" />
                </div>
              </div>
            </div>

            <!-- reddit posts -->
            <div class="flex flex-col space-y-4 pb-8">
              <div v-for="post in posts" :key="post.title">
                <div
                  class="border border-solid border-gray-400 bg-white rounded shadow flex"
                >
                  <div
                    class="flex flex-col place-items-center text-2xl p-2 bg-gray-100 justify-center"
                  >
                    <div>
                      <fa icon="chevron-circle-up" class="text-red-500" />
                    </div>
                    <div class="text-red-500 font-bold">
                      {{ post.upvotes }}
                    </div>
                    <div>
                      <fa icon="chevron-circle-down" />
                    </div>
                  </div>
                  <div class="flex flex-col pl-4">
                    <div class="flex place-items-center space-x-2">
                      <img
                        :src="post.image"
                        alt=""
                        class="w-8 rounded-full py-2"
                      />
                      <div class="font-bold">{{ post.subreddit }}</div>
                      <div class="font-thin text-gray-600">
                        Posted by u/SuboptimalEng
                        {{ post.date }}
                      </div>
                    </div>
                    <div class="text-2xl font-bold">
                      {{ post.title }}
                    </div>
                    <div class="flex text-gray-500 space-x-4">
                      <div
                        v-for="interaction in interactions"
                        :key="interaction.icon"
                        class="text-lg flex place-items-center space-x-2 p-2 hover:bg-gray-200"
                      >
                        <fa :icon="interaction.icon" />
                        <div>
                          {{ interaction.name }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
          thumbnail: '/images/01.png',
          video_length: '10:05',
          profile_pic: '/images/profile_pic.png',
          title: 'Vue CLI Setup Guide with Tailwind CSS',
          creator: '@SuboptimalEng',
          views: '2.5k',
          upload: '1 day ago',
        },
        {
          thumbnail: '/images/02.png',
          video_length: '08:50',
          profile_pic: '/images/profile_pic.png',
          title: 'Getting Started with Vim and VS Code',
          creator: '@SuboptimalEng',
          views: '3k',
          upload: '6 day ago',
        },
        {
          thumbnail: '/images/03.png',
          video_length: '09:42',
          profile_pic: '/images/profile_pic.png',
          title: 'Productive Mac OS Setup with Vim, iTerm2, and Oh My Zsh',
          creator: '@SuboptimalEng',
          views: '2k',
          upload: '2 weeks ago',
        },
        {
          thumbnail: '/images/04.png',
          video_length: '08:08',
          profile_pic: '/images/profile_pic.png',
          title: 'Vue.js Setup Guide in VS Code with Vetur & Airbnb ESLint',
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
