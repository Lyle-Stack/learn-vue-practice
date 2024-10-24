<script setup lang="ts">
import AppStandardCard from "../oragnisms/AppStandardCard.vue";

type BlogPost = {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  category: string;
  categoryBadgeBgColor?: string;
  href: string;
};
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title:
      "Shaping Innovation Futures: Uncovering the Infrastructure Required for Resilient and Regenerative Futures in Australia",
    category: "Beyond the bench",
    categoryBadgeBgColor: "#32c58b",
    description: "On building infrastructure to drive systemic innovation and foster regenerative futures",
    imageSrc:
      "https://colabs.com.au/_next/image?url=https%3A%2F%2Fcolabs.yourcreative.com.au%2Fwp-content%2Fuploads%2F2024%2F10%2Ffractal-tree-art.png&w=3840&q=75",
    imageAlt: "fractal tree art",
    href: "#",
  },
  {
    id: 2,
    title: "Be the Nail, Not the Hammer",
    category: "Resources",
    categoryBadgeBgColor: "#d9db4d",
    description:
      "At Colabs, we’ve seen that successful biotech startups don’t just chase great ideas – they focus on solving the right problems.",
    imageSrc:
      "https://colabs.com.au/_next/image?url=https%3A%2F%2Fcolabs.yourcreative.com.au%2Fwp-content%2Fuploads%2F2024%2F10%2FUntitled-design-27.png&w=3840&q=75",
    imageAlt: "Untitled design (27)",
    href: "#",
  },
  {
    id: 3,
    title: "Why Dedicated Spaces for Biotech, Deep Tech, and Climate Tech Startups Are Key to Driving Innovation",
    category: "Thoughts",
    categoryBadgeBgColor: "#d9db4d",
    description: "And how CoLabs can help you on your journey towards positive impact. ",
    imageSrc:
      "https://colabs.com.au/_next/image?url=https%3A%2F%2Fcolabs.yourcreative.com.au%2Fwp-content%2Fuploads%2F2024%2F10%2FDSCF1847.jpg&w=3840&q=75",
    imageAlt: "DSCF1847",
    href: "#",
  },
];
</script>

<template>
  <section class="screen-width py-20 lg:py-40">
    <h2
      class="w-full pb-10 text-[clamp(2.125rem,_1.55rem_+_1.6vw,_3.375rem)] leading-[1.1] tracking-tighter sm:pb-20 md:max-w-xl lg:max-w-3xl"
    >
      Space for big thinking, problem-solvers and bio-innovators
    </h2>

    <h2
      class="mb-[30px] inline-block rounded-full border border-[var(--primary)] bg-[var(--background)] px-3.5 py-1 text-lg leading-[1.1] tracking-tighter text-[var(--foreground)]"
    >
      Community
    </h2>
    <div class="grid grid-cols-1 gap-x-2.5 gap-y-[60px] sm:grid-cols-2 md:grid-cols-3">
      <template v-for="post in blogPosts" :key="`blog-section-post-${post.id}`">
        <AppStandardCard
          :title-text="post.title"
          :badge-text="post.category"
          :description-text="post.description"
          :href="post.href"
          :badge-bg-color="post.categoryBadgeBgColor"
        >
          <template #image>
            <img :src="post.imageSrc" :alt="post.imageAlt" class="size-full object-cover" />
          </template>
        </AppStandardCard>
      </template>
    </div>
  </section>
</template>
