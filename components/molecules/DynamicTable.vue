<template>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in data" :key="rowIndex">
          <td v-for="(header, colIndex) in headers" :key="colIndex">
            {{ row[header] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";

const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
});

const headers = ref([]);

onMounted(() => {
  if (props.data.length > 0) {
    headers.value = Object.keys(props.data[0]);
  }
});

watch(
  () => props.data,
  (newData) => {
    if (newData.length > 0) {
      headers.value = Object.keys(newData[0]);
    }
  },
);
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
