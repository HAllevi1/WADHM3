import { createStore } from 'vuex';
import postsData from './assets/objektid.json';

export default createStore({
  state: {
    posts: postsData
  },
  mutations: {
    likePost(state, id) {
      const post = state.posts.find(p => p.id === id);
      if (post) post.likes++;
    },
    resetLikes(state) {
      state.posts.forEach(p => p.likes = 0);
    }
  },
  actions: {
    likePost({ commit }, id) {
      commit('likePost', id);
    },
    resetLikes({ commit }) {
      commit('resetLikes');
    }
  },
  getters: {
    allPosts: state => state.posts
  }
});
