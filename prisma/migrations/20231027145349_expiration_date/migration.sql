/*
  Warnings:

  - Added the required column `expirationDate` to the `OrganizationCredentials` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_OrganizationCredentials" (
    "organizationId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "accessToken" TEXT NOT NULL,
    "refreshToken" TEXT NOT NULL,
    "clientToken" TEXT NOT NULL,
    "expirationDate" DATETIME NOT NULL
);
INSERT INTO "new_OrganizationCredentials" ("accessToken", "clientToken", "organizationId", "refreshToken") SELECT "accessToken", "clientToken", "organizationId", "refreshToken" FROM "OrganizationCredentials";
DROP TABLE "OrganizationCredentials";
ALTER TABLE "new_OrganizationCredentials" RENAME TO "OrganizationCredentials";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
