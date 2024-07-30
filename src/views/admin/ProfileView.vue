<template>
  <div class="flex h-screen">
    <!-- Left Section -->
    <div class="w-1/6 bg-[#1A237E] text-white flex flex-col">
      <!-- Profile Section -->
      <div class="flex flex-col items-start py-4 px-4" style="height: 15%;">
        <div class="flex items-center mb-2">
          <img src="../../assets/news2.png" alt="Profile" class="rounded-full w-24 h-24" />
          <div class="ml-4">
            <p class="text-lg font-semibold">CLRMDR</p>
            <p class="text-md">John Doe</p>
          </div>
        </div>
      </div>
      <Separator class="border-t border-gray-500 my-4" />

      <!-- Options Section -->
      <div class="flex flex-col space-y-8 px-4" style="flex-grow: 1;">
        <p class="cursor-pointer hover:text-gray-400" @click="selectOption('Dashboard')">Dashboard</p>
        <p class="cursor-pointer hover:text-gray-400" @click="selectOption('Arbitrator')">Arbitrator</p>
        <p class="cursor-pointer hover:text-gray-400" @click="selectOption('Mediator')">Mediator</p>
        <p class="cursor-pointer hover:text-gray-400" @click="selectOption('Relationship Manager')">Relationship Manager</p>
        <p class="cursor-pointer hover:text-gray-400" @click="selectOption('Case Manager')">Case Manager</p>
        <p class="cursor-pointer hover:text-gray-400" @click="selectOption('Bank/Finance')">Bank/Finance</p>
      </div>

      <!-- Settings and Logout Section -->
      <Separator class="border-t border-gray-500 my-4" />
      <div class="flex flex-col space-y-4 px-4 mb-4">
        <p class="cursor-pointer hover:text-gray-400">Settings</p>
        <p class="cursor-pointer hover:text-gray-400">Logout</p>
      </div>
    </div>

    <!-- Right Section -->
    <div class="w-5/6 bg-white p-4">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-2xl">{{ selectedOption }} Data Table</h2>
        <div class="flex items-center space-x-2">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search..."
            class="border rounded p-2"
            style="width: 200px;"
          />
          <select v-model="filterStatus" class="border rounded p-2">
            <option value="">All</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <select v-model="sortKey" class="border rounded p-2">
            <option value="name">Name</option>
            <option value="contactInfo">Contact Info</option>
            <option value="downloads">Downloads</option>
            <option value="status">Status</option>
          </select>
          <select v-model="sortOrder" class="border rounded p-2">
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>

      <!-- Data Table -->
      <table class="min-w-full bg-white">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b text-left">Name</th>
            <th class="py-2 px-4 border-b text-left">Contact Info</th>
            <th class="py-2 px-4 border-b text-left">Downloads</th>
            <th class="py-2 px-4 border-b text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in filteredSortedData" :key="item.id">
            <td class="py-2 px-4 border-b">{{ item.name }}</td>
            <td class="py-2 px-4 border-b">{{ item.contactInfo }}</td>
            <td class="py-2 px-4 border-b">{{ item.downloads }}</td>
            <td class="py-2 px-4 border-b">{{ item.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import Separator from '@/components/custom/separator/Separator.vue';

const searchQuery = ref('');
const filterStatus = ref('');
const sortKey = ref('name');
const sortOrder = ref('asc');
const selectedOption = ref('Dashboard');

const data = {
  Dashboard: [
    { id: 1, name: 'Alice', contactInfo: 'alice@example.com', downloads: 120, status: 'Active' },
    { id: 2, name: 'Bob', contactInfo: 'bob@example.com', downloads: 85, status: 'Inactive' },
  ],
  Arbitrator: [
    { id: 3, name: 'Charlie', contactInfo: 'charlie@example.com', downloads: 150, status: 'Active' },
    { id: 4, name: 'Dave', contactInfo: 'dave@example.com', downloads: 90, status: 'Inactive' },
  ],
  Mediator: [
    { id: 5, name: 'Eve', contactInfo: 'eve@example.com', downloads: 200, status: 'Active' },
    { id: 6, name: 'Frank', contactInfo: 'frank@example.com', downloads: 60, status: 'Inactive' },
  ],
  'Relationship Manager': [
    { id: 7, name: 'Grace', contactInfo: 'grace@example.com', downloads: 130, status: 'Active' },
    { id: 8, name: 'Hank', contactInfo: 'hank@example.com', downloads: 70, status: 'Inactive' },
  ],
  'Case Manager': [
    { id: 9, name: 'Ivy', contactInfo: 'ivy@example.com', downloads: 110, status: 'Active' },
    { id: 10, name: 'Jack', contactInfo: 'jack@example.com', downloads: 95, status: 'Inactive' },
  ],
  'Bank/Finance': [
    { id: 11, name: 'Karen', contactInfo: 'karen@example.com', downloads: 140, status: 'Active' },
    { id: 12, name: 'Leo', contactInfo: 'leo@example.com', downloads: 50, status: 'Inactive' },
  ],
};

const currentData = computed(() => data[selectedOption.value]);

const filteredSortedData = computed(() => {
  let result = currentData.value;

  // Filter
  if (filterStatus.value) {
    result = result.filter(item => item.status === filterStatus.value);
  }

  // Search
  if (searchQuery.value) {
    result = result.filter(item => 
      item.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.contactInfo.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }

  // Sort
  result = result.sort((a, b) => {
    let modifier = 1;
    if (sortOrder.value === 'desc') modifier = -1;
    if (a[sortKey.value] < b[sortKey.value]) return -1 * modifier;
    if (a[sortKey.value] > b[sortKey.value]) return 1 * modifier;
    return 0;
  });

  return result;
});

function selectOption(option) {
  selectedOption.value = option;
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 12px;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f4f4f4;
}

tbody tr:hover {
  background-color: #f1f1f1;
}
</style>
