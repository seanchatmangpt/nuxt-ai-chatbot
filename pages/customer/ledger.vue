<template>
  <div id="ledger" class="p-8">
    <header class="mb-8 flex justify-between items-center">
      <h1 class="text-3xl font-bold text-primary">Customer Ledger</h1>
      <button @click="toggleTheme" class="btn btn-secondary">
        Toggle Theme
      </button>
    </header>
    <main>
      <section id="filter-section" class="mb-8">
        <h2 class="text-2xl font-semibold text-secondary">
          Filter Transactions
        </h2>
        <form class="mt-4">
          <div class="mb-4">
            <label for="date-range" class="block text-neutral"
              >Date Range:</label
            >
            <input
              type="date"
              id="date-range"
              class="input input-bordered w-full"
            />
          </div>
          <div class="mb-4">
            <label for="transaction-type" class="block text-neutral"
              >Transaction Type:</label
            >
            <select id="transaction-type" class="select select-bordered w-full">
              <option value="all">All</option>
              <option value="deposit">Deposit</option>
              <option value="payment">Payment</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary">Filter</button>
        </form>
      </section>
      <section id="ledger-section">
        <h2 class="text-2xl font-semibold text-secondary">
          Transaction Ledger
        </h2>
        <LedgerTable :transactions="transactions" />
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import LedgerTable from "~/components/molecules/LedgerTable.vue";

const transactions = ref([
  { id: 1, date: "2024-05-01", type: "Deposit", amount: 100 },
  { id: 2, date: "2024-05-02", type: "Payment", amount: 50 },
  // Add more transactions as needed
]);

const toggleTheme = () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  if (currentTheme === "light") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
};
</script>

<style scoped>
#ledger {
  font-family: "Helvetica", "Arial", sans-serif;
}
</style>
