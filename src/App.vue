<script setup lang='ts'>
import { ref } from 'vue';
import SearchBar from './components/SearchBar.vue';
import UsersTable from './components/UsersTable.vue'
import AddUserModal from './components/AddUserModal.vue';
import BaseButton from './components/BaseButton.vue';

const openModal = ref(false)
</script>

<template>
  <header>
    <h1>Users</h1>
  </header>
  <main class='main'>
    <div class='toolbar'>
      <SearchBar />
      <BaseButton class='add-icon' @click='openModal = true'>
        <v-icon name='io-add-circle' />
      </BaseButton>
    </div>
    <UsersTable />
    <AddUserModal :open='openModal' @close-modal="openModal = false"/>
  </main>
</template>

<style scoped>
.main {
  padding: 2rem;
  margin-top: 2rem;
  background-color: var(--vt-c-indigo);
  border-radius: 5px;
  overflow-y: hidden;
}

.add-icon {
  width: 35px;
  height: 35px;
  margin-left: .5rem;
  cursor: pointer;
  
}

.toolbar {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
