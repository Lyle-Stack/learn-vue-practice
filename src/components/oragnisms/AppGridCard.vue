<script lang="ts" setup>
import { defineProps } from "vue";
import AtomicButtonInvertCorner from "../atomics/AtomicButtonInvertCorner.vue";

export type AppGridCardProps = {
  bgColor?: string;
  badgeText: string;
  titleText: string;
  descriptionText: string;
};
const { bgColor } = defineProps<AppGridCardProps>();
</script>

<template>
  <a href="#" class="group grid w-full grid-cols-1 grid-rows-2 space-y-0 sm:grid-cols-5 sm:grid-rows-1 sm:gap-2.5">
    <div
      class="aspect-[8/5] w-full overflow-hidden rounded-t-[var(--radius)] bg-transparent sm:col-span-3 sm:aspect-square sm:rounded-b-[var(--radius)] lg:aspect-[8/5]"
    >
      <slot name="image"></slot>
    </div>
    <div
      class="relative size-full space-y-5 rounded-b-[var(--radius)] bg-[#eaf1fc] px-5 pb-20 pt-5 sm:col-span-2 sm:rounded-t-[var(--radius)] sm:p-[30px] [&>*]:tracking-tighter"
      :style="{
        backgroundColor: bgColor,
      }"
    >
      <span class="rounded-full border border-[var(--foreground)] px-3.5 py-0.5 text-lg">
        {{ badgeText }}
      </span>
      <h4 class="text-[clamp(1.5rem,_1.1rem_+_1vw,_2.25rem)] font-semibold leading-[1.1]">
        {{ titleText }}
      </h4>
      <p class="max-w-[calc(100%-calc(30px+var(--card-gap)))]">{{ descriptionText }}</p>
      <div class="absolute bottom-0 right-0">
        <AtomicButtonInvertCorner></AtomicButtonInvertCorner>
      </div>
    </div>
  </a>
</template>
