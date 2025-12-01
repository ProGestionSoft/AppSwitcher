<template>
  <section class="hero">
    <h1 class="hero-title">PGS App Switcher</h1>
    <p class="hero-subtitle">
      Composant partagé pour naviguer entre toutes lles applications PGS
    </p>
    <div class="hero-actions">
      <a href="#demo" class="btn btn-primary">Démo</a>
      <a href="#integration" class="btn btn-secondary">Guide d'intégration</a>
    </div>
  </section>
</template>

<style scoped>
.hero {
  text-align: center;
  padding: 80px 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border-radius: var(--radius-xl);
  margin-bottom: 64px;
}

.hero-title {
  font-size: 56px;
  font-weight: 700;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 20px;
  color: var(--text-secondary);
  margin-bottom: 32px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.btn {
  padding: 14px 32px;
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: 16px;
  transition: all var(--transition-fast);
  display: inline-block;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.5);
}

.btn-secondary {
  background: white;
  color: #667eea;
  border: 2px solid #667eea;
}

.btn-secondary:hover {
  background: #667eea;
  color: white;
}

@media (max-width: 1024px) {
  .hero {
    padding: 60px 16px;
  }

  .hero-title {
    font-size: 42px;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 40px 16px;
  }

  .hero-title {
    font-size: 32px;
  }

  .hero-subtitle {
    font-size: 16px;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }

  .btn {
    width: 100%;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 32px 12px;
  }

  .hero-title {
    font-size: 24px;
  }

  .hero-subtitle {
    font-size: 14px;
  }

  .btn {
    padding: 12px 24px;
    font-size: 14px;
  }
}
</style>
