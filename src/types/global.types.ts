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

export type GuildSettings = {
    prefix: string
    language: string
    disabledChannels: string[]
    automod: {
        enabled: boolean

        antiinvite: boolean
        antilink: boolean
        antiPhish: boolean

        antispam: boolean
        antispamCooldown: number
        antispamThreshold: number

        // Ignored spam
        ignoredRoles: string[]
        ignoredChannels: string[]
        ignoredMembers: string[]
        ignoredPermissions: string[]
        ignoredLinks: string[]
        ignoredWords: string[]
        ignoredInvites: string[]
    },

    // Logging
    logging: {
        enabled: boolean
        autoMod: boolean

        channel: boolean
        embed: {
            title: string | "Hez Logger | ${event}"
            description: string
            color: string | "RANDOM"
            footer: string | "Hez Logger"
        }

        messageDelete: boolean
        messageUpdate: boolean
        messageDeleteBulk: boolean

        memberJoin: boolean
        memberLeave: boolean

        memberBan: boolean
        memberUnban: boolean

        memberNicknameUpdate: boolean
        memberRoleUpdate: boolean

        memberBoost: boolean
        memberBoostTier: boolean

        channelCreate: boolean
        channelDelete: boolean
        channelUpdate: boolean

        roleCreate: boolean
        roleDelete: boolean
        roleUpdate: boolean

        inviteCreate: boolean
        inviteDelete: boolean

        emojiCreate: boolean
        emojiDelete: boolean
        emojiUpdate: boolean

        webhookCreate: boolean
        webhookDelete: boolean
        webhookUpdate: boolean

        memberRoleAdd: boolean
        memberRoleRemove: boolean
    },

    // Moderation
    moderation: {
        enabled: boolean,

    }
}