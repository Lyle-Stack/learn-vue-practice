<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const parallexRef = ref<HTMLElement | undefined>(undefined);

const handleScrollParallex = () => {
  // TODO: code is copy-paste from AppCoverImageCard.vue (which has todo as well)
  const refComp = parallexRef.value;
  if (!refComp) return;

  const selfHeight = refComp.getBoundingClientRect().height;
  if (selfHeight === 0) setTimeout(handleScrollParallex, 100);

  const toViewTop = refComp.getBoundingClientRect().top;
  const parentHeight = refComp.parentElement?.getBoundingClientRect().height;
  if (!parentHeight) return;

  const moveableHeight = selfHeight - parentHeight;

  if (toViewTop <= 0 || toViewTop > window.innerHeight - parentHeight) return;

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
  <section class="screen-width flex flex-col gap-2.5 lg:flex-row">
    <div class="relative aspect-[8/5] w-full overflow-hidden rounded-[var(--radius)] sm:aspect-video lg:w-2/5">
      <!-- following block is a copy-paste from AppCoverImageCard.vue -->
      <div class="absolute inset-0 flex items-end bg-transparent">
        <div ref="parallexRef" class="block">
          <div class="lg:size-[140%] lg:-translate-x-[13%]">
            <img
              src="https://colabs.yourcreative.com.au/wp-content/uploads/2024/03/CoLabs-IWD-22-scaled-e1711597962490.jpg"
              alt="Hello there"
              class="size-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="block rounded-[var(--radius)] bg-[#0046c7] p-5 text-[var(--background)] lg:w-3/5 lg:p-[30px]">
      <h3
        class="inline-block max-w-xl pb-12 text-[clamp(1.75rem,_1.1rem_+_1.8vw,_3rem)] font-semibold leading-[1.1] tracking-tighter"
      >
        An ecosystem to be part of.
        <br />
        Stay in the loop.
      </h3>
      <div class="py-6">
        <form action="#" class="flex flex-col items-end justify-end gap-y-2.5">
          <input
            type="email"
            class="w-full rounded-[20px] bg-[var(--background)] p-5 text-[var(--foreground)]"
            placeholder="Your Email Address"
          />
          <button class="group flex flex-row flex-nowrap items-center gap-5" title="Subscribe">
            <span class="text-[var(--primary-foreground)]">Subscribe</span>
            <span
              class="flex size-[50px] items-center justify-center rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] transition-transform group-hover:rotate-[-30deg]"
            >
              <svg
                width="31"
                height="28"
                class="size-3.5 transition-transform group-hover:scale-125"
                viewBox="0 0 31 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.857198 13.7372L27.9141 13.7372" stroke="currentColor" stroke-width="3"></path>
                <path
                  d="M15.4561 1.39417L27.9142 13.8522L15.4561 26.3104"
                  stroke="currentColor"
                  stroke-width="3"
                ></path>
              </svg>
            </span>
          </button>
        </form>
      </div>
      <p class="max-w-lg pt-12 lg:pt-20">Subscribe for updates, news, events, and community resources.</p>
    </div>
  </section>
</template>
