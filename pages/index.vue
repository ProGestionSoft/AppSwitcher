<template>
  <div class="demo-page">
    <AppHeader />

    <main class="demo-main">
      <div class="container">
        <HeroSection />
        <DemoSection />
        <GuideSection />
        <FeaturesSection />
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { AppFooter, AppHeader, DemoSection, FeaturesSection, GuideSection, HeroSection } from '~/components/home'
</script>

<style scoped>
.demo-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.demo-main {
  flex: 1;
  padding: 48px 0;
  padding-top: 120px;
  /* Compensation pour le header fixe */
}

@media (max-width: 1024px) {
  .container {
    padding: 0 16px;
  }
}

@media (max-width: 768px) {
  .demo-main {
    padding-top: 160px;
    /* Plus d'espace sur mobile car le header est plus haut */
  }
}
</style>
