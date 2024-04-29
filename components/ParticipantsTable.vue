<script setup lang="ts">
const {
  data: participants,
  pending,
  error,
} = await useFetch("/api/participants");
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Participants Data</h1>
    <div v-if="pending" class="alert alert-info">Loading...</div>
    <div v-else-if="error" class="alert alert-error">
      Error fetching participants data.
    </div>
    <div v-else class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Title</th>
            <th>Company</th>
            <th>Company Phone</th>
            <th>Cell Phone</th>
            <th>Email</th>
            <th>Web Page</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="participant in participants" :key="participant.id">
            <td>{{ participant.id }}</td>
            <td>{{ participant.firstName }}</td>
            <td>{{ participant.lastName }}</td>
            <td>{{ participant.title }}</td>
            <td>{{ participant.company }}</td>
            <td>{{ participant.companyPhone }}</td>
            <td>{{ participant.cellPhone }}</td>
            <td>{{ participant.email }}</td>
            <td>{{ participant.webPage }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
