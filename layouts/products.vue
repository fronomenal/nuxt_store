<template>
  <header>
    <nav> 
      <NuxtLink to="/products">Nuxt Merch: Products</NuxtLink>
    </nav>
  </header>
  <main>
    <slot />
  </main>
  <footer>
    <ul>
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
      <li><NuxtLink to="/products">Products</NuxtLink></li>
    </ul>
  </footer>
</template>