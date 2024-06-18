<template>
  <Header
    title="Invoice Processing Sequence Diagram"
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
    participant User
    participant InvoiceProcessingAgent
    participant NetSuite API
    participant SAP API

    User->>InvoiceProcessingAgent: Initiate invoice processing
    InvoiceProcessingAgent->>NetSuite API: GET /invoice (limit, offset)
    NetSuite API-->>InvoiceProcessingAgent: Return list of invoices
    loop Process each invoice
        InvoiceProcessingAgent->>InvoiceProcessingAgent: Check invoice status
        alt Invoice is paid
            InvoiceProcessingAgent->>NetSuite API: GET /invoice/{id} (expandSubResources)
            NetSuite API-->>InvoiceProcessingAgent: Return invoice details
            loop Process each line item
                InvoiceProcessingAgent->>InvoiceProcessingAgent: Extract material ID and quantity
                InvoiceProcessingAgent->>InvoiceProcessingAgent: Validate material ID and quantity
                alt Material ID and quantity are valid
                    InvoiceProcessingAgent->>SAP API: PATCH /MaterialBOMItem (material_id, quantity)
                    SAP API-->>InvoiceProcessingAgent: Return update confirmation
                else Material ID or quantity is invalid
                    InvoiceProcessingAgent->>InvoiceProcessingAgent: Log or handle validation error
                end
            end
        else Invoice is not paid
            InvoiceProcessingAgent->>InvoiceProcessingAgent: Skip processing
        end
    end
    InvoiceProcessingAgent-->>User: Processing complete
`;
</script>
