---
to: components/molecules/<%= Name %>.vue
---

<template>
  <div class="<%= name %>">
    <!-- Molecule content -->
  </div>
</template>

<script>
export default {
  name: '<%= Name %>'
}
</script>

<style scoped>
.<%= name %> {
  /* Molecule styles */
}
</style>
