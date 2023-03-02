<script setup>
import { useUiStore } from '@/stores/ui'

const props = defineProps({
    images: {
        type: Array,
        required: true,
    }
})
// State
const uiStore = useUiStore()

</script>
<template>
    <div v-if="!uiStore.imageModalOpen" class="image-grid">
        <div v-for="(image, index) in images" class="image-wrap" @click="uiStore.openImageModal(images, index)">
            <img :src="image.value.thumbnail" :alt="image.value.alt_text">
        </div>
    </div>
</template>