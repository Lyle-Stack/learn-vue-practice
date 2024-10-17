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
} & AtomicInvertCornerProps;

const {
  href,
  title = "Sample Title",
  location = "bottom-right",
  buttonTitle = "",
  cardbgColor = "#0046c7",
  bgColor,
  gapColor,
  textColor,
} = defineProps<AppSimpleCardProps>();

const isTop = location.startsWith("top") || location.startsWith("t");
const isLeft = location.endsWith("left") || location.endsWith("l");
</script>

<template>
  <div
    class="group relative flex size-full rounded-[calc(var(--radius)_*_1.5)] transition-transform hover:translate-y-[calc(var(--radius)_/_-4)]"
    :style="{ backgroundColor: cardbgColor }"
  >
    <a class="block w-full px-[calc(var(--radius)_*_1.5)] py-[var(--radius)]" :href>
      <h4
        class="relative z-10 block h-[40px] text-[clamp(1.5rem,1.159rem_+_1.09vw,2.25rem)] font-semibold leading-[1.1] tracking-tighter text-white"
      >
        {{ isTop && isLeft ? "" : title }}
      </h4>
      <div
        class="relative mx-auto -mt-[calc(var(--radius)_*_1.5)] mb-[calc(var(--radius)_/_2)] aspect-square w-[90%] overflow-hidden rounded-[calc(var(--radius)_*_4)]"
      >
        <slot name="image"></slot>
      </div>
    </a>

    <div
      class="absolute"
      :class="{
        'left-0': isLeft,
        'right-0': !isLeft,
        'top-0': isTop,
        'bottom-0': !isTop,
      }"
    >
      <a aria-label="Learn more" class="relative" :href>
        <AtomicButtonInvertCorner :location :buttonTitle="isTop ? '' : buttonTitle" :bgColor :gap-color :text-color>
          <template #corner>
            <slot name="corner"></slot>
          </template>
        </AtomicButtonInvertCorner>
      </a>
    </div>
  </div>
</template>
