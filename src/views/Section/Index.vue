<template lang="pug">
  .home
    h1 This is an index page
    h2(v-for="post in posts") {{ post.title }}
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Section',

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
