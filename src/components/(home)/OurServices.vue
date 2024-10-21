<script setup lang="ts">
import AppCircleImageCard from "../molecules/AppCircleImageCard.vue";
</script>

<template>
  <section class="screen-width py-[60px] lg:py-40">
    <h2
      class="mb-[30px] inline-block rounded-full border border-[var(--primary)] bg-[var(--background)] px-3.5 py-1 text-lg leading-[1.1] tracking-tighter text-[var(--foreground)]"
    >
      Our Services
    </h2>
    <div class="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
      <AppCircleImageCard title="Lab Space" href="#" button-title="Learn more" cardbg-color="#0046c7">
        <template #image>
          <img
            alt="Wood destroying mushroom in wood fabric 100x. Image shot 04/2019. Exact date unknown."
            src="https://colabs.com.au/_next/image?url=https%3A%2F%2Fcolabs.yourcreative.com.au%2Fwp-content%2Fuploads%2F2023%2F05%2FWX8JWA-scaled.jpg&w=3840&q=75"
            class="absolute inset-0 block size-full object-cover"
            decoding="async"
          />
        </template>
      </AppCircleImageCard>
      <AppCircleImageCard title="Build a Lab" href="#" cardbg-color="#66662a" button-title="Learn more">
        <template #image>
          <img
            alt="Detail of raw portobello mushroom. Macro, selective focus."
            src="https://colabs.com.au/_next/image?url=https%3A%2F%2Fcolabs.yourcreative.com.au%2Fwp-content%2Fuploads%2F2023%2F05%2F2JF5R14-scaled.jpg&w=828&q=75"
            class="absolute inset-0 block size-full object-cover"
            decoding="async"
          />
        </template>
      </AppCircleImageCard>
      <AppCircleImageCard title="Innovation Facilitation" href="#" cardbg-color="#b1653b" button-title="Learn more">
        <template #image>
          <img
            alt="Kelp forest (Laminaria hyperborea), Atlantic Ocean, North West Norway, March."
            src="https://colabs.com.au/_next/image?url=https%3A%2F%2Fcolabs.yourcreative.com.au%2Fwp-content%2Fuploads%2F2023%2F05%2FM49EM8-scaled.jpg&w=828&q=75"
            class="absolute inset-0 block size-full object-cover"
            decoding="async"
          />
        </template>
      </AppCircleImageCard>
    </div>
  </section>
</template>
