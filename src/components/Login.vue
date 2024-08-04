<template>
    <div class="flex h-screen">
        <!-- Left Div -->
        <div class="w-1/2 flex items-center justify-center bg-gray-100">
            <img src="../assets/login-pic.png" alt="Centered Image" class="max-w-full h-auto" />
        </div>
        <!-- Right Div -->
        <div class="w-1/2 flex flex-col items-center justify-center bg-white">
            <div class="absolute top-10">
                <h1 class="text-3xl font-bold">CLRMDR</h1>
            </div>
            <form class="w-full max-w-md mt-12" @submit.prevent="handleSubmit">
                <p class="text-gray-700 text-xl mb-6">Nice to see you again</p>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                        Email
                    </label>
                    <input id="email" v-model="email" type="email"
                        class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Email" />
                    <p v-if="!isValidEmail" class="text-red-500 text-xs italic mt-2">Please enter a valid email.</p>
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input id="password" v-model="password" type="password"
                        class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Password" />
                </div>
                <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center">
                        <input id="remember_me" type="checkbox" class="form-checkbox h-4 w-4 text-blue-600">
                        <label for="remember_me" class="ml-2 block text-sm text-gray-900">Remember Me</label>
                    </div>
                    <div>
                        <a href="#" class="text-sm text-blue-600 hover:text-blue-800">Forgot Password?</a>
                    </div>
                </div>
                <div class="flex items-center justify-between">
                    <button :disabled="!isFormValid"
                        :class="{'bg-gray-400 cursor-not-allowed': !isFormValid, 'bg-blue-500 hover:bg-blue-700': isFormValid}"
                        class="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit">
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();

const isValidEmail = computed(() => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email.value);
});

const isFormValid = computed(() => {
    return isValidEmail.value && password.value.length > 0;
});

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
