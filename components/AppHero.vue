<template>
  <h1
    class="flex w-full justify-center pt-12 text-4xl md:text-5xl font-black text-neutral-800"
  >
    {{ beforeTitle }} IPNU<span class="text-neutral-400">.</span>SPACE
    {{ afterTitle }}
  </h1>
  <div class="mx-auto max-w-3xl">
    <div class="flex w-full justify-center py-4 sm:px-6 lg:px-8">
      <h2
        class="text-left text-md md:text-xl tracking-wide text-neutral-700 md:text-center"
      >
        <span v-html="description"></span>
      </h2>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  description: String,
  beforeTitle: String,
  afterTitle: String,
});
</script>
