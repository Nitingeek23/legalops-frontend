<template>
    <div class="flex h-screen">
        <!-- Left Div -->
        <div class="w-1/2 flex items-center justify-center bg-gray-100">
            <img src="../assets/login-pic.png" alt="Centered Image" class="max-w-full h-auto" />
        </div>
        <!-- Right Div -->
        <div class="w-1/2 flex flex-col items-center justify-center bg-white">
            <h1 class="text-3xl font-bold mb-6">CLRMDR</h1>
            <form class="w-full max-w-sm" @submit.prevent="handleSubmit">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                        Email
                    </label>
                    <input id="email" v-model="email" type="email"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Email" />
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input id="password" v-model="password" type="password"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Password" />
                </div>
                <div class="flex items-center justify-between">
                    <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit">
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();

const handleSubmit = async () => {
    try {
        const response = await axios.post('http://13.233.211.18:3005/api/login', {
            email: email.value,
            password: password.value
        });

        if (response.status === 200) {
            // Navigate to ProfileView component
            router.push({ name: 'ProfileView' });
        } else {
            alert('Login failed. Please check your credentials.');
        }
    } catch (error) {
        alert('An error occurred while logging in.');
    }
};
</script>

<style scoped>
/* No additional scoped styles required for this example */
</style>