<template>
  <div class="px-4">
    <main class="mx-auto mt-12 h-full w-full max-w-5xl justify-center">
      <div>
        <AppHero :description="description"></AppHero>
        <FilterComponent></FilterComponent>
        <AppContent></AppContent>
      </div>
    </main>
  </div>
</template>

<script setup>
const description =
  "Banyak hal menarik dari Pelajar Nahdlatul Ulama, mari saling kenal, saling beri impect. sebaran hal positif dari rekan-rekanita.";
</script>
