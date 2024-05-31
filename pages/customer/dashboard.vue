<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <div class="container mx-auto">
      <HeaderWithLink title="Customer Dashboard" linkText="AICC" linkTo="/" />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Service Management Section -->
        <div class="p-4 border border-gray-300">
          <NuxtLink to="/customer/services_management">
            <h2 class="text-2xl font-semibold mb-2 underline">
              Service Management
            </h2></NuxtLink
          >
          <ul>
            <li>Manage AI Services</li>
            <li>Monitor Service Usage</li>
            <li>Configure Service Settings</li>
          </ul>
        </div>

        <!-- Project Tracking Section -->
        <div class="p-4 border border-gray-300">
          <NuxtLink to="/customer/project_tracking">
            <h2 class="text-2xl font-semibold mb-2 underline">
              Project Tracking
            </h2>
          </NuxtLink>
          <ul>
            <li>View Active Projects</li>
            <li>Track Project Milestones</li>
            <li>Access Project Reports</li>
          </ul>
        </div>

        <!-- Support and Assistance Section -->
        <div class="p-4 border border-gray-300">
          <NuxtLink to="/customer/support_and_assistance">
            <h2 class="text-2xl font-semibold mb-2 underline">
              Support and Assistance
            </h2>
          </NuxtLink>
          <ul>
            <li class="border-l-2 border-red-600 pl-2">
              Access Support Channels
            </li>
            <li>View FAQs and Documentation</li>
            <li>Submit Support Tickets</li>
          </ul>
        </div>

        <!-- Billing and Payments Section -->
        <div class="p-4 border border-gray-300">
          <NuxtLink to="/customer/billing_and_payments">
            <h2 class="text-2xl font-semibold mb-2 underline">
              Billing and Payments
            </h2>
          </NuxtLink>
          <ul>
            <li>View Invoices</li>
            <li>Manage Payment Methods</li>
            <li>Track Payment History</li>
          </ul>
        </div>

        <!-- Account Management Section -->
        <div class="p-4 border border-gray-300">
          <NuxtLink to="/customer/account_management">
            <h2 class="text-2xl font-semibold mb-2 underline">
              Account Management
            </h2>
          </NuxtLink>
          <ul>
            <li>Update Account Information</li>
            <li>Manage Security Settings</li>
            <li>Configure Notifications</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomerDashboard",
};
</script>

<style scoped>

li {
  border-left: 2px solid red;
  padding-left: .5rem;
}

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
