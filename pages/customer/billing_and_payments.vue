<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <div class="container mx-auto">
      <h1 class="text-4xl font-bold mb-4 border-b pb-2">Billing and Payments</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- View Invoices Section -->
        <div class="p-4 border border-gray-300">
          <h2 class="text-2xl font-semibold mb-2">View Invoices</h2>
          <ul>
            <li>Check Past Invoices</li>
            <li>Download Invoice PDFs</li>
            <li>Query Invoice Details</li>
          </ul>
        </div>

        <!-- Manage Payment Methods Section -->
        <div class="p-4 border border-gray-300">
          <h2 class="text-2xl font-semibold mb-2">Manage Payment Methods</h2>
          <ul>
            <li>Add New Payment Method</li>
            <li>Edit Existing Methods</li>
            <li>Set Default Payment Method</li>
          </ul>
        </div>

        <!-- Track Payment History Section -->
        <div class="p-4 border border-gray-300">
          <h2 class="text-2xl font-semibold mb-2">Track Payment History</h2>
          <ul>
            <li>View Recent Transactions</li>
            <li>Filter Transactions by Date</li>
            <li>Export Transaction History</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BillingAndPayments",
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
