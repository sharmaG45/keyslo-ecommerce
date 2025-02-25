'use client';
import { useState, useEffect, useCallback } from "react";
import products from "@/app/assets/product.json";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { fireStore } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [productList, setProductList] = useState([]);
    const router = useRouter();

    const categories = [
        {
            name: "Office",
            link: `/home/productCategory?Name=Office`,
            iconPath:
                "M0 2016.6V496.8L1344.4 0l730.6 233.7v2045.9l-730.6 220.3L0 2016.6l1344.4 161.8V409.2l-876.8 204.6v1198.3z",
        },
        {
            name: "Windows",
            link: `/home/productCategory?Name=Windows`,
            iconPath:
                "M100 1800V600l1244.4-300 600 200v1400l-600 180-1244.4-400 1244.4 120v-1200l-800 180v900z",
        },
        {
            name: "Server",
            link: `/home/productCategory?Name=Server`,
            iconPath:
                "M0 2016.6V496.8L1344.4 0l730.6 233.7v2045.9l-730.6 220.3L0 2016.6l1344.4 161.8V409.2l-876.8 204.6v1198.3z",
        },
        {
            name: "Adobe",
            link: `/home/productCategory?Name=Adobe`,
            iconPath:
                "M100 1800V600l1244.4-300 600 200v1400l-600 180-1244.4-400 1244.4 120v-1200l-800 180v900z",
        },
        {
            name: "Autodesk",
            link: `/home/productCategory?Name=Autodesk`,
            iconPath:
                "M100 1800V600l1244.4-300 600 200v1400l-600 180-1244.4-400 1244.4 120v-1200l-800 180v900z",
        },
    ];

    const categories1 = [
        {
            name: "Video Editing",
            link: "/home/productCategory?Name=Video Editing",
        },
        {
            name: "Image Editing",
            link: "/home/productCategory?Name=Image Editing",
        },
        {
            name: "VPN",
            link: "/home/productCategory?Name=VPN",
        },
        {
            name: "PDF Editor",
            link: "/home/productCategory?Name=PDF Editor",
        },
        {
            name: "System Optimizer",
            link: "/home/productCategory?Name=System Optimizer",
        },
        {
            name: "Games",
            link: "/home/productCategory?Name=Games",
        },
    ];

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsLoggedIn(!!user);
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productCollectionRef = collection(fireStore, "create_Product");
                const productSnapshot = await getDocs(productCollectionRef);

                const products = productSnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                console.log("Fetched Products:", products);
                setProductList(products);
            } catch (err) {
                console.error("Error fetching products:", err);
                setProductList([]);
            }
        };

        fetchProducts();
    }, []);

    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [filterProducts, setFilteredProducts] = useState([]);


    useEffect(() => {
        if (searchQuery.length === 0) {
            setSuggestions([]);
            setFilteredProducts(productList);
            return;
        }

        const timer = setTimeout(() => {
            const filtered = productList.filter(product =>
                product?.productData.productInfo.productName?.toLowerCase().includes(searchQuery)
            );
            setSuggestions(filtered.slice(0, 5));
            setFilteredProducts(filtered);
        }, 300); // 300ms debounce

        return () => clearTimeout(timer); // Cleanup function
    }, [searchQuery, productList]);


    const handleProducts = (product_name, e) => {
        e.preventDefault();
        router.push(`/home/products?productName=${encodeURIComponent(product_name)}`);
        setSearchQuery(product_name); // Set the input value to the selected product
        setSuggestions([]); // Hide suggestions after selection

    };



    return (
        <>
            <div
                className="elementor elementor-26377 elementor-location-header"
                data-elementor-id="26377"
                data-elementor-post-type="elementor_library"
                data-elementor-type="header">
                <div
                    className="elementor-element elementor-element-50fe862 e-flex e-con-boxed e-con e-parent e-lazyloaded"
                    data-element_type="container"
                    data-id="50fe862"
                    data-settings='{"background_background":"classic"}'>
                    <div className="e-con-inner">
                        <div
                            className="elementor-element elementor-element-9edb921 e-con-full e-flex e-con e-child"
                            data-element_type="container"
                            data-id="9edb921">
                            <div
                                className="elementor-element elementor-element-d9b4346 elementor-icon-list--layout-inline elementor-mobile-align-center elementor-hidden-mobile elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                data-element_type="widget"
                                data-id="d9b4346"
                                data-widget_type="icon-list.default">
                                <div className="elementor-widget-container">
                                    <ul className="elementor-icon-list-items elementor-inline-items">
                                        <li className="elementor-icon-list-item elementor-inline-item">
                                            <a href="/home/contactus">
                                                <span className="elementor-icon-list-text">Contact us</span>
                                            </a>
                                        </li>
                                        <li className="elementor-icon-list-item elementor-inline-item">
                                            <a href="/home/orderUpdate">
                                                <span className="elementor-icon-list-text">Track Order</span>
                                            </a>
                                        </li>
                                        <li className="elementor-icon-list-item elementor-inline-item">
                                            <a href="/home/get-cid">
                                                <span className="elementor-icon-list-text">
                                                    <b>Get CID</b>
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-ca2fb98 e-con-full e-flex e-con e-child"
                            data-element_type="container"
                            data-id="ca2fb98"
                            data-settings='{"background_background":"classic"}'>
                            <div
                                className="elementor-element elementor-element-f1a8ac2 elementor-icon-list--layout-inline e-transform elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                data-element_type="widget"
                                data-id="f1a8ac2"
                                data-settings='{"_transform_scale_effect_hover":{"unit":"px","size":0.90000000000000002220446049250313080847263336181640625,"sizes":[]},"_transform_scale_effect_hover_tablet":{"unit":"px","size":"","sizes":[]},"_transform_scale_effect_hover_mobile":{"unit":"px","size":"","sizes":[]}}'
                                data-widget_type="icon-list.default">
                                <div className="elementor-widget-container">
                                    <ul className="elementor-icon-list-items elementor-inline-items">
                                        <li className="elementor-icon-list-item elementor-inline-item">
                                            <a href="/">
                                                <span className="elementor-icon-list-icon">
                                                    <i aria-hidden="true" className="fas fa-money-bill-wave" />
                                                </span>
                                                <span className="elementor-icon-list-text">
                                                    Change Currency
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                className="elementor-element elementor-element-94de47c elementor-widget elementor-widget-text-editor"
                                data-element_type="widget"
                                data-id="94de47c"
                                data-widget_type="text-editor.default">
                                <div className="elementor-widget-container">
                                    <div
                                        className="translator-dropdown-main-container translator-dropdown-container translator-dropdown-container-custom translator-dropdown-jquery translator-dropdown-floating-left translator-dropdown-flags-and-names translator-dropdown-scroll-enabled translator-dropdown-low-res"
                                        id="translator-dropdown-jquery-container">
                                        <div className="translator-dropdown-sub-container">
                                            <div className="translator-dropdown-body">
                                                <p className="translator-dropdown-current-language">
                                                    <img
                                                        alt="English"
                                                        src="https://keyslo.com/wp-content/plugins/wp-translator-revolution-dropdown/images/English.gif"
                                                    />
                                                    <span>English</span>
                                                </p>
                                                <em className="translator-dropdown-current-language-arrow" />
                                                <div
                                                    className="translator-dropdown-languages-list-scroll"
                                                    style={{
                                                        height: "138px",
                                                        overflow: "hidden",
                                                        position: "relative",
                                                    }}>
                                                    <div
                                                        className="translator-dropdown-languages-list"
                                                        style={{
                                                            height: "138px",
                                                            overflow: "hidden",
                                                        }}>
                                                        <p className="translator-dropdown-completed">
                                                            <a
                                                                className="translator-dropdown-language-en"
                                                                href="javascript:;"
                                                                title="English">
                                                                <img
                                                                    alt="English"
                                                                    src="https://keyslo.com/wp-content/plugins/wp-translator-revolution-dropdown/images/English.gif"
                                                                />
                                                                <span>English</span>
                                                            </a>
                                                        </p>
                                                        <p>
                                                            <a
                                                                className="translator-dropdown-language-hi"
                                                                href="javascript:;"
                                                                title="Hindi">
                                                                <img
                                                                    alt="Hindi"
                                                                    src="https://keyslo.com/wp-content/plugins/wp-translator-revolution-dropdown/images/Hindi.gif"
                                                                />
                                                                <span>Hindi</span>
                                                            </a>
                                                        </p>
                                                        <p>
                                                            <a
                                                                className="translator-dropdown-language-bn"
                                                                href="javascript:;"
                                                                title="Bengali">
                                                                <img
                                                                    alt="Bengali"
                                                                    src="https://keyslo.com/wp-content/plugins/wp-translator-revolution-dropdown/images/Bengali.gif"
                                                                />
                                                                <span>Bengali</span>
                                                            </a>
                                                        </p>
                                                        <p>
                                                            <a
                                                                className="translator-dropdown-language-kn"
                                                                href="javascript:;"
                                                                title="Kannada">
                                                                <img
                                                                    alt="Kannada"
                                                                    src="https://keyslo.com/wp-content/plugins/wp-translator-revolution-dropdown/images/Kannada.gif"
                                                                />
                                                                <span>Kannada</span>
                                                            </a>
                                                        </p>
                                                        <p>
                                                            <a
                                                                className="translator-dropdown-language-te"
                                                                href="javascript:;"
                                                                title="Telugu">
                                                                <img
                                                                    alt="Telugu"
                                                                    src="https://keyslo.com/wp-content/plugins/wp-translator-revolution-dropdown/images/Telugu.gif"
                                                                />
                                                                <span>Telugu</span>
                                                            </a>
                                                        </p>
                                                        <p>
                                                            <a
                                                                className="translator-dropdown-language-ml"
                                                                href="javascript:;"
                                                                title="Malayalam">
                                                                <img
                                                                    alt="Malayalam"
                                                                    src="https://keyslo.com/wp-content/plugins/wp-translator-revolution-dropdown/images/Malayalam.gif"
                                                                />
                                                                <span>Malayalam</span>
                                                            </a>
                                                        </p>
                                                        <p>
                                                            <a
                                                                className="translator-dropdown-language-ta"
                                                                href="javascript:;"
                                                                title="Tamil">
                                                                <img
                                                                    alt="Tamil"
                                                                    src="https://keyslo.com/wp-content/plugins/wp-translator-revolution-dropdown/images/Tamil.gif"
                                                                />
                                                                <span>Tamil</span>
                                                            </a>
                                                        </p>
                                                        <p>
                                                            <a
                                                                className="translator-dropdown-language-gu"
                                                                href="javascript:;"
                                                                title="Gujarati">
                                                                <img
                                                                    alt="Gujarati"
                                                                    src="https://keyslo.com/wp-content/plugins/wp-translator-revolution-dropdown/images/Gujarati.gif"
                                                                />
                                                                <span>Gujarati</span>
                                                            </a>
                                                        </p>
                                                    </div>
                                                    <div
                                                        className="translator-dropdown-languages-list-scroll-bar ui-draggable ui-draggable-handle"
                                                        style={{
                                                            borderRadius: "7px",
                                                            display: "none",
                                                            opacity: "0.4",
                                                            position: "absolute",
                                                            right: "2px",
                                                            top: "0px",
                                                            width: "7px",
                                                        }}
                                                    />
                                                    <div
                                                        className="translator-dropdown-languages-list-scroll-bar-rail"
                                                        style={{
                                                            height: "100%",
                                                            position: "absolute",
                                                            right: "0px",
                                                            top: "0px",
                                                            width: "15px",
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="elementor-element elementor-element-7b552b2 elementor-hidden-mobile e-con-full e-flex e-con e-parent e-lazyloaded"
                    data-element_type="container"
                    data-id="7b552b2">
                    <div
                        className="elementor-element elementor-element-789a4e4 elementor-widget elementor-widget-theme-site-logo elementor-widget-image"
                        data-element_type="widget"
                        data-id="789a4e4"
                        data-widget_type="theme-site-logo.default">
                        <div className="elementor-widget-container">
                            <a href="/">
                                <img
                                    alt=""
                                    className="attachment-full size-full wp-image-7974"
                                    height="74"
                                    src="https://keyslo.com/wp-content/uploads/2020/09/keys-lo-logo-e1700459713898.webp"
                                    width="180"
                                />
                            </a>
                        </div>
                    </div>
                    <div
                        className="elementor-element elementor-element-4a553ec elementor-icon-list--layout-inline e-transform elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                        data-element_type="widget"
                        data-id="4a553ec"
                        data-settings='{"_transform_scaleX_effect_hover":{"unit":"px","size":"","sizes":[]},"_transform_scaleX_effect_hover_tablet":{"unit":"px","size":"","sizes":[]},"_transform_scaleX_effect_hover_mobile":{"unit":"px","size":"","sizes":[]},"_transform_scaleY_effect_hover":{"unit":"px","size":"","sizes":[]},"_transform_scaleY_effect_hover_tablet":{"unit":"px","size":"","sizes":[]},"_transform_scaleY_effect_hover_mobile":{"unit":"px","size":"","sizes":[]}}'
                        data-widget_type="icon-list.default">
                        <div className="elementor-widget-container">
                            <ul className="elementor-icon-list-items elementor-inline-items">
                                {categories.map((category, index) => (
                                    <li className="elementor-icon-list-item elementor-inline-item" key={index}>
                                        <a href={category.link}>
                                            <span className="elementor-icon-list-icon">
                                                <svg height="24px" width="24px" viewBox="0 0 2499.8 2499.8" xmlns="http://www.w3.org/2000/svg">
                                                    <path d={category.iconPath} fill="#eb3c00" />
                                                </svg>
                                            </span>
                                            <span className="elementor-icon-list-text">{category.name}</span>
                                        </a>
                                    </li>
                                ))}

                            </ul>
                        </div>
                    </div>
                    <div
                        className="elementor-element elementor-element-abb5cd7 elementor-widget elementor-widget-search"
                        data-element_type="widget"
                        data-id="abb5cd7"
                        data-settings='{"submit_trigger":"key_enter","live_results":"yes","template_id":"51263","minimum_search_characters":6,"pagination_type_options":"none","results_is_dropdown_width":"search_field"}'
                        data-widget_type="search.default"
                        style={{
                            "--e-search-icon-clear-absolute-width": "0px",
                            "--e-search-icon-label-absolute-width": "0px",
                        }}>
                        <div className="elementor-widget-container">
                            <div className="e-search" role="search">
                                <form

                                    className="e-search-form"
                                    method="get"
                                >
                                    <label className="e-search-label" htmlFor="search-abb5cd7">
                                        <span className="elementor-screen-only">Search</span>
                                    </label>
                                    <div className="e-search-input-wrapper">
                                        <input
                                            aria-autocomplete="list"
                                            aria-controls="results-abb5cd7"
                                            aria-expanded="false"
                                            aria-haspopup="listbox"
                                            autoComplete="off"
                                            className="e-search-input no-icon-label no-icon-clear"
                                            id="search-abb5cd7"
                                            name="s"
                                            placeholder="Type to start searching..."
                                            role="combobox"
                                            type="search"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)} // ✅ Fix onChange event
                                        />
                                        {suggestions.length > 0 && (
                                            <output
                                                id="results-abb5cd7"
                                                className="e-search-results-container hide-loader"
                                                aria-live="polite"
                                                aria-atomic="true"
                                                tabIndex={0}
                                                aria-label="Results"
                                            >
                                                <div className="e-search-results">
                                                    <div className="e-search-results-list">
                                                        {suggestions.map((suggestion, index) => (
                                                            <div
                                                                key={index}
                                                                className="e-loop-item product"
                                                                onClick={(e) => handleProducts(suggestion.productData.productInfo.productName, e)}
                                                            >
                                                                <div className="e-con-inner">
                                                                    <h5 className="elementor-heading-title">
                                                                        <a href="#">{suggestion.productData.productInfo.productName}</a>
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </output>
                                        )}
                                    </div>
                                    <button aria-label="Search" className="e-search-submit elementor-screen-only" type="submit"></button>
                                </form>
                            </div>
                        </div>

                    </div>
                    <div
                        className="elementor-element elementor-element-63ab1f7 elementor-shape-rounded elementor-grid-0 e-grid-align-center elementor-widget elementor-widget-social-icons"
                        data-element_type="widget"
                        data-id="63ab1f7"
                        data-widget_type="social-icons.default">
                        <div className="elementor-widget-container">
                            <div className="elementor-social-icons-wrapper elementor-grid">
                                <span className="elementor-grid-item">
                                    <a
                                        className="elementor-icon elementor-social-icon elementor-social-icon-user elementor-animation-grow elementor-repeater-item-67b3e4b"
                                        href={isLoggedIn ? "/home/my-account" : "/home/my-account/loginRegister"}
                                        target="_blank">
                                        <span className="elementor-screen-only">User</span>
                                        <i className="far fa-user" />
                                    </a>
                                </span>
                                <span className="elementor-grid-item">
                                    <a
                                        className="elementor-icon elementor-social-icon elementor-social-icon-shopping-basket elementor-animation-grow elementor-repeater-item-d9c8133"
                                        href="/home/cart"
                                        target="_blank">
                                        <span className="elementor-screen-only">Shopping-basket</span>
                                        <i className="fas fa-shopping-basket" />
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="elementor-element elementor-element-98e639d elementor-hidden-mobile e-flex e-con-boxed e-con e-parent e-lazyloaded"
                    data-element_type="container"
                    data-id="98e639d">
                    <div className="e-con-inner">
                        <div
                            className="elementor-element elementor-element-2698e82 elementor-icon-list--layout-inline elementor-align-left elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                            data-element_type="widget"
                            data-id="2698e82"
                            data-widget_type="icon-list.default">
                            <div className="elementor-widget-container">
                                <ul className="elementor-icon-list-items elementor-inline-items">
                                    {categories1.map((category, index) => (
                                        <li key={index} className="elementor-icon-list-item elementor-inline-item">
                                            <a href={category.link}>
                                                <span className="elementor-icon-list-icon">
                                                    <i aria-hidden="true" className="fas fa-check-circle" />
                                                </span>
                                                <span className="elementor-icon-list-text">{category.name}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-ffce5bb elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                            data-element_type="widget"
                            data-id="ffce5bb"
                            data-widget_type="divider.default">
                            <div className="elementor-widget-container">
                                <div className="elementor-divider">
                                    <span className="elementor-divider-separator"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="elementor-element elementor-element-867ecba elementor-hidden-desktop elementor-hidden-tablet e-con-full e-flex e-con e-parent"
                    data-element_type="container"
                    data-id="867ecba"
                    data-settings='{"background_background":"classic"}'
                    style={{}}>
                    <div
                        className="elementor-element elementor-element-960a764 e-flex e-con-boxed e-con e-child"
                        data-element_type="container"
                        data-id="960a764">
                        <div className="e-con-inner">
                            <div
                                className="elementor-element elementor-element-c4db33f elementor-widget-mobile__width-initial elementor-view-default elementor-widget elementor-widget-icon"
                                data-element_type="widget"
                                data-id="c4db33f"
                                data-widget_type="icon.default">
                                <div className="elementor-widget-container">
                                    <div className="elementor-icon-wrapper">
                                        <a
                                            className="elementor-icon elementor-animation-shrink"
                                            href="#" onClick={() => setIsOpen(!isOpen)}>
                                            <i aria-hidden="true" className="fas fa-align-justify" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="elementor-element elementor-element-5a3152c elementor-widget-mobile__width-initial elementor-widget elementor-widget-theme-site-logo elementor-widget-image"
                                data-element_type="widget"
                                data-id="5a3152c"
                                data-widget_type="theme-site-logo.default">
                                <div className="elementor-widget-container">
                                    <a href="/">
                                        <img
                                            alt=""
                                            className="elementor-animation-shrink attachment-full size-full wp-image-7974"
                                            height="74"
                                            src="https://keyslo.com/wp-content/uploads/2020/09/keys-lo-logo-e1700459713898.webp"
                                            width="180"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div
                                className="elementor-element elementor-element-47c437f elementor-widget-mobile__width-initial elementor-view-default elementor-widget elementor-widget-icon"
                                data-element_type="widget"
                                data-id="47c437f"
                                data-widget_type="icon.default">
                                <div className="elementor-widget-container">
                                    <div className="elementor-icon-wrapper">
                                        <div className="elementor-icon elementor-animation-shrink">
                                            <i aria-hidden="true" className="fas fa-cart-arrow-down" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="elementor-element elementor-element-c015794 e-flex e-con-boxed e-con e-child"
                        data-element_type="container"
                        data-id="c015794">
                        <div className="e-con-inner">
                            <div
                                className="elementor-element elementor-element-2df1be1 elementor-widget elementor-widget-search"
                                data-element_type="widget"
                                data-id="2df1be1"
                                data-settings='{"submit_trigger":"key_enter","live_results":"yes","template_id":"51263","minimum_search_characters":3,"pagination_type_options":"none","results_is_dropdown_width":"search_field"}'
                                data-widget_type="search.default"
                                style={{
                                    "--e-search-icon-clear-absolute-width": "0px",
                                    "--e-search-icon-label-absolute-width": "0px",
                                }}>
                                <div className="elementor-widget-container">
                                    <div className="e-search" role="search">
                                        <form

                                            className="e-search-form"
                                            method="get"
                                        >
                                            <label className="e-search-label" htmlFor="search-abb5cd7">
                                                <span className="elementor-screen-only">Search</span>
                                            </label>
                                            <div className="e-search-input-wrapper">
                                                <input
                                                    aria-autocomplete="list"
                                                    aria-controls="results-abb5cd7"
                                                    aria-expanded="false"
                                                    aria-haspopup="listbox"
                                                    autoComplete="off"
                                                    className="e-search-input no-icon-label no-icon-clear"
                                                    id="search-abb5cd7"
                                                    name="s"
                                                    placeholder="Type to start searching..."
                                                    role="combobox"
                                                    type="search"
                                                    value={searchQuery}
                                                    onChange={(e) => setSearchQuery(e.target.value)} // ✅ Fix onChange event
                                                />
                                                {suggestions.length > 0 && (
                                                    <output
                                                        id="results-abb5cd7"
                                                        className="e-search-results-container hide-loader"
                                                        aria-live="polite"
                                                        aria-atomic="true"
                                                        tabIndex={0}
                                                        aria-label="Results"
                                                    >
                                                        <div className="e-search-results">
                                                            <div className="e-search-results-list">
                                                                {suggestions.map((suggestion, index) => (
                                                                    <div
                                                                        key={index} // ✅ Fix: Added key
                                                                        className="e-loop-item product"
                                                                        onClick={(e) => handleProducts(suggestion.productData.productInfo.productName, e)}
                                                                    >
                                                                        <div className="e-con-inner">
                                                                            <h5 className="elementor-heading-title">
                                                                                <a href="#">{suggestion.productData.productInfo.productName}</a>
                                                                            </h5>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </output>
                                                )}
                                            </div>
                                            <button aria-label="Search" className="e-search-submit elementor-screen-only" type="submit"></button>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile views */}

            {isOpen && (
                <div
                    className="dialog-widget dialog-lightbox-widget dialog-type-buttons dialog-type-lightbox elementor-popup-modal"
                    id="elementor-popup-modal-8028"
                    aria-modal="true"
                    role="document"
                    tabIndex={0}
                    style={{}}
                >
                    <div className="dialog-widget-content dialog-lightbox-widget-content animated">
                        <a
                            role="button"
                            tabIndex={0}
                            aria-label="Close"
                            href="#"
                            onClick={(e) => {
                                e.preventDefault(); // Prevent default anchor behavior
                                setIsOpen(false); // Close the popup
                            }}
                            className="dialog-close-button dialog-lightbox-close-button"
                        >
                            <i className="eicon-close" />
                        </a>
                        <div className="dialog-header dialog-lightbox-header" />
                        <div className="dialog-message dialog-lightbox-message">
                            <div
                                data-elementor-type="popup"
                                data-elementor-id={8028}
                                className="elementor elementor-8028 elementor-location-popup"
                                data-elementor-settings='{"entrance_animation":"fadeInLeft","exit_animation":"fadeInLeft","entrance_animation_duration":{"unit":"px","size":1.1999999999999999555910790149937383830547332763671875,"sizes":[]},"a11y_navigation":"yes","timing":[]}'
                                data-elementor-post-type="elementor_library"
                                style={{ display: "block" }}
                            >
                                <div
                                    className="elementor-element elementor-element-5c417f7 e-flex e-con-boxed e-con e-parent"
                                    data-id="5c417f7"
                                    data-element_type="container"
                                >
                                    <div className="e-con-inner">
                                        <div
                                            className="elementor-element elementor-element-7abcaff elementor-widget elementor-widget-heading"
                                            data-id="7abcaff"
                                            data-element_type="widget"
                                            data-widget_type="heading.default"
                                        >
                                            <div className="elementor-widget-container">
                                                <h1 className="elementor-heading-title elementor-size-default">
                                                    Menutd {"{"}border: 1px solid #cccccc;{"}"}br {"{"}
                                                    mso-data-placement:same-cell;{"}"}
                                                </h1>{" "}
                                            </div>
                                        </div>
                                        <div
                                            className="elementor-element elementor-element-754f79a elementor-widget elementor-widget-heading"
                                            data-id="754f79a"
                                            data-element_type="widget"
                                            data-widget_type="heading.default"
                                        >
                                            <div className="elementor-widget-container">
                                                <h4 className="elementor-heading-title elementor-size-default">
                                                    Products
                                                </h4>{" "}
                                            </div>
                                        </div>
                                        <div
                                            className="elementor-element elementor-element-f8de93d elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                            data-id="f8de93d"
                                            data-element_type="widget"
                                            data-widget_type="icon-list.default"
                                        >
                                            <div className="elementor-widget-container">
                                                <ul className="elementor-icon-list-items">
                                                    <li className="elementor-icon-list-item">
                                                        <a href="/">
                                                            <span className="elementor-icon-list-icon">
                                                                <i aria-hidden="true" className="fas fa-dot-circle" />{" "}
                                                            </span>
                                                            <span className="elementor-icon-list-text">
                                                                Windows 11 Pro
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li className="elementor-icon-list-item">
                                                        <a href="/">
                                                            <span className="elementor-icon-list-icon">
                                                                <i aria-hidden="true" className="fas fa-dot-circle" />{" "}
                                                            </span>
                                                            <span className="elementor-icon-list-text">
                                                                Windows 10 Pro
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li className="elementor-icon-list-item">
                                                        <a href="/">
                                                            <span className="elementor-icon-list-icon">
                                                                <i aria-hidden="true" className="fas fa-dot-circle" />{" "}
                                                            </span>
                                                            <span className="elementor-icon-list-text">
                                                                Office 365 Pro Plus
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li className="elementor-icon-list-item">
                                                        <a href="/">
                                                            <span className="elementor-icon-list-icon">
                                                                <i aria-hidden="true" className="fas fa-dot-circle" />{" "}
                                                            </span>
                                                            <span className="elementor-icon-list-text">
                                                                Office Pro Plus 2021
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li className="elementor-icon-list-item">
                                                        <a href="/">
                                                            <span className="elementor-icon-list-icon">
                                                                <i aria-hidden="true" className="fas fa-dot-circle" />{" "}
                                                            </span>
                                                            <span className="elementor-icon-list-text">
                                                                Office Pro Plus 2019
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li className="elementor-icon-list-item">
                                                        <a href="/">
                                                            <span className="elementor-icon-list-icon">
                                                                <i aria-hidden="true" className="fas fa-question" />{" "}
                                                            </span>
                                                            <span className="elementor-icon-list-text">
                                                                Installation Guide
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li className="elementor-icon-list-item">
                                                        <a href="/home/contactus">
                                                            <span className="elementor-icon-list-icon">
                                                                <i
                                                                    aria-hidden="true"
                                                                    className="fas fa-headphones-alt"
                                                                />{" "}
                                                            </span>
                                                            <span className="elementor-icon-list-text">
                                                                Contact us
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div
                                            className="elementor-element elementor-element-ec691f9 elementor-search-form--skin-classic elementor-search-form--button-type-icon elementor-search-form--icon-search elementor-widget elementor-widget-search-form"
                                            data-id="ec691f9"
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
                                                                htmlFor="elementor-search-form-ec691f9"
                                                            >
                                                                Search
                                                            </label>
                                                            <input
                                                                id="elementor-search-form-ec691f9"
                                                                placeholder="Search products..."
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
                                                    </form>
                                                </search>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dialog-buttons-wrapper dialog-lightbox-buttons-wrapper" />
                    </div>
                </div>
            )}



        </>
    )
}
export default Navbar;