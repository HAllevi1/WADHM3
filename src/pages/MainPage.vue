<template>
  <main id="mainContent">
    <aside class="left-sidebar"></aside>

    <section class="posts-feed">
      <div v-for="post in posts" :key="post.id" class="post">
        <div class="post-header">
          <i class="fas fa-user-circle"></i>
          <span class="post-date">{{ formatDate(post.created_at) }}</span>
        </div>

        <img v-if="post.image" :src="post.image" alt="Post image" class="post-image" />
        <div class="post-text">{{ post.content }}</div>
        <div class="post-actions">
          <i 
            class="fas fa-thumbs-up" 
            @click="likePost(post.id)" 
            :style="{ color: post.liked ? '#007BFF' : '#777' }"
          ></i>
          <span>{{ post.likes }}</span>
        </div>
      </div>

      <button class="reset-likes-btn" @click="resetLikes">Reset Likes</button>
    </section>

    <aside class="right-sidebar"></aside>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'MainPage',
  computed: {
    ...mapGetters(['allPosts']),
    posts() {
      // Add a local liked flag for coloring the button
      return this.allPosts.map(post => ({
        ...post,
        liked: post.liked || false
      }))
    }
  },
  methods: {
    ...mapActions(['resetLikes']),
    likePost(id) {
      // Toggle liked locally for the color
      const post = this.allPosts.find(p => p.id === id)
      if (post) post.liked = !post.liked

      // Update likes count in store
      this.$store.commit('likePost', id)
    },
    formatDate(dateStr) {
      return new Date(dateStr).toLocaleDateString('et-EE')
    }
  }
}
</script>

<style scoped>
.reset-likes-btn {
  margin-top: 20px;
  padding: 8px 16px;
  border: none;
  background-color: #dc3545;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}
.reset-likes-btn:hover {
  background-color: #c82333;
}
</style>
