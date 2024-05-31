<template>
  <div
    ref="editorContainer"
    class="editor-container"
    style="height: 400px"
  ></div>
</template>

<script setup>
import { onMounted, ref, defineExpose } from "vue";
import * as monaco from "monaco-editor";

const editorContainer = ref(null);
let editor = null;

onMounted(() => {
  editor = monaco.editor.create(editorContainer.value, {
    value: "// Start coding...",
    language: "javascript",
  });
});

function setContent(content) {
  if (editor) {
    editor.setValue(content);
  }
}

function getContent() {
  if (editor) {
    return editor.getValue();
  }
}

// Expose functions to parent component
defineExpose({
  setContent,
  getContent,
});
</script>

<style scoped>
.editor-container {
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
}
</style>
