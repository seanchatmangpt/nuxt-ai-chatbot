<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <div class="container mx-auto">
      <h1 class="text-4xl font-bold mb-4 border-b pb-2">Project Tracking</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- View Active Projects Section -->
        <div class="p-4 border border-gray-300">
          <h2 class="text-2xl font-semibold mb-2">View Active Projects</h2>
          <ul>
            <li>Project A</li>
            <li>Project B</li>
            <li>Project C</li>
          </ul>
        </div>

        <!-- Track Project Milestones Section -->
        <div class="p-4 border border-gray-300">
          <h2 class="text-2xl font-semibold mb-2">Track Project Milestones</h2>
          <ul>
            <li>Milestone 1</li>
            <li>Milestone 2</li>
            <li>Milestone 3</li>
          </ul>
        </div>

        <!-- Access Project Reports Section -->
        <div class="p-4 border border-gray-300">
          <h2 class="text-2xl font-semibold mb-2">Access Project Reports</h2>
          <ul>
            <li>Report 1</li>
            <li>Report 2</li>
            <li>Report 3</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectTracking",
};
</script>

<style scoped>
h2 {
  margin-bottom: 0.5rem;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  margin-bottom: 0.5rem;
}
</style>
