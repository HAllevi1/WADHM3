<template>
  <div class="post">
    <div class="post-header">
      <!-- Kui sul on FontAwesome installitud, kasuta ikooni, muidu pilti/teksti -->
      <i class="fas fa-user-circle"></i>
      <span class="post-date">{{ formattedDate }}</span>
    </div>

    <img v-if="post.image" :src="post.image" alt="Post image" class="post-image" />

    <div class="post-text">{{ post.content }}</div>

    <div class="post-actions">
      <!-- Kutsume välja meetodi like() -->
      <button @click="like" class="like-btn">
        <i class="fas fa-thumbs-up"></i> Like
      </button>
      <span class="likes-count">{{ post.likes }} likes</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: ['post'], // Saab andmed MainPage'ilt
  computed: {
    formattedDate() {
      // Formaadime kuupäeva ilusamaks
      if (!this.post.created_at && !this.post.date) return '';
      const dateVal = this.post.created_at || this.post.date;
      return new Date(dateVal).toLocaleDateString('et-EE');
    }
  },
  methods: {
    like() {
      // Saadame käsu Store'ile: "Suurenda selle ID-ga postituse like'e"
      this.$store.dispatch('likePost', this.post.id);
    }
  }
}
</script>

<style scoped>
/* Lisa siia stiilid, et postitus näeks ilus välja */
.post {
  border: 1px solid #ddd;
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 8px;
  background: white;
}
.post-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  color: #555;
}
.post-image {
  max-width: 100%;
  border-radius: 4px;
}
.post-actions {
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.like-btn {
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
}
</style>