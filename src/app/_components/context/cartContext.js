'use client';

import { createContext, useContext, useEffect, useState } from "react";
import { fireStore, auth } from "../firebase/config";
import { collection, doc, setDoc, updateDoc, deleteDoc, getDoc, onSnapshot } from "firebase/firestore";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Fetch cart data from Firestore in real-time
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(fireStore, "cart"), (snapshot) => {
            const cartItems = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setCart(cartItems);
        });

        return () => unsubscribe(); // Cleanup on unmount
    }, []);

    // // Add product to cart or increase quantity if it exists
    // const addToCart = async (product, e) => {
    //     e.preventDefault();

    //     // Get the currently logged-in user
    //     const user = auth.currentUser;

    //     if (!user) {
    //         alert("Please log in to add items to your cart.");
    //         return;
    //     }

    //     const userId = user.uid; // Get the user's UID
    //     const userCartRef = doc(fireStore, "users", userId); // Store cart inside the user's document

    //     try {
    //         const userCart = await getDoc(userCartRef);

    //         if (userCart.exists()) {
    //             const cartData = userCart.data().cart || []; // Get existing cart or initialize an empty array

    //             // Check if the product already exists in the cart
    //             const existingItemIndex = cartData.findIndex(item => item.product_name === product.product_name);

    //             if (existingItemIndex !== -1) {
    //                 // If product exists, increase quantity
    //                 cartData[existingItemIndex].quantity += 1;
    //             } else {
    //                 // Add new product with quantity 1
    //                 cartData.push({ ...product, quantity: 1 });
    //             }

    //             // Update Firestore
    //             await updateDoc(userCartRef, { cart: cartData });

    //         } else {
    //             // If user document doesn't exist, create it with cart array
    //             await setDoc(userCartRef, { cart: [{ ...product, quantity: 1 }] });
    //         }

    //         console.log("Product added to cart successfully!");
    //         router.push("/checkout");
    //     } catch (error) {
    //         console.error("Error adding product to cart:", error);
    //     }
    // };

    // Update product quantity in cart
    const updateCart = async (id, quantity) => {
        const cartRef = doc(fireStore, "cart", id);
        if (quantity > 0) {
            await updateDoc(cartRef, { quantity });
        } else {
            await deleteDoc(cartRef); // Remove if quantity is 0
        }
    };

    // Remove product from cart
    const removeFromCart = async (id) => {
        await deleteDoc(doc(fireStore, "cart", id));
    };

    return (
        <CartContext.Provider value={{ cart, updateCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
