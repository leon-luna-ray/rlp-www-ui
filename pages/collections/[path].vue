<script setup>
const { path } = useRoute().params
const reqUrl = `${import.meta.env.VITE_APP_API_BASE_URL}/pages/5`
const { data } = await useFetch(reqUrl);

</script>
<template>
    <div v-if="data" class="gallery-detail">
        <h1>Gallery Detail Page for {{ data.title }}</h1>
        <ImageGrid :images="data.images"/>
    </div>
</template>