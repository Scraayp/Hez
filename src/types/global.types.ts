export type Settings = {
    intents: number[]
    presence: {
        activities: {
            name: string
            type: number
        }[]
        status: string
    }

    // Support server
    supportServer: {
        id: string
        invite: string
    }

    // Pre made users
    ownerID: string
    developers: Array<string>
}