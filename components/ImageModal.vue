<script setup>
import { useUiStore } from '@/stores/ui'

// State
const uiStore = useUiStore()
// const currentIndex = ref(uiStore.openImageIndex)

// Computed
// const cameraName = computed(() => {
//     return `${props.images[currentIndex.value].value.exif_data.Make} ${props.images[currentIndex.value].value.exif_data.Model}`
// })

// // Methods
// const nextImage = () => {
//     if (currentIndex.value === props.images.length - 1) {
//         currentIndex.value = 0
//     }
//     else {
//         currentIndex.value++
//     }
// }
// const previousImage = () => {
//     if (currentIndex.value === 0) {
//         currentIndex.value = props.images.length - 1;
//     }
//     else {
//         currentIndex.value--
//     }
// }
</script>
<template>
    <div class="image-modal">
        <h1>Modal</h1>
        <div class="p-5 grid grid-cols-7">
            <div class="image-wrap col-span-5" @click="uiStore.closeImageModal">
                <img :src="uiStore.modalImages[uiStore.openImageIndex].value.medium" :alt="uiStore.modalImages[uiStore.openImageIndex].value.alt_text">
            </div>
            <div class="image-details col-span-2">
<!-- -->
            </div>
        </div>
    </div>
</template>