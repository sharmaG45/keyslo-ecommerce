import Navbar from "@/app/_components/navbar/page";

const cartIems = () => {
    return <>
        {/* <Navbar /> */}
        <main
            id="content"
            className="site-main post-12 page type-page status-publish hentry"
        >
            <div className="page-header">
                <h1 className="entry-title">Cart</h1>
            </div>
            <div className="page-content">
                <div
                    data-elementor-type="wp-page"
                    data-elementor-id={12}
                    className="elementor elementor-12"
                    data-elementor-post-type="page"
                >
                    <div
                        className="elementor-element elementor-element-61bad54c e-flex e-con-boxed e-con e-parent"
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
                                        <div className="woocommerce-notices-wrapper" />
                                        <div className="e-cart__container">
                                            {/*open container*/}
                                            <div className="e-cart__column e-cart__column-start">
                                                {/*open column-1*/}
                                                <form
                                                    className="woocommerce-cart-form"
                                                    action="https://keyslo.com/cart/"
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
                                                            <tbody>
                                                                <tr className="woocommerce-cart-form__cart-item cart_item">
                                                                    <td className="product-remove">
                                                                        <a
                                                                            data-gtm4wp_product_data='{"internal_id":47016,"item_id":47016,"item_name":"Superliminal Steam CD Key","sku":47016,"price":435,"stocklevel":null,"stockstatus":"instock","google_business_vertical":"retail","item_category":"Steam","id":47016,"productlink":"https:\/\/keyslo.com\/cart\/","item_variant":"","item_brand":""}'
                                                                            href="https://keyslo.com/cart/?remove_item=d213dab3531f5546bd40cc3960c58e00&_wpnonce=2629265607"
                                                                            className="remove"
                                                                            aria-label="Remove Superliminal Steam CD Key from cart"
                                                                            data-product_id={47016}
                                                                            data-product_sku=""
                                                                        >
                                                                            ×
                                                                        </a>{" "}
                                                                    </td>
                                                                    <td className="product-thumbnail">
                                                                        <a href="https://keyslo.com/product/superliminal-steam-cd-key/">
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
                                                                        <a href="https://keyslo.com/product/superliminal-steam-cd-key/">
                                                                            Superliminal Steam CD Key
                                                                        </a>{" "}
                                                                    </td>
                                                                    <td className="product-price" data-title="Price">
                                                                        <span className="woocs_special_price_code">
                                                                            <span className="woocommerce-Price-amount amount">
                                                                                <bdi>
                                                                                    <span className="woocommerce-Price-currencySymbol">
                                                                                        ₹
                                                                                    </span>
                                                                                    &nbsp;435.00
                                                                                </bdi>
                                                                            </span>
                                                                        </span>
                                                                    </td>
                                                                    <td
                                                                        className="product-quantity"
                                                                        data-title="Quantity"
                                                                    >
                                                                        <div className="quantity">
                                                                            <label
                                                                                className="screen-reader-text"
                                                                                htmlFor="quantity_67b5d349ecfc7"
                                                                            >
                                                                                Superliminal Steam CD Key quantity
                                                                            </label>
                                                                            <input
                                                                                type="number"
                                                                                id="quantity_67b5d349ecfc7"
                                                                                className="input-text qty text"
                                                                                name="cart[d213dab3531f5546bd40cc3960c58e00][qty]"
                                                                                defaultValue={2}
                                                                                aria-label="Product quantity"
                                                                                min={0}
                                                                                max=""
                                                                                step={1}
                                                                                placeholder=""
                                                                                inputMode="numeric"
                                                                                autoComplete="off"
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
                                                                                    &nbsp;870.00
                                                                                </bdi>
                                                                            </span>
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td colSpan={6} className="actions">
                                                                        <button
                                                                            type="submit"
                                                                            className="button"
                                                                            name="update_cart"
                                                                            value="Update Cart"
                                                                        >
                                                                            Update Cart
                                                                        </button>
                                                                        <input
                                                                            type="hidden"
                                                                            id="woocommerce-cart-nonce"
                                                                            name="woocommerce-cart-nonce"
                                                                            defaultValue={2629265607}
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="_wp_http_referer"
                                                                            defaultValue="/cart/"
                                                                        />{" "}
                                                                    </td>
                                                                </tr>
                                                            </tbody>
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
                                                                                            &nbsp;870.00
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
                                                                                                &nbsp;870.00
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
                                                                        href="https://keyslo.com/checkout/"
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>


        <div
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
        </div>


    </>
}
export default cartIems;