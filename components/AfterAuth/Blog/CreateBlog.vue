<template>
  <div class="container">
    <h1 class="column-title">Create a new blog post</h1>
    <form @submit.prevent="createBlog">
      <div>
        <label for="title" class="block font-bold lg:text-2xl text-[22px] leading-[30px]">Title:</label>
        <input class="my-2 p-2 border rounded" type="text" id="title" v-model="title" required>
      </div>
      <div>
        <label for="content" class="block font-bold lg:text-2xl text-[22px] leading-[30px]">Content:</label>
        <textarea class="mt-2 p-2 border rounded" id="content" v-model="content" required></textarea>
      </div>
      <button type="submit" class="btn mt-2 btn-primary w-full lg:w-auto">Create</button>
    </form>
  </div>
</template>

<script>
// import { API, graphqlOperation } from 'aws-amplify'
//   import { createBlog } from '../graphql/mutations'

// export default {
//   data() {
//     return {
//       title: '',
//       content: ''
//     }
//   },
  // methods: {
  //   async createBlog() {
  //     try {
  //       const input = {
  //         title: this.title,
  //         content: this.content
  //       }
  //       await API.graphql(graphqlOperation(createBlog, { input }))
  //       // Handle success or navigate to a different page
  //     } catch (error) {
  //       console.error('Error creating blog post:', error)
  //     }
  //   }
  // }
// }
</script>

<style>

.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
}
</style>
