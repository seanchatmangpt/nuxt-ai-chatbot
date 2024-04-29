// Assuming useCheckboxStore is imported correctly

import { useCheckboxStore } from "../stores/checkboxStore.js";

export default function getChatPrompt() {
  const store = useCheckboxStore();

  const prompt = computed(() => {
    let result = "";

    // Initial Level Assessment
    result += "Initial Level Assessment:\n";
    store.value1.forEach((checked, index) => {
      console.log("store.value1", store.value1);
      result += `- ${store.options1[index]}\n`;
    });

    // Managed Level Assessment
    result += "\nManaged Level Assessment:\n";
    store.value2.forEach((checked, index) => {
      result += `- ${store.options2[index]}\n`;
    });

    return result;
  });

  return prompt;
}
