export interface ListResponse<T> {
    error: boolean
    total: number
    page: number
    limit: number
    rooms: T[]
}