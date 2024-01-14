<script setup lang='ts'>
import { reactive } from 'vue';
import BaseButton from './BaseButton.vue';
import { ADD_USER_FIELDS } from '@/consts';
import { type NewUser } from '@/types';
import { useUsersStore } from '@/stores/users';

const props = defineProps<{ open: boolean }>()
const emit = defineEmits({ closeModal: () => ({}) })
const store = useUsersStore()

const newUser = reactive<NewUser>({
    firstName: '',
    lastName: '',
    email: '',
})

const addNewUser = () => {
    store.addNewUser(newUser)
    newUser.firstName = ''
    newUser.lastName = ''
    newUser.email = ''
    emit('closeModal')
}
</script>

<template>
    <Teleport to="body">
        <div v-if="props.open" class="modal">
            <h3>Add New User</h3>
            <form @submit.prevent='addNewUser'>
                <div v-for='{ name, label, type } in ADD_USER_FIELDS' :key='name' class='form-item'>
                    <label :for='name'>{{ label }}</label>
                    <input 
                        v-model='(newUser[name as keyof typeof newUser])'
                        :name='name' 
                        :type="type" 
                        required 
                    />
                </div>
                <BaseButton @click='emit("closeModal")'>Close</BaseButton>
                <BaseButton class='add-btn'>Add</BaseButton>
            </form>
        </div>
    </Teleport>
</template>

<style scoped>
.modal {
    position: fixed;
    z-index: 999;
    top: 20%;
    left: 50%;
    width: 300px;
    padding: 1rem;
    margin-left: -150px;
    border-radius: 5px;
    background-color: var(--vt-c-black-soft);
}

form {
    margin-top: 1rem;
}

.form-item {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}

button {
    padding: .5rem 1rem;
    margin-right: .5rem;
    border-radius: 5px;
    border: transparent;
    cursor: pointer;
}

.add-btn {
    background-color: #607D8B;
    color: #fff;
}
</style>