<script setup>
import { useUiStore } from '@/stores/ui'

// State
const uiStore = useUiStore()
// const currentIndex = ref(uiStore.openImageIndex)

// Computed
const cameraName = computed(() => {
    const make = uiStore.modalImages[uiStore.openImageIndex].value.exif_data.Make
    const model = uiStore.modalImages[uiStore.openImageIndex].value.exif_data.Model

    return make && model ? `${make} ${model}` : null;
})
const lensName = computed(() => {
    const make = uiStore.modalImages[uiStore.openImageIndex].value.exif_data.LensMake
    const model = uiStore.modalImages[uiStore.openImageIndex].value.exif_data.LensModel

    return make && model ? `${make} ${model}` : null;
})
const fNumber = computed(() => {
    const number = uiStore.modalImages[uiStore.openImageIndex].value.exif_data.FNumber

    return number ? `f / ${number}` : null;
})
const shutterSpeed = computed(() => {
    const seconds = uiStore.modalImages[uiStore.openImageIndex].value.exif_data.ShutterSpeedValue
    // const fraction = `1/`

    return seconds ? seconds : null;
})

// Methods
const nextImage = () => {
    if (uiStore.openImageIndex === uiStore.modalImages.length - 1) {
        uiStore.openImageIndex = 0
    }
    else {
        uiStore.openImageIndex++
    }
}
const previousImage = () => {
    if (uiStore.openImageIndex === 0) {
        uiStore.openImageIndex = uiStore.modalImages.length - 1;
    }
    else {
        uiStore.openImageIndex--
    }
}
</script>
<template>
    <div class="image-modal">
        <div class="p-5 grid grid-cols-7">
            <div class="image-wrap col-span-5" @click="uiStore.closeImageModal">
                <img :src="uiStore.modalImages[uiStore.openImageIndex].value.medium"
                    :alt="uiStore.modalImages[uiStore.openImageIndex].value.alt_text">
            </div>
            <div class="image-details col-span-2">
                <h1 class="title">{{ uiStore.modalImages[uiStore.openImageIndex].value.title }}</h1>
                <ul v-if="uiStore.modalImages[uiStore.openImageIndex].value.exif_data" class="image-data">
                    <li v-if="cameraName">Camera: {{ cameraName }}</li>
                    <li v-if="lensName">Lens: {{ lensName }}</li>
                    <li v-if="fNumber">{{ fNumber }}</li>
                    <!-- todo left off here 3/1/23 -->
                    <li v-if="shutterSpeed">S.S.: {{ shutterSpeed }}</li>
                    <li>ISO: {{ uiStore.modalImages[uiStore.openImageIndex].value.exif_data.ISOSpeedRatings }}</li>
                    <li>-/+: {{ uiStore.modalImages[uiStore.openImageIndex].value.exif_data.ExposureBiasValue }}</li>
                    <li>Focal Length: {{ uiStore.modalImages[uiStore.openImageIndex].value.exif_data.FocalLength }}</li>
                    <li>Focal Length (35mm): {{
                        uiStore.modalImages[uiStore.openImageIndex].value.exif_data.FocalLengthIn35mmFilm }}</li>
                    <li>Flash: {{ uiStore.modalImages[uiStore.openImageIndex].value.exif_data.Flash }}</li>
                    <li>Orientation: {{ uiStore.modalImages[uiStore.openImageIndex].value.orientation }}</li>
                    <li>Date: {{ uiStore.modalImages[uiStore.openImageIndex].value.exif_data.DateTimeOriginal }}</li>
                </ul>
                <div class="controls flex justify-between pt-5">
                    <div @click="previousImage" class="border-2">Previous</div>
                    <div @click="nextImage" class="border-2">Next</div>
                </div>
            </div>
        </div>
    </div>
</template>