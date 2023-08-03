import chalk from 'chalk';
import { Client } from 'discord.js';

import dotenv from 'dotenv';
import { logger } from '../..';

dotenv.config();

// @ts-ignore
const intents = process.env.DISCORD_TOKEN | 3184231;

export class client extends Client {
  public constructor() {
    super({ intents: intents });
    this.start();
  }

  public async start(): Promise<void> {
    await this.login(process.env.DISCORD_TOKEN).catch(async (err) => {
      await logger.error(err, true);
      return;
    });
    console.log(chalk.cyan('[Client]'), 'initialized client.');
    // @ts-ignore
    console.log(chalk.cyan('[Client]'), 'logged in as', this.user.tag);
    console.log('=====================================');
  }

  public async stop(): Promise<void> {
    this.destroy();
  }
}
