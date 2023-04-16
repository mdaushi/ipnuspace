<template>
  <div class="px-4">
    <main class="mx-auto mt-12 h-full w-full max-w-5xl justify-center">
      <div>
        <AppHero
          :before-title="beforeTitle"
          :after-title="afterTitle"
          :description="description"
        ></AppHero>
        <div class="mt-4">
          <h1 class="text-2xl md:text-3xl font-black text-neutral-700">
            Kenapa aplikasi ini dibuat?
          </h1>
          <p class="mt-2 text-left md:text-lg tracking-wide text-neutral-700">
            aplikasi ini buat sebagai tempat berbagi informasi. ada banyak hal
            yang manarik tentang Pelajar Nahdlatul Ulama yang tersebar disemua
            sosial media. semua informasi organisasi, usaha, komunitas
            pengembangan bakat yang berkaitan tentang Pelajar Nahdlatul Ulama
            bisa terhimpun diaplikasi ini.
          </p>
          <p class="mt-3 text-left md:text-lg tracking-wide text-neutral-700">
            aplikasi ini akan terus dikembangkan dengan fitur-fitur yang
            memudahkan mengelolaan informasi. kamu bisa beri kritik atau saran
            melalui sosial media saya.
            <span class="font-black">Semoga bermanfaat.</span>
          </p>
        </div>
        <div class="mt-5">
          <h1 class="text-2xl md:text-3xl font-black text-neutral-700">
            Cara tambah data
          </h1>
          <p class="mt-3 text-left md:text-lg tracking-wide text-neutral-700">
            untuk menambah data, kamu dapat mengakses
            <a
              href="/tambah"
              target="_blank"
              class="underline decoration-2 underline-offset-4 decoration-orange-400 hover:text-orange-400"
            >
              {{ linkTambah }}
            </a>
            atau klik
            <a
              href="/tambah"
              class="underline decoration-2 underline-offset-4 decoration-orange-400 hover:text-orange-400"
              target="_blank"
            >
              disini
            </a>
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
const beforeTitle = "Apa itu";
const afterTitle = "?";
const description =
  "Kumpulan hal menarik dari Pelajar Nahdlatul Ulama. dibuat oleh <a class='underline decoration-2 underline-offset-4 decoration-orange-400 hover:text-orange-400' href='https://www.instagram.com/mdaushi_/' target='_blank' >Muhammad Firdaus</a>, untuk rekan-rekanita, gratis";

const linkTambah = process.env.URL_TAMBAH_DATA;
</script>
