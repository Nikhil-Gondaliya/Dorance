import { openDB } from "idb";

const DB_NAME = "dorence-db";
const STORE_NAME = "products";

export const dbPromise = openDB(DB_NAME, 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains(STORE_NAME)) {
      db.createObjectStore(STORE_NAME, { keyPath: "id" });
    }
  },
});

export async function getAllProducts() {
  const db = await dbPromise;
  return db.getAll(STORE_NAME);
}

export async function saveProducts(products) {
  const db = await dbPromise;
  const tx = db.transaction(STORE_NAME, "readwrite");

  for (const product of products) {
    await tx.store.put(product);
  }

  await tx.done;
}
