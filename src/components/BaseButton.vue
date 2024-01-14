<script setup lang="ts"></script>

<template>
    <button v-bind='$attrs' class='base-button'>
        <slot />
    </button>
</template>

<style lang="css" scoped>
</style>