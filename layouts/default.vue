<template>
  <header>
    <nav> 
      <NuxtLink to="/">Nuxt Merch</NuxtLink>
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink to="/products">Products</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
  <main>
      <slot/>
  </main>
</template>

<style>
  .router-link-exact-active{
    color: cyan;
  }
</style>