<template>
  <section id="advantages" class="section">
    <h2 class="section-title">Avantages</h2>
    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon">🚀</div>
        <h3 class="feature-title">Mise à jour centralisée</h3>
        <p class="feature-description">
          Mettre à jour les données de l'API et toutes vos applications sont à jour.
        </p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🎨</div>
        <h3 class="feature-title">Design moderne</h3>
        <p class="feature-description">
          Interface élégante avec animations fluides.
        </p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">⚡</div>
        <h3 class="feature-title">Léger et rapide</h3>
        <p class="feature-description">
          Bundle optimisé qui se charge rapidement via CDN.
        </p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🔧</div>
        <h3 class="feature-title">Facile à intégrer</h3>
        <p class="feature-description">
          Intégration simple en quelques lignes de code.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  margin-bottom: 64px;
}

.section-title {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 16px;
  text-align: center;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-top: 32px;
}

.feature-card {
  background: white;
  padding: 32px;
  border-radius: var(--radius-lg);
  border: 2px solid var(--border-color);
  text-align: center;
  transition: all var(--transition-base);
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: #667eea;
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.feature-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
}

.feature-description {
  color: var(--text-secondary);
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .container {
    padding: 0 16px;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 28px;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .feature-card {
    padding: 24px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 24px;
  }
}
</style>
