<template>
  <main id="mainContent">
    <aside class="left-sidebar"></aside>

    <section class="posts-feed">
      <!-- Reset nupp (Nõue 4.3) -->
      <div class="controls">
        <button @click="resetLikes" class="reset-btn">Reset All Likes</button>
      </div>

      <!-- KASUTAME KOMPONENTI, mitte ei kirjuta HTML-i siia -->
      <!-- Itereerime üle 'posts' (mis tuleb store-ist) -->
      <Post
          v-for="post in posts"
          :key="post.id"
          :post="post"
      />
    </section>

    <aside class="right-sidebar"></aside>
  </main>
</template>

<script>
// Impordime komponendi
import Post from '../components/Post.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'MainPage',
  components: {
    Post // Registreerime komponendi kasutamiseks
  },
  computed: {
    // Ühendame Store'i andmed selle vaatega
    // Nüüd 'this.posts' on automaatselt ühendatud store.js 'posts' massiiviga
    ...mapGetters({
      posts: 'allPosts'
    })
  },
  methods: {
    // Ühendame Store'i tegevuse selle nupuga
    ...mapActions(['resetLikes'])
  }
}
</script>

<style scoped>
.posts-feed {
  max-width: 600px;
  margin: 0 auto;
}
.controls {
  margin-bottom: 20px;
  text-align: center;
}
.reset-btn {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
</style>