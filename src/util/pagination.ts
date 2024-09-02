import { Context } from 'elysia'

type Props<T> = {
    data: T[]
    page: number | undefined
    limit: number | undefined
    set: Context['set']
}

export function pagination<T>({ data, page = 1, limit = 10, set }: Props<T>) {
    const total = data.length
    let start = (page - 1) * limit
    let end = start + limit

    if (start < 0) {
        start = 0
    }

    if (end > total) {
        end = total
    }

    if (start > total) {
        set.status = 404
        return { message: 'No data found' }
    }

    return {
        total,
        page,
        limit,
        data: data.slice(start, end)
    }
}
