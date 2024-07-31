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
        <p class="cursor-pointer hover:text-gray-400" @click="selectOption('Relationship Manager')">Relationship Manager
        </p>
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
          <input v-model="searchQuery" type="text" placeholder="Search..." class="border rounded p-2"
            style="width: 200px;" />
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

      <!-- Conditional Rendering of Table or Detailed View -->
      <div v-if="!selectedUser">
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
            <tr v-for="item in filteredSortedData" :key="item.id" @click="selectUser(item)" class="cursor-pointer">
              <td class="py-2 px-4 border-b">{{ item.name }}</td>
              <td class="py-2 px-4 border-b">{{ item.contactInfo }}</td>
              <td class="py-2 px-4 border-b">{{ item.downloads }}</td>
              <td class="py-2 px-4 border-b">{{ item.status }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Detailed Card View -->
      <div v-else>
        <div class="flex items-center mb-4">
          <button @click="selectedUser = null" class="bg-gray-500 text-white px-4 py-2 rounded">
            Back
          </button>
        </div>
        <div class="space-y-4">
          <!-- Large Card -->
          <div class="border p-4">
            <div class="flex items-center mb-4">
              <img src="../../assets/news2.png" alt="Profile" class="rounded-full w-24 h-24" />
              <div class="ml-4">
                <p class="text-lg font-semibold">{{ selectedUser.name }}</p>
                <button class="bg-blue-500 text-white px-4 py-2 rounded mt-2">
                  Download All Attachments
                </button>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <p class="font-semibold">Phone Number:</p>
                <p>{{ selectedUser.phoneNumber }}</p>
              </div>
              <div>
                <p class="font-semibold">Preferred Language:</p>
                <p>{{ selectedUser.preferredLanguage }}</p>
              </div>
              <div>
                <p class="font-semibold">Email Address:</p>
                <p>{{ selectedUser.email }}</p>
              </div>
              <div>
                <p class="font-semibold">Experience:</p>
                <p>{{ selectedUser.experience }}</p>
              </div>
              <div>
                <p class="font-semibold">Full Address:</p>
                <p>{{ selectedUser.fullAddress }}</p>
              </div>
              <div>
                <p class="font-semibold">Application Form Date and Time:</p>
                <p>{{ selectedUser.applicationFormDateTime }}</p>
              </div>
            </div>
          </div>

          <!-- Small Card -->
          <div class="border p-4">
  <div class="grid grid-cols-3 gap-x-4 gap-y-6 mb-4">
    <div class="flex flex-col items-start">
      <p class="font-semibold">10th Pass Certificate</p>
      <div class="flex space-x-2 mt-2">
        <button class="bg-gray-500 text-white px-2 py-1 rounded">Preview</button>
        <button class="bg-gray-500 text-white px-2 py-1 rounded">Download</button>
      </div>
    </div>
    <div class="flex flex-col items-start">
      <p class="font-semibold">Aadhaar</p>
      <div class="flex space-x-2 mt-2">
        <button class="bg-gray-500 text-white px-2 py-1 rounded">Preview</button>
        <button class="bg-gray-500 text-white px-2 py-1 rounded">Download</button>
      </div>
    </div>
    <div class="flex flex-col items-start">
      <p class="font-semibold">Cancelled Cheque</p>
      <div class="flex space-x-2 mt-2">
        <button class="bg-gray-500 text-white px-2 py-1 rounded">Preview</button>
        <button class="bg-gray-500 text-white px-2 py-1 rounded">Download</button>
      </div>
    </div>
    <div class="flex flex-col items-start col-span-2">
      <p class="font-semibold">PAN Card</p>
      <div class="flex space-x-2 mt-2">
        <button class="bg-gray-500 text-white px-2 py-1 rounded">Preview</button>
        <button class="bg-gray-500 text-white px-2 py-1 rounded">Download</button>
      </div>
    </div>
    <div class="flex flex-col items-start col-span-1 ml-[-6px]">
      <p class="font-semibold">Signature Photo</p>
      <div class="flex space-x-2 mt-2">
        <button class="bg-gray-500 text-white px-2 py-1 rounded">Preview</button>
        <button class="bg-gray-500 text-white px-2 py-1 rounded">Download</button>
      </div>
    </div>
  </div>
</div>



        </div>
      </div>
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
const selectedUser = ref(null);

const data = {
  Dashboard: [
    { id: 1, name: 'Alice', contactInfo: 'alice@example.com', downloads: 120, status: 'Active', phoneNumber: '1234567890', preferredLanguage: 'English', email: 'alice@example.com', experience: '5 years', fullAddress: '123 Main St, Anytown, USA', applicationFormDateTime: '2024-07-31 10:00 AM' },
    { id: 2, name: 'Bob', contactInfo: 'bob@example.com', downloads: 85, status: 'Inactive', phoneNumber: '9876543210', preferredLanguage: 'Spanish', email: 'bob@example.com', experience: '3 years', fullAddress: '456 Elm St, Othertown, USA', applicationFormDateTime: '2024-07-31 11:00 AM' },
  ],
  Arbitrator: [
    { id: 3, name: 'Charlie', contactInfo: 'charlie@example.com', downloads: 150, status: 'Active', phoneNumber: '1122334455', preferredLanguage: 'French', email: 'charlie@example.com', experience: '4 years', fullAddress: '789 Oak St, Sometown, USA', applicationFormDateTime: '2024-07-31 12:00 PM' },
    { id: 4, name: 'Dave', contactInfo: 'dave@example.com', downloads: 90, status: 'Inactive', phoneNumber: '5566778899', preferredLanguage: 'German', email: 'dave@example.com', experience: '2 years', fullAddress: '101 Pine St, Anycity, USA', applicationFormDateTime: '2024-07-31 01:00 PM' },
  ],
  // Add other sections similarly...
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
  selectedUser.value = null; // Reset selected user when switching sections
}

function selectUser(user) {
  selectedUser.value = user;
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 12px;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f4f4f4;
}

tbody tr:hover {
  background-color: #f1f1f1;
}

button {
  outline: none;
}

.border {
  border: 1px solid #ddd;
}
</style>
