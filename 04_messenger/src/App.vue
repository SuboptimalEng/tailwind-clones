<template>
  <div class="flex min-h-screen bg-white border">
    <div class="min-w-full min-h-full p-4">
      <!-- <div class="grid grid-cols-2 h-full bg-white text-black"> -->
      <!-- users section -->
      <div class="flex border">
        <div class="h-full w-36 lg:w-450px">
          <!-- fixed: profile -->
          <div class="hidden lg:flex flex-col p-4 space-y-4">
            <div class="flex place-items-center justify-between">
              <div class="flex place-items-center space-x-4">
                <div class="w-14 h-14">
                  <img
                    src="/images/profile_pic.png"
                    alt=""
                    class="rounded-full"
                  />
                </div>
                <div class="flex text-4xl font-black">Chats</div>
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
            <div class="flex w-full place-items-center justify-between">
              <div
                class="rounded-full w-full bg-gray border px-2 py-2 flex space-x-2"
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
          <div
            class="flex overflow-y-auto fixed top-4 bottom-4 left-4 lg:top-44 lg:w-450px"
          >
            <div class="flex flex-col px-2 w-full">
              <div
                v-for="user in users"
                :key="user"
                class="rounded-lg p-4 bg-white hover:bg-gray"
              >
                <div class="flex place-items-center space-x-2">
                  <div class="w-14 h-14 mx-auto lg:mx-0">
                    <img
                      src="/images/profile_pic.png"
                      alt=""
                      class="rounded-full"
                    />
                  </div>
                  <div class="hidden lg:flex flex-col">
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
          <div class="flex border fixed top-4 right-4 left-32 lg:left-470px">
            <div class="flex p-4 place-items-center w-full justify-between">
              <div class="flex place-items-center space-x-2">
                <div class="w-14 h-14">
                  <img
                    src="/images/profile_pic.png"
                    alt=""
                    class="rounded-full"
                  />
                </div>
                <div class="text-xl font-black">Suboptimal Engineer</div>
              </div>
              <div class="flex">
                <div v-for="item in messageActions" :key="item.icon">
                  <div class="w-14 h-14 flex place-content-center">
                    <fa :icon="item.icon" class="text-2xl my-auto text-blue" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="flex border">scrollable: messages</div> -->
          <!-- <div class="flex border fixed bottom-4">fixed: send</div> -->
        </div>
      </div>
      <!-- </div> -->
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
          icon: ['fas', 'photo-video'],
        },
        {
          icon: ['fas', 'edit'],
        },
      ],
      messageActions: [
        {
          icon: ['fas', 'phone'],
        },
        {
          icon: ['fas', 'video'],
        },
        {
          icon: ['fas', 'question-circle'],
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
