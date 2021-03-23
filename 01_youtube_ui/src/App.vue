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
          <div class="flex space-x-2 text-4xl">
            <div>
              <fa :icon="['fab', 'youtube']" class="text-red-500" />
            </div>
            <div class="font-black">YouTube</div>
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
              class="border-solid border border-blue-400 p-4 text-blue-400 rounded text-2xl flex space-x-2 place-items-center"
            >
              <fa icon="user-circle" class="text-4xl" />
              <div>SIGN IN</div>
            </div>
          </div>
        </div>

        <!-- tag search -->
        <div class="flex flex-row space-x-4 p-4">
          <div
            v-for="tag in tags"
            v-bind:key="tag"
            class="bg-gray-700 rounded-full p-2 px-4 border-solid border border-gray-200 hover:bg-gray-600"
          >
            {{ tag }}
          </div>
        </div>

        <!-- content -->
        <div class="grid grid-cols-4 bg-black h-screen p-4">
          <div>What is Vue.js?</div>
          <div>What is Tailwind CSS?</div>
          <div>Vue vs React JS?</div>
          <div>Vue vs React JS?</div>
          <div>Vue vs React JS?</div>
          <div>Vue vs React JS?</div>
          <div>Vue vs React JS?</div>
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
