import React from 'react'
import '../Top-section/header.css'
import '../../assets/style/comman.css'
import $ from 'jquery'
import Img1 from '../../assets/images/img_2.jpg'
import Img2 from '../../assets/images/img_1.jpg'
import Img3 from '../../assets/images/img_3.jpg'
import Img4 from '../../assets/images/img_4.jpg'

export default () => {
    $('.carousel-sync').on('slide.bs.carousel', function (ev) {
        // get the direction, based on the event which occurs
        var dir = ev.direction == 'right' ? 'prev' : 'next';
        // get synchronized non-sliding carousels, and make'em sliding
        $('.carousel-sync').not('.sliding').addClass('sliding').carousel(dir);
    });
    $('.carousel-sync').on('slid.bs.carousel', function (ev) {
        // remove .sliding class, to allow the next move
        $('.carousel-sync').removeClass('sliding');
    });
    return (
        <>
            <div className="container-fluid sticky-navbar">
                <div className="pricing-button d-flex ">
                    <div className="price">
                        <p className="f-fm fnt-20 black-color">Pricing</p>
                    </div>
                    <div className="mt-2 mr-5">
                        <button className="contact-us btn-red fnt-20"><a href="https://stylish132.000webhostapp.com/">Log In</a></button>
                    </div>
                </div>
                <div className=" col-md-8 nav-bar-left-side ">
                    <div className="site-navbar d-flex align-items-center ">
                        <div className="site-logo">
                            <a>EXPERT</a>
                        </div>
                        <nav className="site-navigation">
                            <ul className="site-menu d-flex ml-5 white-clr fnt-16 f-fm">
                                <a>Home</a>
                                <a>Project</a>
                                <a>Process</a>
                                <a>Testimonials</a>
                                <a>Services</a>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="container web-description d-flex">
                <div className="col-md-8">
                    <div id="myCarousel-1" class="carousel slide carousel-sync" data-ride="carousel" data-pause="false">
                        {/* <!-- Wrapper for slides --> */}
                        <div class="carousel-inner">
                            <div class="item active">
                                <div className="headings">
                                    <h1 className="fnt-48 white-clr f-fm-2 f-w-900">WELCOME</h1>
                                    <p className="fnt-17 greyish-white-clr">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                             Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.</p>
                                </div>
                                <div className="btn mt-5">
                                    <button className="btn-get-started">Get Started</button>
                                </div>
                            </div>
                            <div class="item">
                                <div className="headings">
                                    <h1 className="fnt-48 white-clr f-fm-2 f-w-900">HIGH QUALITY WEBSITE TEMPLATES</h1>
                                    <p className="fnt-17 greyish-white-clr">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                             Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.</p>
                                </div>
                                <div className="btn mt-5">
                                    <button className="btn-get-started">Get Started</button>
                                </div>
                            </div>
                            <div class="item">
                                <div className="headings">
                                    <h1 className="fnt-48 white-clr f-fm-2 f-w-900">WE DO AWESOME THINGS</h1>
                                    <p className="fnt-17 greyish-white-clr">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                             Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.</p>
                                </div>
                                <div className="btn mt-5">
                                    <button className="btn-get-started">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div id="myCarousel-2" class="carousel slide carousel-sync" data-ride="carousel" data-pause="false">
                        {/* <!-- Indicators --> */}
                        <ol class="carousel-indicators">
                            <li data-target="#myCarousel-1 #myCarousel-2" data-slide-to="0" class="active"></li>
                            <li data-target="#myCarousel-1 #myCarousel-2" data-slide-to="1"></li>
                            <li data-target="#myCarousel-1 #myCarousel-2" data-slide-to="2"></li>
                        </ol>

                        {/* <!-- Wrapper for slides --> */}
                        <div class="carousel-inner">
                            <div class="item active">
                                <div className="carousel-image">
                                    <img className="cutted-image" src={Img1} alt="skate-boy" />
                                </div>
                            </div>
                            <div class="item">
                                <div className="carousel-image">
                                    <img className="cutted-image" src={Img2} alt="skate-boy" />
                                </div>
                            </div>
                            <div class="item">
                                <div className="carousel-image">
                                    <img className="cutted-image" src={Img3} alt="skate-boy" />
                                </div>
                            </div>
                        </div>
                        {/* <!-- Left and right controls --> */}
                        <div className="controls">
                        <a class="carousel-control left" href="[id^=myCarousel]" data-slide="prev">‹</a>
                        <a class="carousel-control right" href="[id^=myCarousel]" data-slide="next">›</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}