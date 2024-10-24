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
  bgColor = "var(--background)",
  gapColor,
  buttonTextColor,
} = defineProps<AppSimpleCardProps>();

const parallexRef = ref<HTMLElement | undefined>(undefined);

const handleScrollParallex = () => {
  const refComp = parallexRef.value;
  if (!refComp) return;

  const selfHeight = refComp.getBoundingClientRect().height;
  // before image metadata is loaded, height is 0, so wait 100ms to retry
  // TODO: use IntersectionObserver instead (this setTimeout is dangerous)
  if (selfHeight === 0) setTimeout(handleScrollParallex, 100);

  const toViewTop = refComp.getBoundingClientRect().top;
  const parentHeight = refComp.parentElement?.getBoundingClientRect().height;
  if (!parentHeight) return;

  const moveableHeight = parentHeight - selfHeight;

  // only update parallex effect if entire parent element is in view
  if (toViewTop <= 0 || toViewTop > window.innerHeight - parentHeight) return;

  // window.innerHeight has to deduct parent height, otherwise refComp will 'jump' a bit
  // try yourself... original code in the next line
  // refComp.style.transform = `translateY(${(1 - toViewTop / window.innerHeight) * moveableHeight}px)`;
  refComp.style.transform = `translateY(${(1 - toViewTop / (window.innerHeight - parentHeight)) * moveableHeight}px)`;
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
    class="group relative block size-full w-[max(200px,_100%)] overflow-hidden transition-transform hover:translate-y-[calc(var(--card-gap)_/_-2)]"
  >
    <div
      class="relative block h-full w-full overflow-hidden rounded-[var(--radius)] px-[calc(var(--radius)_*_1.5)] py-[var(--radius)]"
      :style="{ backgroundColor: cardbgColor }"
    >
      <h4
        class="relative z-10 block max-w-[calc(100%_-_40px)] text-[clamp(1.5rem,1rem_+_1vw,2.25rem)] font-semibold leading-[1.1] tracking-tighter text-white"
        :style="{ color: titleTextColor }"
      >
        {{ title }}
      </h4>
      <div class="absolute inset-0 block size-full overflow-hidden bg-transparent">
        <div ref="parallexRef" class="block">
          <slot name="image">
            <!-- normally, only need image element. wrap in div if image is too small (high aspect ratio) -->
            <div class="size-[150%] -translate-x-[15%]">
              <img
                src="https://colabs.yourcreative.com.au/wp-content/uploads/2023/07/dragonfly-1.jpg"
                alt="Dragonfly"
                srcset=""
                class="size-full object-cover"
              />
            </div>
          </slot>
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
