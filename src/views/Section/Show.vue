<template lang="pug">
  .home
    h1 This is an individual page
    h2(v-if="post") {{ post.title }}
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Post',

  data () {
    return {
      post: null
    }
  },

  mounted () {
    this.axios
      .get(`/${this.$route.params.section}/${this.$route.params.id}/index.json`)
      .then(response => (this.post = response.data.data))
  }
}
</script>
