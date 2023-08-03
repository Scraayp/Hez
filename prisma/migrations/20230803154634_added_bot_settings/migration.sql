-- CreateTable
CREATE TABLE "BotSettings" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "developers" TEXT[],
    "supportGuildID" TEXT NOT NULL,
    "supportGuildInvite" TEXT NOT NULL,
    "presenceStatus" TEXT NOT NULL,
    "presenceType" TEXT NOT NULL,
    "presenceName" TEXT NOT NULL,
    "sentryDSN" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BotSettings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Guild" (
    "id" TEXT NOT NULL,
    "language" TEXT NOT NULL DEFAULT 'en',

    CONSTRAINT "Guild_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BotSettings" ADD CONSTRAINT "BotSettings_supportGuildID_fkey" FOREIGN KEY ("supportGuildID") REFERENCES "Guild"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
