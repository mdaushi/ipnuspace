<template>
  <div class="mt-4 grid grid-cols-1 items-center gap-4 md:grid-cols-2">
    <div>
      <FilterSelect></FilterSelect>
    </div>
    <input
      type="search"
      class="rounded-full bg-zinc-100 px-4 py-2 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-lime-500 dark:bg-zinc-900 dark:text-zinc-300 w-full h-10 text-sm md:rounded-md md:p-2"
      placeholder="Cari.."
      value=""
    />
  </div>
</template>
