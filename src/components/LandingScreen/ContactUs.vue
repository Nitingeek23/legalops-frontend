<template>
  <div class="flex flex-col items-center min-h-screen py-16 px-16 w-3/4 mx-auto border-2 border-bg['red']">
    <div class="flex items-center justify-between mb-8 w-full">
      <div class="w-1/2">
        <h3 class="text-lg font-bold">Contact Details</h3>
      </div>
      <div class="w-1/2">
        <h3 class="text-lg font-bold text-right">Contact Us</h3>
      </div>
    </div>
    <div class="flex justify-between w-full">
      <div class="contact-details w-1/2">
        <div class="flex items-start mb-8 ml-[-100px]">
          <img src="../../assets/pin.png" alt="Contact Icon 1" class="w-[50px] h-[50px] mr-8" />
          <span class="text-[16px] mt-2">D-871, NEW FRIENDS COLONY New Delhi, 110025</span>
        </div>
        <div class="flex items-start mb-8 ml-[-100px]">
          <img src="../../assets/phone.png" alt="Contact Icon 2" class="w-[50px] h-[50px] mr-8" />
          <span class="text-[16px] mt-2">011 4182 5104</span>
        </div>
        <div class="flex items-center mb-8 ml-[-100px]">
          <img src="../../assets/mailIcon.png" alt="Contact Icon 3" class="w-[50px] h-[50px] mr-8 self-center" />
          <div class="flex flex-col">
            <span class="text-[16px] my-1">arbitration@clrmdr.com</span>
            <span class="text-[16px] my-1">mediation@clrmdr.com</span>
            <span class="text-[16px] my-1">registrar@clrmdr.com</span>
          </div>
        </div>
      </div>
      <!-- <div class="contact-us w-1/2">
        <p class="text-[16px]">Feel free to reach out to us through the form below.</p>
      </div> -->
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script setup lang="ts">
//! Two divs placed row wise, A button and a separator 
//! Contact details, Contact us - two divs
//! Footer can be integrated here 
</script>

<style scoped>
/* .container {
  max-width: 1200px;
}
.contact-details, .contact-us {
  padding: 16px;
} */
</style>
