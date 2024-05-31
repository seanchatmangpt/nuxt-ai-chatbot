<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <div class="container mx-auto">
      <h1 class="text-4xl font-bold mb-4 border-b pb-2">Account Management</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Update Account Information Section -->
        <div class="p-4 border border-gray-300">
          <h2 class="text-2xl font-semibold mb-2">Update Account Information</h2>
          <ul>
            <li>Edit Personal Details</li>
            <li>Change Email Address</li>
            <li>Update Contact Information</li>
          </ul>
        </div>

        <!-- Manage Security Settings Section -->
        <div class="p-4 border border-gray-300">
          <h2 class="text-2xl font-semibold mb-2">Manage Security Settings</h2>
          <ul>
            <li>Change Password</li>
            <li>Enable Two-Factor Authentication</li>
            <li>Review Login Activity</li>
          </ul>
        </div>

        <!-- Configure Notifications Section -->
        <div class="p-4 border border-gray-300">
          <h2 class="text-2xl font-semibold mb-2">Configure Notifications</h2>
          <ul>
            <li>Set Email Preferences</li>
            <li>Manage SMS Alerts</li>
            <li>Configure Push Notifications</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountManagement",
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
