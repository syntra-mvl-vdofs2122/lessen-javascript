<template>
  <div>
    <header>Admin header</header>
    <nav>
      <NuxtLink to="/">Index</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/blog">Blog</NuxtLink>
      <NuxtLink to="/blog/2">Blog 2</NuxtLink>
    </nav>
    <Nuxt />
    <footer>Test footer</footer>
  </div>
</template>

<script>
export default {
  name: 'AdminLayout',
};
</script>

<style scoped></style>
