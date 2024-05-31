<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <div class="container mx-auto">
      <h1 class="text-4xl font-bold mb-4 border-b pb-2">Activity Tracking</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Track Commits Section -->
        <div class="p-4 border border-gray-300">
          <h2 class="text-2xl font-semibold mb-2">Track Commits</h2>
          <ul>
            <li>View Commit History</li>
            <li>Analyze Commit Frequency</li>
            <li>Identify Top Contributors</li>
          </ul>
        </div>

        <!-- Monitor Pull Requests Section -->
        <div class="p-4 border border-gray-300">
          <h2 class="text-2xl font-semibold mb-2">Monitor Pull Requests</h2>
          <ul>
            <li>Track Open Pull Requests</li>
            <li>Review Pull Request Status</li>
            <li>Merge Approved Pull Requests</li>
          </ul>
        </div>

        <!-- View Merge History Section -->
        <div class="p-4 border border-gray-300">
          <h2 class="text-2xl font-semibold mb-2">View Merge History</h2>
          <ul>
            <li>Review Past Merges</li>
            <li>Analyze Merge Frequency</li>
            <li>Identify Merge Conflicts</li>
          </ul>
        </div>

        <!-- Analyze Code Changes Section -->
        <div class="p-4 border border-gray-300">
          <h2 class="text-2xl font-semibold mb-2">Analyze Code Changes</h2>
          <ul>
            <li>View Code Diff</li>
            <li>Identify Major Changes</li>
            <li>Track Code Quality</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActivityTracking",
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
