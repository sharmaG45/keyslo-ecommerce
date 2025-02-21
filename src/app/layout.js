import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navbar/page";
import Footer from "./_components/footer/page";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import { CartProvider } from "./_components/context/cartContext";
import { Suspense } from 'react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        <link rel="stylesheet" href="/assets/wp-content/wp-content/themes/hello-elementor/style.css" />
        <link rel="stylesheet" href="/assets/wp-content/wp-content/themes/hello-elementor/style.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/wp-content/plugins/customer-reviews-woocommerce/css/frontend.css" />
        <link rel="stylesheet" href="/assets/wp-content/wp-content/plugins/customer-reviews-woocommerce/css/badges.css" />

        <link rel="stylesheet" href="/assets/wp-content/wp-content/plugins/elementor/assets/css/frontend.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/wp-content/themes/hello-elementor/header-footer.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/css/jquery.translator.css" />
        <link rel="stylesheet" href="/assets/wp-content/wp-content/themes/hello-elementor/theme.min.css" />

        <link rel="stylesheet" href="/assets/wp-content/css/wc-blocks.css" />
        <link rel="stylesheet" href="/assets/wp-content/wp-content/plugins/elementor/assets/css/widget-divider.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/css/widget-video.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/wp-content/plugins/elementor/assets/css/widget-heading.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/wp-content/plugins/elementor/assets/css/widget-icon-box.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/css/widget-woocommerce-products-archive.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/css/widget-woocommerce-products.min.css" />

        <link rel="stylesheet" href="/assets/wp-content/wp-content/plugins/elementor/assets/css/widget-icon-list.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/css/widget-image-box.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/wp-content/plugins/elementor/assets/css/widget-image.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/css/widget-nested-accordion.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/css/widget-accordian.min.css" />

        <link rel="stylesheet" href="/assets/wp-content/wp-content/plugins/elementor/assets/css/widget-social-icons.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/wp-content/plugins/elementor/assets/css/widget-text-editor.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/css/woocommerce-layout.css" />
        <link rel="stylesheet" href="/assets/wp-content/css/woocommerce-smallscreen.css" />


        <link rel="stylesheet" href="/assets/wp-content/css/woocommerce.css" />
        <link rel="stylesheet" href="/assets/wp-content/wp-content/themes/hello-chile-hello-elementor-child/style.css" />
        <link rel="stylesheet" href="/assets/wp-content/wp-content/plugins/elementor/assets/css/conditionals/apple-webkit.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/css/helper.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/css/style_itr.css" />
        <link rel="stylesheet" href="/assets/wp-content/css/motion-fix.min.css" />

        <link rel="stylesheet" href="/assets/wp-content/css/front.css" />
        <link rel="stylesheet" href="/assets/wp-content/css/conditionals/popup.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/wp-content/uploads/elementor/css/post-6909.css" />
        <link rel="stylesheet" href="/assets/wp-content/css/post-6901.css" />
        <link rel="stylesheet" href="/assets/wp-content/wp-content/uploads/elementor/css/post-8028.css" />
        <link rel="stylesheet" href="/assets/wp-content/css/post-10019.css" />
        <link rel="stylesheet" href="/assets/wp-content/wp-content/uploads/elementor/css/post-10979.css" />
        <link rel="stylesheet" href="/assets/wp-content/wp-content/uploads/elementor/css/post-19663.css" />
        <link rel="stylesheet" href="/assets/wp-content/wp-content/uploads/elementor/css/post-26377.css" />
        <link rel="stylesheet" href="/assets/wp-content/css/post-38607.css" />
        <link rel="stylesheet" href="/assets/wp-content/css/post-7851.css" />
        <link rel="stylesheet" href="/assets/wp-content/css/post-11051.css" />
        <link rel="stylesheet" href="/assets/wp-content/css/post-11070.css" />
        <link rel="stylesheet" href="/assets/wp-content/css/post-13.css" />
        <link rel="stylesheet" href="/assets/wp-content/css/post-7835.css" />
        <link rel="stylesheet" href="/assets/wp-content/css/post-7839.css" />
        <link rel="stylesheet" href="/assets/wp-content/css/post-12.css" />
        <link rel="stylesheet" href="/assets/wp-content/wp-content/uploads/elementor/css/post-10999.css" />
        <link rel="stylesheet" href="/assets/wp-content/css/slideInRight.min.css" />

        <link rel="stylesheet" href="/assets/wp-content/css/widget-loop-common.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/css/widget-loop-grid.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/css/widget-search.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/css/widget-search-form.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/css/widget-woocommerce-cart.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/css/select2.css" />
        <link rel="stylesheet" href="/assets/wp-content/css/selectron23.css" />
        <link rel="stylesheet" href="/assets/wp-content/css/paytm-payments.css" />
        <link rel="stylesheet" href="/assets/wp-content/css/stripe.css" />

        <link rel="stylesheet" href="/assets/wp-content/css/widget-woocommerce-product-add-to-cart.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/css/widget-woocommerce-product-additional-information.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/css/widget-woocommerce-product-images.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/css/widget-woocommerce-product-meta.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/css/widget-woocommerce-product-rating.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/css/widget-woocommerce-checkout-page.min.css" />

        <link rel="stylesheet" href="/assets/wp-content/lib/animations/styles/e-animation-grow.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/lib/animations/styles/e-animation-shrink.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/lib/animations/styles/e-animation-wobble-horizontal.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/lib/animations/styles/fadeInLeft.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/lib/animations/styles/fadeInUp.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/css/fadeInLeft.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/css/fadeInRight.min.css" />

        <link rel="stylesheet" href="/assets/wp-content/lib/eicons/css/elementor-icons.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/lib/font-awesome/css/all.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/lib/font-awesome/css/brands.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/lib/font-awesome/css/fontawesome.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/lib/font-awesome/css/regular.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/lib/font-awesome/css/solid.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/lib/font-awesome/css/v4-shims.min.css" />

        <link rel="stylesheet" href="/assets/wp-content/lib/swiper/swiper.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/css/e-swiper.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/wp-includes/css/dist/block-library/style.min.css" />


        <link rel="stylesheet" href="/assets/wp-content/gallery-slider-for-woocommerce/public/css/dynamic.css" />
        <link rel="stylesheet" href="/assets/wp-content/gallery-slider-for-woocommerce/public/css/fontello.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/gallery-slider-for-woocommerce/public/css/jquery.fancybox.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/gallery-slider-for-woocommerce/public/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/gallery-slider-for-woocommerce/public/css/woo-gallery-slider-public.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/css/photoswipe/photoswipe.min.css" />
        <link rel="stylesheet" href="/assets/wp-content/css/photoswipe/default-skin/default-skin.min.css" />

        {/* <link rel="stylesheet" href="/assets/wp-content/lib/swiper/swiper.min.css" /> */}

        {/* <link rel="stylesheet" href="/assets/wp-content/css/block-library/style.min.css" /> */}

        <link rel='stylesheet' id='widget-woocommerce-cart-css' href='/keyslo/wp-content/plugins/elementor-pro/assets/css/widget-woocommerce-cart.min.css?ver=3.27.1' media='all' />
        <link rel='stylesheet' id='elementor-post-12-css' href='/keyslo/wp-content/uploads/elementor/css/post-12.css?ver=1738349779' media='all' />
        <link rel='stylesheet' id='elementor-post-26377-css' href='/keyslo/wp-content/uploads/elementor/css/post-26377.css?ver=1738349653' media='all' />
        <link rel='stylesheet' id='elementor-post-7835-css' href='/keyslo/wp-content/uploads/elementor/css/post-7835.css?ver=1738349656' media='all' />
        <link rel='stylesheet' id='mdp-helper-css' href='/keyslo/wp-content/plugins/helper/css/helper.min.css?ver=1.0.28' media='all' />

        <link
          rel="stylesheet"
          id="wc-blocks-style-css"
          href="/keyslo/wp-content/plugins/woocommerce/assets/client/blocks/wc-blocks.css?ver=wc-9.5.1"
          media="all"
        />
        <link
          rel="stylesheet"
          id="woocommerce-currency-switcher-css"
          href="/keyslo/wp-content/plugins/woocommerce-currency-switcher/css/front.css?ver=2.4.2.2"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-post-8028-css"
          href="/keyslo/wp-content/uploads/elementor/css/post-8028.css?ver=1738349654"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-post-19663-css"
          href="/keyslo/wp-content/uploads/elementor/css/post-19663.css?ver=1738349654"
          media="all"
        />
        <link
          rel="stylesheet"
          id="e-animation-fadeInUp-css"
          href="/keyslo/wp-content/plugins/elementor/assets/lib/animations/styles/fadeInUp.min.css?ver=3.27.2"
          media="all"
        />
        <link
          rel="stylesheet"
          id="google-fonts-1-css"
          href="https://fonts.googleapis.com/css?family=Roboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto+Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRocknRoll+One%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&#038;display=swap&#038;ver=6.7.2"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-icons-fa-regular-css"
          href="/keyslo/wp-content/plugins/elementor/assets/lib/font-awesome/css/regular.min.css?ver=5.15.3"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-icons-fa-brands-css"
          href="/keyslo/wp-content/plugins/elementor/assets/lib/font-awesome/css/brands.min.css?ver=5.15.3"
          media="all"
        />
        <link
          rel="stylesheet"
          id="woocommerce-layout-css"
          href="/keyslo/wp-content/plugins/woocommerce/assets/css/woocommerce-layout.css?ver=9.5.1"
          media="all"
        />
        <link
          rel="stylesheet"
          id="woocommerce-smallscreen-css"
          href="/keyslo/wp-content/plugins/woocommerce/assets/css/woocommerce-smallscreen.css?ver=9.5.1"
          media="only screen and (max-width: 768px)"
        />
        <link
          rel="stylesheet"
          id="woocommerce-general-css"
          href="/keyslo/wp-content/plugins/woocommerce/assets/css/woocommerce.css?ver=9.5.1"
          media="all"
        />
        <link
          rel="stylesheet"
          id="surstudio-plugin-translator-revolution-dropdown-css"
          href="/keyslo/wp-content/plugins/wp-translator-revolution-dropdown/styles/jquery.translator.css?ver=2.2"
          media="screen"
        />
        <link
          rel="stylesheet"
          id="parent-style-css"
          href="/keyslo/wp-content/themes/hello-elementor/style.css?ver=6.7.2"
          media="all"
        />
        <link
          rel="stylesheet"
          id="child-style-css"
          href="/keyslo/wp-content/themes/hello-chile-hello-elementor-child/style.css?ver=6.7.2"
          media="all"
        />
        <link
          rel="stylesheet"
          id="hello-elementor-css"
          href="/keyslo/wp-content/themes/hello-elementor/style.min.css?ver=3.1.0"
          media="all"
        />
        <link
          rel="stylesheet"
          id="hello-elementor-theme-style-css"
          href="/keyslo/wp-content/themes/hello-elementor/theme.min.css?ver=3.1.0"
          media="all"
        />
        <link
          rel="stylesheet"
          id="hello-elementor-header-footer-css"
          href="/keyslo/wp-content/themes/hello-elementor/header-footer.min.css?ver=3.1.0"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-frontend-css"
          href="/keyslo/wp-content/plugins/elementor/assets/css/frontend.min.css?ver=3.27.2"
          media="all"
        />
        <link
          rel="stylesheet"
          id="widget-icon-list-css"
          href="/keyslo/wp-content/plugins/elementor/assets/css/widget-icon-list.min.css?ver=3.27.2"
          media="all"
        />
        <link
          rel="stylesheet"
          id="widget-text-editor-css"
          href="/keyslo/wp-content/plugins/elementor/assets/css/widget-text-editor.min.css?ver=3.27.2"
          media="all"
        />
        <link
          rel="stylesheet"
          id="widget-image-css"
          href="/keyslo/wp-content/plugins/elementor/assets/css/widget-image.min.css?ver=3.27.2"
          media="all"
        />
        <link
          rel="stylesheet"
          id="widget-search-css"
          href="/keyslo/wp-content/plugins/elementor-pro/assets/css/widget-search.min.css?ver=3.27.1"
          media="all"
        />
        <link
          rel="stylesheet"
          id="e-animation-grow-css"
          href="/keyslo/wp-content/plugins/elementor/assets/lib/animations/styles/e-animation-grow.min.css?ver=3.27.2"
          media="all"
        />
        <link
          rel="stylesheet"
          id="widget-social-icons-css"
          href="/keyslo/wp-content/plugins/elementor/assets/css/widget-social-icons.min.css?ver=3.27.2"
          media="all"
        />
        <link
          rel="stylesheet"
          id="e-apple-webkit-css"
          href="/keyslo/wp-content/plugins/elementor/assets/css/conditionals/apple-webkit.min.css?ver=3.27.2"
          media="all"
        />
        <link
          rel="stylesheet"
          id="widget-divider-css"
          href="/keyslo/wp-content/plugins/elementor/assets/css/widget-divider.min.css?ver=3.27.2"
          media="all"
        />
        <link
          rel="stylesheet"
          id="e-animation-shrink-css"
          href="/keyslo/wp-content/plugins/elementor/assets/lib/animations/styles/e-animation-shrink.min.css?ver=3.27.2"
          media="all"
        />
        <link
          rel="stylesheet"
          id="widget-heading-css"
          href="/keyslo/wp-content/plugins/elementor/assets/css/widget-heading.min.css?ver=3.27.2"
          media="all"
        />
        <link
          rel="stylesheet"
          id="widget-icon-box-css"
          href="/keyslo/wp-content/plugins/elementor/assets/css/widget-icon-box.min.css?ver=3.27.2"
          media="all"
        />
        <link
          rel="stylesheet"
          id="widget-search-form-css"
          href="/keyslo/wp-content/plugins/elementor-pro/assets/css/widget-search-form.min.css?ver=3.27.1"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-icons-shared-0-css"
          href="/keyslo/wp-content/plugins/elementor/assets/lib/font-awesome/css/fontawesome.min.css?ver=5.15.3"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-icons-fa-solid-css"
          href="/keyslo/wp-content/plugins/elementor/assets/lib/font-awesome/css/solid.min.css?ver=5.15.3"
          media="all"
        />
        <link
          rel="stylesheet"
          id="swiper-css"
          href="/keyslo/wp-content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css?ver=8.4.5"
          media="all"
        />
        <link
          rel="stylesheet"
          id="e-swiper-css"
          href="/keyslo/wp-content/plugins/elementor/assets/css/conditionals/e-swiper.min.css?ver=3.27.2"
          media="all"
        />
        <link
          rel="stylesheet"
          id="widget-woocommerce-products-css"
          href="/keyslo/wp-content/plugins/elementor-pro/assets/css/widget-woocommerce-products.min.css?ver=3.27.1"
          media="all"
        />
        <link
          rel="stylesheet"
          id="widget-woocommerce-products-archive-css"
          href="/keyslo/wp-content/plugins/elementor-pro/assets/css/widget-woocommerce-products-archive.min.css?ver=3.27.1"
          media="all"
        />
        <link
          rel="stylesheet"
          id="e-popup-css"
          href="/keyslo/wp-content/plugins/elementor-pro/assets/css/conditionals/popup.min.css?ver=3.27.1"
          media="all"
        />
        <link
          rel="stylesheet"
          id="e-animation-fadeInRight-css"
          href="/keyslo/wp-content/plugins/elementor/assets/lib/animations/styles/fadeInRight.min.css?ver=3.27.2"
          media="all"
        />
        <link
          rel="stylesheet"
          id="e-animation-fadeInLeft-css"
          href="/keyslo/wp-content/plugins/elementor/assets/lib/animations/styles/fadeInLeft.min.css?ver=3.27.2"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-icons-css"
          href="/keyslo/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css?ver=5.35.0"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-post-6909-css"
          href="/keyslo/wp-content/uploads/elementor/css/post-6909.css?ver=1738349653"
          media="all"
        />
        <link
          rel="stylesheet"
          id="font-awesome-5-all-css"
          href="/keyslo/wp-content/plugins/elementor/assets/lib/font-awesome/css/all.min.css?ver=3.27.2"
          media="all"
        />
        <link
          rel="stylesheet"
          id="font-awesome-4-shim-css"
          href="/keyslo/wp-content/plugins/elementor/assets/lib/font-awesome/css/v4-shims.min.css?ver=3.27.2"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-post-26377-css"
          href="/keyslo/wp-content/uploads/elementor/css/post-26377.css?ver=1738349653"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-post-10979-css"
          href="/keyslo/wp-content/uploads/elementor/css/post-10979.css?ver=1738349653"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-post-11051-css"
          href="/keyslo/wp-content/uploads/elementor/css/post-11051.css?ver=1738350489"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-post-11070-css"
          href="/keyslo/wp-content/uploads/elementor/css/post-11070.css?ver=1738349712"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-post-7851-css"
          href="/keyslo/wp-content/uploads/elementor/css/post-7851.css?ver=1738349712"
          media="all"
        />
        <link
          rel="stylesheet"
          id="mdp-helper-css"
          href="/keyslo/wp-content/plugins/helper/css/helper.min.css?ver=1.0.28"
          media="all"
        />
        <link
          rel="stylesheet"
          id="wp-block-library-css"
          href="/keyslo/wp-includes/css/dist/block-library/style.min.css?ver=6.7.2"
          media="all"
        />
        <link
          rel="stylesheet"
          id="cr-frontend-css-css"
          href="/keyslo/wp-content/plugins/customer-reviews-woocommerce/css/frontend.css?ver=5.68.1"
          media="all"
        />
        <link
          rel="stylesheet"
          id="cr-badges-css-css"
          href="/keyslo/wp-content/plugins/customer-reviews-woocommerce/css/badges.css?ver=5.68.1"
          media="all"
        />



      </head>
      <body
        className="home page-template-default page page-id-10019 wp-custom-logo theme-hello-elementor woocommerce-js elementor-default elementor-kit-6909 elementor-page elementor-page-10019 currency-inr e--ua-isTouchDevice e--ua-blink e--ua-chrome e--ua-webkit" data-elementor-device-mode="desktop"
      >
        <Suspense fallback={<p>..loading</p>}>


          <CartProvider>
            <Navbar />
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
            {children}
            <Footer />
          </CartProvider>
        </Suspense>
      </body>
    </html>
  );
}
