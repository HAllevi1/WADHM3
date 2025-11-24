<template>
  <main id="mainContent">
    <aside class="left-sidebar">
    </aside>

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
          ></i>
          <span>{{ post.likes }}</span>
        </div>
      </div>
      <button @click="resetLikes">Reset Likes</button>
    </section>


    <aside class="right-sidebar">
    </aside>
  </main>
</template>

<script>
import postsData from '../assets/objektid.json'

export default {
  name: 'MainPage',
  data() {
    return {
      posts: []
    }
  },
  mounted() {
    // Load posts from JSON
    this.posts = postsData.map(post => ({ ...post, liked: false }))
  },
  methods: {
    likePost(id) {
      const post = this.posts.find(p => p.id === id)
      if (post) {
        post.liked = !post.liked
        post.likes += 1
      }
    },
    formatDate(dateStr) {
      return new Date(dateStr).toLocaleDateString('et-EE')
    },
    resetLikes() {
      for (const post of this.posts) {
        post.liked = false
        post.likes = 0
      }
    }
  }
}
</script>
