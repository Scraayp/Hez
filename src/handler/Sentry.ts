import { prismaClient } from "./Prisma";

const Sentry = require("@sentry/node");

Sentry.init({
    dsn: ,

    tracesSampleRate: 1.0,
});