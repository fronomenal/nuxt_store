<template>
  <header class="shadow-sm bg-white">
    <nav class="container mx-auto p-4 flex justify-between"> 
      <NuxtLink to="/">Nuxt Merch</NuxtLink>
      <ul class="flex gap-4">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
      </ul>
    </nav>
  </header>
  <main class="container mx-auto p-4">
    <slot />
  </main>
</template>

<style>
  .router-link-exact-active{
    color: cyan;
  }
</style>