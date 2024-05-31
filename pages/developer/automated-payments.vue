<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <div class="container mx-auto">
      <h1 class="text-4xl font-bold mb-4 border-b pb-2">Automated Payments</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Smart Contracts Section -->
        <div class="p-4 border border-gray-300">
          <h2 class="text-2xl font-semibold mb-2">Smart Contracts</h2>
          <ul>
            <li>Create New Contract</li>
            <li>View Existing Contracts</li>
            <li>Audit Contract History</li>
          </ul>
        </div>

        <!-- Payment Calculation Section -->
        <div class="p-4 border border-gray-300">
          <h2 class="text-2xl font-semibold mb-2">Payment Calculation</h2>
          <ul>
            <li>Calculate Payments</li>
            <li>View Payment History</li>
            <li>Adjust Payment Parameters</li>
          </ul>
        </div>

        <!-- Transaction Logging Section -->
        <div class="p-4 border border-gray-300">
          <h2 class="text-2xl font-semibold mb-2">Transaction Logging</h2>
          <ul>
            <li>Log New Transaction</li>
            <li>View Transaction Logs</li>
            <li>Export Logs</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AutomatedPayments",
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
