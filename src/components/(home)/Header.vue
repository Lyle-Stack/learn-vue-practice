<script setup lang="ts">
import { ref } from "vue";
const isDropDownOpen = ref(false);
const mobileMenuRef = ref<HTMLElement | undefined>(undefined);

const handleDropDownToggle = () => {
  const newState = !isDropDownOpen.value;
  const isClosing = !newState;
  setTimeout(
    () => {
      isDropDownOpen.value = newState;
    },
    isClosing ? 150 : 0,
  );
  setTimeout(
    () => {
      if (mobileMenuRef.value) {
        mobileMenuRef.value.ariaExpanded = String(newState);
      }
    },
    isClosing ? 0 : 150,
  );
};
</script>

<template>
  <nav
    class="screen-width fixed left-1/2 top-0 z-50 h-[60px] -translate-x-1/2 bg-[var(--background)] lg:h-20 lg:bg-transparent"
  >
    <!-- Do not use items-center to center items, apply every item that needs to be centered with my-auto -->
    <div class="flex size-full flex-row flex-nowrap justify-between lg:justify-start">
      <!-- left logo block (shared area) -->
      <div
        class="relative my-auto bg-[var(--background)] lg:rounded-br-[calc(var(--radius)_*_1.5)] lg:pb-3 lg:pl-3 lg:pr-[30px] lg:pt-[25px]"
      >
        <p class="text-3xl font-semibold tracking-tighter lg:leading-[43px]">LEARN VUE</p>

        <!-- destop logo left side padding area blocker -->
        <div class="absolute -left-10 top-0 hidden h-20 w-10 bg-[var(--background)] lg:block"></div>

        <!-- destop logo top right corner -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute -right-[calc(var(--radius)_*_1.5)] top-2.5 hidden size-[calc(var(--radius)_*_1.5)] scale-105 text-[var(--background)] lg:block"
          viewBox="0 0 100 100"
        >
          <path d="m100,0H0v100C0,44.77,44.77,0,100,0Z" fill="currentColor"></path>
        </svg>

        <!-- desktop logo top full screen 10px banner-like blocker -->
        <div class="absolute left-0 right-0 top-0 hidden h-2.5 w-screen bg-[var(--background)] lg:block"></div>
      </div>

      <!-- mobile header -->
      <!-- right menu block -->
      <!-- Do not use items-center to center items, apply every item that needs to be centered with my-auto -->
      <div
        ref="mobileMenuRef"
        class="group/mobile flex translate-y-1 flex-row flex-nowrap gap-[calc(var(--radius)_/_2)] lg:hidden"
      >
        <!-- menu dropdown activator -->
        <button
          ref="menuButtonRef"
          type="button"
          aria-label="open menu"
          class="my-auto block w-fit rounded-[var(--radius)] border-2 border-[var(--secondary)] bg-[var(--secondary)] px-2.5 py-[7px] text-lg font-medium leading-none transition-colors duration-300 ease-linear group-aria-expanded/mobile:border-[var(--primary)] group-aria-expanded/mobile:bg-[var(--background)]"
          @click="handleDropDownToggle"
        >
          <span class="flex w-12 items-center justify-center">
            {{ isDropDownOpen ? "Close" : "Menu" }}
          </span>
        </button>

        <!-- social links /w dropdown enclosure -->
        <!-- Do not use items-center to center items, apply every item that needs to be centered with my-auto -->
        <div class="relative flex px-2.5">
          <div
            class="my-auto flex w-fit flex-row flex-nowrap gap-[calc(var(--radius)_/_2)] rounded-[var(--radius)] border-2 border-[var(--primary)] bg-[var(--background)] px-3 py-[5px]"
          >
            <a
              id="instagram"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              class="text-[var(--primary-foreground] z-50 block size-6 bg-transparent transition-opacity hover:opacity-70"
              aria-label="instagram"
            >
              <svg role="img" viewBox="0 0 24 24" class="size-full" xmlns="http://www.w3.org/2000/svg">
                <title>Instagram</title>
                <path
                  d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                ></path>
              </svg>
            </a>
            <a
              id="facebook"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              class="text-[var(--primary-foreground] z-50 block size-6 bg-transparent transition-opacity hover:opacity-70"
              aria-label="facebook"
            >
              <svg
                role="img"
                fill="currentColor"
                class="size-full"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Facebook</title>
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                ></path>
              </svg>
            </a>
          </div>

          <!-- enclosure overlap when activated -->
          <div
            class="absolute bottom-1 left-0 right-0 top-0 rounded-t-[var(--radius)] bg-[var(--secondary)] opacity-0 transition-opacity ease-linear group-aria-expanded/mobile:opacity-100"
          >
            <!-- enclosure left bottom invert corner -->
            <span class="relative block size-full text-[var(--secondary)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute -left-[var(--radius)] bottom-0 block size-[var(--radius)] rotate-180 scale-105"
                viewBox="0 0 100 100"
              >
                <path d="m100,0H0v100C0,44.77,44.77,0,100,0Z" fill="currentColor"></path>
              </svg>
            </span>
          </div>

          <!-- enclosure main menu block -->
          <div
            v-if="isDropDownOpen"
            class="absolute right-0 top-full block h-fit w-[calc(100vw-20px)] -translate-y-1 rounded-[var(--radius)] rounded-tr-none bg-[var(--secondary)] px-5 py-[60px] opacity-0 transition-opacity ease-linear group-aria-expanded/mobile:opacity-100 sm:w-[calc(100vw-40px)] lg:hidden"
          >
            <ul aria-label="menu dropdown" class="text-[var(--foreground] flex w-full flex-col">
              <li class="delay-0">
                <a aria-current="true" href="#">Home</a>
              </li>
              <li class="delay-[50ms]">
                <a href="#">Services</a>
              </li>
              <li class="delay-100">
                <a href="#">About</a>
              </li>
              <li class="delay-150">
                <a href="#">Our Principles</a>
              </li>
              <li class="delay-200">
                <a href="#">Portal</a>
              </li>
              <li class="delay-[250ms]">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- desktop header -->
      <!-- right menu block -->
      <div
        class="ml-[calc(var(--radius)_/_2] my-auto hidden grow translate-y-2.5 flex-row items-center justify-between lg:flex"
      >
        <!-- main menu -->
        <div class="px-2.5">
          <div
            aria-label="desktop menu"
            class="flex flex-row flex-nowrap items-center rounded-[calc(var(--radius)_*_1.5)] bg-white/70 px-[25px] text-[var(--foreground)] backdrop-blur-md"
          >
            <a aria-current="true" href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">About</a>
            <a href="#">Our Principles</a>
            <a href="#">Portal</a>
            <a href="#">Contact</a>
          </div>
        </div>

        <!-- social links -->
        <div
          class="ml-auto mr-2.5 flex flex-row flex-nowrap items-center rounded-[calc(var(--radius)_*_1.5)] bg-white/70 px-2"
        >
          <a
            id="instagram"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[var(--primary-foreground] z-50 block size-10 bg-transparent p-2 transition-opacity hover:opacity-70"
            aria-label="instagram"
          >
            <svg role="img" viewBox="0 0 24 24" class="size-full" xmlns="http://www.w3.org/2000/svg">
              <title>Instagram</title>
              <path
                d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
              ></path>
            </svg>
          </a>
          <a
            id="facebook"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[var(--primary-foreground] z-50 block size-10 bg-transparent p-2 transition-opacity hover:opacity-70"
            aria-label="facebook"
          >
            <svg
              role="img"
              fill="currentColor"
              class="size-full"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Facebook</title>
              <path
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
ul[aria-label="menu dropdown"] > li {
  @apply -translate-y-3 opacity-0 transition duration-300 ease-linear group-aria-expanded/mobile:translate-y-0 group-aria-expanded/mobile:opacity-100;
}
ul[aria-label="menu dropdown"] > li > * {
  @apply block border-b border-[var(--primary)] py-4 text-3xl;
}
ul[aria-label="menu dropdown"] > li > *,
div[aria-label="desktop menu"] > * {
  @apply hover:text-[#005241];
}
ul[aria-label="menu dropdown"] > li > *[aria-current="true"],
div[aria-label="desktop menu"] > *[aria-current="true"] {
  @apply cursor-default hover:text-[var(--primary)];
}
div[aria-label="desktop menu"] > * {
  @apply px-[15px] py-5 text-base leading-5;
}
</style>
