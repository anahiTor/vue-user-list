export type User = {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    lastVisitedAt: number 
}

export type NewUser = {
    firstName: string,
    lastName: string,
    email: string 
}