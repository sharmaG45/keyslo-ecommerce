"use client"
import { createContext, useReducer } from "react";

export const CartContext = createContext();

const CartReducer = (state, action) => {
    console.log(action, "Context Action");

    switch (action.type) {
        case "Add":
            console.log("Add To Cart Triggered");
            return [...state, action.payload]; // Return a new array

        case "Remove":
            return state.filter(item => item.product_name !== action.payload);

        case "Update":
            console.log("Updating cart with new data", action.payload);
            return [...action.payload]; // Ensure state is updated immutably

        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, []);

    return (
        <CartContext.Provider value={{ data: state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};
