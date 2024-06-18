<template>
  <div>
    <h1>To-Do List</h1>
    <form @submit.prevent="addTodo">
      <input v-model="newTodo" placeholder="Enter a new to-do item" />
      <button type="submit">Add</button>
    </form>

    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <input type="text" v-model="todo.text" @change="updateTodo(index)" />
        <button @click="deleteTodo(index)">Delete</button>
      </li>
    </ul>

    <ClientOnly>
      <p v-if="isListening">Listening for voice commands...</p>
    </ClientOnly>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useVoiceCommands } from "~/composables/useVoiceCommands";

const todos = ref([]);
const newTodo = ref("");

const addTodo = () => {
  if (newTodo.value.trim()) {
    todos.value.push({ text: newTodo.value });
    newTodo.value = "";
  }
};

const updateTodo = (index) => {
  console.log(`Updating todo at index ${index}`);
};

const deleteTodo = (index) => {
  todos.value.splice(index, 1);
};

const commands = {
  "add *item": (item) => {
    newTodo.value = item;
    addTodo();
  },
  "delete :index": (index) => {
    index = parseInt(index, 10) - 1;
    if (index >= 0 && index < todos.value.length) {
      deleteTodo(index);
    }
  },
  "update todo :index to *text": (index, text) => {
    index = parseInt(index, 10) - 1;
    if (index >= 0 && index < todos.value.length) {
      todos.value[index].text = text;
      updateTodo(index);
    }
  },
  "*catchAll": (command) => {
    console.log("Unknown command:", command);
  },
};

const { isListening, startListening, stopListening } =
  useVoiceCommands(commands);
</script>

<style scoped>
/* Add your styles here */
</style>
