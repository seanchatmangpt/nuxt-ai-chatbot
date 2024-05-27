---
to: components/atoms/<%= Name %>.vue
---

<template>
  <div class="<%= name %>">
    <!-- Atom content -->
  </div>
</template>

<script>
export default {
  name: '<%= Name %>'
}
</script>

<style scoped>
.<%= name %> {
  /* Atom styles */
}
</style>
