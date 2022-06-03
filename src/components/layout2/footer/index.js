import React, { } from 'react';
const Footer2 = (props) => {

    var socialMediaColors = {
        "facebook": "#3B5998",
        "twitter": "#55ACEE",
        "pinterest": "#cb2027",
        "instagram": "#125688",
        "linkedin": "#007bb5",
        "youtube": "#bb0000",
        "whatsapp": "#0fec2d",
    };

    var year = new Date();
    return (
        <div class="row justify-content-left border-bottom m-5">
            <footer>
                <div class="d-flex flex-wrap align-content-center bg-white">
                    <div class="col-md-auto ml-5">
                        <h3 class="footer-h3">
                            About<span style={{ color: "#FFCC48" }}>LocalShop</span>
                        </h3>

                        <p class="font-weight-bold text-black">
                            <a class="font-weight-bold text-black" href="/">Home</a>
                            |
                            <a class="font-weight-bold text-black" href="/blog/about.html">About</a>
                            |
                            <a class="font-weight-bold text-black" href="/blog/contact.html">Contact</a>
                            |
                            <a class="font-weight-bold text-black" href="/blog/techblogs.html">Blog</a>
                        </p>
                        <p class="font-weight-normal text-black">© 2018-
                            {year.getFullYear()}
                            Local Shop.
                        </p>
                    </div>
                    <div class="col-md-auto ml-5">
                        <p class="font-weight-bold text-black">
                            <i class="fa fa-2x fa-map-marker"></i><span> #202, LG Halli, Bengaluru - 560094</span>
                        </p>

                        <p class="font-weight-bold text-black">
                            <i class="fa fa-2x fa-phone"></i><span> +91 9113584362</span>
                        </p>

                        <p class="font-weight-bold text-black">
                            <i class="fa fa-2x fa-envelope"></i><span> <a
                                href="mailto:admin@vlocalshop.in">admin@vlocalshop.in</a></span>
                        </p>

                    </div>
                    <div class="col">
                        <p>
                            <span class="font-weight-bold text-black">About the company</span><br />
                            <p class="font-weight-normal text-black">
                                Started in 2018, we are commited to delivery within few hours of customer making an order in
                            our platform. Follow us on.</p>
                        </p>
                        <div>
                            <a href="https://www.facebook.com/vlocal.s/" target="_blank" rel="noopener noreferrer">
                                <span style={{ color: socialMediaColors.facebook }}>
                                    <i class="fab fa-3x fa-facebook-square"></i>&nbsp;&nbsp;
                                </span>
                            </a>
                            <a href="https://twitter.com/vlocalshop" target="_blank" rel="noopener noreferrer">
                                <span style={{ color: socialMediaColors.twitter }}>
                                    <i class="fab fa-3x fa-twitter-square"></i>&nbsp;&nbsp;
                                </span>
                            </a>
                            <a href="https://in.pinterest.com/vlocalshop/_saved/" target="_blank" rel="noopener noreferrer">
                                <span style={{ color: socialMediaColors.pinterest }}>
                                    <i class="fab fa-3x fa-pinterest-square"></i>&nbsp;&nbsp;
                                </span>
                            </a>
                            <a href="https://www.instagram.com/vlocalshop.in12/" target="_blank" rel="noopener noreferrer">
                                <span style={{ color: socialMediaColors.instagram }}>
                                    <i class="fab fa-3x fa-instagram-square"></i>&nbsp;&nbsp;
                                </span>
                            </a>
                            <a href="https://www.linkedin.com/in/vlocal-shop-707736205/" target="_blank" rel="noopener noreferrer">
                                <span style={{ color: socialMediaColors.linkedin }}>
                                    <i class="fab fa-3x fa-linkedin-square"></i>&nbsp;&nbsp;
                                </span>
                            </a>
                            <a href="https://www.youtube.com/channel/UCUonfa3DSprijW_xR9Xs16w" target="_blank" rel="noopener noreferrer">
                                <span style={{ color: socialMediaColors.youtube }}>
                                    <i class="fab fa-3x fa-youtube-square"></i>&nbsp;&nbsp;
                                </span>
                            </a>
                            <a href="https://api.whatsapp.com/send/?phone=919113584362" target="_blank" rel="noopener noreferrer">
                                <span style={{ color: socialMediaColors.whatsapp }}>
                                    <i class="fab fa-3x fa-whatsapp-square"></i>&nbsp;&nbsp;
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
export default Footer2;