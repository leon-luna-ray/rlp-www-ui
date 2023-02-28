<script setup>
const reqUrl = `${import.meta.env.VITE_APP_API_BASE_URL}/pages/${import.meta.env.VITE_APP_HOME_PAGE_ID}`
const { data } = await useFetch(reqUrl);
</script>
<template>
    <div v-if="data" class="p-5 flex flex-col gap-y-5">
        <div class="header">
            <div class="page-title">
                <h1>{{ data.title }}</h1>
                <h2 v-if="data.subtitle">{{ data.subtitle }}</h2>
            </div>
            <div v-if="data.intro" v-html="data.intro"  class="intro"></div>
        </div>
        <div class="image-grid">
            <div v-for="image in data.page_content[0].value.images" class="image-wrap">
                <img :src="image.value.thumbnail" :alt="image.value.alt_text">
            </div>
        </div>
    </div>
</template>