<template>
    <!-- <header>
        <nav class="flex justify-between">
            <div class="title">Ray Luna</div>
            <ul class="flex gap-x-5">
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/albums/cancun">Cancun 2022</NuxtLink>
                </li>
            </ul>
        </nav>
    </header> -->
    <main>
        <slot />
    </main>
</template>
<style>
.router-link-exact-active {
    border-bottom: 3px solid black;
}
</style>