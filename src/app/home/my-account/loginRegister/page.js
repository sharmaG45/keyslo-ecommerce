'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth, fireStore } from "@/app/_components/firebase/config"
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "firebase/auth";
import { doc, setDoc, getDocs, query, where, collection } from "firebase/firestore";
import { toast } from 'react-toastify';

const registerLogin = () => {
    const [user, setUser] = useState(null);
    const [loginData, setLoginData] = useState({ email: "", password: "" });
    const [registerData, setRegisterData] = useState({ email: "", password: "" });
    const router = useRouter();


    // Monitor Auth State
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user ? user : null);
        });
        return () => unsubscribe();
    }, []);

    const handleChange = (e, type) => {
        const { name, value } = e.target;
        if (type === "login") {
            setLoginData((prev) => ({ ...prev, [name]: value }));
        } else {
            setRegisterData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { email, password } = loginData;
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            localStorage.setItem("currentUser", JSON.stringify({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
            }));

            toast.success("Login successful!");
            setTimeout(() => router.push("/"), 1500);
        } catch (error) {
            toast.error(`Error: ${error.message}`);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        const { email, password } = registerData;
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Store additional info in Firestore
            await setDoc(doc(fireStore, "users", user.uid), {
                email,
                createdAt: new Date(),
            });

            toast.success("Registration Successful! You can now log in.");
            router.push('/home/my-account');
        } catch (error) {
            toast.error(error.message);
        }
    };
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
                                <div className="woocommerce-notices-wrapper" />
                                <div className="u-columns col2-set" id="customer_login">
                                    <div className="u-column1 col-1">
                                        <h2>Login</h2>
                                        <form
                                            className="woocommerce-form woocommerce-form-login login"
                                            onSubmit={handleLogin}>
                                            <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                                <label htmlFor="username">
                                                    Username or email address
                                                    <span aria-hidden="true" className="required">
                                                        *
                                                    </span>
                                                    <span className="screen-reader-text">Required</span>
                                                </label>
                                                <input
                                                    aria-required="true"
                                                    autoComplete="email"
                                                    className="woocommerce-Input woocommerce-Input--text input-text"
                                                    defaultValue=""
                                                    id="email"
                                                    name="email"
                                                    required
                                                    onChange={(e) => handleChange(e, "login")}
                                                    type="text"
                                                />
                                            </p>
                                            <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                                <label htmlFor="password">
                                                    Password
                                                    <span aria-hidden="true" className="required">
                                                        *
                                                    </span>
                                                    <span className="screen-reader-text">Required</span>
                                                </label>
                                                <span className="password-input">
                                                    <input
                                                        aria-required="true"
                                                        autoComplete="current-password"
                                                        className="woocommerce-Input woocommerce-Input--text input-text"
                                                        id="password"
                                                        name="password"
                                                        required
                                                        onChange={(e) => handleChange(e, "login")}
                                                        type="password"
                                                    />
                                                    <span className="show-password-input" />
                                                </span>
                                            </p>
                                            <p className="form-row">
                                                <label className="woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__rememberme">
                                                    <input
                                                        className="woocommerce-form__input woocommerce-form__input-checkbox"
                                                        defaultValue="forever"
                                                        id="rememberme"
                                                        name="rememberme"
                                                        type="checkbox"
                                                    />{" "}
                                                    <span>Remember me</span>
                                                </label>
                                                <input
                                                    defaultValue="58ca39f015"
                                                    id="woocommerce-login-nonce"
                                                    name="woocommerce-login-nonce"
                                                    type="hidden"
                                                />
                                                <input
                                                    defaultValue="/my-account/"
                                                    name="_wp_http_referer"
                                                    type="hidden"
                                                />
                                                <button
                                                    className="woocommerce-button button woocommerce-form-login__submit"
                                                    name="login"
                                                    type="submit"
                                                    value="Log in">
                                                    Log in
                                                </button>
                                            </p>
                                            <p className="woocommerce-LostPassword lost_password">
                                                <a href="https://keyslo.com/my-account/lost-password/">
                                                    Lost your password?
                                                </a>
                                            </p>
                                        </form>
                                    </div>
                                    <div className="u-column2 col-2">
                                        <h2>Register</h2>
                                        <form
                                            className="woocommerce-form woocommerce-form-register register"
                                            onSubmit={handleRegister}>
                                            <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                                <label htmlFor="reg_email">
                                                    Email address
                                                    <span aria-hidden="true" className="required">
                                                        *
                                                    </span>
                                                    <span className="screen-reader-text">Required</span>
                                                </label>
                                                <input
                                                    aria-required="true"
                                                    autoComplete="email"
                                                    className="woocommerce-Input woocommerce-Input--text input-text"
                                                    defaultValue=""
                                                    id="reg_email"
                                                    name="email"
                                                    required
                                                    onChange={(e) => handleChange(e, "register")}
                                                    type="email"
                                                />
                                            </p>
                                            <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                                <label htmlFor="reg_password">
                                                    Password
                                                    <span aria-hidden="true" className="required">
                                                        *
                                                    </span>
                                                    <span className="screen-reader-text">Required</span>
                                                </label>
                                                <span className="password-input">
                                                    <input
                                                        aria-required="true"
                                                        autoComplete="new-password"
                                                        className="woocommerce-Input woocommerce-Input--text input-text"
                                                        id="reg_password"
                                                        name="password"
                                                        required
                                                        onChange={(e) => handleChange(e, "register")}
                                                        type="password"
                                                    />
                                                    <span className="show-password-input" />
                                                </span>
                                            </p>
                                            <wc-order-attribution-inputs>
                                                <input
                                                    defaultValue="referral"
                                                    name="wc_order_attribution_source_type"
                                                    type="hidden"
                                                />
                                                <input
                                                    defaultValue="http://localhost:3000/"
                                                    name="wc_order_attribution_referrer"
                                                    type="hidden"
                                                />
                                                <input
                                                    defaultValue="(none)"
                                                    name="wc_order_attribution_utm_campaign"
                                                    type="hidden"
                                                />
                                                <input
                                                    defaultValue="localhost"
                                                    name="wc_order_attribution_utm_source"
                                                    type="hidden"
                                                />
                                                <input
                                                    defaultValue="referral"
                                                    name="wc_order_attribution_utm_medium"
                                                    type="hidden"
                                                />
                                                <input
                                                    defaultValue="/"
                                                    name="wc_order_attribution_utm_content"
                                                    type="hidden"
                                                />
                                                <input
                                                    defaultValue="(none)"
                                                    name="wc_order_attribution_utm_id"
                                                    type="hidden"
                                                />
                                                <input
                                                    defaultValue="(none)"
                                                    name="wc_order_attribution_utm_term"
                                                    type="hidden"
                                                />
                                                <input
                                                    defaultValue="(none)"
                                                    name="wc_order_attribution_utm_source_platform"
                                                    type="hidden"
                                                />
                                                <input
                                                    defaultValue="(none)"
                                                    name="wc_order_attribution_utm_creative_format"
                                                    type="hidden"
                                                />
                                                <input
                                                    defaultValue="(none)"
                                                    name="wc_order_attribution_utm_marketing_tactic"
                                                    type="hidden"
                                                />
                                                <input
                                                    defaultValue="https://keyslo.com/product-tag/avg/?v=13b5bfe96f3e"
                                                    name="wc_order_attribution_session_entry"
                                                    type="hidden"
                                                />
                                                <input
                                                    defaultValue="2025-02-18 08:22:38"
                                                    name="wc_order_attribution_session_start_time"
                                                    type="hidden"
                                                />
                                                <input
                                                    defaultValue="12"
                                                    name="wc_order_attribution_session_pages"
                                                    type="hidden"
                                                />
                                                <input
                                                    defaultValue="4"
                                                    name="wc_order_attribution_session_count"
                                                    type="hidden"
                                                />
                                                <input
                                                    defaultValue="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36"
                                                    name="wc_order_attribution_user_agent"
                                                    type="hidden"
                                                />
                                            </wc-order-attribution-inputs>
                                            <div className="woocommerce-privacy-policy-text">
                                                <p>
                                                    Your personal data will be used to support your experience
                                                    throughout this website, to manage access to your account,
                                                    and for other purposes described in our{" "}
                                                    <a
                                                        className="woocommerce-privacy-policy-link"
                                                        href="https://keyslo.com/privacy-policy/"
                                                        target="_blank">
                                                        Privacy policy
                                                    </a>
                                                    .
                                                </p>
                                            </div>
                                            <p className="woocommerce-form-row form-row">
                                                <input
                                                    defaultValue="2ed1e3a133"
                                                    id="woocommerce-register-nonce"
                                                    name="woocommerce-register-nonce"
                                                    type="hidden"
                                                />
                                                <input
                                                    defaultValue="/my-account/"
                                                    name="_wp_http_referer"
                                                    type="hidden"
                                                />
                                                <button
                                                    className="woocommerce-Button woocommerce-button button woocommerce-form-register__submit"
                                                    name="register"
                                                    type="submit"
                                                    value="Register">
                                                    Register
                                                </button>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default registerLogin;