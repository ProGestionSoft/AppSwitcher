<template>
  <header class="demo-header">
    <div class="header-content">
      <h1 class="logo">PRO GESTION SOFT</h1>
      <nav class="header-nav">
        <a href="#demo" class="nav-link">Démonstration</a>
        <a href="#integration" class="nav-link">Guide d'intégration</a>
        <a href="#advantages" class="nav-link">Avantages</a>
        <AppSwitcher triggerIconColor="#FFFFFF" />
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import AppSwitcher from '~/components/AppSwitcher.vue'
</script>

<style scoped>
.demo-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 16px 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  backdrop-filter: blur(10px);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 24px;
  font-weight: 700;
  margin: 0;
}

.header-nav {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-link {
  color: white;
  font-weight: 500;
  transition: opacity var(--transition-fast);
}

.nav-link:hover {
  opacity: 0.8;
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 16px;
    padding: 16px;
  }

  .header-nav {
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
  }

  .logo {
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  .demo-header {
    padding: 12px 0;
  }

  .header-content {
    padding: 8px;
  }

  .logo {
    font-size: 18px;
  }

  .nav-link {
    font-size: 14px;
  }
}
</style>
