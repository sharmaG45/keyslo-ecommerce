
'use server';

// const ProductsPage = async () => {

//     let productList = [];
//     try {
//         let productResponse = await fetch("https://fakestoreapi.com/products");
//         let productJson = await productResponse.json();
//         console.log(productJson, "Product json");
//         productList = productJson;
//     } catch (err) {
//         console.log(err);
//     }


//     return <>
//         <h1>Product Page</h1>

//         <div className="ProductList" >
//             {productList && productList.map(a => {
//                 return <div className="product-card" >
//                     <p>{a.title}</p>
//                 </div>
//             })}
//         </div>
//     </>
// }



// export default ProductsPage;


export async function fetchProducts() {
    try {
        let productResponse = await fetch("https://fakestoreapi.com/products");
        let productJson = await productResponse.json();
        return productJson;
    } catch (err) {
        console.error("Error fetching products:", err);
        return [];
    }
}
