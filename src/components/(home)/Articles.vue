<script setup lang="ts">
import AppCircleImageCard from "../molecules/AppCircleImageCard.vue";
import AppCoverImageCard from "../molecules/AppCoverImageCard.vue";
import AppGridCard from "../oragnisms/AppGridCard.vue";
</script>

<template>
  <section class="screen-width">
    <div class="grid grid-cols-1 gap-2.5 pb-2.5 sm:grid-cols-2">
      <div class="row-span-1 sm:row-span-2">
        <AppCircleImageCard
          card-aspect-ratio-related-classes="h-full"
          title="We believe biology is the future of technology"
          href="#"
          cardbg-color="#b1653b"
        >
          <template #image>
            <div class="absolute inset-0 m-auto block size-full overflow-hidden rounded-full sm:size-3/5">
              <img
                alt="Wood destroying mushroom in wood fabric 100x. Image shot 04/2019. Exact date unknown."
                src="https://colabs.com.au/_next/image?url=https%3A%2F%2Fcolabs.yourcreative.com.au%2Fwp-content%2Fuploads%2F2023%2F06%2F87591_river_flowing_downstream_over_rocks_By_Omri_Ohana_Artlist_HD-1.jpg&w=3840&q=75"
                class="size-full object-cover"
                decoding="async"
              />
            </div>
          </template>
        </AppCircleImageCard>
      </div>
      <div class="aspect-[2/1]">
        <AppCoverImageCard
          title="Join a thriving ecosystem that supports big ideas"
          href="#"
          title-text-color="var(--background)"
        >
          <template #image>
            <img
              alt="Detail of raw portobello mushroom. Macro, selective focus."
              src="https://colabs.yourcreative.com.au/wp-content/uploads/2023/07/bigideas.jpg"
              class="size-full object-cover"
              decoding="async"
            />
          </template>
        </AppCoverImageCard>
      </div>
      <div class="aspect-[2/1]">
        <AppCoverImageCard
          title="Learn, Imagine, Explore - Tune into our podcast"
          href="#"
          title-text-color="var(--background)"
        >
          <template #image>
            <img
              alt="Detail of raw portobello mushroom. Macro, selective focus."
              src="https://colabs.yourcreative.com.au/wp-content/uploads/2023/08/Fern.png"
              class="size-full object-cover"
              decoding="async"
            />
          </template>
        </AppCoverImageCard>
      </div>
    </div>
    <AppGridCard
      badge-text="Beyond the bench"
      title-text="Shaping Innovation Futures: Uncovering the Infrastructure Required for Resilient and Regenerative Futures in Australia"
      description-text="On building infrastructure to drive systemic innovation and foster regenerative futures"
    >
      <template #image>
        <img
          alt="Untitled design (27)"
          src="https://colabs.com.au/_next/image?url=https%3A%2F%2Fcolabs.yourcreative.com.au%2Fwp-content%2Fuploads%2F2024%2F10%2FUntitled-design-27.png&w=1920&q=75"
          class="size-full object-cover"
          decoding="async"
        />
      </template>
    </AppGridCard>
  </section>
</template>
