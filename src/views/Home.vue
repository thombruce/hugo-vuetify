<template lang="pug">
  .home
    h1 This is the home page
    h2(v-for="post in posts") {{ post.title }}
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',

  data () {
    return {
      posts: null
    }
  },

  mounted () {
    this.axios
      .get('/index.json')
      .then(response => (this.posts = response.data.data))
  }
}
</script>
