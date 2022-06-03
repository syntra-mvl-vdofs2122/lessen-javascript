import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(''),
    routes: [
        {
            path: '/',
            name: 'index',
            component: () => import('../views/Index.vue'),
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/About.vue'),
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('../views/Contact.vue'),
        },
        {
            path: '/blog/:id',
            name: 'blog',
            component: () => import('../views/Blog.vue'),
        },
    ],
});

export default router;
