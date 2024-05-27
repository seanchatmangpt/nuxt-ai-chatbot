---
to: components/templates/<%= Name %>.vue
---

<template>
  <div class="<%= name %>">
    <!-- Template content -->
  </div>
</template>

<script>
export default {
  name: '<%= Name %>'
}
</script>

<style scoped>
.<%= name %> {
  /* Template styles */
}
</style>
