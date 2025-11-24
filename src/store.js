import { createStore } from 'vuex'

import postsData from './assets/objektid.json'

export default createStore({
  state: {
    // Laen andmed JSONist algseisundisse
    posts: postsData.map(p => ({
      ...p,
      likes: p.likes || 0 // Kui JSONis pole like'e, alustame nullist
    }))
  },
  mutations: {
    // See muudab reaalselt andmeid (sünkroonne)
    LIKE_POST(state, postId) {
      const post = state.posts.find(p => p.id === postId)
      if (post) {
        post.likes++
      }
    },
    RESET_LIKES(state) {
      state.posts.forEach(p => p.likes = 0)
    }
  },
  actions: {
    // Komponendid kutsuvad neid (asünkroonne/loogika kiht)
    likePost({ commit }, postId) {
      commit('LIKE_POST', postId)
    },
    resetLikes({ commit }) {
      commit('RESET_LIKES')
    }
  },
  getters: {
    // Komponendid kasutavad seda andmete lugemiseks
    allPosts: state => state.posts
  }
})