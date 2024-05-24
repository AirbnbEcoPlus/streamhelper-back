-- CreateTable
CREATE TABLE "Alert" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "SchemaPath" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Config" (
    "name" TEXT NOT NULL PRIMARY KEY,
    "value" TEXT NOT NULL
);
