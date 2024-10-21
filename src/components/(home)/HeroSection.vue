<script setup lang="ts">
import AtomicButtonInvertCorner from "../atomics/AtomicButtonInvertCorner.vue";
import AppCoverImageCard from "../molecules/AppCoverImageCard.vue";
import AppTextOnlyCard from "../molecules/AppTextOnlyCard.vue";
</script>

<template>
  <div class="screen-width pb-20 pt-[60px] lg:pt-2.5">
    <div class="w-full sm:flex sm:flex-row sm:gap-2.5">
      <!-- large image block -->
      <div
        class="relative mb-2.5 inline-block h-[max(650px,_80vh)] w-full flex-1 rounded-[var(--radius)] bg-amber-400 sm:mb-0 sm:h-auto sm:w-[calc(100%_-_210px)] md:w-[calc(100%_-_250px)] lg:w-[calc(75%_-_10px)]"
      >
        <div class="absolute bottom-0 left-0 inline w-min max-w-[calc(100%_-_40px)]">
          <AtomicButtonInvertCorner location="bl">
            <template #corner>
              <h1
                class="w-fit max-w-[calc(100%_-_40px)] whitespace-normal text-balance rounded-tr-[var(--radius)] bg-[var(--background)] pr-2.5 pt-2.5 text-[clamp(2.625rem,2.114rem_+_1.64vw,3.75rem)] leading-[1.1] tracking-tighter"
              >
                Making space for transformative innovation
              </h1>
            </template>
          </AtomicButtonInvertCorner>
        </div>
        <div class="absolute left-0 top-0 hidden lg:inline">
          <AtomicButtonInvertCorner location="tl">
            <template #corner>
              <span class="block aspect-square w-[60px]">
                <!-- block top left corner -->
              </span>
            </template>
          </AtomicButtonInvertCorner>
        </div>
      </div>

      <!-- small image block -->
      <div class="relative flex flex-col flex-nowrap gap-2.5 sm:w-[200px] md:w-60 lg:w-1/4">
        <div
          class="flex w-full shrink-0 grow-0 flex-col items-center justify-center rounded-[var(--radius)] bg-[#dcb688] px-5 py-10 sm:aspect-square sm:rounded-full"
        >
          <span class="text-[clamp(4.375rem,_4.091rem_+_.91vw,_5rem)] font-semibold leading-[1.1] tracking-tighter">
            32
          </span>
          <span class="text-base">Initiatives Supported</span>
        </div>
        <div class="block aspect-video w-full shrink-0 grow-0 rounded-[var(--radius)] bg-transparent sm:aspect-[4/3]">
          <AppCoverImageCard href="#" title-text-color="var(--background)" />
        </div>
        <div class="block min-h-48 w-full flex-1 rounded-[var(--radius)]">
          <AppTextOnlyCard href="#" cardbg-color="#32c58b">
            <template #image>
              <div class="min-h-40">
                <h5 class="leading=[1.1] text-[clamp(1.313rem,_1rem_+_.4vw,_1.625rem)] font-semibold tracking-tighter">
                  <em class="not-italic text-[#d9db4d]">Triskelion</em>
                  . A monthly newsletter covering biotech news and articles from within the Co-Labs community and
                  beyond.
                </h5>
              </div>
            </template>
          </AppTextOnlyCard>
        </div>
      </div>
    </div>

    <h2
      class="w-full py-20 text-[clamp(2.125rem,_1.55rem_+_1.6vw,_3.375rem)] leading-[1.1] tracking-tighter md:max-w-xl lg:max-w-3xl"
    >
      We design, build and run collaborative spaces where bio-led science, technology and people can thrive
    </h2>
  </div>
</template>
