<script setup lang='ts'>
import { useUsersStore } from '@/stores/users';
const store = useUsersStore()
</script>

<template>
  <div class='search-bar'>
    <v-icon name='io-search-circle' class='search-icon'/>
    <input 
        placeholder='Search User'
        @input="(e) => store.filterUsers((e.target as HTMLInputElement).value)"
    />
  </div>
</template>

<style lang='css' scoped>
.search-bar {
    position: relative;
    width: 100%;
    .search-icon {
        position: absolute;
        top: .4rem;
        left: .3rem;
    }
    input {
        display: flex;
        width: 100%;
        height: 2rem;
        padding: 1rem .5rem 1rem 2rem;
        background-color: transparent;
        border: 1px solid #ffffff80;
        border-radius: 5px;
        color: var(--vt-c-white-soft);
        outline: transparent;
    }
    ::placeholder {
        color: #ffffff80;
    }
}
</style>
