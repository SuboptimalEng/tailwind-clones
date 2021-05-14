<template>
  <div class="flex w-full h-full min-h-screen theme-dracula">
    <div
      class="flex flex-col absolute top-0 bottom-10 left-0 justify-between text-4xl p-6 bg-sidebar-bg"
    >
      <!-- sidebar -->
      <div class="flex flex-col items-center space-y-8">
        <div v-for="item in workbenchItems" :key="item.name">
          <fa :icon="item.icon" class="text-sidebar-fg" />
        </div>
      </div>
      <div class="flex flex-col items-center space-y-8">
        <div v-for="setting in userSettings" :key="setting.name">
          <fa :icon="setting.icon" class="text-sidebar-fg" />
        </div>
      </div>
    </div>

    <!-- extensions -->
    <div
      class="flex absolute top-0 bottom-10 left-20 w-80 bg-editor-bg text-sidebar-fg"
    >
      <div class="flex flex-col absolute w-full p-4 space-y-4">
        <div class="flex items-center justify-between px-2">
          <div>EXTENSIONS</div>
          <div class="flex space-x-4">
            <div v-for="extension in extensions" :key="extension.icon">
              <fa :icon="extension.icon" class="text-sidebar-fg" />
            </div>
          </div>
        </div>
        <div class="flex">
          <input
            type="search"
            name=""
            id=""
            placeholder="Search Extensions in Marketplace"
            class="w-full p-2 bg-sidebar-bg"
          />
        </div>
        <div class="flex px-2 font-black">INSTALLED</div>
        <div class="flex px-2 font-black">INSTALLED</div>
      </div>
    </div>

    <!-- activity -->
    <div
      class="absolute bottom-0 h-10 w-full px-6 flex justify-between bg-activity-bg"
    >
      <div class="flex items-center text-off-white text-2xl space-x-8">
        <div class="flex space-x-2">
          <fa :icon="activity.main.icon" />
          <div class="text-xl text">{{ activity.main.name }}</div>
        </div>
        <div class="flex space-x-2">
          <fa :icon="activity.sync.icon" />
        </div>
        <div class="flex space-x-2">
          <div class="text-xl text">{{ activity.mode.name }}</div>
        </div>
      </div>
      <div class="flex items-center text-off-white text-2xl space-x-8">
        <div class="flex space-x-2">
          <fa :icon="activity.prettier.icon" />
          <div class="text-xl text">{{ activity.prettier.name }}</div>
        </div>
        <div class="flex space-x-2">
          <fa :icon="activity.notification.icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  faFile,
  faSearch,
  faCodeBranch,
  faBug,
  faCubes,
  faUserCircle,
  faCog,
  faSync,
  faCheckDouble,
  faBell,
  faFilter,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';

export default {
  name: 'App',
  data() {
    return {
      workbenchItems: [
        {
          name: 'Explorer',
          icon: faFile,
        },
        {
          name: 'Search',
          icon: faSearch,
        },
        {
          name: 'Git',
          icon: faCodeBranch,
        },
        {
          name: 'Debug',
          icon: faBug,
        },
        {
          name: 'Extensions',
          icon: faCubes,
        },
      ],
      userSettings: [
        {
          name: 'Accounts',
          icon: faUserCircle,
        },
        {
          name: 'Manage',
          icon: faCog,
        },
      ],
      activity: {
        main: {
          name: 'main*',
          icon: faCodeBranch,
        },
        sync: {
          name: 'Sync',
          icon: faSync,
        },
        mode: {
          name: '-- NORMAL --',
        },
        prettier: {
          name: 'Prettier',
          icon: faCheckDouble,
        },
        notification: {
          icon: faBell,
        },
      },
      extensions: {
        filter: {
          icon: faFilter,
        },
        sync: {
          icon: faSync,
        },
        options: {
          icon: faEllipsisH,
        },
      },
    };
  },
};
</script>
