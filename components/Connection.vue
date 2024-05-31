<template>
  <div>
    <p>Status: {{ isConnected ? "connected" : "disconnected" }}</p>
    <p>Transport: {{ transport }}</p>
    <input
      v-model="message"
      @keyup.enter="sendMessage"
      placeholder="Type a message and hit Enter"
    />
    <div v-for="(msg, index) in messages" :key="index">
      <span :class="{ 'mock-message': msg.isMock }">{{ msg.text }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeUnmount } from "vue";
import { socket } from "./socket";

const isConnected = ref(false);
const transport = ref("N/A");
const message = ref("");
const messages = ref([]);

function onConnect() {
  isConnected.value = true;
  transport.value = socket.io.engine.transport.name;

  socket.io.engine.on("upgrade", (rawTransport) => {
    transport.value = rawTransport.name;
  });
}

function onDisconnect() {
  isConnected.value = false;
  transport.value = "N/A";
}

function sendMessage() {
  if (message.value.trim() !== "") {
    const userMessage = { text: message.value, isMock: false };
    socket.emit("message", userMessage.text);
    messages.value.push(userMessage);
    message.value = "";
  }
}

socket.on("connect", onConnect);
socket.on("disconnect", onDisconnect);
socket.on("message", (msg) => {
  const isMock = msg.includes("Lorem ipsum") || msg.includes("dolor sit amet");
  messages.value.push({ text: msg, isMock });
});

onBeforeUnmount(() => {
  socket.off("connect", onConnect);
  socket.off("disconnect", onDisconnect);
  socket.off("message", (msg) => {
    const isMock =
      msg.includes("Lorem ipsum") || msg.includes("dolor sit amet");
    messages.value.push({ text: msg, isMock });
  });
});
</script>

<style scoped>
.mock-message {
  color: red; /* Style for mock messages */
}
</style>
