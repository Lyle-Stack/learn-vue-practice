<script setup lang="ts">
import AtomicButtonInvertCorner, { type AtomicInvertCornerProps } from "../atomics/AtomicButtonInvertCorner.vue";

type AppSimpleCardProps = {
  /**
   * currently using <a>
   * TODO: change to <router-link> or a custom link component to auto choose router mode or use <a> with _blank
   */
  href: string;
  /**
   * card title optional but recommended
   * notice: if location is 'top-left' or 'tl', title will be forced to be a empty string, in order to avoid title overlap.
   */
  title?: string;
  /**
   * main card background color
   * @default: '#0046c7'
   */
  cardbgColor?: string;
  /**
   * Custom card aspect ratio
   * @default: aspect-square
   */
  cardAspectRatioRelatedClasses?: string;
} & AtomicInvertCornerProps;

const {
  href,
  title = "Sample Title",
  location = "bottom-right",
  buttonTitle = "",
  cardbgColor = "var(--background)",
  bgColor,
  gapColor,
  buttonTextColor = "var(--background)",
  cardAspectRatioRelatedClasses = "aspect-square",
} = defineProps<AppSimpleCardProps>();
</script>

<template>
  <a
    :href="href"
    class="group relative flex min-h-[calc(var(--radius)_*_4)] w-[clamp(200px,_100%,_600px)] rounded-[var(--radius)] transition-transform hover:translate-y-[calc(var(--card-gap)_/_-2)]"
    :class="cardAspectRatioRelatedClasses"
    :style="{ backgroundColor: cardbgColor }"
  >
    <div class="relative block size-full overflow-hidden p-[var(--radius)]">
      <h4
        class="relative z-10 block text-[clamp(1.5rem,1rem_+_1vw,2.25rem)] font-semibold leading-[1.1] tracking-tighter text-white"
      >
        {{ title }}
      </h4>

      <div
        class="absolute inset-0 block"
        :class="{
          '-mb-[30px] mt-[30px] p-[var(--radius)]': cardAspectRatioRelatedClasses === 'aspect-square',
          'm-auto p-0': cardAspectRatioRelatedClasses !== 'aspect-square',
        }"
      >
        <div
          class="relative m-auto block aspect-square overflow-hidden rounded-full"
          :class="{
            'max-h-[90%] max-w-[90%]': cardAspectRatioRelatedClasses === 'aspect-square',
            'max-h-full max-w-full': cardAspectRatioRelatedClasses !== 'aspect-square',
          }"
        >
          <slot name="image"></slot>
        </div>
      </div>
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
