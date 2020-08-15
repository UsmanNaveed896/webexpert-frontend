import React from 'react'
import '../../components/second-section/second-section.css'
import Img1 from '../../assets/images/img_1.jpg'
import Img2 from '../../assets/images/185926-200.png'
import $ from 'jquery'
export default () => {
    $('.counter-count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 5000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    return (
        <>
            <div className="container love-our-work ">
                <div className="our-work d-flex">
                    <div className="our-work-description col-md-4">
                        <div>
                        <h1 className="fnt-48 dark-blue f-w-900 f-fm-2">LOVE OUR WORKS</h1>
                        <p className="gray-color fnt-17 f-w-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex.
                        Natus totam voluptatibus animi aspernatur ducimus
                     quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
                        <p className="gray-color fnt-17 f-w-300">Aperiam neque id, illum laudantium autem vero quae debitis tempora modi.
                          Ipsa molestias enim in rem et incidunt beatae fugit, ab quam optio atque maiores facere est quidem, veritatis commodi.</p>
                          </div>
                        <div className="check-list d flex">
                            <div> <a className=" fnt-17 f-w-300 list"> <i className=" fa fa-check green-color fnt-s-20 mr-4" ></i>Aperiam neque id illum laudantium</a></div>
                            <div> <a className="list fnt-17 f-w-300"> <i className=" fa fa-check green-color fnt-s-20 mr-4" ></i>Maiores facere est quidem</a></div>
                            <div> <a className="list fnt-17 f-w-300"> <i className=" fa fa-check green-color fnt-s-20 mr-4" ></i>Laudantium autem vero</a></div>
                        </div>

                    </div>
                    <div className="our-work-image col-md-3 ">
                        <div><img className="quadcopter" src={Img1} /></div>
                        <div className="box">
                            <div className="icon-wrap">
                                <i class="fa fa-code-fork " style={{ fontSize: '40px' }} aria-hidden="true"></i>
                            </div>
                            <div className="Templates mt-4">
                                <h1 className="fnt-17 f-fm-2 white-clr f-w-600">PIXEL PERFECT TEMPLATES</h1>
                                <p className="fnt-17 greyish-white-clr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati commodi aspernatur eum eius inventore facilis.</p>
                                <p className="fnt-17 greyish-white-clr">Visit <span className="red-color">Colorlib</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="counter ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                            <div className="employees">
                                <i class="fa fa-refresh black-color f-w-300 fnt-35 mr-4" aria-hidden="true"></i>
                                <p className="counter-count fnt-56 black-color f-w-700 f-fm">360</p>
                                <p className="employee-p light-gray fnt-16 f-fm ml-5">Creativity</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                            <div className="customer">
                                <i class="fa fa-download black-color f-w-300 fnt-35 mr-4" aria-hidden="true"></i>
                                <p className="counter-count fnt-56 black-color f-w-700 f-fm">4500</p>
                                <p className="customer-p light-gray fnt-16 f-fm ml-5">WordPress Themes</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                            <div className="design">
                                <i class="fa fa-desktop black-color f-w-300 fnt-35 mr-4"></i>
                                <p className="counter-count fnt-56 black-color f-w-700 f-fm">120</p>
                                <p className="design-p light-gray fnt-16 f-fm ml-5">HTML5 / CSS3</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                            <div className="order">
                                <i className="fa fa-comments-o black-color f-w-300 fnt-35 mr-4" aria-hidden="true"></i>
                                <p className="counter-count fnt-56 black-color f-w-700 f-fm">3913</p>
                                <p className="order-p light-gray fnt-16 f-fm ml-5">Bootstrap</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}