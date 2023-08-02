/**
 * This project is made under the MIT License.
 * Contact: scraayp@hostsapling.net
 */

import dotenv from 'dotenv'
import { Client, Collection } from 'discord.js'

dotenv.config()

export const client = new Client({
    intents: Settings.intents,
    presence: Settings.presence,
});



export const commandsCollection = new Collection<string, any>()