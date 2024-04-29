import { defineStore } from "pinia";

export const useCheckboxStore = defineStore("checkbox", () => {
  const value1 = ref([]);
  const options1 = ref([
    "Is there a formal process in place for initiating business projects that can incorporate Generative AI?",
    "Are financial forecasts for projects applicable to Generative AI created and tracked using synthetic data for privacy?",
    "Is Generative AI utilized to enhance the efficiency of basic project management tasks?",
    "Are potential project risks assessed using predictive models powered by Generative AI?",
    "Is the assignment of ad-hoc tasks informed by recommendations from Generative AI systems?",
    "Is customer feedback on business services/products analyzed using Generative AI tools?",
    "Can insights from informal communication within the business currently be analyzed by Generative AI for actionable intelligence?",
    "Are urgent business tasks prioritized with the assistance of Generative AI decision-making tools?",
    "Do team members have a clear understanding of the objectives when using Generative AI in projects?",
    "Can AI tools currently be employed to manage and ensure the levels of quality of business projects?",
  ]);
  const value2 = ref([]);
  const options2 = ref([
    "Are the management processes of projects within the business well-documented with the help of Generative AI?",
    "Is the management of project requirements enhanced by the use of Generative AI?",
    "Are project plans developed and maintained with the help of standards from Generative AI tools?",
    "Is configuration management for business projects improved through Generative AI?",
    "Is the performance of business projects monitored using analytics powered by Generative AI?",
  ]);
  const value3 = ref([]);
  const options3 = ref([
    "Is the management of suppliers and vendors for business projects facilitated by Generative AI integration?",
    "Are quality metrics standards for business projects managed through systems powered by Generative AI?",
    "Is business decision-making supported by analyses supported by Generative AI?",
    "Are Generative AI tools used for supporting stakeholder reviews in business projects?",
    "Does Generative AI support the training for project management within the business?",
    "Are Generative AI processes standardized across the organization for business projects?",
    "Is Generative AI utilized in organizational training programs to improve business process outcomes?",
    "Is integrated project management for business projects enhanced through Generative AI?",
    "Are business issue management processes supported by Generative AI for more effective resolution?",
    "Are roles and responsibilities involving Generative AI clearly defined within business projects?",
  ]);
  const value4 = ref([]);
  const options4 = ref([
    "Are performance objectives for Generative AI processes in business projects quantified?",
    "Are Generative AI techniques used for controlling and improving business process quality?",
    "Is data from Generative AI used for managing and optimizing business processes?",
    "Are quantitative management techniques for business projects supported by Generative AI tools?",
    "Is process variation in business operations analyzed using Generative AI for improvement?",
    "Is the performance of organizational processes in business projects evaluated using Generative AI?",
    "Are quality assurance processes for business projects enhanced with Generative AI?",
    "Is root cause analysis for business process improvements supported by Generative AI?",
  ]);
  const value5 = ref([]);
  const options5 = ref([
    "Is Generative AI currently capable of enhancing the continuous improvement of business processes?",
    "Are Generative AI technologies continually evaluated for their capabilities for enhancing business process optimization?",
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
