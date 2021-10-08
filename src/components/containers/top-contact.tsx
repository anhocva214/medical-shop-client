import {FC} from 'react';




export const TopContact : FC = () => {

    return (
        <div className="ltn__header-top-area border-bottom top-area-color-white---">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="ltn__top-bar-menu">
                            <ul>
                                <li><a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you"><i className="icon-mail" /> info@webmail.com</a></li>
                                <li><a href="locations.html"><i className="icon-placeholder" /> 15/A, Nest Tower, NYC</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="top-bar-right text-end">
                            <div className="ltn__top-bar-menu">
                                <ul>
                                    <li>
                                        {/* ltn__language-menu */}
                                        <div className="ltn__drop-menu ltn__currency-menu ltn__language-menu">
                                            <ul>
                                                <li><a href="index.html#" className="dropdown-toggle"><span className="active-currency">English</span></a>
                                                    <ul>
                                                        <li><a href="index.html#">Arabic</a></li>
                                                        <li><a href="index.html#">Bengali</a></li>
                                                        <li><a href="index.html#">Chinese</a></li>
                                                        <li><a href="index.html#">English</a></li>
                                                        <li><a href="index.html#">French</a></li>
                                                        <li><a href="index.html#">Hindi</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        {/* ltn__social-media */}
                                        <div className="ltn__social-media">
                                            <ul>
                                                <li><a href="index.html#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
                                                <li><a href="index.html#" title="Twitter"><i className="fab fa-twitter" /></a></li>
                                                <li><a href="index.html#" title="Instagram"><i className="fab fa-instagram" /></a></li>
                                                <li><a href="index.html#" title="Dribbble"><i className="fab fa-dribbble" /></a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}