<script setup lang="ts">
import AtomicButtonInvertCorner, { type AtomicInvertCornerProps } from "../atomics/AtomicButtonInvertCorner.vue";

type AppSimpleCardProps = {
  /**
   * currently using <a>
   * TODO: change to <router-link> or a custom link component to auto choose router mode or use <a> with _blank
   */
  href: string;
  /**
   * main card background color
   * @default: '#0046c7'
   */
  cardbgColor?: string;
} & AtomicInvertCornerProps;

const {
  href,
  location = "bottom-right",
  buttonTitle = "",
  cardbgColor = "var(--background)",
  bgColor,
  gapColor,
  buttonTextColor = "var(--background)",
} = defineProps<AppSimpleCardProps>();
</script>

<template>
  <a
    :href="href"
    class="group relative block size-full w-[max(200px,_100%)] rounded-[var(--radius)] transition-transform hover:translate-y-[calc(var(--card-gap)_/_-2)]"
    :style="{ backgroundColor: cardbgColor }"
  >
    <div class="relative block size-full overflow-hidden p-[var(--radius)]">
      <slot name="image">
        <span class="block size-full">Your Text Here</span>
      </slot>
    </div>

    <div class="absolute bottom-0 right-0">
      <AtomicButtonInvertCorner :location :buttonTitle :bgColor :gapColor :buttonTextColor>
        <template #corner>
          <slot name="corner"></slot>
        </template>
      </AtomicButtonInvertCorner>
    </div>
  </a>
</template>
