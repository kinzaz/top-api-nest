-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "oldPrice" DOUBLE PRECISION,
    "credit" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "advantages" TEXT NOT NULL,
    "disAdvantages" TEXT NOT NULL,
    "categories" TEXT[],
    "tags" TEXT[],
    "characteristics" JSONB NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TopPage" (
    "id" TEXT NOT NULL,
    "firstCategory" INTEGER NOT NULL,
    "secondaryCategory" TEXT NOT NULL,
    "alias" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "hh" JSONB,
    "advantages" JSONB[],
    "seoText" TEXT NOT NULL,
    "tagsTitle" TEXT NOT NULL,
    "tags" TEXT[],

    CONSTRAINT "TopPage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "TopPage_alias_key" ON "TopPage"("alias");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
