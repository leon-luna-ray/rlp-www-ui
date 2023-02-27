<script setup>
const data = await useFetch('http://localhost:8000/api/v2/pages/')

</script>
<template>
    <div class="container">
        <div class="page-title">
            <h1>Home</h1>
            <h2>Subtitle</h2>
        </div>
        <div class="intro">Intro</div>
    </div>
</template>