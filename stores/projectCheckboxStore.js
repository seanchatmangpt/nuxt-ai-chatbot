import { defineStore } from "pinia";

export const useCheckboxStore = defineStore("checkbox", () => {
  const value1 = ref([]);
  const options1 = ref([
    "Is there a formal process in place for initiating projects that might benefit from the integration of Generative AI?",
    "Are financial forecasts for projects created and tracked using synthetic data to ensure privacy with Generative AI applications?",
    "Is Generative AI utilized to enhance the efficiency of basic project management tasks, such as scheduling and resource allocation?",
    "Are potential risks in projects assessed using predictive analytics powered by Generative AI?",
    "Is the assignment of ad-hoc tasks in projects informed by insights and recommendations from Generative AI systems?",
    "Is customer feedback on projects analyzed using Generative AI tools for better understanding and response?",
    "Can insights from informal communication within projects be analyzed by Generative AI to gather actionable intelligence?",
    "Are urgent project tasks prioritized with the help of Generative AI decision-making tools?",
    "Do team members have a clear understanding of how to leverage Generative AI to meet project objectives?",
    "Are AI tools employed to manage and ensure the quality standards of projects?",
  ]);
  const value2 = ref([]);
  const options2 = ref([
    "Are project management processes well-documented and enhanced with the help of Generative AI?",
    "Is the management of project requirements across different scenarios improved through Generative AI?",
    "Are project plans developed and maintained with standards derived from Generative AI insights?",
    "Is configuration management for projects improved through applications of Generative AI?",
    "Is the performance monitoring of projects facilitated using analytics powered by Generative AI?",
    "Is supplier and vendor management streamlined by integrating Generative AI into project workflows?",
    "Are quality metrics for projects managed and enhanced through Generative AI systems?",
    "Is decision-making in projects supported by data analyses driven by Generative AI?",
    "Are stakeholder reviews in projects facilitated by insights provided by Generative AI tools?",
    "Does Generative AI support comprehensive training for project management roles?",
  ]);
  const value3 = ref([]);
  const options3 = ref([
    "Are Generative AI processes standardized across the organization for application in various projects?",
    "Is Generative AI utilized in training programs to improve project management skills?",
    "Is integrated project management enhanced through comprehensive use of Generative AI?",
    "Are issue management processes in projects supported by Generative AI for more effective problem-solving?",
    "Are roles and responsibilities involving Generative AI clearly defined within project teams?",
    "Is the integration of new products or services into projects optimized through Generative AI?",
    "Is data management and reporting for projects streamlined and supported by Generative AI?",
    "Is there a defined process for focusing efforts on key project areas using insights from Generative AI?",
    "Are processes produced by Generative AI defined for best practice applications in projects?",
    "Is business performance management in projects assisted by advanced analytics from Generative AI?",
  ]);
  const value4 = ref([]);
  const options4 = ref([
    "Are performance objectives for Generative AI processes in projects quantified and tracked?",
    "Are techniques from Generative AI used for controlling and improving project quality across scenarios?",
    "Is data derived from Generative AI used for managing and optimizing project operations?",
    "Are quantitative management techniques for projects supported by Generative AI?",
    "Is process variation in project operations analyzed using Generative AI to identify areas for improvement?",
    "Is the performance of organizational processes in projects evaluated using Generative AI?",
    "Are quality assurance processes for projects enhanced with Generative AI?",
    "Is root cause analysis in project management supported by insights from Generative AI?",
  ]);
  const value5 = ref([]);
  const options5 = ref([
    "Is Generative AI capable of enhancing continuous improvement processes in project management?",
    "Are the capabilities of Generative AI technologies continually evaluated and optimized for improving project management?",
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
