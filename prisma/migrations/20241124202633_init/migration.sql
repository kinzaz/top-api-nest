-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "oldPrice" INTEGER NOT NULL,
    "credit" INTEGER NOT NULL,
    "calculatedRating" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "advantages" TEXT NOT NULL,
    "disAdvantages" TEXT NOT NULL,
    "categories" TEXT[],
    "tags" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
