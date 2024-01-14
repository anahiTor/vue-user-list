import { ref, type Ref } from 'vue'
import jsonData from '../userList.json'
import type { User } from '@/types'

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function useFetchUsers() {
    const usersList: Ref<User[] | null> = ref(null)
    await timeout(1500)
    usersList.value = [...jsonData]
  return { usersList }
}
