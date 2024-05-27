---
to: components/organisms/<%= Name %>.vue
---

<template>
  <div class="<%= name %>">
    <!-- Organism content -->
  </div>
</template>

<script>
export default {
  name: '<%= Name %>'
}
</script>

<style scoped>
.<%= name %> {
  /* Organism styles */
}
</style>
