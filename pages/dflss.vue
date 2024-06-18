<template>
  <Header
    title="Design For Lean Six Sigma Sequence Diagram"
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
sequenceDiagram
    participant DAO as DAO Service
    participant PM as Project Manager Agent
    participant Dev as Developer Agent
    participant QA as QA Agent
    participant User as User

    Note over DAO, PM: Project Initialization Phase
    DAO->>PM: POST /v1.0/invoke/pm/method/startProject {"project":"DFLSS Project"}
    PM->>DAO: POST /v1.0/invoke/dao/method/approveProject {"status":"approved"}
    DAO->>PM: POST /v1.0/invoke/pm/method/assignResources {"resources":"assigned"}
    PM->>Dev: POST /v1.0/invoke/dev/method/assignTasks {"tasks":"development"}
    PM->>QA: POST /v1.0/invoke/qa/method/assignTasks {"tasks":"QA"}

    Note over Dev: Define Phase
    Dev->>PM: POST /v1.0/invoke/pm/method/gatherRequirements {"requirements":"gathered"}
    PM->>DAO: POST /v1.0/invoke/dao/method/submitCharter {"charter":"submitted"}
    DAO->>PM: POST /v1.0/invoke/pm/method/approveCharter {"status":"approved"}

    Note over Dev: Measure Phase
    Dev->>User: POST /v1.0/publish/pubsub/voiceOfCustomer {"feedback":"gather"}
    User->>Dev: POST /v1.0/invoke/dev/method/receiveFeedback {"feedback":"provided"}
    Dev->>PM: POST /v1.0/invoke/pm/method/developQFD {"QFD":"developed"}
    PM->>DAO: POST /v1.0/invoke/dao/method/reviewQFD {"QFD":"review"}
    DAO->>PM: POST /v1.0/invoke/pm/method/approveQFD {"status":"approved"}

    Note over Dev: Explore Phase
    Dev->>PM: POST /v1.0/invoke/pm/method/generateConcepts {"concepts":"generated"}
    PM->>DAO: POST /v1.0/invoke/dao/method/submitConcepts {"concepts":"submitted"}
    DAO->>PM: POST /v1.0/invoke/pm/method/approveConcepts {"status":"approved"}

    Note over Dev: Develop Phase
    Dev->>PM: POST /v1.0/invoke/pm/method/performDesign {"design":"detailed"}
    PM->>QA: POST /v1.0/invoke/qa/method/conductTesting {"tests":"reliability"}
    QA->>PM: POST /v1.0/invoke/pm/method/provideResults {"results":"provided"}
    PM->>DAO: POST /v1.0/invoke/dao/method/reviewResults {"results":"review"}
    DAO->>PM: POST /v1.0/invoke/pm/method/approveResults {"status":"approved"}

    Note over Dev: Implement Phase
    Dev->>PM: POST /v1.0/invoke/pm/method/prototype {"prototype":"implemented"}
    PM->>QA: POST /v1.0/invoke/qa/method/finalTesting {"tests":"final"}
    QA->>PM: POST /v1.0/invoke/pm/method/submitFinalReport {"report":"final"}
    PM->>DAO: POST /v1.0/invoke/dao/method/submitCompletionReport {"report":"completion"}
    DAO->>PM: POST /v1.0/invoke/pm/method/approveCompletion {"status":"approved"}
    PM->>DAO: POST /v1.0/invoke/dao/method/distributeCompensation {"compensation":"distributed"}

    Note over DAO, PM: Project Closure

`;
</script>
