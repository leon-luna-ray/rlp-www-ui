<script setup>
const props = defineProps({
    images: {
        type: Array,
        required: true,
    },
    openToIndex: {
        type: Number,
        required: true,
    }
})
// State
const currentIndex = ref(props.openToIndex)

// Computed
const cameraName = computed(() => {
    return `${props.images[currentIndex.value].value.exif_data.Make} ${props.images[currentIndex.value].value.exif_data.Model}`
})

// Methods
const nextImage = () => {
    if (currentIndex.value === props.images.length -1) {
        currentIndex.value = 0
    }
    else {
        currentIndex.value++
    }
}
const previousImage = () => {
    if (currentIndex.value === 0) {
        currentIndex.value = props.images.length - 1;
    }
    else {
        currentIndex.value--
    }
}
</script>
<template>
    <div class="image-modal">
        <div class="p-5 grid grid-cols-7">
            <div class="image-wrap col-span-5">
                <img :src="images[currentIndex].value.medium" :alt="images[currentIndex].value.alt_text">
            </div>
            <div class="image-details col-span-2">
                <h1 class="title">{{ images[currentIndex].value.title }}</h1>
                <ul class="image-data">
                    <li>Camera: {{ cameraName }}</li>
                    <li>Lens: {{ images[currentIndex].value.exif_data.LensModel }}</li>
                    <li>f/{{ images[currentIndex].value.exif_data.FNumber }}</li>
                    <li>S.S.: {{ images[currentIndex].value.exif_data.ShutterSpeedValue }}</li>
                    <li>ISO: {{ images[currentIndex].value.exif_data.ISOSpeedRatings }}</li>
                    <li>-/+: {{ images[currentIndex].value.exif_data.ExposureBiasValue }}</li>
                    <li>Focal Length: {{ images[currentIndex].value.exif_data.FocalLength }}</li>
                    <li>Focal Length (35mm): {{ images[currentIndex].value.exif_data.FocalLengthIn35mmFilm }}</li>
                    <li>Flash: {{ images[currentIndex].value.exif_data.Flash }}</li>
                    <li>Orientation: {{ images[currentIndex].value.orientation }}</li>
                    <li>Date: {{ images[currentIndex].value.exif_data.DateTimeOriginal }}</li>
                </ul>
                <!-- Todo reimplemnt prev/next once Pinia store is setup -->
                <!-- <div class="controls flex justify-between pt-5">
                    <div @click="previousImage" class="border-2">Previous</div>
                    <div @click="nextImage" class="border-2">Next</div>
                </div> -->
            </div>
        </div>
    </div>
</template>