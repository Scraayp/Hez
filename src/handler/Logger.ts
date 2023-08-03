import chalk from 'chalk';
import { sentryClientC } from '..';
export class Logger {
  /**
   * Log error(s) to console
   * @param msg The error to log
   * @param sentry Whether to send the error to sentry
   * @returns null
   */
  async error(msg: Error, sentry?: boolean) {
    let exception = null;
    if (sentry) {
      exception = await sentryClientC.captureException(msg);
      await console.info(chalk.whiteBright('[SENTRY]'), ' Error sent to sentry');
    }
    await console.error(chalk.cyan('[LOGGER]'), chalk.red('[ERROR]'), msg.name);
    await console.error(msg.message);
    await console.log('=====================================');
    return exception;
  }

  /**
   * Log warn message(s) to console
   * @param msg The message to log
   * @param sentry Whether to send the warn to sentry
   * @returns null
   */
  async warn(msg: string, sentry?: boolean) {
    let exception = null;
    if (sentry) {
      exception = await sentryClientC.captureMessage(msg);
      await console.info(chalk.whiteBright('[SENTRY]'), ' Warn sent to sentry');
    }
    await console.warn(chalk.cyan('[LOGGER]'), chalk.yellowBright('[WARN]'), msg);
    await console.log('=====================================');
    return exception;
  }

  /**
   * Log info message(s) to console
   * @param msg The message to log
   * @returns null
   */
  async info(msg: string) {
    await console.info(chalk.cyan('[LOGGER]'), chalk.blueBright('[INFO]'), msg);
    await console.log('=====================================');
    return null;
  }
}
