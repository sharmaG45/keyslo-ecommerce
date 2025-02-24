'use client';

import { useContext, useState, useEffect } from "react";
import Navbar from "@/app/_components/navbar/page";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { fireStore, auth } from "@/app/_components/firebase/config";

const cartIems = () => {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const user = JSON.parse(localStorage.getItem('currentUser'));
                console.log("User authentication status:", user);

                if (!user) {
                    console.log("No user logged in. Returning an empty cart.");
                    setCart([]);
                    return;
                }

                console.log("Fetching cart for user:", user.uid);

                const userRef = doc(fireStore, "users", user.uid);
                const userDoc = await getDoc(userRef);

                console.log("Firestore Document:", userDoc.exists() ? userDoc.data() : "Document does not exist.");

                if (userDoc.exists()) {
                    const cartData = userDoc.data()?.cart;
                    if (Array.isArray(cartData)) {
                        console.log("Fetched Cart Data:", cartData);
                        setCart(cartData);
                    } else {
                        console.error("Cart data is not an array or is undefined. Setting empty cart.");
                        setCart([]);
                    }
                } else {
                    console.log("No cart data found in Firestore.");
                    setCart([]);
                }
            } catch (error) {
                console.error("Error fetching cart:", error);
                setCart([]);
            }
        };

        fetchCart();
    }, []);

    // Handle product removal
    const handleRemove = async (productName) => {
        try {
            const user = localStorage.getItem('currentUser');
            if (!user) {
                console.warn("No user found. Unable to remove product.");
                return;
            }

            const parsedUser = JSON.parse(user);
            if (!parsedUser || !parsedUser.uid) {
                console.error("Invalid user data. Cannot remove item.");
                return;
            }

            const userRef = doc(fireStore, "users", parsedUser.uid);
            const userDoc = await getDoc(userRef);

            if (userDoc.exists()) {
                let userCart = userDoc.data().cart || [];

                if (!Array.isArray(userCart)) {
                    console.error("Cart data is not an array. Resetting to an empty array.");
                    userCart = [];
                }

                userCart = userCart.filter(item => item.productData?.productInfo?.productName !== productName);
                await updateDoc(userRef, { cart: userCart });

                // Fetch updated data to confirm the change
                const updatedUserDoc = await getDoc(userRef);
                const updatedCart = updatedUserDoc.data()?.cart || [];

                console.log("Updated Cart Data:", updatedCart);
                setCart(updatedCart);

                toast.success("Product removed from cart!");
            } else {
                console.warn("No cart data found for user.");
            }
        } catch (error) {
            console.error("Error removing item:", error);
            toast.error("Error removing product.");
        }
    };

    const handleQuantityChange = async (productName, newQuantity) => {
        try {
            const user = JSON.parse(localStorage.getItem("currentUser"));
            if (!user || !user.uid) {
                console.warn("No user found. Unable to update quantity.");
                return;
            }

            const userRef = doc(fireStore, "users", user.uid);
            const userDoc = await getDoc(userRef);

            if (userDoc.exists()) {
                let userCart = userDoc.data().cart || [];

                if (!Array.isArray(userCart)) {
                    console.error("Cart data is not an array. Resetting to an empty array.");
                    userCart = [];
                }

                // Update the quantity of the specific product
                userCart = userCart.map((item) =>
                    item.productData?.productInfo?.productName === productName ? { ...item, quantity: Number(newQuantity) } : item
                );

                await updateDoc(userRef, { cart: userCart });

                // Fetch updated cart data
                const updatedUserDoc = await getDoc(userRef);
                const updatedCart = updatedUserDoc.data()?.cart || [];

                console.log("Updated Cart Data:", updatedCart);
                setCart(updatedCart);

                toast.success("Quantity updated successfully!");
            } else {
                console.warn("No cart data found for user.");
            }
        } catch (error) {
            console.error("Error updating quantity:", error);
            toast.error("Error updating quantity.");
        }
    };




    return <>
        {/* <Navbar /> */}
        <main
            id="content"
            className="site-main post-12 page type-page status-publish hentry"
        >
            <div className="page-header">
                <h1 className="entry-title">Cart</h1>{" "}
            </div>

            {cart.length > 0 ? (
                <div className="page-content">
                    <div
                        data-elementor-type="wp-page"
                        data-elementor-id={12}
                        className="elementor elementor-12"
                        data-elementor-post-type="page"
                    >
                        <div
                            className="elementor-element elementor-element-61bad54c e-flex e-con-boxed e-con e-parent e-lazyloaded"
                            data-id="61bad54c"
                            data-element_type="container"
                        >
                            <div className="e-con-inner">
                                <div
                                    className="elementor-element elementor-element-8ec9a31 e-cart-layout-two-column elementor-widget elementor-widget-woocommerce-cart"
                                    data-id="8ec9a31"
                                    data-element_type="widget"
                                    data-widget_type="woocommerce-cart.default"
                                >
                                    <div className="elementor-widget-container">
                                        <div className="woocommerce">
                                            <div className="woocommerce-notices-wrapper" />{" "}
                                            <div className="e-cart__container">
                                                {/*open container*/}
                                                <div className="e-cart__column e-cart__column-start">
                                                    {/*open column-1*/}
                                                    <form
                                                        className="woocommerce-cart-form"
                                                        action="/home/cart"
                                                        method="post"
                                                    >
                                                        <div className="e-shop-table e-cart-section">
                                                            {/*open shop table div */}
                                                            <table
                                                                className="shop_table shop_table_responsive cart woocommerce-cart-form__contents"
                                                                cellSpacing={0}
                                                            >
                                                                <thead>
                                                                    <tr>
                                                                        <th className="product-remove">
                                                                            <span className="screen-reader-text">
                                                                                Remove item
                                                                            </span>
                                                                        </th>
                                                                        <th className="product-thumbnail">
                                                                            <span className="screen-reader-text">
                                                                                Thumbnail image
                                                                            </span>
                                                                        </th>
                                                                        <th className="product-name">Product</th>
                                                                        <th className="product-price">Price</th>
                                                                        <th className="product-quantity">Quantity</th>
                                                                        <th className="product-subtotal">Subtotal</th>
                                                                    </tr>
                                                                </thead>
                                                                {cart.map((item, index) => (
                                                                    <tbody key={index}>
                                                                        <tr className="woocommerce-cart-form__cart-item cart_item" >
                                                                            <td className="product-remove">
                                                                                <a
                                                                                    data-gtm4wp_product_data='{"internal_id":47016,"item_id":47016,"item_name":"Superliminal Steam CD Key","sku":47016,"price":435,"stocklevel":null,"stockstatus":"instock","google_business_vertical":"retail","item_category":"Steam","id":47016,"productlink":"https:\/\/keyslo.com\/cart\/","item_variant":"","item_brand":""}'
                                                                                    href="#"
                                                                                    className="remove"
                                                                                    aria-label="Remove Superliminal Steam CD Key from cart"
                                                                                    data-product_id={47016}
                                                                                    data-product_sku=""
                                                                                    onClick={() => handleRemove(item.productData?.productInfo?.productName)}
                                                                                >
                                                                                    ×
                                                                                </a>{" "}
                                                                            </td>
                                                                            <td className="product-thumbnail">
                                                                                <a href="/">
                                                                                    <img
                                                                                        fetchPriority="high"
                                                                                        decoding="async"
                                                                                        width={264}
                                                                                        height={315}
                                                                                        src="https://keyslo.com/wp-content/uploads/2024/12/co1uqz-264x315.jpg"
                                                                                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                                                        alt="Superliminal"
                                                                                    />
                                                                                </a>{" "}
                                                                            </td>
                                                                            <td className="product-name" data-title="Product">
                                                                                <a href="/">
                                                                                    {item.productData?.productInfo?.productName}
                                                                                </a>{" "}
                                                                            </td>
                                                                            <td className="product-price" data-title="Price">
                                                                                <span className="woocs_special_price_code">
                                                                                    <span className="woocommerce-Price-amount amount">
                                                                                        <bdi>
                                                                                            <span className="woocommerce-Price-currencySymbol">

                                                                                            </span>
                                                                                            {item.productData?.priceInfo?.Price}
                                                                                        </bdi>
                                                                                    </span>
                                                                                </span>{" "}
                                                                            </td>
                                                                            <td
                                                                                className="product-quantity"
                                                                                data-title="Quantity"
                                                                            >
                                                                                <div className="quantity">
                                                                                    <label
                                                                                        className="screen-reader-text"
                                                                                        htmlFor="quantity_67b80d47ac4aa"
                                                                                    >
                                                                                        Superliminal Steam CD Key quantity
                                                                                    </label>
                                                                                    <input
                                                                                        type="number"
                                                                                        id="quantity_67b80d47ac4aa"
                                                                                        className="input-text qty text"
                                                                                        name="cart[d213dab3531f5546bd40cc3960c58e00][qty]"
                                                                                        value={item.quantity}
                                                                                        aria-label="Product quantity"
                                                                                        min={0}
                                                                                        step={1}
                                                                                        placeholder=""
                                                                                        inputMode="numeric"
                                                                                        autoComplete="off"
                                                                                        onChange={(e) => handleQuantityChange(item.productData?.productInfo?.productName, e.target.value)}
                                                                                    />
                                                                                </div>
                                                                            </td>
                                                                            <td
                                                                                className="product-subtotal"
                                                                                data-title="Subtotal"
                                                                            >
                                                                                <span className="woocs_special_price_code">
                                                                                    <span className="woocommerce-Price-amount amount">
                                                                                        <bdi>
                                                                                            <span className="woocommerce-Price-currencySymbol">
                                                                                                ₹
                                                                                            </span>
                                                                                            {(parseFloat(item.productData?.priceInfo?.Price.replace(/[^0-9.]/g, "")) * item.quantity).toFixed(2)}
                                                                                        </bdi>
                                                                                    </span>
                                                                                </span>{" "}
                                                                            </td>
                                                                        </tr>


                                                                        <tr>
                                                                            <td colSpan={6} className="actions">
                                                                                <button
                                                                                    type="submit"
                                                                                    className="button"
                                                                                    name="update_cart"
                                                                                    value="Update Cart"
                                                                                    disabled=""
                                                                                >
                                                                                    Update Cart
                                                                                </button>
                                                                                <input
                                                                                    type="hidden"
                                                                                    id="woocommerce-cart-nonce"
                                                                                    name="woocommerce-cart-nonce"
                                                                                    defaultValue="fece0fbd83"
                                                                                />
                                                                                <input
                                                                                    type="hidden"
                                                                                    name="_wp_http_referer"
                                                                                    defaultValue="/"
                                                                                />{" "}
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                ))}
                                                            </table>
                                                        </div>
                                                        {/*close shop table div */}
                                                        <div className="e-clear" />
                                                        <div className="coupon e-cart-section shop_table">
                                                            <div className="form-row coupon-col">
                                                                <div className="coupon-col-start">
                                                                    <input
                                                                        type="text"
                                                                        name="coupon_code"
                                                                        className="input-text"
                                                                        id="coupon_code"
                                                                        defaultValue=""
                                                                        placeholder="Coupon code"
                                                                    />
                                                                </div>
                                                                <div className="coupon-col-end">
                                                                    <button
                                                                        className="button e-apply-coupon"
                                                                        name="apply_coupon"
                                                                        type="submit"
                                                                        value="Apply coupon"
                                                                    >
                                                                        Apply coupon
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                    {/*close column-1*/}
                                                </div>
                                                <div className="e-cart__column e-cart__column-end">
                                                    {/*open column-2*/}
                                                    <div className="e-cart__column-inner e-sticky-right-column">
                                                        {/*open column-inner*/}
                                                        <div className="e-cart-totals e-cart-section">
                                                            {/*open cart-totals*/}
                                                            <div className="cart-collaterals">
                                                                <div className="cart_totals ">
                                                                    <h2>Cart Totals</h2>
                                                                    <table
                                                                        cellSpacing={0}
                                                                        className="shop_table shop_table_responsive"
                                                                    >
                                                                        <tbody>
                                                                            <tr className="cart-subtotal">
                                                                                <th>Subtotal</th>
                                                                                <td data-title="Subtotal">
                                                                                    <span className="woocs_special_price_code">
                                                                                        <span className="woocommerce-Price-amount amount">
                                                                                            <bdi>
                                                                                                <span className="woocommerce-Price-currencySymbol">
                                                                                                    ₹
                                                                                                </span>
                                                                                                {cart.reduce((sum, item) =>
                                                                                                    sum + (parseFloat(item.productData?.priceInfo?.costPrice.replace(/[^0-9.]/g, "").trim()) * item.quantity), 0
                                                                                                ).toFixed(2)}
                                                                                            </bdi>
                                                                                        </span>
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr className="order-total">
                                                                                <th>Total</th>
                                                                                <td data-title="Total">
                                                                                    <strong>
                                                                                        <span className="woocs_special_price_code">
                                                                                            <span className="woocommerce-Price-amount amount">
                                                                                                <bdi>
                                                                                                    <span className="woocommerce-Price-currencySymbol">
                                                                                                        ₹
                                                                                                    </span>
                                                                                                    {cart.reduce((sum, item) =>
                                                                                                        sum + (parseFloat(item.productData?.priceInfo?.Price.replace(/[^0-9.]/g, "").trim()) * item.quantity), 0
                                                                                                    ).toFixed(2)}
                                                                                                </bdi>
                                                                                            </span>
                                                                                        </span>
                                                                                    </strong>{" "}
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <div className="wc-proceed-to-checkout">
                                                                        <a
                                                                            href="/home/checkout"
                                                                            className="checkout-button button alt wc-forward"
                                                                        >
                                                                            Proceed to Checkout
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/*close cart-totals*/}
                                                        </div>
                                                        {/*close column-inner*/}
                                                    </div>
                                                    {/*close column-2*/}
                                                </div>
                                                {/*close container*/}
                                            </div>
                                        </div>{" "}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="page-content">
                    <div
                        data-elementor-type="wp-page"
                        data-elementor-id={12}
                        className="elementor elementor-12"
                        data-elementor-post-type="page"
                    >
                        <div
                            className="elementor-element elementor-element-61bad54c e-flex e-con-boxed e-con e-parent e-lazyloaded"
                            data-id="61bad54c"
                            data-element_type="container"
                        >
                            <div className="e-con-inner">
                                <div
                                    className="elementor-element elementor-element-8ec9a31 e-cart-layout-two-column elementor-widget elementor-widget-woocommerce-cart"
                                    data-id="8ec9a31"
                                    data-element_type="widget"
                                    data-widget_type="woocommerce-cart.default"
                                >
                                    <div className="elementor-widget-container">
                                        <div className="woocommerce">
                                            <div className="woocommerce-notices-wrapper">
                                                <div className="woocommerce-message" role="alert">
                                                    “Superliminal Steam CD Key” removed.{" "}
                                                    <a
                                                        href="/"
                                                        className="restore-item"
                                                    >
                                                        Undo?
                                                    </a>{" "}
                                                </div>
                                                <div className="cart-empty woocommerce-info">
                                                    Your cart is currently empty.{" "}
                                                </div>
                                            </div>
                                            <div className="wc-empty-cart-message"></div>{" "}
                                            <p className="return-to-shop">
                                                <a
                                                    className="button wc-backward"
                                                    href="/home/productCategory?Name=Shop"
                                                >
                                                    Return to shop{" "}
                                                </a>
                                            </p>
                                        </div>{" "}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </main>

        {/* <div
            data-elementor-type="footer"
            data-elementor-id={7835}
            className="elementor elementor-7835 elementor-location-footer"
            data-elementor-post-type="elementor_library"
        >
            <section
                className="elementor-section elementor-top-section elementor-element elementor-element-715d6a6b elementor-section-content-bottom elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="715d6a6b"
                data-element_type="section"
                data-settings='{"background_background":"classic"}'
            >
                <div className="elementor-container elementor-column-gap-default">
                    <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1f26a446"
                        data-id="1f26a446"
                        data-element_type="column"
                    >
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                                className="elementor-element elementor-element-8b21f94 elementor-icon-list--layout-inline elementor-align-center elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                data-id="8b21f94"
                                data-element_type="widget"
                                data-widget_type="icon-list.default"
                            >
                                <div className="elementor-widget-container">
                                    <ul className="elementor-icon-list-items elementor-inline-items">
                                        <li className="elementor-icon-list-item elementor-inline-item">
                                            <a href="https://keyslo.com/privacy-policy/" target="_blank">
                                                <span className="elementor-icon-list-text">
                                                    Privacy Policy
                                                </span>
                                            </a>
                                        </li>
                                        <li className="elementor-icon-list-item elementor-inline-item">
                                            <a href="https://keyslo.com/refund_returns/" target="_blank">
                                                <span className="elementor-icon-list-text">
                                                    Refund Policy
                                                </span>
                                            </a>
                                        </li>
                                        <li className="elementor-icon-list-item elementor-inline-item">
                                            <a href="https://keyslo.com/shipping-policy/" target="_blank">
                                                <span className="elementor-icon-list-text">
                                                    Shipping Policy
                                                </span>
                                            </a>
                                        </li>
                                        <li className="elementor-icon-list-item elementor-inline-item">
                                            <a href="https://keyslo.com/terms-condition/" target="_blank">
                                                <span className="elementor-icon-list-text">
                                                    Terms &amp; Condition
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div> */}


    </>
}
export default cartIems;