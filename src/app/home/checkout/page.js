'use client';

import { useState, useEffect } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { fireStore, auth } from "@/app/_components/firebase/config";
import { Country } from "country-state-city";

const checkout = () => {

    const [cart, setCart] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');

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

    const [formData, setFormData] = useState({
        billing_first_name: "",
        billing_last_name: "",
        billing_country: "",
        billing_address_1: "",
        billing_city: "",
        billing_phone: "",
        billing_email: "",

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCountryChange = (e) => {
        const countryCode = e.target.value;
        console.log("Selected Country Code:", countryCode); // Debugging

        setFormData((prevData) => ({
            ...prevData,
            billing_country: countryCode,
        }));

        setSelectedCountry(countryCode);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
    };

    return <>
        {/* <div
            data-elementor-type="header"
            data-elementor-id={7839}
            className="elementor elementor-7839 elementor-location-header"
            data-elementor-post-type="elementor_library"
        >
            <div
                className="elementor-element elementor-element-de6ffd6 e-flex e-con-boxed e-con e-parent e-lazyloaded"
                data-id="de6ffd6"
                data-element_type="container"
            >
                <div className="e-con-inner">
                    <div
                        className="elementor-element elementor-element-90cb314 elementor-widget elementor-widget-theme-site-logo elementor-widget-image"
                        data-id="90cb314"
                        data-element_type="widget"
                        data-widget_type="theme-site-logo.default"
                    >
                        <div className="elementor-widget-container">
                            <a href="https://keyslo.com">
                                <img
                                    width={180}
                                    height={74}
                                    src="https://keyslo.com/wp-content/uploads/2020/09/keys-lo-logo-e1700459713898.webp"
                                    className="attachment-full size-full wp-image-7974"
                                    alt=""
                                />{" "}
                            </a>
                        </div>
                    </div>
                    <div
                        className="elementor-element elementor-element-5bb7b7d elementor-icon-list--layout-inline elementor-align-right elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                        data-id="5bb7b7d"
                        data-element_type="widget"
                        data-widget_type="icon-list.default"
                    >
                        <div className="elementor-widget-container">
                            <ul className="elementor-icon-list-items elementor-inline-items">
                                <li className="elementor-icon-list-item elementor-inline-item">
                                    <a href="https://keyslo.com/cart/">
                                        <span className="elementor-icon-list-icon">
                                            <i aria-hidden="true" className="fas fa-cart-arrow-down" />{" "}
                                        </span>
                                        <span className="elementor-icon-list-text">Cart</span>
                                    </a>
                                </li>
                                <li className="elementor-icon-list-item elementor-inline-item">
                                    <a href="https://keyslo.com/checkout/">
                                        <span className="elementor-icon-list-icon">
                                            <i aria-hidden="true" className="fas fa-check-circle" />{" "}
                                        </span>
                                        <span className="elementor-icon-list-text">Checkout</span>
                                    </a>
                                </li>
                                <li className="elementor-icon-list-item elementor-inline-item">
                                    <span className="elementor-icon-list-icon">
                                        <i aria-hidden="true" className="fas fa-key" />{" "}
                                    </span>
                                    <span className="elementor-icon-list-text">Delivery</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="elementor-element elementor-element-418724c e-flex e-con-boxed e-con e-parent e-lazyloaded"
                data-id="418724c"
                data-element_type="container"
                data-settings='{"background_background":"classic"}'
            >
                <div className="e-con-inner">
                    <div
                        className="elementor-element elementor-element-3e46809 elementor-widget elementor-widget-heading"
                        data-id="3e46809"
                        data-element_type="widget"
                        data-widget_type="heading.default"
                    >
                        <div className="elementor-widget-container">
                            <h6 className="elementor-heading-title elementor-size-default">
                                Change Currency
                            </h6>{" "}
                        </div>
                    </div>
                    <div
                        className="elementor-element elementor-element-60a8278 elementor-widget elementor-widget-text-editor"
                        data-id="60a8278"
                        data-element_type="widget"
                        data-widget_type="text-editor.default"
                    >
                        <div className="elementor-widget-container">
                            <div
                                data-woocs-sd='{"width":100,"img_pos":1,"max_open_height":300,"show_img":0,"width_p100":0,"scale":80,"description_font_size":12,"title_show":1,"title_value":"__SIGN__ __CODE__","title_font":"Arial","title_bold":1,"title_font_size":14,"title_color":"#000000","border_radius":0,"border_color":"#eeeeee","img_height":38,"img_vertival_pos":-3,"show_description":1,"description_color":"#aaaaaa","description_font":"Arial","background_color":"#fafafa","pointer_color":"#000000","divider_color":"#eeeeee","divider_size":2,"border_width":1}'
                                data-woocs-ver="2.4.2.2"
                                style={{ width: 100, maxWidth: "100%", zIndex: 9999 }}
                                data-woocs-sd-currencies='[{"value":"INR","sign":"&#8377;","title":"INR","text":"Bharat","img":"https:\/\/keyslo.com\/\/wp-content\/uploads\/2023\/11\/india.webp","title_attributes":{"data-sign":"&#8377;","data-name":"INR","data-desc":"Bharat"}},{"value":"USD","sign":"&#36;","title":"USD","text":"United States","img":"https:\/\/keyslo.com\/\/wp-content\/uploads\/2023\/11\/united-states.webp","title_attributes":{"data-sign":"&#36;","data-name":"USD","data-desc":"United States"}},{"value":"AUD","sign":"&#36;","title":"AUD","text":"Australia","img":"https:\/\/keyslo.com\/\/wp-content\/uploads\/2023\/11\/australia.webp","title_attributes":{"data-sign":"&#36;","data-name":"AUD","data-desc":"Australia"}},{"value":"GBP","sign":"&pound;","title":"GBP","text":"United Kingdom","img":"https:\/\/keyslo.com\/\/wp-content\/uploads\/2024\/02\/united-kingdom.webp","title_attributes":{"data-sign":"&pound;","data-name":"GBP","data-desc":"United Kingdom"}},{"value":"CAD","sign":"C&#36;","title":"CAD","text":"Canada","img":"https:\/\/keyslo.com\/\/wp-content\/uploads\/2023\/11\/canada.webp","title_attributes":{"data-sign":"C&#36;","data-name":"CAD","data-desc":"Canada"}}]'
                            >
                                <div
                                    className="selectron23"
                                    style={{
                                        height: 53,
                                        width: 100,
                                        flexBasis: 100,
                                        transform: "scale(0.8)"
                                    }}
                                >
                                    <div
                                        className="selectron23-container"
                                        data-opened={0}
                                        style={{
                                            minHeight: 52,
                                            borderRadius: 0,
                                            borderColor: "rgb(238, 238, 238)",
                                            background: "rgb(238, 238, 238)",
                                            borderWidth: 1
                                        }}
                                    >
                                        <div
                                            data-value="INR"
                                            className="selectron23-option"
                                            data-selected={1}
                                            style={{ background: "rgb(250, 250, 250)", marginBottom: 2 }}
                                        >
                                            <img
                                                src="https://keyslo.com//wp-content/uploads/2023/11/india.webp"
                                                alt=""
                                                loading="lazy"
                                                className="selectron23-img"
                                                style={{
                                                    float: "right",
                                                    maxHeight: 38,
                                                    display: "none",
                                                    height: 38,
                                                    marginTop: "-3px"
                                                }}
                                            />
                                            <div>
                                                <div
                                                    className="selectron23-option-title"
                                                    data-sign="&#8377;"
                                                    data-name="INR"
                                                    data-desc="Bharat"
                                                    style={{
                                                        display: "block",
                                                        fontFamily: "Arial",
                                                        fontWeight: "bold",
                                                        fontSize: 14,
                                                        color: "rgb(0, 0, 0)"
                                                    }}
                                                >
                                                    ₹ INR
                                                </div>
                                                <div
                                                    className="selectron23-option-text"
                                                    style={{
                                                        fontSize: 12,
                                                        display: "block",
                                                        color: "rgb(170, 170, 170)",
                                                        fontFamily: "Arial"
                                                    }}
                                                >
                                                    Bharat
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            data-value="USD"
                                            className="selectron23-option"
                                            style={{ background: "rgb(250, 250, 250)", marginBottom: 2 }}
                                        >
                                            <img
                                                src="https://keyslo.com//wp-content/uploads/2023/11/united-states.webp"
                                                alt=""
                                                loading="lazy"
                                                className="selectron23-img"
                                                style={{
                                                    float: "right",
                                                    maxHeight: 38,
                                                    display: "none",
                                                    height: 38,
                                                    marginTop: "-3px"
                                                }}
                                            />
                                            <div>
                                                <div
                                                    className="selectron23-option-title"
                                                    data-sign="&#36;"
                                                    data-name="USD"
                                                    data-desc="United States"
                                                    style={{
                                                        display: "block",
                                                        fontFamily: "Arial",
                                                        fontWeight: "bold",
                                                        fontSize: 14,
                                                        color: "rgb(0, 0, 0)"
                                                    }}
                                                >
                                                    $ USD
                                                </div>
                                                <div
                                                    className="selectron23-option-text"
                                                    style={{
                                                        fontSize: 12,
                                                        display: "block",
                                                        color: "rgb(170, 170, 170)",
                                                        fontFamily: "Arial"
                                                    }}
                                                >
                                                    United States
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            data-value="AUD"
                                            className="selectron23-option"
                                            style={{ background: "rgb(250, 250, 250)", marginBottom: 2 }}
                                        >
                                            <img
                                                src="https://keyslo.com//wp-content/uploads/2023/11/australia.webp"
                                                alt=""
                                                loading="lazy"
                                                className="selectron23-img"
                                                style={{
                                                    float: "right",
                                                    maxHeight: 38,
                                                    display: "none",
                                                    height: 38,
                                                    marginTop: "-3px"
                                                }}
                                            />
                                            <div>
                                                <div
                                                    className="selectron23-option-title"
                                                    data-sign="&#36;"
                                                    data-name="AUD"
                                                    data-desc="Australia"
                                                    style={{
                                                        display: "block",
                                                        fontFamily: "Arial",
                                                        fontWeight: "bold",
                                                        fontSize: 14,
                                                        color: "rgb(0, 0, 0)"
                                                    }}
                                                >
                                                    $ AUD
                                                </div>
                                                <div
                                                    className="selectron23-option-text"
                                                    style={{
                                                        fontSize: 12,
                                                        display: "block",
                                                        color: "rgb(170, 170, 170)",
                                                        fontFamily: "Arial"
                                                    }}
                                                >
                                                    Australia
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            data-value="GBP"
                                            className="selectron23-option"
                                            style={{ background: "rgb(250, 250, 250)", marginBottom: 2 }}
                                        >
                                            <img
                                                src="https://keyslo.com//wp-content/uploads/2024/02/united-kingdom.webp"
                                                alt=""
                                                loading="lazy"
                                                className="selectron23-img"
                                                style={{
                                                    float: "right",
                                                    maxHeight: 38,
                                                    display: "none",
                                                    height: 38,
                                                    marginTop: "-3px"
                                                }}
                                            />
                                            <div>
                                                <div
                                                    className="selectron23-option-title"
                                                    data-sign="&pound;"
                                                    data-name="GBP"
                                                    data-desc="United Kingdom"
                                                    style={{
                                                        display: "block",
                                                        fontFamily: "Arial",
                                                        fontWeight: "bold",
                                                        fontSize: 14,
                                                        color: "rgb(0, 0, 0)"
                                                    }}
                                                >
                                                    £ GBP
                                                </div>
                                                <div
                                                    className="selectron23-option-text"
                                                    style={{
                                                        fontSize: 12,
                                                        display: "block",
                                                        color: "rgb(170, 170, 170)",
                                                        fontFamily: "Arial"
                                                    }}
                                                >
                                                    United Kingdom
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            data-value="CAD"
                                            className="selectron23-option"
                                            style={{ background: "rgb(250, 250, 250)", marginBottom: 2 }}
                                        >
                                            <img
                                                src="https://keyslo.com//wp-content/uploads/2023/11/canada.webp"
                                                alt=""
                                                loading="lazy"
                                                className="selectron23-img"
                                                style={{
                                                    float: "right",
                                                    maxHeight: 38,
                                                    display: "none",
                                                    height: 38,
                                                    marginTop: "-3px"
                                                }}
                                            />
                                            <div>
                                                <div
                                                    className="selectron23-option-title"
                                                    data-sign="C&#36;"
                                                    data-name="CAD"
                                                    data-desc="Canada"
                                                    style={{
                                                        display: "block",
                                                        fontFamily: "Arial",
                                                        fontWeight: "bold",
                                                        fontSize: 14,
                                                        color: "rgb(0, 0, 0)"
                                                    }}
                                                >
                                                    C$ CAD
                                                </div>
                                                <div
                                                    className="selectron23-option-text"
                                                    style={{
                                                        fontSize: 12,
                                                        display: "block",
                                                        color: "rgb(170, 170, 170)",
                                                        fontFamily: "Arial"
                                                    }}
                                                >
                                                    Canada
                                                </div>
                                            </div>
                                        </div>
                                        <span
                                            data-pointer={1}
                                            style={{ top: 24, color: "rgb(0, 0, 0)" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="elementor-element elementor-element-8864429 e-flex e-con-boxed e-con e-parent e-lazyloaded"
                data-id={8864429}
                data-element_type="container"
            >
                <div className="e-con-inner">
                    <div
                        className="elementor-element elementor-element-70a7b7a elementor-widget elementor-widget-text-editor"
                        data-id="70a7b7a"
                        data-element_type="widget"
                        data-widget_type="text-editor.default"
                    >
                        <div className="elementor-widget-container">
                            <h6>Instant Delivery by Email, 30-Day Money-back Guarantee.</h6>{" "}
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

        <main
            id="content"
            className="site-main post-13 page type-page status-publish hentry"
        >
            <div className="page-header">
                <h1 className="entry-title">Checkout</h1>{" "}
            </div>
            <div className="page-content">
                <div
                    data-elementor-type="wp-page"
                    data-elementor-id={13}
                    className="elementor elementor-13"
                    data-elementor-post-type="page"
                >
                    <div
                        className="elementor-element elementor-element-a36b7af e-flex e-con-boxed e-con e-parent e-lazyloaded"
                        data-id="a36b7af"
                        data-element_type="container"
                    >
                        <div className="e-con-inner">
                            <div
                                className="elementor-element elementor-element-22b27d0 e-checkout-layout-two-column elementor-widget elementor-widget-woocommerce-checkout-page"
                                data-id="22b27d0"
                                data-element_type="widget"
                                data-widget_type="woocommerce-checkout-page.default"
                            >
                                <div className="elementor-widget-container">
                                    <div className="woocommerce">
                                        <div className="woocommerce-notices-wrapper">
                                            <div
                                                className="woocommerce-message"
                                                role="alert"
                                                tabIndex={-1}
                                            >
                                                “Superliminal Steam CD Key” has been added to your cart.{" "}
                                                <a
                                                    href="/home/cart"
                                                    className="button wc-forward"
                                                >
                                                    View cart
                                                </a>{" "}
                                            </div>
                                        </div>
                                        <div className="woocommerce-notices-wrapper" />
                                        <form
                                            name="checkout"
                                            method="post"
                                            className="checkout woocommerce-checkout"
                                            onSubmit={handleSubmit}
                                            encType="multipart/form-data"
                                            aria-label="Checkout"
                                            noValidate="novalidate"
                                        >
                                            <div className="e-checkout__container">
                                                {/*open container*/}
                                                <div className="e-checkout__column e-checkout__column-start">
                                                    {/*open column-1*/}
                                                    <div className="col2-set" id="customer_details">
                                                        <div className="col-1">
                                                            <wc-order-attribution-inputs>
                                                                <input
                                                                    type="hidden"
                                                                    name="wc_order_attribution_source_type"
                                                                    defaultValue="referral"
                                                                />
                                                                <input
                                                                    type="hidden"
                                                                    name="wc_order_attribution_referrer"
                                                                    defaultValue="http://localhost:3000/"
                                                                />
                                                                <input
                                                                    type="hidden"
                                                                    name="wc_order_attribution_utm_campaign"
                                                                    defaultValue="(none)"
                                                                />
                                                                <input
                                                                    type="hidden"
                                                                    name="wc_order_attribution_utm_source"
                                                                    defaultValue="localhost"
                                                                />
                                                                <input
                                                                    type="hidden"
                                                                    name="wc_order_attribution_utm_medium"
                                                                    defaultValue="referral"
                                                                />
                                                                <input
                                                                    type="hidden"
                                                                    name="wc_order_attribution_utm_content"
                                                                    defaultValue="/"
                                                                />
                                                                <input
                                                                    type="hidden"
                                                                    name="wc_order_attribution_utm_id"
                                                                    defaultValue="(none)"
                                                                />
                                                                <input
                                                                    type="hidden"
                                                                    name="wc_order_attribution_utm_term"
                                                                    defaultValue="(none)"
                                                                />
                                                                <input
                                                                    type="hidden"
                                                                    name="wc_order_attribution_utm_source_platform"
                                                                    defaultValue="(none)"
                                                                />
                                                                <input
                                                                    type="hidden"
                                                                    name="wc_order_attribution_utm_creative_format"
                                                                    defaultValue="(none)"
                                                                />
                                                                <input
                                                                    type="hidden"
                                                                    name="wc_order_attribution_utm_marketing_tactic"
                                                                    defaultValue="(none)"
                                                                />
                                                                <input
                                                                    type="hidden"
                                                                    name="wc_order_attribution_session_entry"
                                                                    defaultValue="https://keyslo.com/product-tag/avg/?v=13b5bfe96f3e"
                                                                />
                                                                <input
                                                                    type="hidden"
                                                                    name="wc_order_attribution_session_start_time"
                                                                    defaultValue="2025-02-18 08:22:38"
                                                                />
                                                                <input
                                                                    type="hidden"
                                                                    name="wc_order_attribution_session_pages"
                                                                    defaultValue={28}
                                                                />
                                                                <input
                                                                    type="hidden"
                                                                    name="wc_order_attribution_session_count"
                                                                    defaultValue={3}
                                                                />
                                                                <input
                                                                    type="hidden"
                                                                    name="wc_order_attribution_user_agent"
                                                                    defaultValue="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36"
                                                                />
                                                            </wc-order-attribution-inputs>
                                                            <div className="woocommerce-billing-fields">
                                                                <h3>Billing Details</h3>
                                                                <div className="woocommerce-billing-fields__field-wrapper">
                                                                    <p
                                                                        className="form-row form-row-first validate-required"
                                                                        id="billing_first_name_field"
                                                                        data-priority={10}
                                                                    >
                                                                        <label
                                                                            htmlFor="billing_first_name"
                                                                            className=""
                                                                        >
                                                                            First Name&nbsp;
                                                                            <abbr className="required" title="required">
                                                                                *
                                                                            </abbr>
                                                                        </label>
                                                                        <span className="woocommerce-input-wrapper">
                                                                            <input
                                                                                type="text"
                                                                                className="input-text "
                                                                                name="billing_first_name"
                                                                                id="billing_first_name"
                                                                                placeholder="First Name"

                                                                                aria-required="true"
                                                                                autoComplete="given-name"
                                                                                value={formData.billing_first_name}
                                                                                onChange={handleChange}
                                                                            />
                                                                        </span>
                                                                    </p>
                                                                    <p
                                                                        className="form-row form-row-last validate-required"
                                                                        id="billing_last_name_field"
                                                                        data-priority={20}
                                                                    >
                                                                        <label htmlFor="billing_last_name" className="">
                                                                            Last Name&nbsp;
                                                                            <abbr className="required" title="required">
                                                                                *
                                                                            </abbr>
                                                                        </label>
                                                                        <span className="woocommerce-input-wrapper">
                                                                            <input
                                                                                type="text"
                                                                                className="input-text "
                                                                                name="billing_last_name"
                                                                                id="billing_last_name"
                                                                                placeholder="Last Name"

                                                                                aria-required="true"
                                                                                autoComplete="family-name"
                                                                                value={formData.billing_last_name}
                                                                                onChange={handleChange}
                                                                            />
                                                                        </span>
                                                                    </p>
                                                                    <p
                                                                        className="form-row form-row-wide address-field update_totals_on_change validate-required"
                                                                        id="billing_country_field"
                                                                        data-priority={40}
                                                                    >
                                                                        <label htmlFor="billing_country" className="">
                                                                            Country / Region&nbsp;
                                                                            <abbr className="required" title="required">
                                                                                *
                                                                            </abbr>
                                                                        </label>
                                                                        <span className="woocommerce-input-wrapper">
                                                                            <select
                                                                                name="billing_country"
                                                                                id="billing_country"
                                                                                className="country_to_state country_select"
                                                                                aria-required="true"
                                                                                autoComplete="country"
                                                                                data-placeholder="Select a country / region…"
                                                                                data-label="Country / Region"
                                                                                value={selectedCountry}
                                                                                onChange={handleCountryChange}
                                                                            >
                                                                                <option value="">Select a country / region…</option>
                                                                                {Country.getAllCountries().map((country) => (
                                                                                    <option key={country.isoCode} value={country.isoCode}>
                                                                                        {country.name}
                                                                                    </option>
                                                                                ))}
                                                                            </select>

                                                                        </span>
                                                                    </p>
                                                                    <p
                                                                        className="form-row address-field validate-required form-row-wide"
                                                                        id="billing_address_1_field"
                                                                        data-priority={50}
                                                                    >
                                                                        <label htmlFor="billing_address_1" className="">
                                                                            Street address&nbsp;
                                                                            <abbr className="required" title="required">
                                                                                *
                                                                            </abbr>
                                                                        </label>
                                                                        <span className="woocommerce-input-wrapper">
                                                                            <input
                                                                                type="text"
                                                                                className="input-text "
                                                                                name="billing_address_1"
                                                                                id="billing_address_1"
                                                                                placeholder="House number and street name"

                                                                                aria-required="true"
                                                                                autoComplete="address-line1"
                                                                                data-placeholder="House number and street name"
                                                                                value={formData.billing_address_1}
                                                                                onChange={handleChange}
                                                                            />
                                                                        </span>
                                                                    </p>
                                                                    <p
                                                                        className="form-row address-field validate-required form-row-wide"
                                                                        id="billing_city_field"
                                                                        data-priority={70}
                                                                        data-o_class="form-row form-row-wide address-field validate-required"
                                                                    >
                                                                        <label htmlFor="billing_city" className="">
                                                                            Town / City&nbsp;
                                                                            <abbr className="required" title="required">
                                                                                *
                                                                            </abbr>
                                                                        </label>
                                                                        <span className="woocommerce-input-wrapper">
                                                                            <input
                                                                                type="text"
                                                                                className="input-text "
                                                                                name="billing_city"
                                                                                id="billing_city"
                                                                                placeholder=""

                                                                                aria-required="true"
                                                                                autoComplete="address-level2"
                                                                                value={formData.billing_city}
                                                                                onChange={handleChange}
                                                                            />
                                                                        </span>
                                                                    </p>
                                                                    <p
                                                                        className="form-row form-row-wide validate-required validate-phone"
                                                                        id="billing_phone_field"
                                                                        data-priority={100}
                                                                    >
                                                                        <label htmlFor="billing_phone" className="">
                                                                            Phone&nbsp;
                                                                            <abbr className="required" title="required">
                                                                                *
                                                                            </abbr>
                                                                        </label>
                                                                        <span className="woocommerce-input-wrapper">
                                                                            <input
                                                                                type="tel"
                                                                                className="input-text "
                                                                                name="billing_phone"
                                                                                id="billing_phone"
                                                                                placeholder="Phone"

                                                                                aria-required="true"
                                                                                autoComplete="tel"
                                                                                value={formData.billing_phone}
                                                                                onChange={handleChange}
                                                                            />
                                                                        </span>
                                                                    </p>
                                                                    <p
                                                                        className="form-row form-row-wide validate-required validate-email"
                                                                        id="billing_email_field"
                                                                        data-priority={110}
                                                                    >
                                                                        <label htmlFor="billing_email" className="">
                                                                            Email Address&nbsp;
                                                                            <abbr className="required" title="required">
                                                                                *
                                                                            </abbr>
                                                                        </label>
                                                                        <span className="woocommerce-input-wrapper">
                                                                            <input
                                                                                type="email"
                                                                                className="input-text "
                                                                                name="billing_email"
                                                                                id="billing_email"
                                                                                placeholder="Email Address"

                                                                                aria-required="true"
                                                                                autoComplete="email username"
                                                                                value={formData.billing_email}
                                                                                onChange={handleChange}
                                                                            />
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-2">
                                                            <div className="woocommerce-shipping-fields"></div>
                                                            <div className="woocommerce-additional-fields">
                                                                <h3 />
                                                                <div className="woocommerce-additional-fields__field-wrapper">
                                                                    <p
                                                                        className="form-row notes"
                                                                        id="order_comments_field"
                                                                        data-priority=""
                                                                    >
                                                                        <label htmlFor="order_comments" className="">
                                                                            Order notes&nbsp;
                                                                            <span className="optional">(optional)</span>
                                                                        </label>
                                                                        <span className="woocommerce-input-wrapper">
                                                                            <textarea
                                                                                name="order_comments"
                                                                                className="input-text "
                                                                                id="order_comments"
                                                                                placeholder="Notes about your order, e.g. special notes for delivery."
                                                                                rows={2}
                                                                                cols={5}
                                                                                defaultValue={""}
                                                                            />
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/*close column-1*/}
                                                </div>
                                                <div className="e-checkout__column e-checkout__column-end">
                                                    {/*open column-2*/}
                                                    <div className="e-checkout__column-inner e-sticky-right-column">
                                                        {/*open column-inner*/}
                                                        <div className="e-checkout__order_review">
                                                            {/*open order_review*/}
                                                            <h3 id="order_review_heading">Your Order Details</h3>
                                                            <div
                                                                id="order_review"
                                                                className="woocommerce-checkout-review-order"
                                                            >
                                                                <table className="shop_table woocommerce-checkout-review-order-table">
                                                                    <thead>
                                                                        <tr>
                                                                            <th className="product-name">Product</th>
                                                                            <th className="product-total">Subtotal</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {cart.map((item, index) => {
                                                                            // Extract price and remove non-numeric characters
                                                                            const priceString = item.productData?.priceInfo?.Price || "0";
                                                                            const cleanPrice = parseFloat(priceString.replace(/[^0-9.]/g, "")) || 0;

                                                                            // Convert quantity to an integer, default to 1 if empty
                                                                            const quantity = parseInt(item.quantity, 10) || 1;

                                                                            return (
                                                                                <tr key={index} className="cart_item">
                                                                                    <td className="product-name">
                                                                                        {item.productData?.productInfo?.productName}&nbsp;
                                                                                        <strong className="product-quantity">×&nbsp;{quantity}</strong>
                                                                                    </td>
                                                                                    <td className="product-total">
                                                                                        <span className="woocs_special_price_code">
                                                                                            <span className="woocommerce-Price-amount amount">
                                                                                                <bdi>
                                                                                                    <span className="woocommerce-Price-currencySymbol">₹</span>
                                                                                                    {(cleanPrice * quantity).toFixed(2)}
                                                                                                </bdi>
                                                                                            </span>
                                                                                        </span>
                                                                                    </td>
                                                                                </tr>
                                                                            );
                                                                        })}

                                                                    </tbody>
                                                                    <tfoot>
                                                                        <tr className="cart-subtotal">
                                                                            <th>Subtotal</th>
                                                                            <td>
                                                                                <span className="woocs_special_price_code">
                                                                                    <span className="woocommerce-Price-amount amount">
                                                                                        <bdi>
                                                                                            <span className="woocommerce-Price-currencySymbol">
                                                                                                ₹
                                                                                            </span>
                                                                                            {cart
                                                                                                .reduce((sum, item) => {
                                                                                                    // Ensure costPrice is a valid number
                                                                                                    const costPriceString = item.productData?.priceInfo?.costPrice || "0";
                                                                                                    const cleanCostPrice = parseFloat(costPriceString.replace(/[^0-9.]/g, "")) || 0;

                                                                                                    // Convert quantity to an integer, default to 1 if empty
                                                                                                    const quantity = parseInt(item.quantity, 10) || 1;

                                                                                                    return sum + cleanCostPrice * quantity;
                                                                                                }, 0)
                                                                                                .toFixed(2)}

                                                                                        </bdi>
                                                                                    </span>
                                                                                </span>
                                                                            </td>
                                                                        </tr>
                                                                        <tr className="order-total">
                                                                            <th>Total</th>
                                                                            <td>
                                                                                <strong>
                                                                                    <span className="woocs_special_price_code">
                                                                                        <span className="woocommerce-Price-amount amount">
                                                                                            <bdi>
                                                                                                <span className="woocommerce-Price-currencySymbol">
                                                                                                    ₹
                                                                                                </span>
                                                                                                {cart
                                                                                                    .reduce((sum, item) => {
                                                                                                        // Ensure Price is a valid number
                                                                                                        const priceString = item.productData?.priceInfo?.Price || "0";
                                                                                                        const cleanPrice = parseFloat(priceString.replace(/[^0-9.]/g, "")) || 0;

                                                                                                        // Convert quantity to an integer, default to 1 if empty
                                                                                                        const quantity = parseInt(item.quantity, 10) || 1;

                                                                                                        return sum + cleanPrice * quantity;
                                                                                                    }, 0)
                                                                                                    .toFixed(2)}

                                                                                            </bdi>
                                                                                        </span>
                                                                                    </span>
                                                                                </strong>{" "}
                                                                            </td>
                                                                        </tr>
                                                                    </tfoot>
                                                                </table>
                                                                {/*close wc_order_review*/}
                                                            </div>
                                                            {/*close order_review*/}
                                                        </div>
                                                        <div className="e-coupon-box">
                                                            <p className="e-woocommerce-coupon-nudge e-checkout-secondary-title">
                                                                Have a coupon?{" "}
                                                                <a href="#" className="e-show-coupon-form">
                                                                    Click here to enter your coupon code
                                                                </a>
                                                            </p>
                                                            <div
                                                                className="e-coupon-anchor"
                                                                style={{ display: "none" }}
                                                            >
                                                                <label className="e-coupon-anchor-description">
                                                                    If you have a coupon code, please apply it below.
                                                                </label>
                                                                <div className="form-row">
                                                                    <div className="coupon-container-grid">
                                                                        <div className="col coupon-col-1 ">
                                                                            <input
                                                                                type="text"
                                                                                name="coupon_code"
                                                                                className="input-text"
                                                                                placeholder="Coupon code"
                                                                                id="coupon_code"

                                                                            />
                                                                        </div>
                                                                        <div className="col coupon-col-2">
                                                                            <button
                                                                                className="woocommerce-button button e-apply-coupon"
                                                                                name="apply_coupon"
                                                                                type="submit"
                                                                            >
                                                                                Apply
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="clear" />
                                                            </div>
                                                        </div>
                                                        <div className="e-checkout__order_review-2">
                                                            {/*reopen wc_order_review-2*/}
                                                            <div
                                                                className="g-recaptcha"
                                                                data-sitekey="6LdspM0qAAAAAHy7xs08Sm4gzXqz69e8-M1cxxJu"
                                                            >
                                                                <div style={{ width: 304, height: 78 }}>
                                                                    <div>
                                                                        <iframe
                                                                            title="reCAPTCHA"
                                                                            width={304}
                                                                            height={78}
                                                                            role="presentation"
                                                                            name="a-8s1237doo1qw"
                                                                            frameBorder={0}
                                                                            scrolling="no"
                                                                            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                                                                            src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LdspM0qAAAAAHy7xs08Sm4gzXqz69e8-M1cxxJu&co=aHR0cHM6Ly9rZXlzbG8uY29tOjQ0Mw..&hl=en&v=IyZ984yGrXrBd6ihLOYGwy9X&size=normal&cb=kmvmxlcffr17"
                                                                        />
                                                                    </div>
                                                                    <textarea
                                                                        id="g-recaptcha-response"
                                                                        name="g-recaptcha-response"
                                                                        className="g-recaptcha-response"
                                                                        style={{
                                                                            width: 250,
                                                                            height: 40,
                                                                            border: "1px solid rgb(193, 193, 193)",
                                                                            margin: "10px 25px",
                                                                            padding: 0,
                                                                            resize: "none",
                                                                            display: "none"
                                                                        }}
                                                                        defaultValue={""}
                                                                    />
                                                                </div>
                                                                <iframe style={{ display: "none" }} />
                                                            </div>
                                                            <br />
                                                            <div
                                                                id="payment"
                                                                className="woocommerce-checkout-payment"
                                                            >
                                                                <ul className="wc_payment_methods payment_methods methods stripe-small">
                                                                    <li className="wc_payment_method payment_method_paytm">
                                                                        <input
                                                                            id="payment_method_paytm"
                                                                            type="radio"
                                                                            className="input-radio"
                                                                            name="payment_method"
                                                                            defaultValue="paytm"
                                                                            defaultChecked="checked"
                                                                            data-order_button_text=""
                                                                            style={{ display: "none" }}
                                                                        />
                                                                        <label
                                                                            htmlFor="payment_method_paytm"
                                                                            style={{ visibility: "visible" }}
                                                                        >
                                                                            Paytm Payment Gateway{" "}
                                                                            <img
                                                                                src="https://staticpg.paytmpayments.com/pg_plugins_logo/paytm_logo_paymodes.svg"
                                                                                alt="Paytm Payment Gateway"
                                                                            />{" "}
                                                                        </label>
                                                                        <div className="payment_box payment_method_paytm">
                                                                            <p>UPI / QR Code Payment.</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                                <div className="form-row place-order">
                                                                    <noscript>
                                                                        Since your browser does not support JavaScript,
                                                                        or it is disabled, please ensure you click the
                                                                        &lt;em&gt;Update Totals&lt;/em&gt; button before
                                                                        placing your order. You may be charged more than
                                                                        the amount stated above if you fail to do so.
                                                                        &lt;br/&gt;&lt;button type="submit"
                                                                        class="button alt"
                                                                        name="woocommerce_checkout_update_totals"
                                                                        value="Update totals"&gt;Update
                                                                        totals&lt;/button&gt;
                                                                    </noscript>
                                                                    <div className="woocommerce-terms-and-conditions-wrapper">
                                                                        <div className="woocommerce-privacy-policy-text">
                                                                            <p>
                                                                                Your personal data will be used to process
                                                                                your order, support your experience
                                                                                throughout this website, and for other
                                                                                purposes described in our{" "}
                                                                                <a
                                                                                    href="/home/privacyPolicy"
                                                                                    className="woocommerce-privacy-policy-link"
                                                                                    target="_blank"
                                                                                >
                                                                                    Privacy policy
                                                                                </a>
                                                                                .
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <button
                                                                        type="submit"
                                                                        className="button alt"
                                                                        name="woocommerce_checkout_place_order"
                                                                        id="place_order"
                                                                        value="Place order"
                                                                        data-value="Place order"
                                                                    >
                                                                        Place order
                                                                    </button>
                                                                    <input
                                                                        type="hidden"
                                                                        id="woocommerce-process-checkout-nonce"
                                                                        name="woocommerce-process-checkout-nonce"
                                                                        defaultValue="c5caa02a24"
                                                                    />
                                                                    <input
                                                                        type="hidden"
                                                                        name="_wp_http_referer"
                                                                        defaultValue="https://keyslo.com/checkout/?elementorPageId=13&elementorWidgetId=22b27d0"
                                                                    />{" "}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/*close wc_order_review-2*/}
                                                        {/*close column-inner*/}
                                                    </div>
                                                    {/*close column-2*/}
                                                </div>
                                                {/*close container*/}
                                            </div>
                                        </form>
                                    </div>{" "}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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

export default checkout;