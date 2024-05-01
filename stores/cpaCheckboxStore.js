import { defineStore } from "pinia";

export const useCheckboxStore = defineStore("checkbox", () => {
  const value1 = ref([]);
  const options1 = ref([
    "Is there a formal process for initiating client engagements that integrates Generative AI?",
    "Are client financial forecasts generated and monitored using synthetic data via Generative AI to enhance privacy?",
    "Is Generative AI employed to streamline routine accounting tasks?",
    "Are potential financial risks in client projects assessed using predictive analytics powered by Generative AI?",
    "Is the assignment of urgent client-related tasks guided by Generative AI recommendations?",
    "Is client feedback on financial services analyzed through Generative AI tools to gain insights?",
    "Can insights from internal communications be analyzed by Generative AI to derive actionable strategies?",
    "Are high-priority tasks in client projects identified and ranked with the help of Generative AI?",
    "Do team members clearly understand the objectives when employing Generative AI in client engagements?",
    "Are AI tools used to maintain and assure quality standards in client engagements?",
  ]);
  const value2 = ref([]);
  const options2 = ref([
    "Are client engagement management processes well-documented with assistance from Generative AI?",
    "Is client requirement management enhanced through the use of Generative AI?",
    "Are engagement plans developed and updated using standards derived from Generative AI tools?",
    "Is configuration management for client engagements improved via Generative AI?",
    "Is the performance of client engagements monitored using Generative AI-powered analytics?",
    "Is supplier and vendor management for client projects streamlined through Generative AI integration?",
    "Are quality control metrics for client engagements managed via Generative AI systems?",
    "Is strategic decision-making in client engagements supported by Generative AI-driven analyses?",
    "Are Generative AI tools utilized for facilitating stakeholder reviews in client projects?",
    "Does Generative AI support the training for client engagement management?",
  ]);
  const value3 = ref([]);
  const options3 = ref([
    "Are Generative AI processes standardized across the firm for client projects?",
    "Is organizational training to improve client service outcomes supported by Generative AI?",
    "Is integrated client project management enhanced through Generative AI?",
    "Are issue resolution processes in client engagements supported by Generative AI for more effective outcomes?",
    "Are roles and responsibilities related to Generative AI clearly defined within client projects?",
    "Is the integration of new services into client offerings enhanced through Generative AI?",
    "Is data management and reporting for client projects supported by Generative AI?",
    "Is there a defined process for prioritizing firm efforts in key areas using Generative AI?",
    "Are best practices for business operations in the firm defined and optimized through Generative AI?",
    "Is business performance management in client engagements assisted by Generative AI?",
  ]);
  const value4 = ref([]);
  const options4 = ref([
    "Are performance objectives for Generative AI processes in client engagements quantified?",
    "Are Generative AI techniques used for enhancing quality control in client service processes?",
    "Is data from Generative AI employed to manage and optimize client service processes?",
    "Are quantitative management techniques for client projects supported by Generative AI tools?",
    "Is process variation in client services analyzed using Generative AI to identify improvements?",
    "Is the performance of organizational processes in client projects evaluated using Generative AI?",
    "Are quality assurance processes for client engagements enhanced with Generative AI?",
    "Is root cause analysis for improving client service processes supported by Generative AI?",
  ]);
  const value5 = ref([]);
  const options5 = ref([
    "Is Generative AI capable of enhancing the continuous improvement of client service processes?",
    "Are Generative AI technologies continually assessed for their impact on optimizing client service processes?",
  ]);

  return {
    value1,
    options1,
    value2,
    options2,
    value3,
    options3,
    value4,
    options4,
    value5,
    options5,
  };
});
