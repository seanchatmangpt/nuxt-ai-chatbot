<template>
  <div class="p-8">
    <header class="mb-8">
      <h1 class="text-3xl font-bold text-primary">Register</h1>
    </header>
    <main>
      <form class="mt-4">
        <div class="mb-4">
          <label for="name" class="block text-neutral">Name:</label>
          <input type="text" id="name" class="input input-bordered w-full" />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-neutral">Email:</label>
          <input type="email" id="email" class="input input-bordered w-full" />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-neutral">Password:</label>
          <input
            type="password"
            id="password"
            class="input input-bordered w-full"
          />
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
      </form>
    </main>
  </div>
</template>

<script setup></script>

<style scoped>
#register {
  font-family: "Helvetica", "Arial", sans-serif;
}
</style>
