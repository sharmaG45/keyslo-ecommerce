'use client';

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
// import { fetchProducts } from "../../products/page";
import fetchProducts from "@/app/assets/product.json"

const productCategory = () => {
    const [sortOrder, setSortOrder] = useState("menu_order");
    const [currentPage, setCurrentPage] = useState(1);
    const [products, setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const productsPerPage = 15;

    const router = useRouter();
    const params = useSearchParams();
    const category = params.get('Name');

    useEffect(() => {
        const getProducts = async () => {
            try {
                // Ensure fetchProducts is an array
                const allProducts = fetchProducts ? [...fetchProducts] : [];

                // Helper function to extract numeric price
                const extractPrice = (priceStr) => {
                    return Number(priceStr.replace(/[^\d.]/g, "")) || 0;
                };

                // Sorting logic
                let sortedProducts = [...allProducts];

                if (sortOrder === "popularity") {
                    sortedProducts.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
                } else if (sortOrder === "rating") {
                    sortedProducts.sort((a, b) => (b.rating || 0) - (a.rating || 0));
                } else if (sortOrder === "date") {
                    sortedProducts.sort((a, b) => new Date(b.date) - new Date(a.date));
                } else if (sortOrder === "price") {
                    sortedProducts.sort((a, b) => extractPrice(a.discounted_price) - extractPrice(b.discounted_price));
                } else if (sortOrder === "price-desc") {
                    sortedProducts.sort((a, b) => extractPrice(b.discounted_price) - extractPrice(a.discounted_price));
                }

                // Implement pagination
                const startIndex = (currentPage - 1) * productsPerPage;
                const paginatedProducts = sortedProducts.slice(startIndex, startIndex + productsPerPage);

                setProducts(paginatedProducts);
                setTotalPages(Math.ceil(sortedProducts.length / productsPerPage));
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        getProducts();
    }, [fetchProducts, sortOrder, currentPage]);

    // price Range
    const [minPrice, setMinPrice] = useState(40);
    const [maxPrice, setMaxPrice] = useState(15000);
    const [filterProducts, setFilteredProducts] = useState();

    useEffect(() => {
        // Function to filter products based on price
        const filterProducts = () => {
            const filtered = fetchProducts.filter(product => {
                const productPrice = Number(product.discounted_price.replace(/[^\d.]/g, ""));
                return productPrice >= minPrice && productPrice <= maxPrice;
            });
            setFilteredProducts(filtered);
        };

        filterProducts();
    }, [minPrice, maxPrice, fetchProducts, setFilteredProducts]);

    const handleProducts = (e, product_name) => {
        e.preventDefault();
        router.push(`/home/products?productName=${encodeURIComponent(product_name)}`);
    };

    return <>
        <div
            data-elementor-type="product-archive"
            data-elementor-id={11051}
            className="elementor elementor-11051 elementor-location-archive product"
            data-elementor-post-type="elementor_library"
        >
            <div
                className="elementor-element elementor-element-eb332cc e-flex e-con-boxed e-con e-parent e-lazyloaded"
                data-id="eb332cc"
                data-element_type="container"
                data-settings='{"background_background":"classic"}'
            >
                <div className="e-con-inner">
                    <div
                        className="elementor-element elementor-element-e086243 elementor-widget elementor-widget-woocommerce-breadcrumb"
                        data-id="e086243"
                        data-element_type="widget"
                        data-widget_type="woocommerce-breadcrumb.default"
                    >
                        <div className="elementor-widget-container">
                            <nav className="woocommerce-breadcrumb" aria-label="Breadcrumb">
                                <a href="https://keyslo.com?v=13b5bfe96f3e">Home</a>
                                &nbsp;/&nbsp;{category}
                            </nav>{" "}
                        </div>
                    </div>
                    <div
                        className="elementor-element elementor-element-46c4b9f elementor-widget elementor-widget-theme-archive-title elementor-page-title elementor-widget-heading"
                        data-id="46c4b9f"
                        data-element_type="widget"
                        data-widget_type="theme-archive-title.default"
                    >
                        <div className="elementor-widget-container">
                            <h1 className="elementor-heading-title elementor-size-default">
                                <a href="https://keyslo.com/product/combo-windows-10-professional-office-2021-professional-plus/?v=13b5bfe96f3e">
                                    Category: {category}
                                </a>
                            </h1>{" "}
                        </div>
                    </div>
                    <div
                        className="elementor-element elementor-element-5edc9dd elementor-widget elementor-widget-woocommerce-archive-description"
                        data-id="5edc9dd"
                        data-element_type="widget"
                        data-widget_type="woocommerce-archive-description.default"
                    >
                        <div className="elementor-widget-container">
                            <div className="term-description">
                                <p>
                                    Explore our range of{" "}
                                    <strong>Microsoft Office Applications</strong>, designed to boost
                                    your productivity with tools like Word, Excel, PowerPoint, and
                                    more. Perfect for personal, academic, and professional use, these
                                    applications offer seamless integration and intuitive features to
                                    help you stay organized and efficient.
                                </p>
                                <p>
                                    At <strong>Keyslo</strong>, we ensure you get genuine software
                                    product keys delivered instantly—
                                    <strong>within 10 seconds via email</strong>. Our keys are 100%
                                    authentic, providing the security and reliability you expect.
                                    Plus, enjoy <strong>24/7 customer support</strong> by phone or
                                    email, ensuring that help is always available when you need it.
                                </p>
                                <p>
                                    Stay worry-free with our <strong>30-day money-back policy</strong>
                                    , giving you peace of mind with every purchase. Get your Microsoft
                                    Office Application now and experience genuine software with
                                    unmatched convenience and support!
                                </p>
                            </div>{" "}
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="elementor-element elementor-element-c1d7e70 e-flex e-con-boxed e-con e-parent e-lazyloaded"
                data-id="c1d7e70"
                data-element_type="container"
            >
                <div className="e-con-inner">
                    <div
                        className="elementor-element elementor-element-7bed00a e-con-full elementor-hidden-tablet elementor-hidden-mobile e-flex e-con e-child"
                        data-id="7bed00a"
                        data-element_type="container"
                    >
                        <div
                            className="elementor-element elementor-element-935e95f elementor-search-form--skin-classic elementor-search-form--button-type-icon elementor-search-form--icon-search elementor-widget elementor-widget-search-form"
                            data-id="935e95f"
                            data-element_type="widget"
                            data-settings='{"skin":"classic"}'
                            data-widget_type="search-form.default"
                        >
                            <div className="elementor-widget-container">
                                <search role="search">
                                    <form
                                        className="elementor-search-form"
                                        action="https://keyslo.com"
                                        method="get"
                                    >
                                        <div className="elementor-search-form__container">
                                            <label
                                                className="elementor-screen-only"
                                                htmlFor="elementor-search-form-935e95f"
                                            >
                                                Search
                                            </label>
                                            <input
                                                id="elementor-search-form-935e95f"
                                                placeholder="What are you looking for?"
                                                className="elementor-search-form__input"
                                                type="search"
                                                name="s"
                                                defaultValue=""
                                            />
                                            <button
                                                className="elementor-search-form__submit"
                                                type="submit"
                                                aria-label="Search"
                                            >
                                                <i aria-hidden="true" className="fas fa-search" />{" "}
                                            </button>
                                        </div>
                                        <input type="hidden" name="v" defaultValue="13b5bfe96f3e" />
                                    </form>
                                </search>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-9ba00b4 elementor-widget elementor-widget-wp-widget-woocommerce_price_filter"
                            data-id="9ba00b4"
                            data-element_type="widget"
                            data-widget_type="wp-widget-woocommerce_price_filter.default"
                        >
                            <div className="elementor-widget-container">
                                <div className="woocommerce widget_price_filter">
                                    <h5>Filter by price</h5>
                                    <form
                                        method="get"
                                        action="https://keyslo.com/product-category/office/?v=13b5bfe96f3e"
                                    >
                                        <div className="price_slider_wrapper">
                                            <div
                                                className="price_slider ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                                                style={{}}
                                            >
                                                <div
                                                    className="ui-slider-range ui-corner-all ui-widget-header"
                                                    style={{ left: "0%", width: "100%" }}
                                                />
                                                <span
                                                    tabIndex={0}
                                                    className="ui-slider-handle ui-corner-all ui-state-default"
                                                    style={{ left: "0%" }}
                                                />
                                                <span
                                                    tabIndex={0}
                                                    className="ui-slider-handle ui-corner-all ui-state-default"
                                                    style={{ left: "100%" }}
                                                />
                                            </div>
                                            <div className="price_slider_amount" data-step={10}>
                                                <label className="screen-reader-text" htmlFor="min_price">
                                                    Min price
                                                </label>
                                                <input
                                                    type="text"
                                                    id="min_price"
                                                    name="min_price"
                                                    defaultValue={40}
                                                    data-min={40}
                                                    placeholder="Min price"
                                                    style={{ display: "none" }}
                                                />
                                                <label className="screen-reader-text" htmlFor="max_price">
                                                    Max price
                                                </label>
                                                <input
                                                    type="text"
                                                    id="max_price"
                                                    name="max_price"
                                                    defaultValue={15000}
                                                    data-max={15000}
                                                    placeholder="Max price"
                                                    style={{ display: "none" }}
                                                />
                                                <button type="submit" className="button">
                                                    Filter
                                                </button>
                                                <div className="price_label" style={{}}>
                                                    Price: <span className="from">₹ 40.00</span> —{" "}
                                                    <span className="to">₹ 15,000.00</span>
                                                </div>
                                                <input type="hidden" name="v" defaultValue="13b5bfe96f3e" />{" "}
                                                <div className="clear" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-2909f84 elementor-widget elementor-widget-wp-widget-woocommerce_product_categories"
                            data-id="2909f84"
                            data-element_type="widget"
                            data-widget_type="wp-widget-woocommerce_product_categories.default"
                        >
                            <div className="elementor-widget-container">
                                <div className="woocommerce widget_product_categories">
                                    <h5>Product categories</h5>
                                    <ul className="product-categories">
                                        <li className="cat-item cat-item-146">
                                            <a href="https://keyslo.com/product-category/antivirus/?v=13b5bfe96f3e">
                                                Antivirus
                                            </a>{" "}
                                            <span className="count">(6)</span>
                                        </li>
                                        <li className="cat-item cat-item-202">
                                            <a href="https://keyslo.com/product-category/utility/?v=13b5bfe96f3e">
                                                Utility
                                            </a>{" "}
                                            <span className="count">(64)</span>
                                        </li>
                                        <li className="cat-item cat-item-208 current-cat">
                                            <a href="https://keyslo.com/product-category/office/?v=13b5bfe96f3e">
                                                Office
                                            </a>{" "}
                                            <span className="count">(31)</span>
                                        </li>
                                        <li className="cat-item cat-item-216">
                                            <a href="https://keyslo.com/product-category/operating-system/?v=13b5bfe96f3e">
                                                Operating System
                                            </a>{" "}
                                            <span className="count">(29)</span>
                                        </li>
                                        <li className="cat-item cat-item-266">
                                            <a href="https://keyslo.com/product-category/productivity-application/?v=13b5bfe96f3e">
                                                Productivity Application
                                            </a>{" "}
                                            <span className="count">(6)</span>
                                        </li>
                                        <li className="cat-item cat-item-300">
                                            <a href="https://keyslo.com/product-category/games/?v=13b5bfe96f3e">
                                                Games
                                            </a>{" "}
                                            <span className="count">(834)</span>
                                        </li>
                                    </ul>
                                </div>{" "}
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-9248a01 elementor-widget elementor-widget-wp-widget-woocommerce_recent_reviews"
                            data-id="9248a01"
                            data-element_type="widget"
                            data-widget_type="wp-widget-woocommerce_recent_reviews.default"
                        >
                            <div className="elementor-widget-container">
                                <div className="woocommerce widget_recent_reviews">
                                    <h5>Recent reviews</h5>
                                    <ul className="product_list_widget">
                                        <li>
                                            <a href="https://keyslo.com/product/windows-10-education-1-pc-lifetime-validity/?v=13b5bfe96f3e#comment-105795">
                                                <img
                                                    fetchPriority="high"
                                                    width={315}
                                                    height={315}
                                                    src="https://keyslo.com/wp-content/uploads/2024/10/Windows-10-Education-1-PC-Lifetime-Validity-315x315.webp"
                                                    className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                    alt="Windows 10 Education 1 PC Lifetime Validity"
                                                    decoding="async"
                                                    srcSet="https://keyslo.com/wp-content/uploads/2024/10/Windows-10-Education-1-PC-Lifetime-Validity-315x315.webp 315w, https://keyslo.com/wp-content/uploads/2024/10/Windows-10-Education-1-PC-Lifetime-Validity-359x360.webp 359w, https://keyslo.com/wp-content/uploads/2024/10/Windows-10-Education-1-PC-Lifetime-Validity-100x100.webp 100w, https://keyslo.com/wp-content/uploads/2024/10/Windows-10-Education-1-PC-Lifetime-Validity.webp 450w"
                                                    sizes="(max-width: 315px) 100vw, 315px"
                                                />{" "}
                                                <span className="product-title">
                                                    Windows 10 Education 1 PC Lifetime Validity
                                                </span>
                                            </a>
                                            <div
                                                className="star-rating"
                                                role="img"
                                                aria-label="Rated 5 out of 5"
                                            >
                                                <span style={{ width: "100%" }}>
                                                    Rated <strong className="rating">5</strong> out of 5
                                                </span>
                                            </div>
                                            <span className="reviewer">by Gaurav Kumar </span>
                                        </li>
                                        <li>
                                            <a href="https://keyslo.com/product/office-professional-plus-2024-1-user-lifetime/?v=13b5bfe96f3e#comment-105794">
                                                <img
                                                    loading="lazy"
                                                    width={315}
                                                    height={315}
                                                    src="https://keyslo.com/wp-content/uploads/2024/10/Office-Professional-Plus-2024-1-User-Lifetime-315x315.webp"
                                                    className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                    alt="Office Professional Plus 2024 1 User Lifetime"
                                                    decoding="async"
                                                    srcSet="https://keyslo.com/wp-content/uploads/2024/10/Office-Professional-Plus-2024-1-User-Lifetime-315x315.webp 315w, https://keyslo.com/wp-content/uploads/2024/10/Office-Professional-Plus-2024-1-User-Lifetime-360x360.webp 360w, https://keyslo.com/wp-content/uploads/2024/10/Office-Professional-Plus-2024-1-User-Lifetime-514x514.webp 514w, https://keyslo.com/wp-content/uploads/2024/10/Office-Professional-Plus-2024-1-User-Lifetime-500x500.webp 500w, https://keyslo.com/wp-content/uploads/2024/10/Office-Professional-Plus-2024-1-User-Lifetime-100x100.webp 100w, https://keyslo.com/wp-content/uploads/2024/10/Office-Professional-Plus-2024-1-User-Lifetime.webp 600w"
                                                    sizes="(max-width: 315px) 100vw, 315px"
                                                />{" "}
                                                <span className="product-title">
                                                    Office Professional Plus 2024 1 User Lifetime
                                                </span>
                                            </a>
                                            <div
                                                className="star-rating"
                                                role="img"
                                                aria-label="Rated 5 out of 5"
                                            >
                                                <span style={{ width: "100%" }}>
                                                    Rated <strong className="rating">5</strong> out of 5
                                                </span>
                                            </div>
                                            <span className="reviewer">by Priyanshi NP </span>
                                        </li>
                                        <li>
                                            <a href="https://keyslo.com/product/windows-server-2025-datacenter-product-key/?v=13b5bfe96f3e#comment-105793">
                                                <img
                                                    loading="lazy"
                                                    width={315}
                                                    height={315}
                                                    src="https://keyslo.com/wp-content/uploads/2024/10/Microsoft-Windows-Server-Datacenter-2025-Cd-Key-315x315.webp"
                                                    className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                    alt="Microsoft Windows Server Datacenter 2025 Cd Key"
                                                    decoding="async"
                                                    srcSet="https://keyslo.com/wp-content/uploads/2024/10/Microsoft-Windows-Server-Datacenter-2025-Cd-Key-315x315.webp 315w, https://keyslo.com/wp-content/uploads/2024/10/Microsoft-Windows-Server-Datacenter-2025-Cd-Key-360x360.webp 360w, https://keyslo.com/wp-content/uploads/2024/10/Microsoft-Windows-Server-Datacenter-2025-Cd-Key-514x514.webp 514w, https://keyslo.com/wp-content/uploads/2024/10/Microsoft-Windows-Server-Datacenter-2025-Cd-Key-500x500.webp 500w, https://keyslo.com/wp-content/uploads/2024/10/Microsoft-Windows-Server-Datacenter-2025-Cd-Key-100x100.webp 100w, https://keyslo.com/wp-content/uploads/2024/10/Microsoft-Windows-Server-Datacenter-2025-Cd-Key.webp 600w"
                                                    sizes="(max-width: 315px) 100vw, 315px"
                                                />{" "}
                                                <span className="product-title">
                                                    Windows Server 2025 Datacenter Product Key
                                                </span>
                                            </a>
                                            <div
                                                className="star-rating"
                                                role="img"
                                                aria-label="Rated 5 out of 5"
                                            >
                                                <span style={{ width: "100%" }}>
                                                    Rated <strong className="rating">5</strong> out of 5
                                                </span>
                                            </div>
                                            <span className="reviewer">by Sayantan Mandal </span>
                                        </li>
                                    </ul>
                                </div>{" "}
                            </div>
                        </div>
                    </div>
                    <div
                        className="elementor-element elementor-element-3a627cc e-con-full e-flex e-con e-child"
                        data-id="3a627cc"
                        data-element_type="container"
                    >
                        <div
                            className="elementor-element elementor-element-0ac693f elementor-product-loop-item--align-center elementor-products-grid elementor-wc-products elementor-show-pagination-border-yes elementor-widget elementor-widget-wc-archive-products"
                            data-id="0ac693f"
                            data-element_type="widget"
                            data-widget_type="wc-archive-products.default"
                        >
                            <div className="elementor-widget-container">
                                <div className="woocommerce columns-3 ">
                                    <div className="woocommerce-notices-wrapper" />
                                    <p className="woocommerce-result-count">
                                        {`Showing ${Math.min((currentPage - 1) * productsPerPage + 1, fetchProducts.length)}–
     ${Math.min(currentPage * productsPerPage, fetchProducts.length)} of ${fetchProducts.length} results`}
                                    </p>


                                    <form className="woocommerce-ordering" method="get">
                                        <select
                                            name="orderby"
                                            className="orderby"
                                            aria-label="Shop order"
                                            value={sortOrder}
                                            onChange={(e) => setSortOrder(e.target.value)}
                                        >
                                            <option value="menu_order">Default sorting</option>
                                            <option value="popularity">Sort by popularity</option>
                                            <option value="rating">Sort by average rating</option>
                                            <option value="date">Sort by latest</option>
                                            <option value="price">Sort by price: low to high</option>
                                            <option value="price-desc">Sort by price: high to low</option>
                                        </select>
                                        <input type="hidden" name="paged" defaultValue={1} />
                                        <input type="hidden" name="v" defaultValue="13b5bfe96f3e" />
                                    </form>
                                    <ul className="products elementor-grid columns-3">
                                        {products.map((items, index) => (
                                            <li className="product type-product post-9697 status-publish first outofstock product_cat-office product_cat-operating-system product_tag-office product_tag-operating-system has-post-thumbnail sale downloadable virtual purchasable product-type-simple" key={index}>
                                                <a
                                                    href="#"
                                                    onClick={(e) => handleProducts(e, items.product_name)}
                                                    className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                                                >
                                                    <span className="onsale">Sale!</span>
                                                    <img
                                                        loading="lazy"
                                                        width={315}
                                                        height={315}
                                                        src={items.image_url}
                                                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                        alt=""
                                                        decoding="async"
                                                        srcSet={items.image_url}
                                                        sizes="(max-width: 315px) 100vw, 315px"
                                                    />
                                                    <h2 className="woocommerce-loop-product__title">
                                                        {items.product_name}
                                                    </h2>
                                                    <div
                                                        className="star-rating"
                                                        role="img"
                                                        aria-label="Rated 4.86 out of 5"
                                                    >
                                                        <span style={{ width: "97.2%" }}>
                                                            Rated <strong className="rating">4.86</strong> out of 5
                                                        </span>
                                                    </div>
                                                    <span className="price">
                                                        <span
                                                            className="woocs_price_code"
                                                            data-currency=""
                                                            data-redraw-id="67b46a3d5b9fc"
                                                            data-product-id={9697}
                                                        >
                                                            <del aria-hidden="true">
                                                                <span className="woocommerce-Price-amount amount">
                                                                    <bdi>
                                                                        <span className="woocommerce-Price-currencySymbol">

                                                                        </span>
                                                                        {items.original_price}.
                                                                    </bdi>
                                                                </span>
                                                            </del>{" "}
                                                            <span className="screen-reader-text">
                                                                Original price was: {items.original_price}.
                                                            </span>
                                                            <ins aria-hidden="true">
                                                                <span className="woocommerce-Price-amount amount">
                                                                    <bdi>
                                                                        <span className="woocommerce-Price-currencySymbol">

                                                                        </span>
                                                                        {items.discounted_price}.
                                                                    </bdi>
                                                                </span>
                                                            </ins>
                                                            <span className="screen-reader-text">
                                                                Current price is: {items.discounted_price}.
                                                            </span>
                                                        </span>
                                                    </span>
                                                </a>
                                                <a
                                                    href="#"
                                                    onClick={(e) => handleProducts(e, items.product_name)}
                                                    aria-describedby="woocommerce_loop_add_to_cart_link_describedby_9697"
                                                    data-quantity={1}
                                                    className="button product_type_simple"
                                                    data-product_id={9697}
                                                    data-product_sku=""
                                                    aria-label="Read more about “Combo: Windows 10 Professional + Office 2021 Professional plus”"
                                                    rel="nofollow"
                                                    data-success_message=""
                                                >
                                                    Read more
                                                </a>{" "}
                                                <span
                                                    id="woocommerce_loop_add_to_cart_link_describedby_9697"
                                                    className="screen-reader-text"
                                                ></span>
                                                <span
                                                    className="gtm4wp_productdata"
                                                    style={{ display: "none", visibility: "hidden" }}
                                                    data-gtm4wp_product_data='{"internal_id":9697,"item_id":9697,"item_name":"Combo: Windows 10 Professional + Office 2021 Professional plus","sku":9697,"price":1799,"stocklevel":null,"stockstatus":"outofstock","google_business_vertical":"retail","item_category":"Operating System","id":9697,"productlink":"https:\/\/keyslo.com\/product\/combo-windows-10-professional-office-2021-professional-plus\/","item_list_name":"General Product List","index":1,"product_type":"simple","item_brand":""}'
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                    <nav
                                        className="woocommerce-pagination"
                                        aria-label="Product Pagination"
                                    >
                                        <ul className="page-numbers">
                                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                                <li key={page}>
                                                    <button
                                                        className={`page-numbers ${currentPage === page ? "current" : ""}`}
                                                        onClick={() => setCurrentPage(page)}
                                                    >
                                                        {page}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default productCategory;