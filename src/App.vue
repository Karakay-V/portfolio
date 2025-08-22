<template>
  <Header />
  <HeroSection />
  <SkillsSection />
  <MyExpirienceSection />
  <AboutMeSection />
  <MyProjects />
  <MyTestimonial />
  <ContactMe />
  <Footer />
</template>

<script setup lang="ts">
import Header from './components/panels/Header.vue';
import HeroSection from './components/panels/HeroSection.vue';
import SkillsSection from './components/panels/SkillsSection.vue';
import MyExpirienceSection from './components/panels/MyExpirienceSection.vue';
import AboutMeSection from './components/panels/AboutMeSection.vue';
import MyProjects from './components/panels/MyProjects.vue';
import MyTestimonial from './components/panels/MyTestimonial.vue';
import ContactMe from './components/panels/ContactMe.vue';
import Footer from './components/panels/Footer.vue';
</script>

<style>
  body {
    margin: 0 auto;
    max-width: 1920px;
    overflow-x: clip;
    overflow-x: hidden;
  }

  div.app {
    overflow: clip;
    overflow-x: hidden;
  }

  ::selection {
    filter: invert(100%);
  }

  ::-moz-selection {
    filter: invert(100%);
  }
</style>
