<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <div class="container mx-auto">
      <h1 class="text-4xl font-bold mb-4 border-b pb-2">Integration with AI Services</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Connect to Dapr Section -->
        <div class="p-4 border border-gray-300">
          <h2 class="text-2xl font-semibold mb-2">Connect to Dapr</h2>
          <ul>
            <li>Setup Dapr Environment</li>
            <li>Configure Dapr Components</li>
            <li>Monitor Dapr Services</li>
          </ul>
        </div>

        <!-- Access DSPyGen Modules Section -->
        <div class="p-4 border border-gray-300">
          <h2 class="text-2xl font-semibold mb-2">Access DSPyGen Modules</h2>
          <ul>
            <li>Install DSPyGen</li>
            <li>Utilize Pre-built Modules</li>
            <li>Create Custom Modules</li>
          </ul>
        </div>

        <!-- Utilize Ollama API Section -->
        <div class="p-4 border border-gray-300">
          <h2 class="text-2xl font-semibold mb-2">Utilize Ollama API</h2>
          <ul>
            <li>API Key Management</li>
            <li>Integrate with Existing Systems</li>
            <li>Monitor API Usage</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntegrationWithAIServices",
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
