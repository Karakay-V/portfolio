<template>
  <Header />
  <HeroSection />
  <SkillsSection />
  <MyExpirienceSection />
</template>

<script setup lang="ts">
import Header from './components/panels/Header.vue';
import HeroSection from './components/panels/HeroSection.vue';
import SkillsSection from './components/panels/SkillsSection.vue';
import MyExpirienceSection from './components/panels/MyExpirienceSection.vue';
</script>

<style>
  body {
    margin: 0 auto;
    max-width: 1920px;
  }

  ::selection {
    filter: invert(100%);
  }

  ::-moz-selection {
    filter: invert(100%);
  }
</style>
