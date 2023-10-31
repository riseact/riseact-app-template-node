/*
  Warnings:

  - Added the required column `expiresIn` to the `OrganizationCredentials` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_OrganizationCredentials" (
    "organizationId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "accessToken" TEXT NOT NULL,
    "refreshToken" TEXT NOT NULL,
    "clientToken" TEXT NOT NULL,
    "expirationDate" DATETIME NOT NULL,
    "expiresIn" INTEGER NOT NULL
);
INSERT INTO "new_OrganizationCredentials" ("accessToken", "clientToken", "expirationDate", "organizationId", "refreshToken") SELECT "accessToken", "clientToken", "expirationDate", "organizationId", "refreshToken" FROM "OrganizationCredentials";
DROP TABLE "OrganizationCredentials";
ALTER TABLE "new_OrganizationCredentials" RENAME TO "OrganizationCredentials";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
