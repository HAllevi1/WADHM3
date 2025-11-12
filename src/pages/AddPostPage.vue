<template>
  <main id="mainContent2">
    <section class="add-post-section">
      <form class="add-post-form" @submit.prevent="submitPost">
        <!-- Post text -->
        <div class="posttext">
          <label for="postText">Post body</label>
          <textarea
            id="postText"
            v-model="postText"
            rows="4"
            placeholder="Write something..."
            required
          ></textarea>
        </div>

        <!-- Post image -->
        <div class="posttext">
          <label for="postImage">Select file</label>
          <input type="file" id="postImage" @change="handleFile" required />
        </div>

        <!-- Submit -->
        <div class="submitbutton">
          <button type="submit" class="submit-btn">Create post</button>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
export default {
  name: "AddPostPage",
  data() {
    return {
      postText: "",
      postImage: null,
    };
  },
  methods: {
    handleFile(event) {
      this.postImage = event.target.files[0];
    },
    submitPost() {
      // You can handle API submission here
      console.log("Post text:", this.postText);
      console.log("Post image:", this.postImage);
      alert("Post submitted!");
      this.postText = "";
      this.postImage = null;
      this.$refs.postImageInput.value = ""; // reset file input
    },
  },
};
</script>

<style scoped>
#mainContent2 {
  background-color: #f0f0f0;
  padding: 20px 0;
  display: flex;
  justify-content: center;
}

.add-post-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 15px;
  padding: 20px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.add-post-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
}

.posttext {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

@media (min-width: 600px) {
  .posttext {
    flex-direction: row;
    align-items: center;
  }
  .posttext label {
    width: 30%;
    text-align: right;
    margin-right: 10px;
  }
  .posttext textarea,
  .posttext input[type="file"] {
    width: 70%;
  }
}

.submitbutton {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.submitbutton button {
  width: 50%;
  padding: 10px;
  border: none;
  border-radius: 8px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submitbutton button:hover {
  background-color: #0056b3;
}
</style>
