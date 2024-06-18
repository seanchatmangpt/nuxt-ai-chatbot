<template>
  <Header
    title="Invoice Data Table"
    :navLinks="[
      { href: '/custom/link1', text: 'APIs' },
      { href: '/custom/link2', text: 'Dashboard' },
    ]"
  />
  <div>
    <DynamicTable :data="staticData" />
  </div>
</template>

<script setup>
import DynamicTable from "~/components/molecules/DynamicTable.vue";
import Header from "../components/organisms/Header.vue";

const staticData = [
  {
    InvoiceID: "INV001",
    CustomerID: "CUST123",
    InvoiceStatus: "Paid",
    MaterialID: "MAT001",
    Quantity: 10,
  },
  {
    InvoiceID: "INV002",
    CustomerID: "CUST456",
    InvoiceStatus: "Unpaid",
    MaterialID: "MAT002",
    Quantity: 5,
  },
  {
    InvoiceID: "INV003",
    CustomerID: "CUST789",
    InvoiceStatus: "Paid",
    MaterialID: "MAT003",
    Quantity: 8,
  },
  {
    InvoiceID: "INV004",
    CustomerID: "CUST321",
    InvoiceStatus: "Paid",
    MaterialID: "MAT004",
    Quantity: 15,
  },
  {
    InvoiceID: "INV005",
    CustomerID: "CUST654",
    InvoiceStatus: "Unpaid",
    MaterialID: "MAT005",
    Quantity: 12,
  },
  {
    InvoiceID: "INV006",
    CustomerID: "CUST987",
    InvoiceStatus: "Paid",
    MaterialID: "MAT006",
    Quantity: 7,
  },
  {
    InvoiceID: "INV007",
    CustomerID: "CUST213",
    InvoiceStatus: "Paid",
    MaterialID: "MAT007",
    Quantity: 20,
  },
  {
    InvoiceID: "INV008",
    CustomerID: "CUST546",
    InvoiceStatus: "Unpaid",
    MaterialID: "MAT008",
    Quantity: 14,
  },
  {
    InvoiceID: "INV009",
    CustomerID: "CUST879",
    InvoiceStatus: "Paid",
    MaterialID: "MAT009",
    Quantity: 9,
  },
  {
    InvoiceID: "INV010",
    CustomerID: "CUST312",
    InvoiceStatus: "Paid",
    MaterialID: "MAT010",
    Quantity: 3,
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
