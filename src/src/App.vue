<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Navigation />
  <Header v-if="$route.meta.showHeader" />
  <RouterView />
  <Footer />
</template>

