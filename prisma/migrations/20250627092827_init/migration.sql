-- CreateTable
CREATE TABLE "OrganizationCredentials" (
    "organizationDomain" TEXT NOT NULL PRIMARY KEY,
    "accessToken" TEXT NOT NULL,
    "refreshToken" TEXT NOT NULL,
    "clientToken" TEXT NOT NULL,
    "expiresDateUTC" DATETIME NOT NULL,
    "expiresInSeconds" INTEGER NOT NULL
);
