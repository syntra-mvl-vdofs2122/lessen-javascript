<template>
  <div>
    <header>Test header</header>
    <nav>
      <NuxtLink to="/">Index</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/blog">Blog</NuxtLink>
      <NuxtLink to="/blog/3">Blog 3</NuxtLink>
    </nav>
    <Nuxt />
    <footer>Test footer</footer>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
};
</script>

<style scoped></style>
