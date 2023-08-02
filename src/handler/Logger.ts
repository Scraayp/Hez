import chalk from 'chalk';
import Sentry from '@sentry/node'

export class Logger {
    /**
     * Log error(s) to console
     * @param msg The error to log
     * @param sentry Whether to send the error to sentry
     * @returns null
     */
    error(msg: Error, sentry?: boolean) {
        let exception = null;
        if (sentry) {
            exception = Sentry.captureException(msg)
            console.info(chalk.whiteBright('[SENTRY]'), " Error sent to sentry")
        }
        console.error(chalk.cyan('[LOGGER]'), chalk.red("[ERROR]"), msg.name)
        console.error(msg.message)
        console.log("=====================================")
        return exception;
    }

    /**
     * Log warn message(s) to console
     * @param msg The message to log
     * @param sentry Whether to send the warn to sentry
     * @returns null
     */
    warn(msg: string, sentry?: boolean) {
        let exception = null;
        if (sentry) {
            exception = Sentry.captureMessage(msg)
            console.info(chalk.whiteBright('[SENTRY]'), " Warn sent to sentry");
        }
        console.warn(chalk.cyan('[LOGGER]'), chalk.yellowBright("[WARN]"), msg)
        console.log("=====================================")
        return exception;
    }

    /**
     * Log info message(s) to console
     * @param msg The message to log
     * @returns null
     */
    info(msg: string) {
        console.info(chalk.cyan('[LOGGER]'), chalk.blueBright("[INFO]"), msg)
        console.log("=====================================")
        return null;
    }
}