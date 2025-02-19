'use client';

import { Firestore } from "firebase/firestore";

const myaccount = () => {
    return <>
        <div
            className="elementor elementor-10999 elementor-location-single post-14 page type-page status-publish hentry"
            data-elementor-id="10999"
            data-elementor-post-type="elementor_library"
            data-elementor-type="single-page">
            <div
                className="elementor-element elementor-element-7c2cd39 e-flex e-con-boxed e-con e-parent e-lazyloaded"
                data-element_type="container"
                data-id="7c2cd39"
                data-settings='{"background_background":"classic"}'>
                <div className="e-con-inner">
                    <div
                        className="elementor-element elementor-element-2ac051b elementor-widget-divider--view-line_text elementor-widget-divider--element-align-left elementor-widget-divider--separator-type-pattern elementor-widget elementor-widget-divider"
                        data-element_type="widget"
                        data-id="2ac051b"
                        data-widget_type="divider.default">
                        <div className="elementor-widget-container">
                            <div
                                className="elementor-divider"
                                style={{
                                    "--divider-pattern-url":
                                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' overflow='visible' height='100%' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='1' stroke-linecap='square' stroke-miterlimit='10'%3E%3Cpath d='M0,6c6,0,6,13,12,13S18,6,24,6'/%3E%3C/svg%3E\")",
                                }}>
                                <span className="elementor-divider-separator">
                                    <span className="elementor-divider__text elementor-divider__element">
                                        My account
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="elementor-element elementor-element-e48ae82 e-flex e-con-boxed e-con e-parent e-lazyloaded"
                data-element_type="container"
                data-id="e48ae82">
                <div className="e-con-inner">
                    <div
                        className="elementor-element elementor-element-e499b43 elementor-widget elementor-widget-theme-post-content"
                        data-element_type="widget"
                        data-id="e499b43"
                        data-widget_type="theme-post-content.default">
                        <div className="elementor-widget-container">
                            <div className="woocommerce">
                                <nav
                                    aria-label="Account pages"
                                    className="woocommerce-MyAccount-navigation">
                                    <ul>
                                        <li className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--dashboard is-active">
                                            <a aria-current="page" href="https://keyslo.com/my-account/">
                                                Dashboard
                                            </a>
                                        </li>
                                        <li className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--orders">
                                            <a href="https://keyslo.com/my-account/orders/">Orders</a>
                                        </li>
                                        <li className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--downloads">
                                            <a href="https://keyslo.com/my-account/downloads/">
                                                Downloads
                                            </a>
                                        </li>
                                        <li className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--edit-address">
                                            <a href="https://keyslo.com/my-account/edit-address/">
                                                Addresses
                                            </a>
                                        </li>
                                        <li className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--payment-methods">
                                            <a href="https://keyslo.com/my-account/payment-methods/">
                                                Payment methods
                                            </a>
                                        </li>
                                        <li className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--edit-account">
                                            <a href="https://keyslo.com/my-account/edit-account/">
                                                Account details
                                            </a>
                                        </li>
                                        <li className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--customer-logout">
                                            <a href="https://keyslo.com/my-account/customer-logout/?_wpnonce=ed25ccd7df">
                                                Log out
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                                <div className="woocommerce-MyAccount-content">
                                    <div className="woocommerce-notices-wrapper" />
                                    <p>
                                        Hello <strong>shubham.jetquins</strong> (not{" "}
                                        <strong>shubham.jetquins</strong>?{" "}
                                        <a href="https://keyslo.com/wp-login.php?action=logout&redirect_to=https%3A%2F%2Fkeyslo.com%2Fmy-account%2F&_wpnonce=02a2dd2c71">
                                            Log out
                                        </a>
                                        )
                                    </p>
                                    <p>
                                        From your account dashboard you can view your{" "}
                                        <a href="https://keyslo.com/my-account/orders/">
                                            recent orders
                                        </a>
                                        , manage your{" "}
                                        <a href="https://keyslo.com/my-account/edit-address/">
                                            shipping and billing addresses
                                        </a>
                                        , and{" "}
                                        <a href="https://keyslo.com/my-account/edit-account/">
                                            edit your password and account details
                                        </a>
                                        .
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;


    </>
}

export default myaccount;