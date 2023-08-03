import * as Sentry from '@sentry/node';
import chalk from 'chalk';

import dotenv from 'dotenv';

dotenv.config();

export class sentryClient {
  public constructor() {
    this.start();
  }

  public async start(): Promise<void> {
    Sentry.init({
      dsn: process.env.SENTRY_DSN,

      tracesSampleRate: 1.0,
    });
    console.log(chalk.whiteBright('[SENTRY]'), 'initialized');
  }

  public async stop(): Promise<void> {
    Sentry.close();
  }

  public async captureException(exception: Error): Promise<string> {
    let id = await Sentry.captureException(exception);

    return id;
  }

  public async captureMessage(message: string): Promise<string> {
    let id = await Sentry.captureMessage(message);

    return id;
  }
}
