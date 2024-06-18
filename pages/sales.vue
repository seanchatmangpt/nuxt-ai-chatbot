<template>
  <Header
    title="Challenger Sales Agents"
    :navLinks="[
      { href: '/custom/link1', text: 'APIs' },
      { href: '/custom/link2', text: 'Dashboard' },
    ]"
  />
  <div>
    <VueMermaidString :value="diagram" />
  </div>
</template>

<script setup>
import Header from "../components/organisms/Header.vue";

const diagram = `
stateDiagram-v2
    [*] --> INITIALIZING

    INITIALIZING --> RESEARCHING: start_research
    RESEARCHING --> OUTREACHING: conduct_outreach
    OUTREACHING --> DISCOVERING: perform_discovery
    DISCOVERING --> TAILORING: tailor_solution
    TAILORING --> HANDLING_OBJECTIONS: handle_objections
    HANDLING_OBJECTIONS --> CLOSING: close_deal
    OUTREACHING --> CLOSING: close_deal
    CLOSING --> COMPLETING: complete_sale
    COMPLETING --> INITIALIZING: new_opportunity

    HANDLING_OBJECTIONS --> TAILORING: revise_proposal
    OUTREACHING --> DISCOVERING: deepen_discovery
    TAILORING --> DISCOVERING: deepen_discovery
    DISCOVERING --> DISCOVERING: deepen_discovery
    HANDLING_OBJECTIONS --> OUTREACHING: restart_outreach
    DISCOVERING --> OUTREACHING: restart_outreach
    CLOSING --> HANDLING_OBJECTIONS: negotiation_failed
`;
</script>
