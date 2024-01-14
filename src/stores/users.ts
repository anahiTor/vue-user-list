import { defineStore } from 'pinia'
import type { NewUser, User } from '@/types'
import { useFetchUsers } from '@/composables/useFetchUsers'
import { reactive } from 'vue'
import { useUserFiltration } from '@/composables/useUserFiltration'

interface State {
  users: User[],
}

export const useUsersStore = defineStore('users', {
  state: (): State => ({
    users: reactive([])
  }),
  getters: {
    usersList: (state): User[] => state.users,
    getUserById: (state) => {
      return (userId: number) => state.users.find((u) => u.id === userId)
    },
    sortBy: (state) => {
      return (key: keyof User) => state.users.sort((a,b) => a[key] > b[key] ? 1 : -1)
    }
  },
  actions: {
    async fetchUserList() {
      try {
        const { usersList } = await useFetchUsers()
        if (usersList) {
          this.users = usersList.value as User[]
        }
      } catch (e) {
        console.error(e)
      }
    },
    editUser(updatedUser: User) {
      const user = this.getUserById(updatedUser.id)
      if (user) {
        user.lastName = updatedUser.lastName
        user.firstName = updatedUser.firstName
        user.email = updatedUser.email
      }
    },
    deleteUser(userId: number) {
      this.users = this.users.filter((u) => u.id !== userId)
    },
    filterUsers(query: string) {
      const { filteredList, initialList } = useUserFiltration(this.users, query)
      this.users = query ? filteredList : initialList
    },
    addNewUser(user: NewUser) {
      this.users.unshift({
        id: this.users.length + 1,
        ...user,
        lastVisitedAt: Date.now()
      })
    }
  }
})
