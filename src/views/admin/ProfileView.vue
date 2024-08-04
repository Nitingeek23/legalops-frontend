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
        <p class="cursor-pointer hover:text-gray-400" @click="toggleNoticeOptions">Notice</p>
        <div v-if="showNoticeOptions" class="ml-4 space-y-4">
          <p class="cursor-pointer hover:text-gray-400" @click="selectNoticeOption('Add Notice')">Add Notice</p>
          <p class="cursor-pointer hover:text-gray-400" @click="selectNoticeOption('Send Notice')">Send Notice</p>
        </div>
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
      <div v-if="selectedOption !== 'Notice'">
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
              <tr v-for="item in users" :key="item.id" @click="selectUser(item)" class="cursor-pointer">
                <td class="py-2 px-4 border-b">{{ item.name }}</td>
                <td class="py-2 px-4 border-b">{{ item.contactInfo }}</td>
                <td class="py-2 px-4 border-b">
                  <a v-if="item.downloads" :href="`http://${item.downloads}`" target="_blank">Download CV</a>
                  <span v-else>No CV</span>
                </td>
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

      <!-- Add Notice Section -->
      <div v-if="selectedOption === 'Notice' && selectedNoticeOption === 'Add Notice'">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl">Add Notice</h2>
          <button @click="addMoreNotice" class="bg-blue-500 text-white px-4 py-2 rounded">
            Add More Notice
          </button>
        </div>
        <table class="min-w-full bg-white">
          <thead>
            <tr>
              <th class="py-2 px-4 border-b text-left">ID</th>
              <th class="py-2 px-4 border-b text-left">Title</th>
              <th class="py-2 px-4 border-b text-left">Description</th>
              <th class="py-2 px-4 border-b text-left">Attachment</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="notice in notices" :key="notice.id">
              <td class="py-2 px-4 border-b">{{ notice.id }}</td>
              <td class="py-2 px-4 border-b">{{ notice.title }}</td>
              <td class="py-2 px-4 border-b description-cell">
                {{ notice.description.length > 50 ? notice.description.slice(0, 50) + '...' : notice.description }}
              </td>
              <td class="py-2 px-4 border-b">
                <a v-if="notice.attachment" :href="`http://${notice.attachment}`" target="_blank">View Attachment</a>
                <span v-else>No Attachment</span>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
      <!-- Send Notice Section -->
      <div v-if="selectedOption === 'Notice' && selectedNoticeOption === 'Send Notice'">
        <h2 class="text-2xl mb-4">Send Notice</h2>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700">Select Notice</label>
          <div class="relative">
            <button @click="toggleDropdown"
              class="border rounded p-2 w-full text-left flex justify-between items-center">
              {{ selectedNotice }}
              <span :class="dropdownOpen ? 'transform rotate-180' : ''">▼</span>
            </button>
            <ul v-if="dropdownOpen" class="absolute z-10 mt-1 bg-white border rounded w-full">
              <li v-for="(notice, index) in dummyNotices" :key="index" @click="selectNotice(notice)"
                class="p-2 cursor-pointer hover:bg-gray-100">
                {{ notice }}
              </li>
            </ul>
          </div>
        </div>
        <button class="bg-blue-500 text-white px-4 py-2 rounded relative" @click="triggerFileInput">
          Upload Excel
          <!-- Hidden file input -->
          <input type="file" ref="fileInput" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheetl"
            style="display: none" @change="handleFileChange" />
        </button>
        <button class="bg-green-500 text-white px-4 py-2 rounded ml-2 " :disabled="dropdownOpen">Send</button>
      </div>

    </div>
    <div v-if="showAddNoticeModal" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div class="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 class="text-xl mb-4">Add New Notice</h2>
        <div class="mb-4">
          <label class="block text-gray-700 mb-2" for="title">Title</label>
          <input v-model="newNotice.title" id="title" type="text" class="border rounded p-2 w-full"
            placeholder="Enter title" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 mb-2" for="description">Description</label>
          <textarea v-model="newNotice.description" id="description" class="border rounded p-2 w-full"
            placeholder="Enter description" @input="validateNoticeForm"></textarea>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 mb-2" for="file">File Upload</label>
          <input @change="handleFileUpload" id="file" type="file" class="border rounded p-2 w-full" />
        </div>
        <div class="flex justify-end space-x-4">
          <button @click="showAddNoticeModal = false" class="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
          <button @click="addNotice" :disabled="!isNoticeFormValid"
            class="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import Separator from '@/components/custom/separator/Separator.vue';
import axios from 'axios'
import { UserType } from '../../types/NewsTypes'
const searchQuery = ref('');
const filterStatus = ref('');
const sortKey = ref('name');
const sortOrder = ref('asc');
const selectedOption = ref('Dashboard');
const selectedUser = ref(null);
const showNoticeOptions = ref(false);
const selectedNoticeOption = ref('');
const notices = ref([
]);
const showAddNoticeModal = ref(false);
const newNotice = ref({
  title: '',
  description: '',
  file: null,
});
const fileInput = ref(null);

const dropdownOpen = ref(false)
const selectedNotice = ref('Select Notice')
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
const dummyNotices = ref([]);
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
  result = result?.sort((a, b) => {
    let modifier = 1;
    if (sortOrder.value === 'desc') modifier = -1;
    if (a[sortKey.value] < b[sortKey.value]) return -1 * modifier;
    if (a[sortKey.value] > b[sortKey.value]) return 1 * modifier;
    return 0;
  });

  return result;
});

const isNoticeFormValid = computed(() => {
  return newNotice.value.title && newNotice.value.description && newNotice.value.file;
});

// Define your function
function validateNoticeForm() {
  // Using the `value` property to access the refs
  isNoticeFormValid.value = newNotice.value.title && newNotice.value.description && newNotice.value.file;
}
const selectOption = async (option) => {
  selectedOption.value = option;
  selectedUser.value = null; // Reset selected user when switching sections
  showNoticeOptions.value = false; // Hide notice sub-options when switching sections

  try {
    const response = await axios.get(`http://13.233.211.18:3005/users`, {
      params: { user_type: UserType[option] }
    });
    if (response.data && response.data.users) {
      users.value = response.data.users.map(user => ({
        id: user.user_id,
        name: user.full_name,
        contactInfo: user.phone_no,
        downloads: user.cvFilePath,
        status: user.approval_status_display_text
      }));
    }
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

function toggleNoticeOptions() {
  showNoticeOptions.value = !showNoticeOptions.value;
}

function selectNoticeOption(option) {
  selectedOption.value = 'Notice';
  selectedNoticeOption.value = option;
}

function selectUser(user) {
  selectedUser.value = user;
}

function addMoreNotice() {
  showAddNoticeModal.value = true;
}

function handleFileUpload(event) {
  const file = event.target.files[0];
  newNotice.value.file = file;
}

const addNotice = async () => {
  if (newNotice.value.title && newNotice.value.description && newNotice.value.file) {
    try {
      const formData = new FormData();
      formData.append('type', newNotice.value.title);
      formData.append('description', newNotice.value.description);
      formData.append('attachment', newNotice.value.file);

      // POST request to add the new notice
      await axios.post('http://13.233.211.18:3005/admin/notice-add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Refresh the notice list
      await fetchData();

      // Reset modal
      newNotice.value.title = '';
      newNotice.value.description = '';
      newNotice.value.file = null;
      showAddNoticeModal.value = false;
    } catch (error) {
      console.error('Error adding notice:', error);
    }
  } else {
    alert('Please fill in all fields and upload a file.');
  }
};


function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value;
}

function selectNotice(notice) {
  selectedNotice.value = notice;
  dropdownOpen.value = false;
}

const fetchData = async () => {
  try {
    const response = await axios.get('http://13.233.211.18:3005/admin/notice-list'); // Replace with your API URL
    if (response.data.success) {
      notices.value = response.data.data.notices.map(notice => ({
        id: notice.notice_id,
        title: notice.notice_type,
        description: notice.notice_description,
        attachment: notice.notice_attachment
      }));
      dummyNotices.value = notices.value.map(notice => notice.title);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const triggerFileInput = () => {
  fileInput.value.click();
};

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    // Check if the file is an Excel file based on MIME type
    const validMimeTypes = [
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // .xlsx
      'application/vnd.ms-excel' // .xls
    ];
    if (!validMimeTypes.includes(file.type)) {
      alert('Please upload a valid Excel file (.xlsx, .xls)');
      fileInput.value.value = ''; // Clear the file input
      return;
    }
    // Process the valid file
    console.log('File selected:', file);
    // Add further processing here
  }
};



onMounted(() => {
  fetchData();
});

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

/* button {
  outline: none;
} */

.border {
  border: 1px solid #ddd;
}


.description-cell {
  max-width: 200px;
  /* Adjust as needed */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

button {
  position: relative;
  cursor: pointer;
  outline: none;
}

button input[type="file"] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}
</style>
