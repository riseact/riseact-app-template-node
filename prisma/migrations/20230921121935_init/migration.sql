-- CreateTable
CREATE TABLE "OrganizationCredentials" (
    "organizationId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "accessToken" TEXT NOT NULL,
    "refreshToken" TEXT NOT NULL,
    "clientToken" TEXT NOT NULL
);
