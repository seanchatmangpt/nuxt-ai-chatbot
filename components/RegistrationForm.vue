<template>
  <div class="w-full max-w-xs">
    <form @submit.prevent="submitForm" class="flex flex-col gap-4">
      <input
        v-model="formData.firstName"
        type="text"
        placeholder="First Name"
        class="input input-bordered w-full"
        required
      />
      <input
        v-model="formData.lastName"
        type="text"
        placeholder="Last Name"
        class="input input-bordered w-full"
        required
      />
      <input
        v-model="formData.title"
        type="text"
        placeholder="Title"
        class="input input-bordered w-full"
        required
      />
      <input
        v-model="formData.company"
        type="text"
        placeholder="Company"
        class="input input-bordered w-full"
        required
      />
      <input
        v-model="formData.companyPhone"
        type="tel"
        placeholder="Company Phone"
        class="input input-bordered w-full"
        required
      />
      <input
        v-model="formData.cellPhone"
        type="tel"
        placeholder="Cell Phone"
        class="input input-bordered w-full"
        required
      />
      <input
        v-model="formData.email"
        type="email"
        placeholder="Email"
        class="input input-bordered w-full"
        required
      />
      <input
        v-model="formData.webPage"
        type="url"
        placeholder="Web Page"
        class="input input-bordered w-full"
      />
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        firstName: "asdfasdf",
        lastName: "asdfasd",
        title: "asdfas",
        company: "asdfasdf",
        companyPhone: "2321234234",
        cellPhone: "234234324",
        email: "x@x.com",
        webPage: "http://example.com",
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        await fetch("/api/register", {
          body: JSON.stringify(this.formData),
          method: "post",
        });
        // Implement post-submission logic (e.g., showing a success message or redirecting)
      } catch (error) {
        console.error("Registration failed:", error);
        // Handle errors (e.g., showing an error message)
      }
    },
  },
};
</script>

<style scoped>
.form-control {
  max-width: 500px; /* Adjust to match the form size */
  margin: auto; /* Center the form in its container */
}

@media screen and (max-width: 768px) {
  .form-control {
    max-width: 100%; /* Allow form to take full width on smaller screens */
    padding: 0 10px; /* Add some padding for small screens */
  }
}
</style>
