<template>
  <div class="flex min-h-screen bg-lb">
    <div class="min-w-full min-h-full p-4">
      <div class="grid grid-cols-2 h-full bg-white text-black">
        <!-- users section -->
        <div class="grid h-full">
          <!-- fixed: profile -->
          <div class="flex flex-col border p-4 space-y-4">
            <div class="flex w-full place-items-center justify-between border">
              <div class="flex place-items-center space-x-4">
                <div class="w-14 h-14">
                  <img
                    src="/images/profile_pic.png"
                    alt=""
                    class="rounded-full"
                  />
                </div>
                <div class="text-4xl font-black">Chats</div>
              </div>
              <div class="flex place-items-center space-x-4">
                <div v-for="item in profileActions" :key="item.icon" class="f">
                  <div
                    class="w-14 h-14 bg-gray rounded-full flex place-content-center"
                  >
                    <fa :icon="item.icon" class="text-2xl my-auto" />
                  </div>
                </div>
              </div>
            </div>
            <div class="flex w-full place-items-center justify-between border">
              <div
                class="border rounded-full w-full bg-gray p-2 flex space-x-2"
              >
                <fa :icon="['fas', 'search']" class="text-2xl my-auto" />
                <input
                  type="text"
                  placeholder="Search Messenger"
                  class="bg-gray text-2xl"
                />
              </div>
            </div>
          </div>
          <!-- scrollable: users -->
          <div class="flex border">
            <div class="flex flex-col p-4 w-full">
              <!-- individual user -->
              <div
                v-for="user in users"
                :key="user"
                class="border rounded-lg p-4 hover:bg-gray"
              >
                <div class="flex place-items-center space-x-2">
                  <div class="w-14 h-14">
                    <img
                      src="/images/profile_pic.png"
                      alt=""
                      class="rounded-full"
                    />
                  </div>
                  <div class="flex flex-col">
                    <div class="text-xl font-medium">
                      {{ user.name }}
                    </div>
                    <div>
                      {{ user.lastMessage }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- messages section -->
        <div class="flex flex-col border">
          <div class="grid grid-rows-3 h-full">
            <!-- fixed: details  -->
            <div class="flex border"></div>
            <!-- scrollable: messages -->
            <div class="flex border"></div>
            <!-- fixed: send -->
            <div class="flex border"></div>
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
      profileActions: [
        {
          icon: ['fas', 'ellipsis-h'],
        },
        {
          icon: ['fas', 'video'],
        },
        {
          icon: ['fas', 'edit'],
        },
      ],
      users: [
        {
          name: 'Suboptimal Engineer',
          profilePic: '/images/profile_pic.png',
          lastMessage: 'Suboptimal sent 2 photos.',
          updated: '2d',
        },
        {
          name: 'Suboptimal Engineer',
          profilePic: '/images/profile_pic.png',
          lastMessage: 'Suboptimal sent 2 photos.',
          updated: '2d',
        },
        {
          name: 'Suboptimal Engineer',
          profilePic: '/images/profile_pic.png',
          lastMessage: 'Suboptimal sent 2 photos.',
          updated: '2d',
        },
        {
          name: 'Suboptimal Engineer',
          profilePic: '/images/profile_pic.png',
          lastMessage: 'Suboptimal sent 2 photos.',
          updated: '2d',
        },
        {
          name: 'Suboptimal Engineer',
          profilePic: '/images/profile_pic.png',
          lastMessage: 'Suboptimal sent 2 photos.',
          updated: '2d',
        },
        {
          name: 'Suboptimal Engineer',
          profilePic: '/images/profile_pic.png',
          lastMessage: 'Suboptimal sent 2 photos.',
          updated: '2d',
        },
        {
          name: 'Suboptimal Engineer',
          profilePic: '/images/profile_pic.png',
          lastMessage: 'Suboptimal sent 2 photos.',
          updated: '2d',
        },
        {
          name: 'Suboptimal Engineer',
          profilePic: '/images/profile_pic.png',
          lastMessage: 'Suboptimal sent 2 photos.',
          updated: '2d',
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
