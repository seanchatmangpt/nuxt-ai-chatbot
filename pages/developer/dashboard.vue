<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <div class="container mx-auto">
      <h1 class="text-4xl font-bold mb-4 border-b pb-2">AI Command Center</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Code Contributions Section -->
        <div class="p-4 border border-gray-300">
          <NuxtLink to="/developer/code-contributions" class="text-2xl font-semibold mb-2">Code Contributions</NuxtLink>
          <ul>
            <li>View Repository</li>
            <li>Submit Pull Requests</li>
            <li>Code Review and Approval</li>
            <li>Merge to Main Branch</li>
          </ul>
        </div>

        <!-- Real-Time Collaboration Section -->
        <div class="p-4 border border-gray-300">
          <NuxtLink to="/developer/real-time-collaboration" class="text-2xl font-semibold mb-2">Real-Time Collaboration</NuxtLink>
          <ul>
            <li>Live Coding Sessions</li>
            <li>Chat and Video Calls</li>
            <li><NuxtLink to="/developer/peer-to-peer">Collaborative Editing</NuxtLink></li>
            </ul>
              </div>

        <!-- Automated Payments Section -->
        <div class="p-4 border border-gray-300">
          <NuxtLink to="/developer/automated-payments" class="text-2xl font-semibold mb-2">Automated Payments</NuxtLink>
          <ul>
            <li>Smart Contracts</li>
            <li>Payment Calculation</li>
            <li>Transaction Logging</li>
          </ul>
        </div>

        <!-- Activity Tracking Section -->
        <div class="p-4 border border-gray-300">
          <NuxtLink to="/developer/activity-tracking" class="text-2xl font-semibold mb-2">Activity Tracking</NuxtLink>
          <ul>
            <li>Track Commits</li>
            <li>Monitor Pull Requests</li>
            <li>View Merge History</li>
            <li>Analyze Code Changes</li>
          </ul>
        </div>

        <!-- Integration with AI Services Section -->
        <div class="p-4 border border-gray-300">
          <NuxtLink to="/developer/integration-with-ai-services" class="text-2xl font-semibold mb-2">
            Integration with AI Services
          </NuxtLink>
          <ul>
            <li>Connect to Dapr</li>
            <li>Access DSPyGen Modules</li>
            <li>Utilize Ollama API</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
};
</script>

<style scoped>
h2 {
  margin-bottom: 0.5rem;
}

p {
  margin-bottom: 1rem;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  margin-bottom: 0.5rem;
}
</style>
