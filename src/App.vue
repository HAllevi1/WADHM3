<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
/* global app styling if needed */
#app {
  font-family: Arial, sans-serif;
  background: #fafafa;
  color: #222;
}
</style>
