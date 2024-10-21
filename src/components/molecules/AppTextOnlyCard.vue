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
  cardbgColor = "#0046c7",
  bgColor,
  gapColor,
  textColor,
} = defineProps<AppSimpleCardProps>();
</script>

<template>
  <a
    :href="href"
    class="group relative block size-full w-[max(200px,_100%)] overflow-hidden rounded-[var(--radius)] transition-transform hover:translate-y-[calc(var(--radius)_/_-4)]"
    :style="{ backgroundColor: cardbgColor }"
  >
    <div class="block h-full w-full px-[calc(var(--radius)_*_1.5)] py-[var(--radius)]">
      <slot name="image">
        <span class="block size-full">Your Text Here</span>
      </slot>
    </div>

    <div class="absolute bottom-0 right-0">
      <AtomicButtonInvertCorner :location :buttonTitle :bgColor :gap-color :text-color>
        <template #corner>
          <slot name="corner"></slot>
        </template>
      </AtomicButtonInvertCorner>
    </div>
  </a>
</template>
