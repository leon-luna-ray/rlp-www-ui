<template>
    <header>
        <nav>
            <ul>
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/albums/cancun">Cancun 2022</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
    <main>
        <slot />
    </main>
</template>
<style>
.router-link-exact-active {
    border-bottom: 3px solid red;
}
</style>