<template>
  <div id="app">
    <Navigation />
    <!-- <Header /> -->
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navigation from './components/Navigation'
// import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Navigation,
    // Header,
    Footer,
  }
}
</script>