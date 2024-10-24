<script lang="ts" setup>
import { defineProps } from "vue";
import AtomicButtonInvertCorner from "../atomics/AtomicButtonInvertCorner.vue";

export type AppGridCardProps = {
  badgeText: string;
  badgeBgColor?: string;
  titleText: string;
  descriptionText: string;
  href: string;
};
const { href, badgeText, badgeBgColor, titleText, descriptionText } = defineProps<AppGridCardProps>();
</script>

<template>
  <a :href class="group flex flex-col gap-5">
    <div class="relative size-full bg-transparent">
      <div class="aspect-[4/3] size-full overflow-hidden rounded-[var(--radius)] lg:aspect-square">
        <slot name="image"></slot>
      </div>
      <span
        class="absolute left-4 top-4 rounded-full bg-[var(--background)] px-3.5 py-1 text-lg"
        :style="{
          backgroundColor: badgeBgColor,
        }"
      >
        {{ badgeText }}
      </span>
      <div class="absolute bottom-0 right-0">
        <AtomicButtonInvertCorner />
      </div>
    </div>
    <div class="relative flex size-full flex-grow flex-col gap-y-4 bg-[var(--background)] [&>*]:tracking-tighter">
      <h4 class="text-[clamp(1.5rem,_1.1rem_+_1vw,_2.25rem)] font-semibold leading-[1.1]">
        {{ titleText }}
      </h4>
      <p class="max-w-[calc(100%-calc(30px+var(--card-gap)))]">{{ descriptionText }}</p>
    </div>
  </a>
</template>
