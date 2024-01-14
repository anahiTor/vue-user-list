<script setup lang='ts'>
import { computed, ref } from 'vue';
import { DATE_OPTIONS, EDITABLE_FIELDS, LAST_VISITED_AT } from '@/consts';
import { useUsersStore } from '@/stores/users';
import type { User } from '@/types'

const props = defineProps<User>()
const store = useUsersStore()
const isEditMode = ref(false)

const calculatedTime = computed<string>(() => {
    const date = new Date(props.lastVisitedAt)
    return date.toLocaleString('en-EN', DATE_OPTIONS)
})

const editUser = (e: Event, key: string) => {
    store.editUser({ ...props, [key]: (e.target as HTMLInputElement).value })
}

</script>

<template>
    <div class='user-column'>
        <p v-for='value, key of props' :key='value'>
            <input 
                v-if='isEditMode && EDITABLE_FIELDS.includes(key)'
                :value="value"
                @change='(e) => editUser(e, key)' 
            />
            <span v-else>
                {{ key === LAST_VISITED_AT ? calculatedTime : value }}
            </span>
        </p>
        <p>
            <v-icon 
                :name='isEditMode ? "md-check-round" : "md-edit-round"'
                class='edit'
                @click="isEditMode = !isEditMode"
            />
            <v-icon 
                name='md-delete-round' 
                class='delete'
                @click='store.deleteUser(props.id)'
            />
        </p>
    </div>
</template>

<style lang='css' scoped>
.user-column {
    display: grid;
    grid-template-columns: .5fr 1fr 1fr 1.5fr 1fr 1fr;
    padding: .5rem;
    width: 100%;

    p {
        padding: 0 .3rem;
    }

    input {
        padding: .3rem;
        border-radius: 3px;
        border: transparent;
        outline: transparent;
    }
}

.edit {
    color: #6b86b7;
}

.delete {
    color: #d15249;
}
</style>
