<script setup>
const reqUrl = `${import.meta.env.VITE_APP_API_BASE_URL}/pages/${import.meta.env.VITE_APP_HOME_PAGE_ID}`
const { data } = await useFetch(reqUrl);
</script>
<template>
    <div v-if="data" class="container">
        <div class="page-title">
            <h1>{{ data.title }}</h1>
            <h2>{{ data.subtitle }}</h2>
        </div>
        <div class="intro" v-html="data.intro"></div>
        <img :src="data.hero_image.thumbnail" :alt="data.hero_image.alt_text">
    </div>
</template>