-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sku" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "type" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "product_dimensions" (
    "product_id" TEXT NOT NULL PRIMARY KEY,
    "height" DECIMAL NOT NULL,
    "width" DECIMAL NOT NULL,
    "length" DECIMAL NOT NULL,
    CONSTRAINT "product_dimensions_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "product_sizes" (
    "product_id" TEXT NOT NULL PRIMARY KEY,
    "size" DECIMAL NOT NULL,
    CONSTRAINT "product_sizes_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "product_weights" (
    "product_id" TEXT NOT NULL PRIMARY KEY,
    "weight" DECIMAL NOT NULL,
    CONSTRAINT "product_weights_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "products_sku_key" ON "products"("sku");
