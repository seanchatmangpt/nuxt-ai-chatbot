<template>
  <div>
    <h1>Create a New Blog Post</h1>
    <form @submit.prevent="createPost">
      <div>
        <label for="subject">Subject:</label>
        <input id="subject" v-model="subject" required />
      </div>
      <button id="submit-button" type="submit">Create Post</button>
    </form>
    <div v-if="response">
      <h2>Response</h2>
      <pre>{{ response }}</pre>
    </div>
    <ClientOnly>
      <p v-if="isListening">Listening for voice commands...</p>
    </ClientOnly>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useVoiceCommands } from "~/composables/useVoiceCommands";

const subject = ref("");
const response = ref(null);

const createPost = async () => {
  console.log("pages/index.vue", subject.value);
  try {
    const res = await fetch("/api/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ subject: subject.value }),
    });
    response.value = await res.json();
  } catch (error) {
    console.error("Error creating post:", error);
  }
};

const commands = {
  "set subject to *newSubject": (newSubject) => {
    console.log("Setting subject to:", newSubject);
    subject.value = newSubject;
  },
  "submit form": () => {
    console.log("Submitting form");
    document.getElementById("submit-button").click();
  },
  // Add other custom commands here
};

const { isListening, startListening, stopListening } =
  useVoiceCommands(commands);
</script>

<style scoped>
/* Add your styles here */
</style>
