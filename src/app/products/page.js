
'use server';

// export async function fetchProducts() {
//     try {
//         let productResponse = await fetch("https://fakestoreapi.com/products");
//         let productJson = await productResponse.json();
//         return productJson;
//     } catch (err) {
//         console.error("Error fetching products:", err);
//         return [];
//     }
// }

export async function fetchProducts() {
    try {
        const productCollectionRef = collection(fireStore, "create_Product");
        const productSnapshot = await getDocs(productCollectionRef);

        let products = productSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        return products;
    } catch (err) {
        console.error("Error fetching products:", err);
        return [];
    }
}
