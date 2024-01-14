<script setup lang='ts'>
import { storeToRefs } from 'pinia';
import { onBeforeMount, ref } from 'vue';
import { useUsersStore } from '@/stores/users';
import { TABLE_HEAD, SORTABLE_FIELDS } from '@/consts';
import type { User } from '@/types';
import UserTableRow from './UserTableRow.vue';

const store = useUsersStore()
const { usersList } = storeToRefs(store)
const loading = ref(false)

onBeforeMount(async () => {
  loading.value = true
  await store.fetchUserList()
  loading.value = false
})
</script>

<template>
  <div class='user-table'>
    <div class='table-head'>
      <div v-for='{ title, field } in TABLE_HEAD' :key='title' class='table-head-col'>
        <p>{{ title }}</p>
        <v-icon 
          v-if='SORTABLE_FIELDS.includes(field)'
          @click='store.sortBy(field as keyof User)'
          name='fa-sort' 
        />
      </div>
    </div>
    <template v-if='loading'>
      <v-icon name='fa-spinner'  animation='spin' class='spin'/>
    </template>
    <div v-else class='table-body'>
        <div v-for='user in usersList' :key='user.id' class='user-row'>
          <UserTableRow v-bind='user' />
        </div>
    </div>
  </div>
</template>

<style lang='css' scoped>
.table-head {
  display: grid;
  grid-template-columns: .5fr 1fr 1fr 1.5fr 1fr 1fr;
  width: 100%;
  padding: .5rem;
  background-color: #1d2833;
  border-radius: 5px;

  p {
    padding: 0 .3rem;
  }
}

.user-row {
  width: 100%;
  transition: .3s;
  cursor: pointer;

  :hover {
    border-radius: 5px;
    background-color: #1d2833ab;
  }
}
.spin {
  width: 40px;
  height: 40px;
  margin-top: 3rem;
  color: #1d2833;
}

.user-table {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  max-height: calc(100vh - 250px);
}

.table-head-col {
  display: flex;
  align-items: center;
}

.table-body {
  width: 100%;
  min-height: max-content;
  overflow-y: auto;
}
</style>