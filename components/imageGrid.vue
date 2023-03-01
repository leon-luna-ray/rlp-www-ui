<script setup>
const props = defineProps({
    images: {
        type: Array,
        required: true,
    }
})
const modalOpen = ref(false)
const modalImage = ref(null)

const cameraName = computed(()=>{
    return `${modalImage.value.value.exif_data.Make} ${modalImage.value.value.exif_data.Model}`
})

const openModal = (image) => {
    modalOpen.value = true;
    modalImage.value = image;
}
const closeModal = () => {
    modalOpen.value = false;
}
</script>
<template>
    <div v-if="!modalOpen" class="image-grid">
        <div v-for="image in images" class="image-wrap" @click="openModal(image)">
            <img :src="image.value.thumbnail" :alt="image.value.alt_text">
        </div>
    </div>
    <!-- Todo refactor this to separate component -->
    <div v-else-if="modalImage && modalOpen" class="image-modal" @click="closeModal">
        <div class="p-5 grid grid-cols-7">
            <div class="image-wrap col-span-5">
                <img :src="modalImage.value.medium" :alt="modalImage.value.alt_text">
            </div>
            <div class="image-details col-span-2">
                <h1 class="title">{{ modalImage.value.title }}</h1>
                <ul class="image-data">
                    <li>Camera: {{ cameraName }}</li>
                    <li>Lens: {{ modalImage.value.exif_data.LensModel }}</li>
                    <li>f/{{ modalImage.value.exif_data.FNumber }}</li>
                    <li>S.S.: {{ modalImage.value.exif_data.ShutterSpeedValue }}</li>
                    <li>ISO: {{ modalImage.value.exif_data.ISOSpeedRatings }}</li>
                    <li>-/+: {{ modalImage.value.exif_data.ExposureBiasValue }}</li>
                    <li>Focal Length: {{ modalImage.value.exif_data.FocalLength }}</li>
                    <li>Focal Length (35mm): {{ modalImage.value.exif_data.FocalLengthIn35mmFilm }}</li>
                    <li>Flash: {{ modalImage.value.exif_data.Flash }}</li>
                    <li>Orientation: {{ modalImage.value.orientation }}</li>
                    <li>Date: {{ modalImage.value.exif_data.DateTimeOriginal }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>