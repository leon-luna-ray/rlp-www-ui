<script setup>
import { useUiStore } from '@/stores/ui'

const uiStore = useUiStore();
</script>
<template>
    <header>
        <nav class="flex justify-between">
            <div></div>
            <ul class="flex gap-x-5">
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
    <main>
        <!-- todo make this a semi-transparent bg rather than full-screen -->
        <ImageModal v-if="uiStore.imageModalOpen && uiStore.modalImages.length" />
        <slot v-else />
    </main>
</template>
<style>
.router-link-exact-active {
    border-bottom: 3px solid black;
}
</style>