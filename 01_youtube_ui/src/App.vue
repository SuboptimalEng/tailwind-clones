<template>
  <div class="bg-gray-900 text-white h-full w-full">
    <div class="flex flex-row">
      <!-- left nav bar -->
      <div class="flex flex-col">
        <div
          v-for="item in navbar"
          v-bind:key="item"
          class="flex flex-col place-items-center space-y-2 hover:bg-gray-800 px-2 py-4"
        >
          <fa :icon="item.icon" class="text-3xl" />
          <div v-if="item.name">
            {{ item.name }}
          </div>
        </div>
      </div>

      <div class="flex flex-col divide-y divide-gray-200 w-screen text-xl">
        <!-- top search bar -->
        <div class="flex py-4 space-x-10">
          <div>youtube</div>
          <div>search</div>
          <div>search with voice</div>
          <div>youtube apps</div>
          <div>settings</div>
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

library.add(fas);

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
