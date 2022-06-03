<template>
    <nav class="nav">
        <RouterLink
            v-for="(path, label) in navItems"
            :class="{ active: path === $route.path }"
            :to="path"
        >
            {{ label }}
        </RouterLink>
    </nav>
    <h2>All Blogs</h2>
    <nav class="blog-nav">
        <RouterLink v-for="(id, title) in blogs" :to="`/blog/${id}`">{{
            title
        }}</RouterLink>
    </nav>
    <RouterView />
</template>

<script>
import { RouterView, RouterLink } from 'vue-router';

export default {
    name: 'App',
    components: { RouterView, RouterLink },
    data() {
        return {
            navItems: {
                Index: '/',
                About: '/about',
                Contact: '/contact',
            },
            blogs: {
                Hello: 1,
                'Hello Again': 2,
                'Some More Hello': 3,
                'Other Hello': 4,
            },
        };
    },
};
</script>

<style>
.nav {
    display: flex;
    gap: 1rem;
}

.nav .active {
    background-color: goldenrod;
}

.blog-nav {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>
