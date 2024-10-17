<script setup lang="ts">
type Loc = `${"t" | "b"}${"l" | "r"}`;
type Location = `${"top" | "bottom"}-${"left" | "right"}` | Loc;

export type AtomicInvertCornerProps = {
  /**
   * The location of the corner it will be placed on.
   * Possible values: top-left, top-right, bottom-left, bottom-right.
   * Or simply use tl, tr, bl, br
   * @default bottom-right
   */
  location?: Location;
  /**
   * @defult var(--background)
   */
  bgColor?: string;
  /**
   * @defult var(--background)
   */
  gapColor?: string;
  /**
   * only needed if buttonTitle is set
   * @default var(--foreground)
   */
  textColor?: string;
  /**
   * do not forget to set textColor.
   */
  buttonTitle?: string;
};

const {
  location = "bottom-right",
  buttonTitle = "",
  bgColor = "var(--background)",
  gapColor = "var(--background)",
  textColor = "var(--foreground)",
} = defineProps<AtomicInvertCornerProps>();

const getInvertCornerLoc = (location: Location): Loc => {
  const isTop = location.startsWith("top") || location.startsWith("t");
  const isLeft = location.endsWith("left") || location.endsWith("l");
  return `${isTop ? "t" : "b"}${isLeft ? "l" : "r"}`;
};

const loc = getInvertCornerLoc(location);

const rotate = {
  "rotate-0": loc === "tl",
  "rotate-90": loc === "tr",
  "rotate-180": loc === "br",
  "-rotate-90": loc === "bl",
};
</script>

<template>
  <span
    class="relative flex items-center justify-center"
    :class="{
      'flex-row-reverse': loc === 'tl' || loc === 'bl',
    }"
    :style="{ color: textColor }"
    :aria-label="buttonTitle"
  >
    <span
      v-if="buttonTitle"
      class="text-base"
      :class="{
        '-translate-y-[calc(var(--radius)_/_4)] pr-[var(--radius)]': loc === 'tr',
        '-translate-y-[calc(var(--radius)_/_4)] pl-[var(--radius)]': loc === 'tl',
        'translate-y-[calc(var(--radius)_/_4)] pr-[var(--radius)]': loc === 'br',
        'translate-y-[calc(var(--radius)_/_4)] pl-[var(--radius)]': loc === 'bl',
      }"
    >
      {{ buttonTitle }}
    </span>

    <!-- padding to create a gap for <slot /> to main content -->
    <div
      class="relative"
      :class="{
        'rounded-br-[50%]': loc === 'tl',
        'rounded-bl-[50%]': loc === 'tr',
        'rounded-tl-[50%]': loc === 'br',
        'rounded-tr-[50%]': loc === 'bl',
        'pb-[calc(var(--radius)_/_2)] pr-[calc(var(--radius)_/_2)]': loc === 'tl',
        'pb-[calc(var(--radius)_/_2)] pl-[calc(var(--radius)_/_2)]': loc === 'tr',
        'pl-[calc(var(--radius)_/_2)] pt-[calc(var(--radius)_/_2)]': loc === 'br',
        'pr-[calc(var(--radius)_/_2)] pt-[calc(var(--radius)_/_2)]': loc === 'bl',
      }"
      :style="{ backgroundColor: gapColor }"
    >
      <slot name="corner"></slot>

      <!-- vertial corner (y-axis movement) -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="absolute block w-[var(--radius)] scale-105"
        :class="{
          '-bottom-[var(--radius)] left-0': loc === 'tl',
          '-bottom-[var(--radius)] right-0': loc === 'tr',
          '-top-[var(--radius)] left-0': loc === 'bl',
          '-top-[var(--radius)] right-0': loc === 'br',
          ...rotate,
        }"
        :style="{ color: gapColor }"
        viewBox="0 0 100 100"
      >
        <path d="m100,0H0v100C0,44.77,44.77,0,100,0Z" fill="currentColor"></path>
      </svg>

      <!-- horizontal corner (pretty much same as vertial one but with different x-axis movement) -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="absolute block w-[var(--radius)] scale-105"
        :class="{
          '-right-[var(--radius)] top-0': loc === 'tl',
          '-left-[var(--radius)] top-0': loc === 'tr',
          '-left-[var(--radius)] bottom-0': loc === 'br',
          '-right-[var(--radius)] bottom-0': loc === 'bl',
          ...rotate,
        }"
        :style="{ color: gapColor }"
        viewBox="0 0 100 100"
      >
        <path d="m100,0H0v100C0,44.77,44.77,0,100,0Z" fill="currentColor"></path>
      </svg>

      <!-- corner of corner (be used to give option for different background color if needed) -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="absolute block w-[var(--radius)] scale-105"
        :class="{
          'left-0 top-0': loc === 'tl',
          'right-0 top-0': loc === 'tr',
          'bottom-0 right-0': loc === 'br',
          'bottom-0 left-0': loc === 'bl',
          ...rotate,
        }"
        :style="{ color: bgColor }"
        viewBox="0 0 100 100"
      >
        <path d="m100,0H0v100C0,44.77,44.77,0,100,0Z" fill="currentColor"></path>
      </svg>
    </div>
  </span>
</template>
