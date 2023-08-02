const Sentry = require("@sentry/node");

Sentry.init({
    dsn: "https://92854449ec4836bd22148f79d9af97ae@o1017660.ingest.sentry.io/4505636783980544",

    tracesSampleRate: 1.0,
});