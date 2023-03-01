<script setup>
const { API_BASE_URL, HOME_PAGE_ID } = useRuntimeConfig()
const reqUrl = `${API_BASE_URL}/pages/${HOME_PAGE_ID}`
const { data } = await useFetch(reqUrl);
</script>
<template>
    <div v-if="data" class="p-5 flex flex-col gap-y-5">
        <div class="header">
            <div class="page-title">
                <h1>{{ data.title }}</h1>
                <h2 v-if="data.subtitle">{{ data.subtitle }}</h2>
            </div>
            <div v-if="data.intro" v-html="data.intro" class="intro"></div>
        </div>
        <ImageGrid :images="data.page_content[0].value.images"/>
    </div>
</template>