<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <div class="container mx-auto">
      <h1 class="text-4xl font-bold mb-4 border-b pb-2">Support and Assistance</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Access Support Channels Section -->
        <div class="p-4 border border-gray-300">
          <h2 class="text-2xl font-semibold mb-2">Access Support Channels</h2>
          <ul>
            <li>Live Chat Support</li>
            <li>Email Support</li>
            <li>Phone Support</li>
          </ul>
        </div>

        <!-- View FAQs and Documentation Section -->
        <div class="p-4 border border-gray-300">
          <h2 class="text-2xl font-semibold mb-2">View FAQs and Documentation</h2>
          <ul>
            <li>Frequently Asked Questions</li>
            <li>User Guides</li>
            <li>API Documentation</li>
          </ul>
        </div>

        <!-- Submit Support Tickets Section -->
        <div class="p-4 border border-gray-300">
          <h2 class="text-2xl font-semibold mb-2">Submit Support Tickets</h2>
          <ul>
            <li>Create New Ticket</li>
            <li>View Open Tickets</li>
            <li>Track Ticket Status</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SupportAndAssistance",
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
