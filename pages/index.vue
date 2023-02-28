<script setup>
const reqUrl = `${import.meta.env.VITE_APP_API_BASE_URL}/pages/${import.meta.env.VITE_APP_HOME_PAGE_ID}`
const { data } = await useFetch(reqUrl);
const modalOpen = ref(false)
const modalImage = ref(null)


const openModal = (image) => {
    modalOpen.value = true;
    modalImage.value = image;
}
const closeModal=()=>{
    modalOpen.value = false;
}
</script>
<template>
    <div v-if="data && !modalOpen" class="p-5 flex flex-col gap-y-5">
        <div class="header">
            <div class="page-title">
                <h1>{{ data.title }}</h1>
                <h2 v-if="data.subtitle">{{ data.subtitle }}</h2>
            </div>
            <div v-if="data.intro" v-html="data.intro" class="intro"></div>
        </div>
        <div class="image-grid">
            <div v-for="image in data.page_content[0].value.images" class="image-wrap" @click="openModal(image)">
                <img :src="image.value.thumbnail" :alt="image.value.alt_text">
            </div>
        </div>
    </div>
    <div v-else-if="modalImage && modalOpen" class="image-modal" @click="closeModal">
        <div class="p-5 grid grid-cols-7">

            <div class="image-wrap col-span-5">
                <img :src="modalImage.value.medium" :alt="modalImage.value.alt_text">
            </div>
            <div class="image-details col-span-2">
                <h1 class="title">{{ modalImage.value.title }}</h1>
                <ul class="image-data">
                    <li>Make: {{ modalImage.value.exif_data.Make }}</li>
                    <li>Model: {{ modalImage.value.exif_data.Model }}</li>
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