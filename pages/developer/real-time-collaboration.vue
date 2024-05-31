<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <div class="container mx-auto">
      <h1 class="text-4xl font-bold mb-4 border-b pb-2">Real-Time Collaboration</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Live Coding Sessions Section -->
        <div class="p-4 border border-gray-300">
          <h2 class="text-2xl font-semibold mb-2">Live Coding Sessions</h2>
          <ul>
            <li>Join a Session</li>
            <li>Host a Session</li>
            <li>View Past Sessions</li>
          </ul>
        </div>

        <!-- Chat and Video Calls Section -->
        <div class="p-4 border border-gray-300">
          <h2 class="text-2xl font-semibold mb-2">Chat and Video Calls</h2>
          <ul>
            <li>Start a Chat</li>
            <li>Initiate a Video Call</li>
            <li>View Call History</li>
          </ul>
        </div>

        <!-- Collaborative Editing Section -->
        <div class="p-4 border border-gray-300">
          <h2 class="text-2xl font-semibold mb-2">Collaborative Editing</h2>
          <ul>
            <li>Edit Documents Together</li>
            <li>Track Changes</li>
            <li>Comment and Discuss</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RealTimeCollaboration",
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
