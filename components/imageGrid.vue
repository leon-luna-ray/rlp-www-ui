<script setup>
const props = defineProps({
    images: {
        type: Array,
        required: true,
    }
})
const modalOpen = ref(false)
const openToIndex = ref(0)

const openModal = (index) => {
    openToIndex.value = index
    modalOpen.value = true;
}
const closeModal = () => {
    modalOpen.value = false;
}
</script>
<template>
    <div v-if="!modalOpen" class="image-grid">
        <div v-for="(image, index) in images" class="image-wrap" @click="openModal(index)">
            <img :src="image.value.thumbnail" :alt="image.value.alt_text">
        </div>
    </div>
    <ImageModal v-else-if="images.length && modalOpen" :images="images" :openToIndex="openToIndex" @click="closeModal" />
</template>