import { PrismaClient } from '@prisma/client';
import chalk from 'chalk';

export class prismaClient extends PrismaClient {
  constructor() {
    super();
    this.start();
  }

  async start(): Promise<void> {
    await this.$connect();

    console.log(chalk.greenBright('[PRISMA]'), 'connected');
  }
}
