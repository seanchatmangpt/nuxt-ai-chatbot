<template>
  <Header
    title="StarGen Gantt Agent Logs"
    :navLinks="[
      { href: '/custom/link1', text: 'Client' },
      { href: '/custom/link2', text: 'Progress' },
    ]"
  />
  <div>
    <DynamicTable :data="logs" />
  </div>
</template>

<script setup>
import DynamicTable from "~/components/molecules/DynamicTable.vue";
import Header from "../components/organisms/Header.vue";

const logs = [
  {
    timestamp: "2024-06-13 09:41:27",
    level: "INFO",
    message: "Starting planning phase.",
  },
  {
    timestamp: "2024-06-13 09:41:27",
    level: "INFO",
    message: "Starting execution phase.",
  },
  {
    timestamp: "2024-06-13 09:41:29",
    level: "INFO",
    message: "Starting monitoring phase.",
  },
  {
    timestamp: "2024-06-13 09:41:57",
    level: "INFO",
    message: "Starting planning phase.",
  },
  {
    timestamp: "2024-06-13 09:41:57",
    level: "INFO",
    message: "Starting execution phase.",
  },
  {
    timestamp: "2024-06-13 09:41:57",
    level: "INFO",
    message: "Starting monitoring phase.",
  },
  {
    timestamp: "2024-06-13 09:42:05",
    level: "INFO",
    message: "Completing all tasks.",
  },
  {
    timestamp: "2024-06-13 09:46:02",
    level: "INFO",
    message: "Starting planning phase.",
  },
  {
    timestamp: "2024-06-13 09:47:03",
    level: "INFO",
    message: "Starting planning phase.",
  },
  {
    timestamp: "2024-06-13 09:47:04",
    level: "INFO",
    message:
      "name='Completed task' status='done' id='des1' start_date='2014-01-06' end_date='2014-01-08' duration=None dependencies=None",
  },
  {
    timestamp: "2024-06-13 09:47:04",
    level: "INFO",
    message: "Starting execution phase.",
  },
  {
    timestamp: "2024-06-13 09:47:04",
    level: "INFO",
    message:
      "name='Completed task' status='done' id='des1' start_date='2014-01-06' end_date='2014-01-08' duration=None dependencies=None",
  },
  {
    timestamp: "2024-06-13 09:47:04",
    level: "INFO",
    message: "Starting monitoring phase.",
  },
  {
    timestamp: "2024-06-13 09:47:05",
    level: "INFO",
    message:
      "name='Completed task' status='done' id='des1' start_date='2014-01-06' end_date='2014-01-08' duration=None dependencies=None",
  },
  {
    timestamp: "2024-06-13 09:47:05",
    level: "INFO",
    message: "Completing all tasks.",
  },
  {
    timestamp: "2024-06-13 09:47:06",
    level: "INFO",
    message:
      "name='Completed task' status='done' id='des1' start_date='2014-01-06' end_date='2014-01-08' duration=None dependencies=None",
  },
  {
    timestamp: "2024-06-13 09:47:10",
    level: "INFO",
    message: "Resetting for a new cycle.",
  },
  {
    timestamp: "2024-06-13 09:47:13",
    level: "INFO",
    message: "Starting planning phase.",
  },
  {
    timestamp: "2024-06-13 09:47:14",
    level: "INFO",
    message:
      "name='Future task' status=None id='des3' start_date=None end_date=None duration='5d' dependencies='after des2'",
  },
  {
    timestamp: "2024-06-13 09:47:14",
    level: "INFO",
    message: "Starting execution phase.",
  },
  {
    timestamp: "2024-06-13 09:48:40",
    level: "INFO",
    message: "Starting planning phase.",
  },
  {
    timestamp: "2024-06-13 09:48:44",
    level: "INFO",
    message:
      "Task: name='Completed task' status='done' id='des1' start_date='2014-01-06' end_date='2014-01-08' duration=None dependencies=None",
  },
  {
    timestamp: "2024-06-13 09:48:44",
    level: "INFO",
    message:
      "Plan: The plan for the 'Completed task' involves ensuring that all necessary documentation is updated to reflect its completion status. This includes updating internal databases, project management tools, and any relevant client or team members about the successful conclusion of the task.\n\n1. Verify the completion criteria have been met.\n2. Update the task's status in the project management tool to 'done'.\n3. Confirm that all dependencies for this task are also completed if applicable.\n4. Document the outcome of the task, including any lessons learned or improvements made during its execution.\n5. Notify relevant team members and stakeholders about the completion via email or a collaborative platform.\n6. Archive any necessary files or records related to the task in an organized manner for future reference.\n7. Schedule a brief meeting with the client (if applicable) to discuss the results of the completed task and gather feedback.\n\nThis plan ensures that all aspects of the 'Completed task' are properly documented, communicated, and archived for future use and reference.",
  },
  {
    timestamp: "2024-06-13 09:48:44",
    level: "INFO",
    message: "Starting execution phase.",
  },
  {
    timestamp: "2024-06-13 09:48:50",
    level: "INFO",
    message:
      "Execution: The execution of the 'Completed task' involves the following steps:",
  },
];
</script>

<style>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
  text-align: left;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}
</style>
