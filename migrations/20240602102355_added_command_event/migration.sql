-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Command" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "actionCommand" TEXT NOT NULL,
    "responseText" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true
);
