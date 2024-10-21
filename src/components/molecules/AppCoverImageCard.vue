<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import AtomicButtonInvertCorner, { type AtomicInvertCornerProps } from "../atomics/AtomicButtonInvertCorner.vue";

type AppSimpleCardProps = {
  /**
   * currently using <a>
   * TODO: change to <router-link> or a custom link component to auto choose router mode or use <a> with _blank
   */
  href: string;
  /**
   * card title optional but recommended
   */
  title?: string;
  /**
   * card title text color
   * @default: 'var(--foreground)'
   */
  titleTextColor?: string;
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
  titleTextColor = "var(--foreground)",
  bgColor,
  gapColor,
  textColor,
} = defineProps<AppSimpleCardProps>();

const parallexRef = ref<HTMLElement | undefined>(undefined);

const handleScrollParallex = () => {
  if (!parallexRef.value) return;
  const toViewTop = parallexRef.value.getBoundingClientRect().top;
  // div is scalling to 1.5, the center of the new size div is at 75% of the div from top.
  const divHeightAtBottomInView = parallexRef.value.getBoundingClientRect().height * 0.75;

  // only update parallex if the div is in view (between 0 to top of screen and bottom of screen - 75% of div height)
  if (toViewTop <= 0 || toViewTop > window.innerHeight - divHeightAtBottomInView) return;
  console.log(parallexRef.value.getBoundingClientRect().top);
  parallexRef.value.style.transform = `translateY(${(1 - toViewTop / window.innerHeight) * 50}%)`;
};

onMounted(() => {
  handleScrollParallex();
  window.addEventListener("scroll", handleScrollParallex);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScrollParallex);
});
</script>

<template>
  <a
    :href="href"
    class="group relative block size-full w-[max(200px,_100%)] overflow-hidden rounded-[var(--radius)] transition-transform hover:translate-y-[calc(var(--radius)_/_-4)]"
    :style="{ backgroundColor: cardbgColor }"
  >
    <div class="block h-full w-full px-[calc(var(--radius)_*_1.5)] py-[var(--radius)]">
      <h4
        class="relative z-10 block max-w-[calc(100%_-_40px)] text-[clamp(1.5rem,1rem_+_1vw,2.25rem)] font-semibold leading-[1.1] tracking-tighter text-white"
        :style="{ color: titleTextColor }"
      >
        {{ title }}
      </h4>
      <div class="absolute inset-0 block h-full w-full overflow-visible bg-transparent">
        <div class="block size-full -translate-y-1/2 scale-150 overflow-visible">
          <div ref="parallexRef" class="size-full will-change-transform">
            <slot name="image">
              <img
                src="https://colabs.yourcreative.com.au/wp-content/uploads/2023/07/dragonfly-1.jpg"
                alt="Dragonfly"
                srcset=""
                class="size-full object-cover"
              />
            </slot>
          </div>
        </div>
      </div>
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
