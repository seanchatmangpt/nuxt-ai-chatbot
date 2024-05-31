import { defineStore } from "pinia";

export const useFeaturesStore = defineStore("features", {
  state: () => ({
    features: [
      {
        title: "Unified AI Platform",
        description:
          "A single hub for all AI systems, enabling seamless integration and interaction. Developers can work together, share code, and get compensated for their contributions seamlessly.",
        borderColor: "border-red-600",
      },
      {
        title: "Decentralized Authentication",
        description:
          "Simplified authentication managed by the system, allowing developers to focus on their core competencies. Provides secure access management through blockchain integration.",
        borderColor: "border-red-600",
      },
      {
        title: "Equitable Compensation",
        description:
          "Developers get paid when their code is used, regardless of the user’s size—from small businesses to Fortune 500 companies. Payments are automated using blockchain-based smart contracts.",
        borderColor: "border-red-600",
      },
      {
        title: "Advanced AI Tools",
        description:
          "Leveraging technologies like Dapr and DSPyGen to provide service invocation, state management, pub/sub messaging, workflow orchestration, and more. Ensures robust and scalable AI development.",
        borderColor: "border-red-600",
      },
    ],
  }),
  actions: {
    updateFeatures(newFeatures) {
      this.features = newFeatures;
    },
  },
});
