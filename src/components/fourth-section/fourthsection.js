import React from 'react'
import '../fourth-section/fourthsection.css'
import '../../assets/style/comman.css'
import Img1 from '../../assets/images/img_2.jpg'
import Img2 from '../../assets/images/img_1.jpg'
import Img3 from '../../assets/images/img_3.jpg'
import Img4 from '../../assets/images/img_4.jpg'
import $ from 'jquery'
export default () => {
    return (
        <>
            <div className="container love-our-project">
                <div className="section-title mt-5 fnt-48 dark-blue f-w-900">
                    OUR PROJECTS
            </div>
                <div className="section-description fnt-17 light-gray">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex.
                     Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
                </div>
            </div>

            <div class="owl-carousel">
                <div class="container  leftoverlay">
                    <div class="item lefthover"><img className="owl-images" src={Img1} /></div>
                    <div class="overlay">
                        <div class="text fnt-35 f-w-900 white-clr">Hello World</div>
                        <div class="text greyish-white-clr fnt-19  f-w-600 white-clr mt-5">WEB DEVELOPMENT</div>
                    </div>
                </div>
                <div class="container  leftoverlay">
                    <div class="item lefthover"><img className="owl-images" src={Img2} /></div>
                    <div class="overlay">
                        <div class="text fnt-35 f-w-900 white-clr">Hello World</div>
                        <div class="text greyish-white-clr fnt-19  f-w-600 white-clr mt-5">WEB DEVELOPMENT</div>
                    </div>
                </div>
                <div class="container  leftoverlay">
                    <div class="item lefthover"><img className="owl-images" src={Img3} /></div>
                    <div class="overlay">
                        <div class="text fnt-35 f-w-900 white-clr">Hello World</div>
                        <div class="text greyish-white-clr fnt-19  f-w-600 white-clr mt-5">WEB DEVELOPMENT</div>
                    </div>
                </div>
                <div class="container  leftoverlay">
                    <div class="item lefthover"><img className="owl-images" src={Img4} /></div>
                    <div class="overlay">
                        <div class="text fnt-35 f-w-900 white-clr">Hello World</div>
                        <div class="text greyish-white-clr fnt-19  f-w-600 white-clr mt-5">WEB DEVELOPMENT</div>
                    </div>
                </div>
                <div class="container  leftoverlay">
                    <div class="item lefthover"><img className="owl-images" src={Img1} /></div>
                    <div class="overlay">
                        <div class="text fnt-35 f-w-900 white-clr">Hello World</div>
                        <div class="text greyish-white-clr fnt-19  f-w-600 white-clr mt-5">WEB DEVELOPMENT</div>
                    </div>
                </div>

                {/* <div class="item"><img className="owl-images" src={Img2} /></div>
                <div class="item"><img  className="owl-images"src={Img3} /></div>
                <div class="item "><img className="owl-images" src={Img4} /></div>
                <div class="item"><img  className="owl-images"src={Img1} /></div> */}
            </div>
        </>
    )
}