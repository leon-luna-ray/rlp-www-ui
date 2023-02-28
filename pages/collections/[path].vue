<script setup>
const { path } = useRoute().params
</script>
<template>
    <div class="gallery-detail">
        <h1>Gallery Detail Page for {{ path }}</h1>
    </div>
</template>