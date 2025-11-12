<template>
  <div class="post">
    <div class="post-header">
      <i class="fas fa-user-circle"></i>
      <span class="post-date">{{ formattedDate }}</span>
    </div>
    <img v-if="post.image" :src="post.image" class="post-image" />
    <div class="post-text">{{ post.content }}</div>
    <div class="post-actions">
      <button @click="like">{{ post.likes }} 👍</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['post'],
  computed: {
    formattedDate() {
      return new Date(this.post.created_at).toLocaleDateString('et-EE');
    }
  },
  methods: {
    like() {
      this.$store.dispatch('likePost', this.post.id);
    }
  }
}
</script>
