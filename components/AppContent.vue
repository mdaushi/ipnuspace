<template>
  <div class="md:px-0 mt-2 grid grid-cols-1 gap-4 md:grid-cols-2">
    <div
      v-for="col in contents"
      :key="col"
      class="flex h-full flex-col space-y-2 rounded-xl border border-neutral-200 p-4 transition-all ease-in-out @hover:cursor-pointer hover:border-teal-600 hover:bg-neutral-50"
      href="https://www.figma.com/community/plugin/1125115259670703238"
      target="_blank"
      rel="noreferrer"
    >
      <div class="flex h-max w-full justify-between pb-2">
        <!-- img -->
      </div>
      <div class="flex h-full w-full flex-col justify-start">
        <headline class="text-md mr-2 block font-bold text-neutral-700">{{
          col.nama
        }}</headline>
        <p
          class="block h-max text-sm leading-relaxed tracking-wide text-neutral-500 md:text-base"
        >
          {{ col.deskripsi }}
        </p>
      </div>
      <div class="flex items-center justify-between pt-4">
        <!-- links sosmed -->
        <div class="flex w-full items-center gap-2">
          <!-- Facebook -->
          <a
            v-show="col.facebook"
            :href="col.facebook"
            target="_blank"
            rel="noreferrer"
            class="flex w-max items-center justify-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 font-mono text-xs font-normal uppercase leading-tight text-teal-700 hover:cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="mr-2 h-3 w-3"
            >
              <path
                fill-rule="evenodd"
                d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
                clip-rule="evenodd"
              />
            </svg>

            <span>Facebook</span>
          </a>

          <!-- Instagram -->
          <a
            v-show="col.instagram"
            :href="col.instagram"
            target="_blank"
            rel="noreferrer"
            class="flex w-max items-center justify-center rounded-full border border-red-200 bg-red-50 px-3 py-1 font-mono text-xs font-normal uppercase leading-tight text-red-700 hover:cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="mr-2 h-3 w-3"
            >
              <path
                fill-rule="evenodd"
                d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
                clip-rule="evenodd"
              />
            </svg>

            <span>Instagram</span>
          </a>

          <!-- other -->
          <a
            v-show="col.website"
            :href="col.website"
            target="_blank"
            rel="noreferrer"
            class="flex w-max items-center justify-center rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 font-mono text-xs font-normal uppercase leading-tight text-cyan-700 hover:cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-3 h-3 mr-2"
            >
              <path
                fill-rule="evenodd"
                d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
                clip-rule="evenodd"
              />
            </svg>

            <span>Website</span>
          </a>
        </div>

        <!-- kategori -->
        <div class="hidden md:inline">
          <div
            class="flex w-max items-center justify-center rounded-lg border px-3 py-1 font-mono text-xs font-normal uppercase leading-tight border border-zinc-200 bg-zinc-50 text-zinc-700"
          >
            {{ col.kategori }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useContents } from "~/store/contents";

const contentsStore = useContents();

contentsStore.getContent();

const { contents } = storeToRefs(contentsStore);
</script>
