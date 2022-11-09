<template>
  <header class="shadow-sm bg-white">
    <nav class="container mx-auto p-4"> 
      <NuxtLink to="/products">Nuxt Merch: Products</NuxtLink>
    </nav>
  </header>
  <main class="container mx-auto p-4">
    <slot />
  </main>
  <footer class="container mx-auto p-4 flex justify-between border-t-2">
    <ul class="flex gap-4">
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
      <li><NuxtLink to="/products">Products</NuxtLink></li>
    </ul>
  </footer>
</template>