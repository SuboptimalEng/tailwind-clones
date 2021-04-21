<template>
  <div class="flex min-h-screen bg-white border">
    <div class="min-w-full min-h-full p-4">
      <!-- <div class="grid grid-cols-2 h-full bg-white text-black"> -->
      <!-- users section -->
      <div class="flex lg:divide-x h-full">
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
              <div class="rounded-full w-full bg-gray px-2 py-2 flex space-x-2">
                <fa :icon="['fas', 'search']" class="text-2xl my-auto" />
                <input
                  type="text"
                  placeholder="Search Messenger"
                  class="bg-gray text-2xl w-full focus:outline-none"
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
        <div class="flex flex-col lg:divide-y flex-grow">
          <div class="flex fixed top-4 right-4 left-32 lg:left-470px">
            <div class="flex p-4 place-items-center w-full justify-between">
              <div class="flex place-items-center space-x-2">
                <div class="w-14 h-14">
                  <img
                    src="/images/profile_pic.png"
                    alt=""
                    class="rounded-full"
                  />
                </div>
                <div class="hidden md:flex text-xl font-black">
                  Suboptimal Engineer
                </div>
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

          <div
            class="flex fixed top-24 bottom-28 left-32 right-4 lg:left-470px"
          >
            <div
              class="flex flex-col overflow-y-auto w-full p-4 space-y-4 font-medium text-xl"
            >
              <div v-for="message in messages" :key="message">
                <!-- right side -->
                <div v-if="message.sent">
                  <div class="bg-blue p-4 rounded-full text-white">
                    {{ message.text }}
                  </div>
                </div>
                <!-- left side -->
                <div v-else>
                  <div class="bg-gray p-4 rounded-full object-right">
                    {{ message.text }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- <div class="flex fixed mt-40 border">scrollable: messages</div> -->
          <!-- <div class="flex border fixed bottom-4">fixed: send</div> -->

          <!-- <div class="flex fixed border bottom-4 right-4 left-32 lg:left-470px"> -->
          <div class="flex fixed bottom-4 right-4 left-32 lg:left-470px">
            <div class="flex p-4 place-items-center w-full justify-between">
              <div class="flex">
                <div v-for="item in sendMessageActions" :key="item.icon">
                  <div class="w-10 h-10 flex place-content-center">
                    <fa :icon="item.icon" class="text-2xl my-auto text-blue" />
                  </div>
                </div>
              </div>
              <div class="flex flex-grow bg-gray rounded-full p-4 mx-2">
                <input
                  type="text"
                  placeholder="Aa"
                  class="bg-gray text-2xl rounded-full w-full focus:outline-none"
                />
                <fa
                  :icon="['fas', 'smile']"
                  class="text-2xl my-auto text-blue"
                />
              </div>
              <div class="flex w-10 h-10 place-content-center">
                <fa
                  :icon="['fas', 'thumbs-up']"
                  class="text-2xl my-auto text-blue"
                />
              </div>
            </div>
          </div>
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
      messages: [
        {
          sent: true,
          text: 'hello world',
          profilePic: '/images/profile_pic.png',
        },
        {
          sent: false,
          text: 'hello world',
          profilePic: '/images/profile_pic.png',
        },
        {
          sent: true,
          text: 'hello world',
          profilePic: '/images/profile_pic.png',
        },
        {
          sent: false,
          text: 'hello world',
          profilePic: '/images/profile_pic.png',
        },
        {
          sent: true,
          text: 'hello world',
          profilePic: '/images/profile_pic.png',
        },
        {
          sent: false,
          text: 'hello world',
          profilePic: '/images/profile_pic.png',
        },
        {
          sent: true,
          text: 'hello world',
          profilePic: '/images/profile_pic.png',
        },
        {
          sent: false,
          text: 'hello world',
          profilePic: '/images/profile_pic.png',
        },
        {
          sent: true,
          text: 'hello world',
          profilePic: '/images/profile_pic.png',
        },
        {
          sent: false,
          text: 'hello world',
          profilePic: '/images/profile_pic.png',
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
      sendMessageActions: [
        {
          icon: ['fas', 'plus-circle'],
        },
        {
          icon: ['fas', 'image'],
        },
        {
          icon: ['fas', 'paste'],
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
