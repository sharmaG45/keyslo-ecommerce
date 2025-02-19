'use client';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { fetchProducts } from "../../products/page";
const product = () => {
    const router = useRouter();
    const handleCheckout = (e) => {
        e.preventDefault();
        router.push('/home/checkout')
    }
    const PRODUCTS_PER_PAGE1 = 8;
    const [visibleProducts1, setVisibleProducts1] = useState(PRODUCTS_PER_PAGE1);

    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        const loadProducts = async () => {
            setLoading(true);
            try {
                const products = await fetchProducts(); // Ensure fetchProducts is correctly implemented
                setProductList(products);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
            setLoading(false);
        };

        loadProducts();
    }, []);

    const handleShowMore1 = () => setVisibleProducts1((prev) => prev + PRODUCTS_PER_PAGE1);

    const bestOffers1 = productList.slice(0, visibleProducts1);
    return <>
        <div
            className="elementor elementor-38607 elementor-location-single post-47016 product type-product status-publish has-post-thumbnail product_cat-games product_cat-steam product_tag-adventure product_tag-indie product_tag-puzzle first instock sale downloadable virtual purchasable product-type-simple product"
            data-elementor-id="38607"
            data-elementor-post-type="elementor_library"
            data-elementor-type="product">
            <div
                className="elementor-element elementor-element-411caa27 e-flex e-con-boxed e-con e-parent e-lazyloaded"
                data-element_type="container"
                data-id="411caa27">
                <div className="e-con-inner">
                    <div
                        className="elementor-element elementor-element-15b98ba7 e-con-full e-flex e-con e-child"
                        data-element_type="container"
                        data-id="15b98ba7">
                        <div
                            className="elementor-element elementor-element-28a15a33 elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-woocommerce-breadcrumb"
                            data-element_type="widget"
                            data-id="28a15a33"
                            data-widget_type="woocommerce-breadcrumb.default">
                            <div className="elementor-widget-container">
                                <nav aria-label="Breadcrumb" className="woocommerce-breadcrumb">
                                    <a href="https://keyslo.com?v=13b5bfe96f3e">Home</a>
                                    /
                                    <a href="https://keyslo.com/product-category/games/?v=13b5bfe96f3e">
                                        Games
                                    </a>
                                    /
                                    <a href="https://keyslo.com/product-category/games/steam/?v=13b5bfe96f3e">
                                        Steam
                                    </a>
                                    / Superliminal Steam CD Key
                                </nav>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-14c0b558 yes elementor-widget elementor-widget-woocommerce-product-images"
                            data-element_type="widget"
                            data-id="14c0b558"
                            data-widget_type="woocommerce-product-images.default">
                            <div className="elementor-widget-container">
                                <span className="onsale">Sale!</span>
                                <div
                                    className="wcgs-woocommerce-product-gallery horizontal"
                                    data-id="47016"
                                    id="wpgs-gallery"
                                    style={{
                                        maxWidth: "100%",
                                        minWidth: "auto",
                                        overflow: "hidden",
                                    }}>
                                    <div className="gallery-navigation-carousel-wrapper">
                                        <div
                                            className="gallery-navigation-carousel swiper horizontal always swiper-initialized swiper-horizontal swiper-free-mode swiper-watch-progress swiper-backface-hidden swiper-thumbs"
                                            thumbsslider="">
                                            <div
                                                aria-live="polite"
                                                className="swiper-wrapper"
                                                id="swiper-wrapper-570ab21286ceca31"
                                                style={{
                                                    transform: "translate3d(0px, 0px, 0px)",
                                                }}>
                                                <div
                                                    aria-label="1 / 6"
                                                    className="wcgs-thumb swiper-slide swiper-slide-visible swiper-slide-active swiper-slide-thumb-active"
                                                    data-swiper-slide-index="0"
                                                    role="group"
                                                    style={{
                                                        marginRight: "6px",
                                                        width: "131.5px",
                                                    }}>
                                                    <img
                                                        alt="Superliminal"
                                                        data-cap=""
                                                        data-image="https://keyslo.com/wp-content/uploads/2024/12/co1uqz.jpg"
                                                        data-type=""
                                                        fetchPriority="high"
                                                        height="315"
                                                        src="https://keyslo.com/wp-content/uploads/2024/12/co1uqz-264x315.jpg"
                                                        width="264"
                                                    />
                                                </div>
                                                <div
                                                    aria-label="2 / 6"
                                                    className="wcgs-thumb swiper-slide swiper-slide-visible swiper-slide-next"
                                                    data-swiper-slide-index="1"
                                                    role="group"
                                                    style={{
                                                        marginRight: "6px",
                                                        width: "131.5px",
                                                    }}>
                                                    <img
                                                        alt="Superliminal"
                                                        data-cap=""
                                                        data-image="https://keyslo.com/wp-content/uploads/2024/12/ss_4a2b446656c93cd3575acc42650ffb79723b020d.1920x1080_1604665408.jpg"
                                                        data-type=""
                                                        height="315"
                                                        loading="lazy"
                                                        src="https://keyslo.com/wp-content/uploads/2024/12/ss_4a2b446656c93cd3575acc42650ffb79723b020d.1920x1080_1604665408-315x315.jpg"
                                                        width="315"
                                                    />
                                                </div>
                                                <div
                                                    aria-label="3 / 6"
                                                    className="wcgs-thumb swiper-slide swiper-slide-visible"
                                                    data-swiper-slide-index="2"
                                                    role="group"
                                                    style={{
                                                        marginRight: "6px",
                                                        width: "131.5px",
                                                    }}>
                                                    <img
                                                        alt="Superliminal"
                                                        data-cap=""
                                                        data-image="https://keyslo.com/wp-content/uploads/2024/12/ss_8f0ce3f7da9830c8398e13435599c69068877ce8.1920x1080_1604665409.jpg"
                                                        data-type=""
                                                        height="315"
                                                        loading="lazy"
                                                        src="https://keyslo.com/wp-content/uploads/2024/12/ss_8f0ce3f7da9830c8398e13435599c69068877ce8.1920x1080_1604665409-315x315.jpg"
                                                        width="315"
                                                    />
                                                </div>
                                                <div
                                                    aria-label="4 / 6"
                                                    className="wcgs-thumb swiper-slide swiper-slide-visible"
                                                    data-swiper-slide-index="3"
                                                    role="group"
                                                    style={{
                                                        marginRight: "6px",
                                                        width: "131.5px",
                                                    }}>
                                                    <img
                                                        alt="Superliminal"
                                                        data-cap=""
                                                        data-image="https://keyslo.com/wp-content/uploads/2024/12/ss_4662979fe52096848d83de9e7da01e164a8ca658.1920x1080_1604665410.jpg"
                                                        data-type=""
                                                        height="315"
                                                        loading="lazy"
                                                        src="https://keyslo.com/wp-content/uploads/2024/12/ss_4662979fe52096848d83de9e7da01e164a8ca658.1920x1080_1604665410-315x315.jpg"
                                                        width="315"
                                                    />
                                                </div>
                                                <div
                                                    aria-label="5 / 6"
                                                    className="wcgs-thumb swiper-slide"
                                                    data-swiper-slide-index="4"
                                                    role="group"
                                                    style={{
                                                        marginRight: "6px",
                                                        width: "131.5px",
                                                    }}>
                                                    <img
                                                        alt="Superliminal"
                                                        data-cap=""
                                                        data-image="https://keyslo.com/wp-content/uploads/2024/12/ss_55546194e5a1c244be30b31ebc75a311d1b52756.1920x1080_1604665411.jpg"
                                                        data-type=""
                                                        height="315"
                                                        loading="lazy"
                                                        src="https://keyslo.com/wp-content/uploads/2024/12/ss_55546194e5a1c244be30b31ebc75a311d1b52756.1920x1080_1604665411-315x315.jpg"
                                                        width="315"
                                                    />
                                                </div>
                                                <div
                                                    aria-label="6 / 6"
                                                    className="wcgs-thumb swiper-slide"
                                                    data-swiper-slide-index="5"
                                                    role="group"
                                                    style={{
                                                        marginRight: "6px",
                                                        width: "131.5px",
                                                    }}>
                                                    <img
                                                        alt="Superliminal"
                                                        data-cap=""
                                                        data-image="https://keyslo.com/wp-content/uploads/2024/12/ss_ec116fe04a78f76212934c3aa20bf8b38681683d.1920x1080_1604665412.jpg"
                                                        data-type=""
                                                        height="315"
                                                        loading="lazy"
                                                        src="https://keyslo.com/wp-content/uploads/2024/12/ss_ec116fe04a78f76212934c3aa20bf8b38681683d.1920x1080_1604665412-315x315.jpg"
                                                        width="315"
                                                    />
                                                </div>
                                            </div>
                                            <span
                                                aria-atomic="true"
                                                aria-live="assertive"
                                                className="swiper-notification"
                                            />
                                            <span
                                                aria-atomic="true"
                                                aria-live="assertive"
                                                className="swiper-notification"
                                            />
                                        </div>
                                    </div>
                                    <div className="wcgs-carousel horizontal swiper swiper-initialized swiper-horizontal swiper-autoheight swiper-backface-hidden">
                                        <div
                                            aria-live="polite"
                                            className="swiper-wrapper"
                                            id="swiper-wrapper-114f842e110488d11"
                                            style={{
                                                height: "352px",
                                                transform: "translate3d(0px, 0px, 0px)",
                                            }}>
                                            <div
                                                aria-label="1 / 6"
                                                className="swiper-slide swiper-slide-active"
                                                data-swiper-slide-index="0"
                                                role="group"
                                                style={{
                                                    alignItems: "center",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    width: "544px",
                                                }}>
                                                <div className="wcgs-slider-image">
                                                    <a
                                                        aria-label="lightbox"
                                                        className="wcgs-slider-lightbox"
                                                    />
                                                    <img
                                                        alt="Superliminal"
                                                        className="skip-lazy wcgs-slider-image-tag"
                                                        data-cap=""
                                                        data-image="https://keyslo.com/wp-content/uploads/2024/12/co1uqz.jpg"
                                                        height="352"
                                                        loading="lazy"
                                                        src="https://keyslo.com/wp-content/uploads/2024/12/co1uqz.jpg"
                                                        width="264"
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                aria-label="2 / 6"
                                                className="swiper-slide swiper-slide-next"
                                                data-swiper-slide-index="1"
                                                role="group"
                                                style={{
                                                    alignItems: "center",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    width: "544px",
                                                }}>
                                                <div className="wcgs-slider-image">
                                                    <a
                                                        aria-label="lightbox"
                                                        className="wcgs-slider-lightbox"
                                                    />
                                                    <img
                                                        alt="Superliminal"
                                                        className="skip-lazy wcgs-slider-image-tag"
                                                        data-cap=""
                                                        data-image="https://keyslo.com/wp-content/uploads/2024/12/ss_4a2b446656c93cd3575acc42650ffb79723b020d.1920x1080_1604665408.jpg"
                                                        height="422"
                                                        loading="lazy"
                                                        src="https://keyslo.com/wp-content/uploads/2024/12/ss_4a2b446656c93cd3575acc42650ffb79723b020d.1920x1080_1604665408.jpg"
                                                        width="750"
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                aria-label="3 / 6"
                                                className="swiper-slide"
                                                data-swiper-slide-index="2"
                                                role="group"
                                                style={{
                                                    alignItems: "center",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    width: "544px",
                                                }}>
                                                <div className="wcgs-slider-image">
                                                    <a
                                                        aria-label="lightbox"
                                                        className="wcgs-slider-lightbox"
                                                    />
                                                    <img
                                                        alt="Superliminal"
                                                        className="skip-lazy wcgs-slider-image-tag"
                                                        data-cap=""
                                                        data-image="https://keyslo.com/wp-content/uploads/2024/12/ss_8f0ce3f7da9830c8398e13435599c69068877ce8.1920x1080_1604665409.jpg"
                                                        height="422"
                                                        loading="lazy"
                                                        src="https://keyslo.com/wp-content/uploads/2024/12/ss_8f0ce3f7da9830c8398e13435599c69068877ce8.1920x1080_1604665409.jpg"
                                                        width="750"
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                aria-label="4 / 6"
                                                className="swiper-slide"
                                                data-swiper-slide-index="3"
                                                role="group"
                                                style={{
                                                    alignItems: "center",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    width: "544px",
                                                }}>
                                                <div className="wcgs-slider-image">
                                                    <a
                                                        aria-label="lightbox"
                                                        className="wcgs-slider-lightbox"
                                                    />
                                                    <img
                                                        alt="Superliminal"
                                                        className="skip-lazy wcgs-slider-image-tag"
                                                        data-cap=""
                                                        data-image="https://keyslo.com/wp-content/uploads/2024/12/ss_4662979fe52096848d83de9e7da01e164a8ca658.1920x1080_1604665410.jpg"
                                                        height="422"
                                                        loading="lazy"
                                                        src="https://keyslo.com/wp-content/uploads/2024/12/ss_4662979fe52096848d83de9e7da01e164a8ca658.1920x1080_1604665410.jpg"
                                                        width="750"
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                aria-label="5 / 6"
                                                className="swiper-slide"
                                                data-swiper-slide-index="4"
                                                role="group"
                                                style={{
                                                    alignItems: "center",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    width: "544px",
                                                }}>
                                                <div className="wcgs-slider-image">
                                                    <a
                                                        aria-label="lightbox"
                                                        className="wcgs-slider-lightbox"
                                                    />
                                                    <img
                                                        alt="Superliminal"
                                                        className="skip-lazy wcgs-slider-image-tag"
                                                        data-cap=""
                                                        data-image="https://keyslo.com/wp-content/uploads/2024/12/ss_55546194e5a1c244be30b31ebc75a311d1b52756.1920x1080_1604665411.jpg"
                                                        height="422"
                                                        loading="lazy"
                                                        src="https://keyslo.com/wp-content/uploads/2024/12/ss_55546194e5a1c244be30b31ebc75a311d1b52756.1920x1080_1604665411.jpg"
                                                        width="750"
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                aria-label="6 / 6"
                                                className="swiper-slide"
                                                data-swiper-slide-index="5"
                                                role="group"
                                                style={{
                                                    alignItems: "center",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    width: "544px",
                                                }}>
                                                <div className="wcgs-slider-image">
                                                    <a
                                                        aria-label="lightbox"
                                                        className="wcgs-slider-lightbox"
                                                    />
                                                    <img
                                                        alt="Superliminal"
                                                        className="skip-lazy wcgs-slider-image-tag"
                                                        data-cap=""
                                                        data-image="https://keyslo.com/wp-content/uploads/2024/12/ss_ec116fe04a78f76212934c3aa20bf8b38681683d.1920x1080_1604665412.jpg"
                                                        height="422"
                                                        loading="lazy"
                                                        src="https://keyslo.com/wp-content/uploads/2024/12/ss_ec116fe04a78f76212934c3aa20bf8b38681683d.1920x1080_1604665412.jpg"
                                                        width="750"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-pagination" />
                                        <div
                                            aria-controls="swiper-wrapper-114f842e110488d11"
                                            aria-label="Next slide"
                                            className="wcgs-swiper-button-next wcgs-swiper-arrow"
                                            role="button"
                                            tabIndex="0"
                                        />
                                        <div
                                            aria-controls="swiper-wrapper-114f842e110488d11"
                                            aria-label="Previous slide"
                                            className="wcgs-swiper-button-prev wcgs-swiper-arrow"
                                            role="button"
                                            tabIndex="0"
                                        />
                                        <span
                                            aria-atomic="true"
                                            aria-live="assertive"
                                            className="swiper-notification"
                                        />
                                        <span
                                            aria-atomic="true"
                                            aria-live="assertive"
                                            className="swiper-notification"
                                        />
                                    </div>
                                    <div
                                        className="wcgs-gallery-preloader"
                                        style={{
                                            opacity: "0",
                                            zIndex: "-99",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="elementor-element elementor-element-33fb7ffb e-con-full e-flex e-con e-child"
                        data-element_type="container"
                        data-id="33fb7ffb">
                        <div
                            className="elementor-element elementor-element-584a9cf elementor-hidden-mobile elementor-widget elementor-widget-woocommerce-breadcrumb"
                            data-element_type="widget"
                            data-id="584a9cf"
                            data-widget_type="woocommerce-breadcrumb.default">
                            <div className="elementor-widget-container">
                                <nav aria-label="Breadcrumb" className="woocommerce-breadcrumb">
                                    <a href="https://keyslo.com?v=13b5bfe96f3e">Home</a>
                                    /
                                    <a href="https://keyslo.com/product-category/games/?v=13b5bfe96f3e">
                                        Games
                                    </a>
                                    /
                                    <a href="https://keyslo.com/product-category/games/steam/?v=13b5bfe96f3e">
                                        Steam
                                    </a>
                                    / Superliminal Steam CD Key
                                </nav>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-20cf5aab elementor-widget elementor-widget-heading"
                            data-element_type="widget"
                            data-id="20cf5aab"
                            data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                                <h2 className="elementor-heading-title elementor-size-default">
                                    Superliminal Steam CD Key
                                </h2>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-5c9f0945 elementor-widget elementor-widget-heading"
                            data-element_type="widget"
                            data-id="5c9f0945"
                            data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                                <h3 className="elementor-heading-title elementor-size-default">
                                    <span
                                        className="woocs_price_code"
                                        data-currency=""
                                        data-product-id="47016"
                                        data-redraw-id="67b46b31c6321">
                                        <del aria-hidden="true">
                                            <span className="woocommerce-Price-amount amount">
                                                <span className="woocommerce-Price-currencySymbol">₹</span>
                                                902.00
                                            </span>
                                        </del>{" "}
                                        <span className="screen-reader-text">
                                            Original price was: ₹ 902.00.
                                        </span>
                                        <ins aria-hidden="true">
                                            <span className="woocommerce-Price-amount amount">
                                                <span className="woocommerce-Price-currencySymbol">₹</span>
                                                451.00
                                            </span>
                                        </ins>
                                        <span className="screen-reader-text">
                                            Current price is: ₹ 451.00.
                                        </span>
                                    </span>
                                </h3>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-52993241 elementor-widget elementor-widget-text-editor"
                            data-element_type="widget"
                            data-id="52993241"
                            data-widget_type="text-editor.default">
                            <div className="elementor-widget-container">
                                You will receive a 100% valid Steam key to add to your account and
                                access the game anytime. The game stays in your account for a
                                lifetime, with no restrictions on billing or region changes.
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-152df3b8 elementor-add-to-cart--align-justify elementor-widget elementor-widget-wc-add-to-cart"
                            data-element_type="widget"
                            data-id="152df3b8"
                            data-widget_type="wc-add-to-cart.default">
                            <div className="elementor-widget-container">
                                <form
                                    onSubmit={(e) => handleCheckout(e)}
                                    className="cart"
                                    encType="multipart/form-data"
                                    method="post">
                                    <div className="quantity">
                                        <label
                                            className="screen-reader-text"
                                            htmlFor="quantity_67b46b31c7457">
                                            Superliminal Steam CD Key quantity
                                        </label>
                                        <input
                                            aria-label="Product quantity"
                                            autoComplete="off"
                                            className="input-text qty text"
                                            defaultValue="1"
                                            id="quantity_67b46b31c7457"
                                            inputMode="numeric"
                                            max=""
                                            min="1"
                                            name="quantity"
                                            placeholder=""
                                            step="1"
                                            type="number"
                                        />
                                    </div>
                                    <button
                                        className="single_add_to_cart_button elementor-button button alt"
                                        name="add-to-cart"
                                        type="submit"
                                        value="47016">
                                        <span className="elementor-button-content-wrapper">
                                            <span className="elementor-button-icon">
                                                <i aria-hidden="true" className="fas fa-shopping-cart" />
                                            </span>
                                            <span className="elementor-button-text">Buy Now</span>
                                        </span>
                                    </button>
                                    <input
                                        defaultValue='{"internal_id":47016,"item_id":47016,"item_name":"Superliminal Steam CD Key","sku":47016,"price":451,"stocklevel":null,"stockstatus":"instock","google_business_vertical":"retail","item_category":"Steam","id":47016}'
                                        name="gtm4wp_product_data"
                                        type="hidden"
                                    />
                                </form>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-9029e03 elementor-woo-meta--view-table elementor-widget elementor-widget-woocommerce-product-meta"
                            data-element_type="widget"
                            data-id="9029e03"
                            data-widget_type="woocommerce-product-meta.default">
                            <div className="elementor-widget-container">
                                <div className="product_meta">
                                    <span className="posted_in detail-container">
                                        <span className="detail-label">Categories</span>{" "}
                                        <span className="detail-content">
                                            <a
                                                href="https://keyslo.com/product-category/games/?v=13b5bfe96f3e"
                                                rel="tag">
                                                Games
                                            </a>
                                            ,{" "}
                                            <a
                                                href="https://keyslo.com/product-category/games/steam/?v=13b5bfe96f3e"
                                                rel="tag">
                                                Steam
                                            </a>
                                        </span>
                                    </span>
                                    <span className="tagged_as detail-container">
                                        <span className="detail-label">Tags</span>{" "}
                                        <span className="detail-content">
                                            <a
                                                href="https://keyslo.com/product-tag/adventure/?v=13b5bfe96f3e"
                                                rel="tag">
                                                Adventure
                                            </a>
                                            ,{" "}
                                            <a
                                                href="https://keyslo.com/product-tag/indie/?v=13b5bfe96f3e"
                                                rel="tag">
                                                Indie
                                            </a>
                                            ,{" "}
                                            <a
                                                href="https://keyslo.com/product-tag/puzzle/?v=13b5bfe96f3e"
                                                rel="tag">
                                                Puzzle
                                            </a>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-54510b elementor-widget elementor-widget-heading"
                            data-element_type="widget"
                            data-id="54510b"
                            data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                                <h6 className="elementor-heading-title elementor-size-default">
                                    Buy with confidence
                                </h6>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-7f2a2166 elementor-icon-list--layout-inline elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                            data-element_type="widget"
                            data-id="7f2a2166"
                            data-widget_type="icon-list.default">
                            <div className="elementor-widget-container">
                                <ul className="elementor-icon-list-items elementor-inline-items">
                                    <li className="elementor-icon-list-item elementor-inline-item">
                                        <span className="elementor-icon-list-icon">
                                            <i aria-hidden="true" className="fas fa-check-circle" />
                                        </span>
                                        <span className="elementor-icon-list-text">
                                            Easy Replacement Warranty.
                                        </span>
                                    </li>
                                    <li className="elementor-icon-list-item elementor-inline-item">
                                        <span className="elementor-icon-list-icon">
                                            <i aria-hidden="true" className="fas fa-check-circle" />
                                        </span>
                                        <span className="elementor-icon-list-text">
                                            100% Genuine license Guarantee.
                                        </span>
                                    </li>
                                    <li className="elementor-icon-list-item elementor-inline-item">
                                        <span className="elementor-icon-list-icon">
                                            <i aria-hidden="true" className="fas fa-check-circle" />
                                        </span>
                                        <span className="elementor-icon-list-text">
                                            24×7 Free Live Chat Support.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="elementor-element elementor-element-68bcbac4 e-flex e-con-boxed e-con e-parent e-lazyloaded"
                data-element_type="container"
                data-id="68bcbac4">
                <div className="e-con-inner">
                    <div
                        className="elementor-element elementor-element-c3fa0fa e-con-full e-flex e-con e-child"
                        data-element_type="container"
                        data-id="c3fa0fa">
                        <div
                            className="elementor-element elementor-element-e2efacf elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-video"
                            data-element_type="widget"
                            data-id="e2efacf"
                            data-settings='{"youtube_url":"https:\/\/youtu.be\/_SX8XMwMw6Y","video_type":"youtube","controls":"yes"}'
                            data-widget_type="video.default">
                            <div className="elementor-widget-container">
                                <div className="elementor-wrapper elementor-open-inline">
                                    <iframe
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        className="elementor-video"
                                        frameBorder="0"
                                        height="360"
                                        id="widget2"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        src="https://www.youtube.com/embed/_SX8XMwMw6Y?controls=1&rel=0&playsinline=0&modestbranding=0&cc_load_policy=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fkeyslo.com&widgetid=1"
                                        title="Superliminal Launch Trailer"
                                        width="640"
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-85cca63 elementor-widget elementor-widget-heading"
                            data-element_type="widget"
                            data-id="85cca63"
                            data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                                <h2 className="elementor-heading-title elementor-size-default">
                                    Superliminal Steam CD Key
                                </h2>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-b7e352c elementor-widget__width-initial elementor-widget elementor-widget-text-editor"
                            data-element_type="widget"
                            data-id="b7e352c"
                            data-widget_type="text-editor.default">
                            <div className="elementor-widget-container">
                                You will receive a 100% valid Steam key to add to your account and
                                access the game anytime. The game stays in your account for a
                                lifetime, with no restrictions on billing or region changes.
                            </div>
                        </div>
                    </div>
                    <div
                        className="elementor-element elementor-element-2632aca2 e-con-full e-flex e-con e-child"
                        data-element_type="container"
                        data-id="2632aca2">
                        <div
                            className="elementor-element elementor-element-5475b6ac elementor-widget-divider--view-line_text elementor-widget-divider--separator-type-pattern elementor-widget-divider--element-align-center elementor-widget elementor-widget-divider"
                            data-element_type="widget"
                            data-id="5475b6ac"
                            data-widget_type="divider.default">
                            <div className="elementor-widget-container">
                                <div
                                    className="elementor-divider"
                                    style={{
                                        "--divider-pattern-url":
                                            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' overflow='visible' height='100%' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='0.5' stroke-linecap='square' stroke-miterlimit='10'%3E%3Cpath d='M0,21c3.3,0,8.3-0.9,15.7-7.1c6.6-5.4,4.4-9.3,2.4-10.3c-3.4-1.8-7.7,1.3-7.3,8.8C11.2,20,17.1,21,24,21'/%3E%3C/svg%3E\")",
                                    }}>
                                    <span className="elementor-divider-separator">
                                        <h1 className="elementor-divider__text elementor-divider__element">
                                            Details
                                        </h1>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-32da02cc elementor-widget elementor-widget-woocommerce-product-content"
                            data-element_type="widget"
                            data-id="32da02cc"
                            data-widget_type="woocommerce-product-content.default">
                            <div className="elementor-widget-container">
                                <h1>Superliminal Steam CD Key</h1>
                                <p>Release date: 05/11/2020</p>
                                <p>
                                    As you fall asleep with the TV on at 3AM, you remember catching a
                                    glimpse of the commercial from Dr. Pierce’s Somnasculpt dream
                                    therapy program. By the time you open your eyes, you’re already
                                    dreaming – beginning the first stages of this experimental
                                    program. Welcome to Superliminal.
                                </p>
                                <p>
                                    Superliminal is a first-person puzzle game based on forced
                                    perspective and optical illusions. Puzzles in this game give you a
                                    sense of the unexpected. Players need to change their perspective
                                    and think outside the box to wake up from the dream.
                                </p>
                                <h2>Features</h2>
                                <ul>
                                    <li>Mind-bending puzzles that will challenge your perception</li>
                                    <li>A beautiful, understated world</li>
                                    <li>A surreal story with hidden layers</li>
                                    <li>Things that are really weird</li>
                                </ul>
                                <h2>How to Activate the Game</h2>
                                <p>
                                    Go to:{" "}
                                    <a href="http://store.steampowered.com/" target="_blank">
                                        http://store.steampowered.com/
                                    </a>{" "}
                                    and download STEAM client
                                </p>
                                <ul>
                                    <li>Click “Install Steam” (from the upper right corner)</li>
                                    <li>
                                        Install and start the application, login with your Account name
                                        and Password (create one if you don’t have).
                                    </li>
                                    <li>
                                        Please follow these instructions to activate a new retail
                                        purchase on Steam:
                                    </li>
                                    <li>Launch Steam and log into your Steam account.</li>
                                    <li>Click the Games Menu.</li>
                                    <li>Choose “Activate a Product on Steam…”</li>
                                    <li>Follow the onscreen instructions to complete the process.</li>
                                    <li>
                                        After successful code verification, go to the “LIBRARY” tab and
                                        start downloading.
                                    </li>
                                </ul>
                                <h2>System Requirements</h2>
                                <p>
                                    <strong>Windows</strong>
                                </p>
                                <ul>
                                    <li>
                                        <strong>OS:</strong> Windows 7
                                    </li>
                                    <li>
                                        <strong>Processor:</strong> 2.0GHz
                                    </li>
                                    <li>
                                        <strong>Memory:</strong> 4 GB RAM
                                    </li>
                                    <li>
                                        <strong>Graphics:</strong> NVidia GTX 750
                                    </li>
                                    <li>
                                        <strong>DirectX:</strong> Version 10
                                    </li>
                                    <li>
                                        <strong>Storage:</strong> 12 GB available space
                                    </li>
                                </ul>
                                <p>
                                    <strong>Mac</strong> and <strong>Linux</strong> versions also
                                    available.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="elementor-element elementor-element-7d33a76 elementor-widget__width-initial elementor-widget elementor-widget-n-accordion"
                        data-element_type="widget"
                        data-id="7d33a76"
                        data-settings='{"default_state":"expanded","max_items_expended":"one","n_accordion_animation_duration":{"unit":"ms","size":400,"sizes":[]}}'
                        data-widget_type="nested-accordion.default">
                        <div className="elementor-widget-container">
                            <div
                                aria-label="Accordion. Open links with Enter or Space, close with Escape, and navigate with Arrow Keys"
                                className="e-n-accordion">
                                <details
                                    className="e-n-accordion-item"
                                    id="e-n-accordion-item-1310"
                                    open>
                                    <summary
                                        aria-controls="e-n-accordion-item-1310"
                                        aria-expanded="true"
                                        className="e-n-accordion-item-title"
                                        data-accordion-index="1"
                                        tabIndex="0">
                                        <span className="e-n-accordion-item-title-header">
                                            <div className="e-n-accordion-item-title-text">
                                                {" "}
                                                What is Steam?{" "}
                                            </div>
                                        </span>
                                        <span className="e-n-accordion-item-title-icon">
                                            <span className="e-opened">
                                                <i aria-hidden="true" className="fas fa-minus" />
                                            </span>
                                            <span className="e-closed">
                                                <i aria-hidden="true" className="fas fa-plus" />
                                            </span>
                                        </span>
                                    </summary>
                                    <div
                                        aria-labelledby="e-n-accordion-item-1310"
                                        className="elementor-element elementor-element-2b995cd e-con-full e-flex e-con e-child"
                                        data-element_type="container"
                                        data-id="2b995cd"
                                        role="region">
                                        <div
                                            className="elementor-element elementor-element-29e86d0 elementor-widget elementor-widget-text-editor"
                                            data-element_type="widget"
                                            data-id="29e86d0"
                                            data-widget_type="text-editor.default">
                                            <div className="elementor-widget-container">
                                                <p>
                                                    <span className="citation-0 recitation citation-end-0">
                                                        Steam is like a digital store for games.
                                                    </span>{" "}
                                                    <span className="citation-1 recitation citation-end-1">
                                                        Instead of going to a physical store to buy games on
                                                        discs, you can buy them online through Steam.
                                                    </span>{" "}
                                                    You can download these games directly to your computer and
                                                    play them whenever you want.
                                                    <span className="button-container hide-from-message-actions ng-star-inserted"></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </details>
                                <details
                                    className="e-n-accordion-item"
                                    id="e-n-accordion-item-1311">
                                    <summary
                                        aria-controls="e-n-accordion-item-1311"
                                        aria-expanded="false"
                                        className="e-n-accordion-item-title"
                                        data-accordion-index="2"
                                        tabIndex="-1">
                                        <span className="e-n-accordion-item-title-header">
                                            <div className="e-n-accordion-item-title-text">
                                                {" "}
                                                How to Play Games on Steam?{" "}
                                            </div>
                                        </span>
                                        <span className="e-n-accordion-item-title-icon">
                                            <span className="e-opened">
                                                <i aria-hidden="true" className="fas fa-minus" />
                                            </span>
                                            <span className="e-closed">
                                                <i aria-hidden="true" className="fas fa-plus" />
                                            </span>
                                        </span>
                                    </summary>
                                    <div
                                        aria-labelledby="e-n-accordion-item-1311"
                                        className="elementor-element elementor-element-887f75b e-con-full e-flex e-con e-child"
                                        data-element_type="container"
                                        data-id="887f75b"
                                        role="region">
                                        <div
                                            className="elementor-element elementor-element-e36be1a elementor-widget elementor-widget-text-editor"
                                            data-element_type="widget"
                                            data-id="e36be1a"
                                            data-widget_type="text-editor.default">
                                            <div className="elementor-widget-container">
                                                <p>Here’s a simple guide:</p>
                                                <ul>
                                                    <li className="container">
                                                        Create a free Steam account.
                                                    </li>
                                                    <li className="container">
                                                        Download the Steam app to your computer.
                                                    </li>
                                                    <li className="container">
                                                        Browse the store, find games you like, buy the Steam ID
                                                        or redeemed the code purchased from Keyslo.
                                                    </li>
                                                    <li className="container">
                                                        Once purchased, the game will download to your computer.
                                                    </li>
                                                    <li className="container">
                                                        After downloading, you can launch the game from the
                                                        Steam app and start playing!
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </details>
                                <details
                                    className="e-n-accordion-item"
                                    id="e-n-accordion-item-1312">
                                    <summary
                                        aria-controls="e-n-accordion-item-1312"
                                        aria-expanded="false"
                                        className="e-n-accordion-item-title"
                                        data-accordion-index="3"
                                        tabIndex="-1">
                                        <span className="e-n-accordion-item-title-header">
                                            <div className="e-n-accordion-item-title-text">
                                                {" "}
                                                What devices does Steam support?{" "}
                                            </div>
                                        </span>
                                        <span className="e-n-accordion-item-title-icon">
                                            <span className="e-opened">
                                                <i aria-hidden="true" className="fas fa-minus" />
                                            </span>
                                            <span className="e-closed">
                                                <i aria-hidden="true" className="fas fa-plus" />
                                            </span>
                                        </span>
                                    </summary>
                                    <div
                                        aria-labelledby="e-n-accordion-item-1312"
                                        className="elementor-element elementor-element-3bd5cf3 e-con-full e-flex e-con e-child"
                                        data-element_type="container"
                                        data-id="3bd5cf3"
                                        role="region">
                                        <div
                                            className="elementor-element elementor-element-6b1c072 elementor-widget elementor-widget-text-editor"
                                            data-element_type="widget"
                                            data-id="6b1c072"
                                            data-widget_type="text-editor.default">
                                            <div className="elementor-widget-container">
                                                <p>
                                                    Steam primarily supports computers running{" "}
                                                    <strong>Windows</strong>, <strong>macOS</strong>, or{" "}
                                                    <strong>Linux</strong>. However, you can also play Steam
                                                    games on Phones and TV’s.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="elementor-element elementor-element-5ffd21ad e-flex e-con-boxed e-con e-parent"
                data-element_type="container"
                data-id="5ffd21ad">
                <div className="e-con-inner">
                    <div
                        className="elementor-element elementor-element-7b5b9ac3 elementor-widget elementor-widget-n-accordion"
                        data-element_type="widget"
                        data-id="7b5b9ac3"
                        data-settings='{"default_state":"expanded","max_items_expended":"one","n_accordion_animation_duration":{"unit":"ms","size":400,"sizes":[]}}'
                        data-widget_type="nested-accordion.default">
                        <div className="elementor-widget-container">
                            <div
                                aria-label="Accordion. Open links with Enter or Space, close with Escape, and navigate with Arrow Keys"
                                className="e-n-accordion">
                                <details
                                    className="e-n-accordion-item"
                                    id="e-n-accordion-item-2060"
                                    open>
                                    <summary
                                        aria-controls="e-n-accordion-item-2060"
                                        aria-expanded="true"
                                        className="e-n-accordion-item-title"
                                        data-accordion-index="1"
                                        tabIndex="0">
                                        <span className="e-n-accordion-item-title-header">
                                            <div className="e-n-accordion-item-title-text">
                                                {" "}
                                                Additional Information{" "}
                                            </div>
                                        </span>
                                        <span className="e-n-accordion-item-title-icon">
                                            <span className="e-opened">
                                                <i aria-hidden="true" className="fas fa-minus" />
                                            </span>
                                            <span className="e-closed">
                                                <i aria-hidden="true" className="fas fa-plus" />
                                            </span>
                                        </span>
                                    </summary>
                                    <div
                                        aria-labelledby="e-n-accordion-item-2060"
                                        className="elementor-element elementor-element-5022eaa9 e-con-full e-flex e-con e-child"
                                        data-element_type="container"
                                        data-id="5022eaa9"
                                        role="region">
                                        <div
                                            className="elementor-element elementor-element-51949226 elementor-widget elementor-widget-woocommerce-product-additional-information"
                                            data-element_type="widget"
                                            data-id="51949226"
                                            data-widget_type="woocommerce-product-additional-information.default">
                                            <div className="elementor-widget-container">
                                                <h2>Additional information</h2>
                                                <table
                                                    aria-label="Product Details"
                                                    className="woocommerce-product-attributes shop_attributes">
                                                    <tbody>
                                                        <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_game-name">
                                                            <th
                                                                className="woocommerce-product-attributes-item__label"
                                                                scope="row">
                                                                Game Name
                                                            </th>
                                                            <td className="woocommerce-product-attributes-item__value">
                                                                <p>Superliminal</p>
                                                            </td>
                                                        </tr>
                                                        <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_region">
                                                            <th
                                                                className="woocommerce-product-attributes-item__label"
                                                                scope="row">
                                                                Region
                                                            </th>
                                                            <td className="woocommerce-product-attributes-item__value">
                                                                <p>Global</p>
                                                            </td>
                                                        </tr>
                                                        <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_game-type">
                                                            <th
                                                                className="woocommerce-product-attributes-item__label"
                                                                scope="row">
                                                                Game Type
                                                            </th>
                                                            <td className="woocommerce-product-attributes-item__value">
                                                                <p>Puzzle, Adventure, Indie</p>
                                                            </td>
                                                        </tr>
                                                        <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_game-modes">
                                                            <th
                                                                className="woocommerce-product-attributes-item__label"
                                                                scope="row">
                                                                Game Modes
                                                            </th>
                                                            <td className="woocommerce-product-attributes-item__value">
                                                                <p>Single player, Multiplayer, Co-operative</p>
                                                            </td>
                                                        </tr>
                                                        <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_themes">
                                                            <th
                                                                className="woocommerce-product-attributes-item__label"
                                                                scope="row">
                                                                Themes
                                                            </th>
                                                            <td className="woocommerce-product-attributes-item__value">
                                                                <p>Action, Comedy, Mystery</p>
                                                            </td>
                                                        </tr>
                                                        <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_player-perspectives">
                                                            <th
                                                                className="woocommerce-product-attributes-item__label"
                                                                scope="row">
                                                                Player Perspectives
                                                            </th>
                                                            <td className="woocommerce-product-attributes-item__value">
                                                                <p>First person</p>
                                                            </td>
                                                        </tr>
                                                        <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_delivery">
                                                            <th
                                                                className="woocommerce-product-attributes-item__label"
                                                                scope="row">
                                                                Delivery
                                                            </th>
                                                            <td className="woocommerce-product-attributes-item__value">
                                                                <p>1 to 24 hours</p>
                                                            </td>
                                                        </tr>
                                                        <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_activation-type">
                                                            <th
                                                                className="woocommerce-product-attributes-item__label"
                                                                scope="row">
                                                                Activation Type
                                                            </th>
                                                            <td className="woocommerce-product-attributes-item__value">
                                                                <p>Online</p>
                                                            </td>
                                                        </tr>
                                                        <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_language">
                                                            <th
                                                                className="woocommerce-product-attributes-item__label"
                                                                scope="row">
                                                                Language
                                                            </th>
                                                            <td className="woocommerce-product-attributes-item__value">
                                                                <p>English</p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </details>
                                <details className="e-n-accordion-item" id="reviews">
                                    <summary
                                        aria-controls="reviews"
                                        aria-expanded="false"
                                        className="e-n-accordion-item-title"
                                        data-accordion-index="2"
                                        tabIndex="-1">
                                        <span className="e-n-accordion-item-title-header">
                                            <div className="e-n-accordion-item-title-text"> FAQ </div>
                                        </span>
                                        <span className="e-n-accordion-item-title-icon">
                                            <span className="e-opened">
                                                <i aria-hidden="true" className="fas fa-minus" />
                                            </span>
                                            <span className="e-closed">
                                                <i aria-hidden="true" className="fas fa-plus" />
                                            </span>
                                        </span>
                                    </summary>
                                    <div
                                        aria-labelledby="reviews"
                                        className="elementor-element elementor-element-75029192 e-con-full e-flex e-con e-child"
                                        data-element_type="container"
                                        data-id="75029192"
                                        role="region">
                                        <div
                                            aria-labelledby="reviews"
                                            className="elementor-element elementor-element-14e29d4b e-flex e-con-boxed e-con e-child"
                                            data-element_type="container"
                                            data-id="14e29d4b"
                                            role="region">
                                            <div className="e-con-inner">
                                                <div
                                                    className="elementor-element elementor-element-6d31616d elementor-widget elementor-widget-text-editor"
                                                    data-element_type="widget"
                                                    data-id="6d31616d"
                                                    data-widget_type="text-editor.default">
                                                    <div className="elementor-widget-container">
                                                        <h2>
                                                            <strong>Frequently Asked Questions (FAQs)</strong>
                                                        </h2>
                                                        <p>
                                                            <strong>
                                                                Q: Are the software products on Keyslo legitimate?
                                                            </strong>
                                                        </p>
                                                        <p>
                                                            A: Yes, our commitment to authenticity involves
                                                            mandatory registration of email addresses with
                                                            specific Microsoft Product Keys during online
                                                            activation. This process ensures the legitimacy of
                                                            purchased Microsoft products, all of which are covered
                                                            by our hassle-free money-back guarantee.
                                                        </p>
                                                        <p></p>
                                                        <p>
                                                            <strong>
                                                                Q: How are product keys generated on Keyslo?
                                                            </strong>
                                                        </p>
                                                        <p>
                                                            A: Keyslo does not generate product keys. We store the
                                                            keys provided to us and automatically assign them to
                                                            customers during order processing. Our system
                                                            retrieves a key from our stock and allocates it to
                                                            your order.
                                                        </p>
                                                        <p></p>
                                                        <p>
                                                            <strong>
                                                                Q: What allows Keyslo to offer software at such
                                                                competitive prices?
                                                            </strong>
                                                        </p>
                                                        <p>
                                                            A: We maintain low prices by collaborating closely
                                                            with suppliers, purchasing in large volumes, and
                                                            establishing partnerships with licensed software
                                                            retailers, distributors, and manufacturers globally.
                                                            This allows us to access software inventories from
                                                            clearance sales, offering substantial discounts to our
                                                            customers.
                                                        </p>
                                                        <p></p>
                                                        <p>
                                                            <strong>
                                                                Q: What happens if I encounter issues with my
                                                                purchase? Can I get a refund?
                                                            </strong>
                                                        </p>
                                                        <p>
                                                            A: Our dedicated support team at Keyslo is ready to
                                                            assist with any problems that may arise. Refunds are
                                                            issued in accordance with our Refund Policy, and we
                                                            are confident in our ability to address and resolve
                                                            any situation to ensure customer satisfaction.
                                                        </p>
                                                        <p></p>
                                                        <p>
                                                            <strong>
                                                                Q: How do I download the software I’ve purchased
                                                                from Keyslo?
                                                            </strong>
                                                        </p>
                                                        <p>
                                                            A: Download links are provided in the email containing
                                                            the license, sent from{" "}
                                                            <a target="_new">help@keyslo.com</a>.
                                                        </p>
                                                        <p></p>
                                                        <p>
                                                            <strong>
                                                                Q: Can I obtain an invoice for my order on Keyslo?
                                                            </strong>
                                                        </p>
                                                        <p>
                                                            A: Yes, you can conveniently download your invoice for
                                                            all orders from your account dashboard on Keyslo.
                                                        </p>
                                                        <p></p>
                                                        <p>
                                                            <strong>
                                                                Q: Where can I seek assistance with the installation
                                                                of my software?
                                                            </strong>
                                                        </p>
                                                        <p>
                                                            A: Installation instructions are typically included
                                                            with online/downloadable software licenses. If you
                                                            encounter any issues, Keyslo provides support through
                                                            our 24/7 online chat, WhatsApp support at +1631 572
                                                            8488, or via email at{" "}
                                                            <a target="_new">help@keyslo.com</a>.
                                                        </p>
                                                        <p></p>
                                                        <p>
                                                            <strong>
                                                                Q: Are software updates included in my purchase, or
                                                                do they require separate payment?
                                                            </strong>
                                                        </p>
                                                        <p>
                                                            A: Updates for the purchased software are typically
                                                            included, but it’s advisable to check the specific
                                                            product details on Keyslo. We strive to provide
                                                            comprehensive information about the inclusions with
                                                            each software purchase.
                                                        </p>
                                                        <p></p>
                                                        <p>
                                                            <strong>
                                                                Q: How does Keyslo ensure the security of customer
                                                                information during the purchase process?
                                                            </strong>
                                                        </p>
                                                        <div className="flex-1 overflow-hidden">
                                                            <div className="react-scroll-to-bottom--css-izkqc-79elbk h-full">
                                                                <div className="react-scroll-to-bottom--css-izkqc-1n7m0yu">
                                                                    <div className="flex flex-col pb-9 text-sm">
                                                                        <div
                                                                            className="w-full text-token-text-primary"
                                                                            data-testid="conversation-turn-5">
                                                                            <div className="px-4 py-2 justify-center text-base md:gap-6 m-auto">
                                                                                <div className="flex flex-1 text-base mx-auto gap-3 md:px-5 lg:px-1 xl:px-5 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] group final-completion">
                                                                                    <div className="relative flex w-full flex-col lg:w-[calc(100%-115px)] agent-turn">
                                                                                        <div className="flex-col gap-1 md:gap-3">
                                                                                            <div className="flex flex-grow flex-col max-w-full">
                                                                                                <div
                                                                                                    className="min-h-[20px] text-message flex flex-col items-start gap-3 whitespace-pre-wrap break-words [.text-message+&]:mt-5 overflow-x-auto"
                                                                                                    data-message-author-role="assistant"
                                                                                                    data-message-id="7efaa71d-bd71-405e-86ed-23baac2b9703">
                                                                                                    <div className="markdown prose w-full break-words dark:prose-invert light">
                                                                                                        <p>
                                                                                                            A: We prioritize the security
                                                                                                            of customer information.
                                                                                                            Keyslo employs robust
                                                                                                            encryption methods and follows
                                                                                                            industry best practices to
                                                                                                            safeguard sensitive data
                                                                                                            during the purchase and
                                                                                                            registration processes.
                                                                                                        </p>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>
                    <div
                        className="elementor-element elementor-element-41ba3533 elementor-widget elementor-widget-post-comments"
                        data-element_type="widget"
                        data-id="41ba3533"
                        data-widget_type="post-comments.theme_comments">
                        <div className="elementor-widget-container">
                            <div className="cr-reviews-ajax-reviews" id="reviews">
                                <div
                                    className="cr-reviews-ajax-comments"
                                    data-nonce="b95e2ba0ad"
                                    data-page="1"
                                    id="comments">
                                    <h2 className="woocommerce-Reviews-title">Reviews</h2>
                                    <p className="woocommerce-noreviews">There are no reviews yet</p>
                                </div>
                                <div className="cr-ajax-reviews-review-form cr-ajax-reviews-review-form-nc">
                                    <div id="review_form_wrapper">
                                        <div className="cr-single-product-review" id="review_form">
                                            <div className="cr-review-form-wrap">
                                                <div className="cr-review-form-nav">
                                                    <div className="cr-nav-left">
                                                        <svg
                                                            fill="none"
                                                            height="28"
                                                            viewBox="0 0 28 28"
                                                            width="28"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M16.9607 19.2506L11.0396 13.3295L16.9607 7.40833"
                                                                stroke="#0E252C"
                                                                strokeMiterlimit="10"
                                                            />
                                                        </svg>
                                                        <span>Add a review</span>
                                                    </div>
                                                    <div className="cr-nav-right">
                                                        <svg
                                                            fill="none"
                                                            height="28"
                                                            viewBox="0 0 28 28"
                                                            width="28"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M8.61914 8.62009L19.381 19.3799M8.61914 19.3799L19.381 8.62009"
                                                                stroke="#0E252C"
                                                                strokeLinejoin="round"
                                                                strokeMiterlimit="10"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="cr-review-form-item">
                                                    <img
                                                        alt="Superliminal Steam CD Key"
                                                        src="https://keyslo.com/wp-content/uploads/2024/12/co1uqz-264x247.jpg"
                                                    />
                                                    <span>Superliminal Steam CD Key</span>
                                                    <input
                                                        className="cr-review-form-item-id"
                                                        defaultValue="47016"
                                                        type="hidden"
                                                    />
                                                </div>
                                                <div className="cr-review-form-rating-overall cr-review-form-rating-ovonly">
                                                    <div className="cr-review-form-rating">
                                                        <div className="cr-review-form-rating-label">
                                                            Rating
                                                            <span className="required">*</span>
                                                        </div>
                                                        <div className="cr-review-form-rating-cont cr-review-form-rating-req">
                                                            <div
                                                                className="cr-review-form-rating-inner"
                                                                data-rating="1">
                                                                <svg
                                                                    className="cr-rating-deact"
                                                                    fill="none"
                                                                    height="20"
                                                                    viewBox="0 0 22 20"
                                                                    width="22"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M10.5131 0.288628C10.7119 -0.0962093 11.288 -0.0962093 11.4868 0.288628L14.4654 6.04249C14.5448 6.19546 14.6976 6.3014 14.8745 6.32573L21.5344 7.24876C21.9799 7.31054 22.1576 7.83281 21.8357 8.132L17.0158 12.611C16.8881 12.7297 16.8295 12.9014 16.86 13.0691L17.9974 19.3935C18.0738 19.8165 17.6081 20.1392 17.2092 19.9392L11.2529 16.9538C11.0946 16.8745 10.9053 16.8745 10.747 16.9538L4.79023 19.9392C4.39182 20.1392 3.92604 19.8165 4.00249 19.3935L5.13988 13.0691C5.17004 12.9014 5.11177 12.7297 4.98365 12.611L0.164665 8.132C-0.157703 7.83281 0.020013 7.31054 0.465542 7.24876L7.12575 6.32573C7.30224 6.3014 7.45552 6.19546 7.5345 6.04249L10.5131 0.288628Z"
                                                                        fill="#DFE4E7"
                                                                    />
                                                                </svg>
                                                                <svg
                                                                    className="cr-rating-act"
                                                                    fill="none"
                                                                    height="20"
                                                                    viewBox="0 0 22 20"
                                                                    width="22"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M10.5131 0.288628C10.7119 -0.0962093 11.288 -0.0962093 11.4868 0.288628L14.4654 6.04249C14.5448 6.19546 14.6976 6.3014 14.8745 6.32573L21.5344 7.24876C21.9799 7.31054 22.1576 7.83281 21.8357 8.132L17.0158 12.611C16.8881 12.7297 16.8295 12.9014 16.86 13.0691L17.9974 19.3935C18.0738 19.8165 17.6081 20.1392 17.2092 19.9392L11.2529 16.9538C11.0946 16.8745 10.9053 16.8745 10.747 16.9538L4.79023 19.9392C4.39182 20.1392 3.92604 19.8165 4.00249 19.3935L5.13988 13.0691C5.17004 12.9014 5.11177 12.7297 4.98365 12.611L0.164665 8.132C-0.157703 7.83281 0.020013 7.31054 0.465542 7.24876L7.12575 6.32573C7.30224 6.3014 7.45552 6.19546 7.5345 6.04249L10.5131 0.288628Z"
                                                                        fill="#F4DB6B"
                                                                    />
                                                                    <path
                                                                        clipRule="evenodd"
                                                                        d="M7.91797 18.3717L12.328 1.91336L14.4655 6.04248C14.5448 6.19545 14.6977 6.30139 14.8746 6.32572L21.5345 7.24875C21.98 7.31053 22.1577 7.8328 21.8357 8.13199L17.0159 12.611C16.8882 12.7297 16.8295 12.9014 16.8601 13.0691L17.9975 19.3934C18.0739 19.8165 17.6082 20.1392 17.2093 19.9392L11.253 16.9538C11.0947 16.8745 10.9054 16.8745 10.7471 16.9538L7.91797 18.3717Z"
                                                                        fill="#F5CD5B"
                                                                        fillRule="evenodd"
                                                                    />
                                                                </svg>
                                                            </div>
                                                            <div
                                                                className="cr-review-form-rating-inner"
                                                                data-rating="2">
                                                                <svg
                                                                    className="cr-rating-deact"
                                                                    fill="none"
                                                                    height="20"
                                                                    viewBox="0 0 22 20"
                                                                    width="22"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M10.5131 0.288628C10.7119 -0.0962093 11.288 -0.0962093 11.4868 0.288628L14.4654 6.04249C14.5448 6.19546 14.6976 6.3014 14.8745 6.32573L21.5344 7.24876C21.9799 7.31054 22.1576 7.83281 21.8357 8.132L17.0158 12.611C16.8881 12.7297 16.8295 12.9014 16.86 13.0691L17.9974 19.3935C18.0738 19.8165 17.6081 20.1392 17.2092 19.9392L11.2529 16.9538C11.0946 16.8745 10.9053 16.8745 10.747 16.9538L4.79023 19.9392C4.39182 20.1392 3.92604 19.8165 4.00249 19.3935L5.13988 13.0691C5.17004 12.9014 5.11177 12.7297 4.98365 12.611L0.164665 8.132C-0.157703 7.83281 0.020013 7.31054 0.465542 7.24876L7.12575 6.32573C7.30224 6.3014 7.45552 6.19546 7.5345 6.04249L10.5131 0.288628Z"
                                                                        fill="#DFE4E7"
                                                                    />
                                                                </svg>
                                                                <svg
                                                                    className="cr-rating-act"
                                                                    fill="none"
                                                                    height="20"
                                                                    viewBox="0 0 22 20"
                                                                    width="22"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M10.5131 0.288628C10.7119 -0.0962093 11.288 -0.0962093 11.4868 0.288628L14.4654 6.04249C14.5448 6.19546 14.6976 6.3014 14.8745 6.32573L21.5344 7.24876C21.9799 7.31054 22.1576 7.83281 21.8357 8.132L17.0158 12.611C16.8881 12.7297 16.8295 12.9014 16.86 13.0691L17.9974 19.3935C18.0738 19.8165 17.6081 20.1392 17.2092 19.9392L11.2529 16.9538C11.0946 16.8745 10.9053 16.8745 10.747 16.9538L4.79023 19.9392C4.39182 20.1392 3.92604 19.8165 4.00249 19.3935L5.13988 13.0691C5.17004 12.9014 5.11177 12.7297 4.98365 12.611L0.164665 8.132C-0.157703 7.83281 0.020013 7.31054 0.465542 7.24876L7.12575 6.32573C7.30224 6.3014 7.45552 6.19546 7.5345 6.04249L10.5131 0.288628Z"
                                                                        fill="#F4DB6B"
                                                                    />
                                                                    <path
                                                                        clipRule="evenodd"
                                                                        d="M7.91797 18.3717L12.328 1.91336L14.4655 6.04248C14.5448 6.19545 14.6977 6.30139 14.8746 6.32572L21.5345 7.24875C21.98 7.31053 22.1577 7.8328 21.8357 8.13199L17.0159 12.611C16.8882 12.7297 16.8295 12.9014 16.8601 13.0691L17.9975 19.3934C18.0739 19.8165 17.6082 20.1392 17.2093 19.9392L11.253 16.9538C11.0947 16.8745 10.9054 16.8745 10.7471 16.9538L7.91797 18.3717Z"
                                                                        fill="#F5CD5B"
                                                                        fillRule="evenodd"
                                                                    />
                                                                </svg>
                                                            </div>
                                                            <div
                                                                className="cr-review-form-rating-inner"
                                                                data-rating="3">
                                                                <svg
                                                                    className="cr-rating-deact"
                                                                    fill="none"
                                                                    height="20"
                                                                    viewBox="0 0 22 20"
                                                                    width="22"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M10.5131 0.288628C10.7119 -0.0962093 11.288 -0.0962093 11.4868 0.288628L14.4654 6.04249C14.5448 6.19546 14.6976 6.3014 14.8745 6.32573L21.5344 7.24876C21.9799 7.31054 22.1576 7.83281 21.8357 8.132L17.0158 12.611C16.8881 12.7297 16.8295 12.9014 16.86 13.0691L17.9974 19.3935C18.0738 19.8165 17.6081 20.1392 17.2092 19.9392L11.2529 16.9538C11.0946 16.8745 10.9053 16.8745 10.747 16.9538L4.79023 19.9392C4.39182 20.1392 3.92604 19.8165 4.00249 19.3935L5.13988 13.0691C5.17004 12.9014 5.11177 12.7297 4.98365 12.611L0.164665 8.132C-0.157703 7.83281 0.020013 7.31054 0.465542 7.24876L7.12575 6.32573C7.30224 6.3014 7.45552 6.19546 7.5345 6.04249L10.5131 0.288628Z"
                                                                        fill="#DFE4E7"
                                                                    />
                                                                </svg>
                                                                <svg
                                                                    className="cr-rating-act"
                                                                    fill="none"
                                                                    height="20"
                                                                    viewBox="0 0 22 20"
                                                                    width="22"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M10.5131 0.288628C10.7119 -0.0962093 11.288 -0.0962093 11.4868 0.288628L14.4654 6.04249C14.5448 6.19546 14.6976 6.3014 14.8745 6.32573L21.5344 7.24876C21.9799 7.31054 22.1576 7.83281 21.8357 8.132L17.0158 12.611C16.8881 12.7297 16.8295 12.9014 16.86 13.0691L17.9974 19.3935C18.0738 19.8165 17.6081 20.1392 17.2092 19.9392L11.2529 16.9538C11.0946 16.8745 10.9053 16.8745 10.747 16.9538L4.79023 19.9392C4.39182 20.1392 3.92604 19.8165 4.00249 19.3935L5.13988 13.0691C5.17004 12.9014 5.11177 12.7297 4.98365 12.611L0.164665 8.132C-0.157703 7.83281 0.020013 7.31054 0.465542 7.24876L7.12575 6.32573C7.30224 6.3014 7.45552 6.19546 7.5345 6.04249L10.5131 0.288628Z"
                                                                        fill="#F4DB6B"
                                                                    />
                                                                    <path
                                                                        clipRule="evenodd"
                                                                        d="M7.91797 18.3717L12.328 1.91336L14.4655 6.04248C14.5448 6.19545 14.6977 6.30139 14.8746 6.32572L21.5345 7.24875C21.98 7.31053 22.1577 7.8328 21.8357 8.13199L17.0159 12.611C16.8882 12.7297 16.8295 12.9014 16.8601 13.0691L17.9975 19.3934C18.0739 19.8165 17.6082 20.1392 17.2093 19.9392L11.253 16.9538C11.0947 16.8745 10.9054 16.8745 10.7471 16.9538L7.91797 18.3717Z"
                                                                        fill="#F5CD5B"
                                                                        fillRule="evenodd"
                                                                    />
                                                                </svg>
                                                            </div>
                                                            <div
                                                                className="cr-review-form-rating-inner"
                                                                data-rating="4">
                                                                <svg
                                                                    className="cr-rating-deact"
                                                                    fill="none"
                                                                    height="20"
                                                                    viewBox="0 0 22 20"
                                                                    width="22"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M10.5131 0.288628C10.7119 -0.0962093 11.288 -0.0962093 11.4868 0.288628L14.4654 6.04249C14.5448 6.19546 14.6976 6.3014 14.8745 6.32573L21.5344 7.24876C21.9799 7.31054 22.1576 7.83281 21.8357 8.132L17.0158 12.611C16.8881 12.7297 16.8295 12.9014 16.86 13.0691L17.9974 19.3935C18.0738 19.8165 17.6081 20.1392 17.2092 19.9392L11.2529 16.9538C11.0946 16.8745 10.9053 16.8745 10.747 16.9538L4.79023 19.9392C4.39182 20.1392 3.92604 19.8165 4.00249 19.3935L5.13988 13.0691C5.17004 12.9014 5.11177 12.7297 4.98365 12.611L0.164665 8.132C-0.157703 7.83281 0.020013 7.31054 0.465542 7.24876L7.12575 6.32573C7.30224 6.3014 7.45552 6.19546 7.5345 6.04249L10.5131 0.288628Z"
                                                                        fill="#DFE4E7"
                                                                    />
                                                                </svg>
                                                                <svg
                                                                    className="cr-rating-act"
                                                                    fill="none"
                                                                    height="20"
                                                                    viewBox="0 0 22 20"
                                                                    width="22"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M10.5131 0.288628C10.7119 -0.0962093 11.288 -0.0962093 11.4868 0.288628L14.4654 6.04249C14.5448 6.19546 14.6976 6.3014 14.8745 6.32573L21.5344 7.24876C21.9799 7.31054 22.1576 7.83281 21.8357 8.132L17.0158 12.611C16.8881 12.7297 16.8295 12.9014 16.86 13.0691L17.9974 19.3935C18.0738 19.8165 17.6081 20.1392 17.2092 19.9392L11.2529 16.9538C11.0946 16.8745 10.9053 16.8745 10.747 16.9538L4.79023 19.9392C4.39182 20.1392 3.92604 19.8165 4.00249 19.3935L5.13988 13.0691C5.17004 12.9014 5.11177 12.7297 4.98365 12.611L0.164665 8.132C-0.157703 7.83281 0.020013 7.31054 0.465542 7.24876L7.12575 6.32573C7.30224 6.3014 7.45552 6.19546 7.5345 6.04249L10.5131 0.288628Z"
                                                                        fill="#F4DB6B"
                                                                    />
                                                                    <path
                                                                        clipRule="evenodd"
                                                                        d="M7.91797 18.3717L12.328 1.91336L14.4655 6.04248C14.5448 6.19545 14.6977 6.30139 14.8746 6.32572L21.5345 7.24875C21.98 7.31053 22.1577 7.8328 21.8357 8.13199L17.0159 12.611C16.8882 12.7297 16.8295 12.9014 16.8601 13.0691L17.9975 19.3934C18.0739 19.8165 17.6082 20.1392 17.2093 19.9392L11.253 16.9538C11.0947 16.8745 10.9054 16.8745 10.7471 16.9538L7.91797 18.3717Z"
                                                                        fill="#F5CD5B"
                                                                        fillRule="evenodd"
                                                                    />
                                                                </svg>
                                                            </div>
                                                            <div
                                                                className="cr-review-form-rating-inner"
                                                                data-rating="5">
                                                                <svg
                                                                    className="cr-rating-deact"
                                                                    fill="none"
                                                                    height="20"
                                                                    viewBox="0 0 22 20"
                                                                    width="22"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M10.5131 0.288628C10.7119 -0.0962093 11.288 -0.0962093 11.4868 0.288628L14.4654 6.04249C14.5448 6.19546 14.6976 6.3014 14.8745 6.32573L21.5344 7.24876C21.9799 7.31054 22.1576 7.83281 21.8357 8.132L17.0158 12.611C16.8881 12.7297 16.8295 12.9014 16.86 13.0691L17.9974 19.3935C18.0738 19.8165 17.6081 20.1392 17.2092 19.9392L11.2529 16.9538C11.0946 16.8745 10.9053 16.8745 10.747 16.9538L4.79023 19.9392C4.39182 20.1392 3.92604 19.8165 4.00249 19.3935L5.13988 13.0691C5.17004 12.9014 5.11177 12.7297 4.98365 12.611L0.164665 8.132C-0.157703 7.83281 0.020013 7.31054 0.465542 7.24876L7.12575 6.32573C7.30224 6.3014 7.45552 6.19546 7.5345 6.04249L10.5131 0.288628Z"
                                                                        fill="#DFE4E7"
                                                                    />
                                                                </svg>
                                                                <svg
                                                                    className="cr-rating-act"
                                                                    fill="none"
                                                                    height="20"
                                                                    viewBox="0 0 22 20"
                                                                    width="22"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M10.5131 0.288628C10.7119 -0.0962093 11.288 -0.0962093 11.4868 0.288628L14.4654 6.04249C14.5448 6.19546 14.6976 6.3014 14.8745 6.32573L21.5344 7.24876C21.9799 7.31054 22.1576 7.83281 21.8357 8.132L17.0158 12.611C16.8881 12.7297 16.8295 12.9014 16.86 13.0691L17.9974 19.3935C18.0738 19.8165 17.6081 20.1392 17.2092 19.9392L11.2529 16.9538C11.0946 16.8745 10.9053 16.8745 10.747 16.9538L4.79023 19.9392C4.39182 20.1392 3.92604 19.8165 4.00249 19.3935L5.13988 13.0691C5.17004 12.9014 5.11177 12.7297 4.98365 12.611L0.164665 8.132C-0.157703 7.83281 0.020013 7.31054 0.465542 7.24876L7.12575 6.32573C7.30224 6.3014 7.45552 6.19546 7.5345 6.04249L10.5131 0.288628Z"
                                                                        fill="#F4DB6B"
                                                                    />
                                                                    <path
                                                                        clipRule="evenodd"
                                                                        d="M7.91797 18.3717L12.328 1.91336L14.4655 6.04248C14.5448 6.19545 14.6977 6.30139 14.8746 6.32572L21.5345 7.24875C21.98 7.31053 22.1577 7.8328 21.8357 8.13199L17.0159 12.611C16.8882 12.7297 16.8295 12.9014 16.8601 13.0691L17.9975 19.3934C18.0739 19.8165 17.6082 20.1392 17.2093 19.9392L11.253 16.9538C11.0947 16.8745 10.9054 16.8745 10.7471 16.9538L7.91797 18.3717Z"
                                                                        fill="#F5CD5B"
                                                                        fillRule="evenodd"
                                                                    />
                                                                </svg>
                                                            </div>
                                                            <div className="cr-review-form-rating-nbr">0/5</div>
                                                        </div>
                                                        <div className="cr-review-form-field-error">
                                                            * Rating is required
                                                        </div>
                                                        <input
                                                            className="cr-review-form-rating-inp"
                                                            defaultValue=""
                                                            name="cr_onsite_29_ovrl"
                                                            type="hidden"
                                                        />
                                                        <input
                                                            defaultValue='{"type":"ovrl"}'
                                                            name="cr_typ_lab_29_ovrl"
                                                            type="hidden"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="cr-review-form-comment">
                                                    <div className="cr-review-form-lbl">Your review</div>
                                                    <textarea
                                                        className="cr-review-form-comment-txt"
                                                        name="cr_review_form_comment_txt"
                                                        rows="5"
                                                    />
                                                    <div className="cr-review-form-field-error">
                                                        * Review is required
                                                    </div>
                                                </div>
                                                <div className="cr-review-form-ne">
                                                    <div className="cr-review-form-name">
                                                        <div className="cr-review-form-lbl">Name</div>
                                                        <input
                                                            autoComplete="name"
                                                            className="cr-review-form-txt"
                                                            defaultValue=""
                                                            name="cr_review_form_name"
                                                            type="text"
                                                        />
                                                        <div className="cr-review-form-field-error">
                                                            * Name is required
                                                        </div>
                                                    </div>
                                                    <div className="cr-review-form-email">
                                                        <div className="cr-review-form-lbl">Email</div>
                                                        <input
                                                            autoComplete="email"
                                                            className="cr-review-form-txt"
                                                            defaultValue=""
                                                            name="cr_review_form_email"
                                                            type="email"
                                                        />
                                                        <div className="cr-review-form-field-error">
                                                            * Email is required
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cr-review-form-buttons">
                                                    <button className="cr-review-form-submit" type="button">
                                                        <span>Submit</span>
                                                        <img
                                                            alt="Loading"
                                                            src="https://keyslo.com/wp-content/plugins/customer-reviews-woocommerce/img/spinner-dots.svg"
                                                        />
                                                    </button>
                                                    <button className="cr-review-form-cancel" type="button">
                                                        Cancel
                                                    </button>
                                                </div>
                                                <div className="cr-review-form-result">
                                                    <span />
                                                    <button
                                                        className="cr-review-form-continue"
                                                        type="button"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="clear" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="elementor-element elementor-element-15eb9f42 e-flex e-con-boxed e-con e-parent"
                data-element_type="container"
                data-id="15eb9f42">
                <div className="e-con-inner">
                    <div
                        className="elementor-element elementor-element-4837ffa9 elementor-widget-divider--view-line_text elementor-widget-divider--separator-type-pattern elementor-widget-divider--element-align-center elementor-widget elementor-widget-divider"
                        data-element_type="widget"
                        data-id="4837ffa9"
                        data-widget_type="divider.default">
                        <div className="elementor-widget-container">
                            <div
                                className="elementor-divider"
                                style={{
                                    "--divider-pattern-url":
                                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' overflow='visible' height='100%' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='0.5' stroke-linecap='square' stroke-miterlimit='10'%3E%3Cpath d='M0,21c3.3,0,8.3-0.9,15.7-7.1c6.6-5.4,4.4-9.3,2.4-10.3c-3.4-1.8-7.7,1.3-7.3,8.8C11.2,20,17.1,21,24,21'/%3E%3C/svg%3E\")",
                                }}>
                                <span className="elementor-divider-separator">
                                    <h1 className="elementor-divider__text elementor-divider__element">
                                        Related products
                                    </h1>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div
                        className="woocommerce elementor-element elementor-element-6bcc9ed2 elementor-grid-4 elementor-grid-mobile-2 elementor-grid-tablet-2 elementor-widget elementor-widget-loop-grid"
                        data-element_type="widget"
                        data-id="6bcc9ed2"
                        data-settings='{"_skin":"product","template_id":"7133","columns":4,"columns_mobile":2,"columns_tablet":"2","edit_handle_selector":"[data-elementor-type=\"loop-item\"]","row_gap":{"unit":"px","size":"","sizes":[]},"row_gap_tablet":{"unit":"px","size":"","sizes":[]},"row_gap_mobile":{"unit":"px","size":"","sizes":[]}}'
                        data-widget_type="loop-grid.product">
                        <div className="elementor-widget-container">
                            <div className="elementor-loop-container elementor-grid">
                                {bestOffers1.map((product, index) => (
                                    <div
                                        className="elementor elementor-7133 e-loop-item e-loop-item-47016 post-47016 product type-product status-publish has-post-thumbnail product_cat-games product_cat-steam product_tag-adventure product_tag-indie product_tag-puzzle last instock sale downloadable virtual purchasable product-type-simple"
                                        data-custom-edit-handle="1"
                                        data-elementor-id="7133"
                                        data-elementor-post-type="elementor_library"
                                        data-elementor-type="loop-item"
                                        key={index}>
                                        <section
                                            className="elementor-section elementor-top-section elementor-element elementor-element-e4e5fb8 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                            data-element_type="section"
                                            data-id="e4e5fb8">
                                            <div className="elementor-container elementor-column-gap-default">
                                                <div
                                                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-80f357c"
                                                    data-element_type="column"
                                                    data-id="80f357c">
                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                        <div
                                                            className="elementor-element elementor-element-cd375d1 elementor-position-top elementor-widget elementor-widget-image-box"
                                                            data-element_type="widget"
                                                            data-id="cd375d1"
                                                            data-widget_type="image-box.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-image-box-wrapper">
                                                                    <figure className="elementor-image-box-img">
                                                                        <a
                                                                            href="/home/products"
                                                                            tabIndex="-1">
                                                                            <img
                                                                                alt="Superliminal"
                                                                                className="elementor-animation-wobble-horizontal attachment-full size-full wp-image-47010"
                                                                                decoding="async"
                                                                                height="352"
                                                                                loading="lazy"
                                                                                src="https://keyslo.com/wp-content/uploads/2024/12/co1uqz.jpg"
                                                                                width="264"
                                                                            />
                                                                        </a>
                                                                    </figure>
                                                                    <div className="elementor-image-box-content">
                                                                        <h2 className="elementor-image-box-title">
                                                                            <a href="/home/products">
                                                                                Superliminal Steam CD Key
                                                                            </a>
                                                                        </h2>
                                                                        <p className="elementor-image-box-description">
                                                                            Price:
                                                                            <span
                                                                                className="woocs_price_code"
                                                                                data-currency=""
                                                                                data-product-id="47016"
                                                                                data-redraw-id="67b42fed61588">
                                                                                <del aria-hidden="true">
                                                                                    <span className="woocommerce-Price-amount amount">
                                                                                        <bdi>
                                                                                            <span className="woocommerce-Price-currencySymbol">
                                                                                                ₹
                                                                                            </span>
                                                                                            902.00
                                                                                        </bdi>
                                                                                    </span>
                                                                                </del>{" "}
                                                                                <span className="screen-reader-text">
                                                                                    Original price was: ₹ 902.00.
                                                                                </span>
                                                                                <ins aria-hidden="true">
                                                                                    <span className="woocommerce-Price-amount amount">
                                                                                        <bdi>
                                                                                            <span className="woocommerce-Price-currencySymbol">
                                                                                                ₹
                                                                                            </span>
                                                                                            451.00
                                                                                        </bdi>
                                                                                    </span>
                                                                                </ins>
                                                                                <span className="screen-reader-text">
                                                                                    Current price is: ₹ 451.00.
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                ))}
                            </div>
                            <div
                                className="e-load-more-anchor"
                                data-max-page="61"
                                data-next-page="https://keyslo.com/page/2/?v=13b5bfe96f3e"
                                data-page="1"
                            />
                            {hasMore && (
                                <div className="e-loop__load-more elementor-button-wrapper">
                                    <button
                                        className="elementor-button-link elementor-button"
                                        onClick={handleShowMore1}
                                        disabled={loading}
                                    >
                                        <span className="elementor-button-content-wrapper">
                                            <span className="elementor-button-text">
                                                {loading ? "Loading..." : "Load More"}
                                            </span>
                                        </span>
                                        {loading && (
                                            <span className="e-load-more-spinner">
                                                <i aria-hidden="true" className="fas fa-spinner fa-spin" />
                                            </span>
                                        )}
                                    </button>
                                </div>
                            )}
                            <div className="e-load-more-message" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}
export default product;