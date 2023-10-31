/*
  Warnings:

  - You are about to drop the column `expirationDate` on the `OrganizationCredentials` table. All the data in the column will be lost.
  - You are about to drop the column `expiresIn` on the `OrganizationCredentials` table. All the data in the column will be lost.
  - Added the required column `expiresDateUTC` to the `OrganizationCredentials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expiresInSeconds` to the `OrganizationCredentials` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_OrganizationCredentials" (
    "organizationId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "accessToken" TEXT NOT NULL,
    "refreshToken" TEXT NOT NULL,
    "clientToken" TEXT NOT NULL,
    "expiresDateUTC" DATETIME NOT NULL,
    "expiresInSeconds" INTEGER NOT NULL
);
INSERT INTO "new_OrganizationCredentials" ("accessToken", "clientToken", "organizationId", "refreshToken") SELECT "accessToken", "clientToken", "organizationId", "refreshToken" FROM "OrganizationCredentials";
DROP TABLE "OrganizationCredentials";
ALTER TABLE "new_OrganizationCredentials" RENAME TO "OrganizationCredentials";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
