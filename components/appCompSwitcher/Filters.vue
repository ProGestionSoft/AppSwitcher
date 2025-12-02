<template>
  <div class="filters">
    <div class="search-box">
      <svg class="search-icon" viewBox="0 0 24 24" width="18" height="18">
        <path
          d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
      </svg>
      <input :value="searchQuery" @input="$emit('update:searchQuery', ($event.target as HTMLInputElement).value)"
        type="text" placeholder="Rechercher..." class="search-input" />
    </div>
    <select :value="selectedCategory"
      @change="$emit('update:selectedCategory', ($event.target as HTMLSelectElement).value)" class="category-filter">
      <option value="">Toutes catégories</option>
      <option v-for="cat in categories" :key="cat" :value="cat">
        {{ cat }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
interface Props {
  searchQuery: string
  selectedCategory: string
  categories: string[]
}

defineProps<Props>()

defineEmits<{
  'update:searchQuery': [value: string]
  'update:selectedCategory': [value: string]
}>()
</script>

<style scoped>
.filters {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.search-box {
  position: relative;
  flex: 1;
  min-width: 200px;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  fill: var(--text-tertiary, #80868b);
  pointer-events: none;
}

.search-input {
  width: 100%;
  padding: 8px 12px 8px 38px;
  border: 1px solid var(--border-color, #dadce0);
  border-radius: var(--radius-md, 8px);
  font-size: 14px;
  font-family: inherit;
  transition: border-color var(--transition-fast, 150ms);
}

.search-input:focus {
  outline: none;
  border-color: var(--primary-color, #4285F4);
}

.category-filter {
  padding: 8px 12px;
  border: 1px solid var(--border-color, #dadce0);
  border-radius: var(--radius-md, 8px);
  font-size: 14px;
  font-family: inherit;
  background: white;
  cursor: pointer;
  transition: border-color var(--transition-fast, 150ms);
}

.category-filter:focus {
  outline: none;
  border-color: var(--primary-color, #4285F4);
}

@media (max-width: 768px) {
  .filters {
    flex-direction: column;
  }

  .search-box {
    min-width: 100%;
  }
}
</style>
