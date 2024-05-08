-- CreateTable
CREATE TABLE "OrganizationCredentials" (
    "organizationId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "organizationSlug" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "refreshToken" TEXT NOT NULL,
    "clientToken" TEXT NOT NULL,
    "expiresDateUTC" DATETIME NOT NULL,
    "expiresInSeconds" INTEGER NOT NULL
);
