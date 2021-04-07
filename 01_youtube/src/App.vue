<template>
  <div class="bg-gray-900 text-white h-full w-full">
    <div class="flex flex-row">
      <!-- left nav bar -->
      <div class="flex flex-col">
        <div
          v-for="item in navbar"
          v-bind:key="item"
          class="flex flex-col place-items-center space-y-2 hover:bg-gray-800 px-4 py-8"
        >
          <fa :icon="item.icon" class="text-3xl" />
          <div v-if="item.name">
            {{ item.name }}
          </div>
        </div>
      </div>

      <div class="flex flex-col divide-y divide-gray-200 w-screen text-xl">
        <!-- top bar -->
        <div class="flex p-4 space-x-10 justify-between place-items-center">
          <!-- YouTube logo -->
          <div class="flex space-x-2 text-5xl">
            <div>
              <fa :icon="['fab', 'youtube']" class="text-red-500" />
            </div>
            <div class="font-bold">YouTube</div>
          </div>

          <!-- Search bar -->
          <div class="flex text-2xl place-items-center space-x-10">
            <div class="flex bg-black border-solid border border-gray-200">
              <input
                class="bg-black w-96 px-2"
                type="text"
                placeholder="Search"
              />
              <div
                class="bg-gray-800 px-4 py-1 border-solid border border-gray-200"
              >
                <fa icon="search" />
              </div>
            </div>
            <fa icon="microphone" class="text-3xl" />
          </div>

          <div class="flex space-x-10 place-items-center text-4xl">
            <fa icon="th" />
            <fa icon="ellipsis-v" />
            <div
              class="border-solid border border-blue-400 p-4 text-blue-400 rounded text-2xl flex space-x-2"
            >
              <fa icon="user-circle" class="text-4xl" />
              <div class="self-center">SIGN IN</div>
            </div>
          </div>
        </div>

        <!-- tag search -->
        <div class="flex flex-row space-x-4 p-4 px-8 select-none">
          <div
            v-for="tag in tags"
            v-bind:key="tag"
            class="bg-gray-700 rounded-full p-2 px-4 border-solid border border-gray-200 hover:bg-gray-600"
          >
            {{ tag }}
          </div>
        </div>

        <!-- content -->
        <div class="flex flex-wrap bg-gray-700 h-full p-4">
          <div v-for="video in videos" :key="video.title" class="w-4/12 px-4">
            <div class="relative">
              <div class="absolute bottom-0 right-2 bg-black rounded p-2">
                {{ video.video_length }}
              </div>
              <img :src="video.thumbnail" class="rounded" title="hello" />
            </div>
            <div class="flex py-4 space-x-2">
              <div class="w-2/12">
                <img :src="video.profile_pic" class="rounded-full" />
              </div>
              <div class="flex flex-col space-y-2">
                <div class="text-xl font-bold">
                  {{ video.title }}
                </div>
                <div class="flex flex-col float-right pb-4">
                  <div class="">
                    {{ video.creator }}
                  </div>
                  <div>{{ video.views }} views ● {{ video.upload }}</div>
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
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas);
library.add(fab);

export default {
  name: 'App',

  data() {
    return {
      navbar: [
        {
          icon: 'bars',
        },
        {
          name: 'home',
          icon: 'home',
        },
        {
          name: 'explore',
          icon: 'compass',
        },
        {
          name: 'subscriptions',
          icon: 'photo-video',
        },
        {
          name: 'library',
          icon: 'window-restore',
        },
        {
          name: 'history',
          icon: 'history',
        },
      ],
      tags: [
        'all',
        'live',
        'coding',
        'vue',
        'typescript',
        'rust',
        'javascript',
        'react',
        'vue.js',
        'programming',
      ],
      videos: [
        {
          thumbnail: '/images/01.png',
          video_length: '10:05',
          profile_pic: '/images/profile_pic.png',
          title: 'Getting Started with Vue.js and Tailwind CSS',
          creator: '@SuboptimalEng',
          views: '2.5k',
          upload: '1 day ago',
        },
        {
          thumbnail: '/images/02.png',
          video_length: '08:08',
          profile_pic: '/images/profile_pic.png',
          title: 'Getting Started with Vim and Visual Studio Code',
          creator: '@SuboptimalEng',
          views: '10k',
          upload: '2 months ago',
        },
        {
          thumbnail: '/images/04.png',
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
          thumbnail: '/images/05.png',
          video_length: '07:45',
          profile_pic: '/images/profile_pic.png',
          title:
            'VS Code IntelliSense Suggestions Navigation with Vim Commands',
          creator: '@SuboptimalEng',
          views: '4k',
          upload: '1 month ago',
        },
        {
          thumbnail: '/images/06.png',
          video_length: '08:22',
          profile_pic: '/images/profile_pic.png',
          title:
            'Productive Mac OS iTerm2 Setup with Oh My Zsh, Vim and Autosuggestions',
          creator: '@SuboptimalEng',
          views: '6k',
          upload: '2 months ago',
        },
        {
          thumbnail: '/images/clone.png',
          video_length: '10:05',
          profile_pic: '/images/profile_pic.png',
          title: 'Cloning the YouTube Home Page UI with Tailwind CSS',
          creator: '@SuboptimalEng',
          views: '2.5k',
          upload: '1 day ago',
        },
        {
          thumbnail: '/images/clone.png',
          video_length: '08:50',
          profile_pic: '/images/profile_pic.png',
          title: 'How to Clone the YouTube UI using Tailwind and Vue.js',
          creator: '@SuboptimalEng',
          views: '3k',
          upload: '6 day ago',
        },
        {
          thumbnail: '/images/clone.png',
          video_length: '09:42',
          profile_pic: '/images/profile_pic.png',
          title: 'Recreating the YouTube Home Page UI with Tailwind CSS',
          creator: '@SuboptimalEng',
          views: '2k',
          upload: '2 weeks ago',
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
