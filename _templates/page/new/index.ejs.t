---
to: pages/<%= Name %>.vue
---

<template>
  <div class="<%= name %>">
    <!-- Page content -->
  </div>
</template>

<script>
export default {
  name: '<%= Name %>'
}
</script>

<style scoped>
.<%= name %> {
  /* Page styles */
}
</style>
