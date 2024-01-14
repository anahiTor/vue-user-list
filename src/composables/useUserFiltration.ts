import type { User } from '@/types'
import { reactive } from 'vue'

const initialList= reactive([] as User[])

export function useUserFiltration(list: User[], query: string) {
    if (!initialList.length) {
        initialList.push(...list)
    }
    
    const filteredList = initialList.filter(item => {
        for (const value of Object.values(item)) {
            if ((value as number | string).toString().toLowerCase().includes(query.toLowerCase())) {
                return item
            }
        }
    })

    return {
        filteredList,
        initialList
    }
}