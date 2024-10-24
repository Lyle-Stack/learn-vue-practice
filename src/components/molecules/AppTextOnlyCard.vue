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
      <div class="size-full min-h-40 [&>*]:size-full">
        <slot name="default">
          <h5 class="leading=[1.1] text-[clamp(1.313rem,_1rem_+_.4vw,_1.625rem)] font-semibold tracking-tighter">
            <em class="not-italic text-[#d9db4d]">Triskelion</em>
            . A monthly newsletter covering biotech news and articles from within the Co-Labs community and beyond.
          </h5>
        </slot>
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
