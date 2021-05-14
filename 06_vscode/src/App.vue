<template>
  <div class="flex w-full h-full min-h-screen theme-dracula">
    <div
      class="flex flex-col absolute top-0 bottom-10 left-0 justify-between text-4xl bg-sidebar-bg"
    >
      <!-- sidebar -->
      <div class="flex flex-col items-center">
        <div
          v-for="item in workbenchItems"
          :key="item.name"
          class="relative px-6 py-4"
        >
          <div v-if="item.isActive">
            <fa :icon="item.icon" class="text-off-white" />
            <div class="absolute bg-off-white h-full w-0.5 top-0 left-0"></div>
          </div>
          <div v-else>
            <fa :icon="item.icon" class="text-sidebar-fg" />
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <div
          v-for="setting in userSettings"
          :key="setting.name"
          class="px-6 py-4"
        >
          <fa :icon="setting.icon" class="text-sidebar-fg" />
        </div>
      </div>
    </div>

    <!-- extensions -->
    <div
      class="flex absolute top-0 bottom-10 left-20 w-96 bg-editor-bg text-sidebar-fg"
    >
      <div
        class="flex flex-col absolute w-full top-0 bottom-0 overflow-y-hidden p-4 space-y-4"
      >
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
        <div class="flex flex-col space-y-4 w-full">
          <div
            v-for="extension in installedExtensions"
            :key="extension.name"
            class="flex justify-between"
          >
            <div class="py-2 -ml-2 flex w-full items-center -space-x-2">
              <div class="w-40">
                <img :src="extension.image" alt="" class="rounded-full" />
              </div>
              <div class="flex flex-col w-full">
                <div class="flex items-center justify-between">
                  <div class="text-xl font-bold">
                    {{ extension.name }}
                  </div>
                  <div>
                    {{ extension.downloads }}
                  </div>
                </div>
                <div>
                  {{ extension.description }}
                </div>
                <div class="font-bold">
                  {{ extension.creator }}
                </div>
              </div>
            </div>
          </div>
        </div>
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
          isActive: true,
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
      installedExtensions: [
        {
          name: 'Dracula Official',
          image: '/images/dracula.png',
          downloads: '2.2M',
          description: 'Official Dracula Theme. A dark...',
          creator: 'Dracula Theme',
        },
        {
          name: 'Dracula Official',
          image: '/images/dracula.png',
          downloads: '2.2M',
          description: 'Official Dracula Theme. A dark...',
          creator: 'Dracula Theme',
        },
        {
          name: 'Dracula Official',
          image: '/images/dracula.png',
          downloads: '2.2M',
          description: 'Official Dracula Theme. A dark...',
          creator: 'Dracula Theme',
        },
        {
          name: 'Dracula Official',
          image: '/images/dracula.png',
          downloads: '2.2M',
          description: 'Official Dracula Theme. A dark...',
          creator: 'Dracula Theme',
        },
        {
          name: 'Dracula Official',
          image: '/images/dracula.png',
          downloads: '2.2M',
          description: 'Official Dracula Theme. A dark...',
          creator: 'Dracula Theme',
        },
        {
          name: 'Dracula Official',
          image: '/images/dracula.png',
          downloads: '2.2M',
          description: 'Official Dracula Theme. A dark...',
          creator: 'Dracula Theme',
        },
        {
          name: 'Dracula Official',
          image: '/images/dracula.png',
          downloads: '2.2M',
          description: 'Official Dracula Theme. A dark...',
          creator: 'Dracula Theme',
        },
        {
          name: 'Dracula Official',
          image: '/images/dracula.png',
          downloads: '2.2M',
          description: 'Official Dracula Theme. A dark...',
          creator: 'Dracula Theme',
        },
      ],
    };
  },
};
</script>
