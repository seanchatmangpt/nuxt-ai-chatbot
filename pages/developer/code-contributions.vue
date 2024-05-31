<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <div class="container mx-auto">
      <h1 class="text-4xl font-bold mb-4 border-b pb-2">Code Contributions</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- View Repository Section -->
        <div class="p-4 border border-gray-300">
          <h2 class="text-2xl font-semibold mb-2">View Repository</h2>
          <ul>
            <li>Browse Code</li>
            <li>View Commit History</li>
            <li>Check Branches</li>
          </ul>
        </div>

        <!-- Submit Pull Requests Section -->
        <div class="p-4 border border-gray-300">
          <h2 class="text-2xl font-semibold mb-2">Submit Pull Requests</h2>
          <ul>
            <li>Create New Pull Request</li>
            <li>View Open Pull Requests</li>
            <li>Merge Approved Pull Requests</li>
          </ul>
        </div>

        <!-- Code Review and Approval Section -->
        <div class="p-4 border border-gray-300">
          <h2 class="text-2xl font-semibold mb-2">Code Review and Approval</h2>
          <ul>
            <li>Review Code Changes</li>
            <li>Approve or Request Changes</li>
            <li>Merge Approved Changes</li>
          </ul>
        </div>

        <!-- Merge to Main Branch Section -->
        <div class="p-4 border border-gray-300">
          <h2 class="text-2xl font-semibold mb-2">Merge to Main Branch</h2>
          <ul>
            <li>Ensure All Tests Pass</li>
            <li>Merge Feature Branch</li>
            <li>Deploy to Production</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CodeContributions",
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
