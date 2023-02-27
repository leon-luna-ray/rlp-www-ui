<script setup>
const { slug } = useRoute().params
</script>
<template>
    <div class="gallery-detail">
        <h1>Gallery Detail Page for {{ slug }}</h1>
    </div>
</template>