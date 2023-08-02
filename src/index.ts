/**
 * This project is made under the MIT License.
 * Contact: scraayp@hostsapling.net
 */

import dotenv from 'dotenv'
import { Client, Collection } from 'discord.js'
import Sentry from '@sentry/node'

import { Logger } from './handler/Logger';

dotenv.config()

export const commandsCollection = new Collection<string, any>()

export const logger = new Logger();