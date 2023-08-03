/**
 * This project is made under the MIT License.
 * Contact: scraayp@hostsapling.net
 */

import { Collection } from 'discord.js';

import { Logger } from './handler/Logger';
import { client } from './handler/Discord/Client';
import { sentryClient } from './handler/Sentry';

// Create a collection for the commands.
export const commandsCollection = new Collection<string, any>();

// Load in the logger.
export const logger = new Logger();

// Load in the Sentry client.
export const sentryClientC = new sentryClient();

// Load in the Discord client.
export const discordClient = new client();
