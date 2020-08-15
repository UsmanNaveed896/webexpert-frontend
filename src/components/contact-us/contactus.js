import React from 'react'
import '../../components/contact-us/contactus.css'
import '../../assets/style/comman.css'
import Img1 from '../../assets/images/about_1.jpg'

/**
 * Contact-us page design 
 */
export default () => {
    return (
        <>
            <div className="contact-us-section">
                <div className="container contact-us-sec">
                    <div className="contact-column col-md-6">
                        <div className="contact-section-heading">
                            <h1 className="fnt-48 dark-blue f-w-900">CONTACT US</h1>
                            <p className="fnt-19 light-gray mt-4">Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
                        </div>
                        <div className="inputs-A mb-4">
                            <form >
                                <div className="first d-flex mb-5">
                                <div className="firstnum">
                                <input  type="FirstName" id="name" name="name" placeholder="First name" />
                                </div>
                                <div className="firstnum">
                                <input type="LastName" id="name" name="name" placeholder="Last name" />
                                </div>
                                </div>
                                <input className="mb-5 email" type="Subject" id="subject" name="name" placeholder="Subject" /><br/>
                                <input className="mb-5" type="Email" id="Email" name="email" placeholder="Email" /><br/>
                                <textarea id="w3review" name="w3review" rows="8" cols="65" placeholder="Type Your Message Here"></textarea>
                            </form>
                        </div>
                        <div className="send-message">
                            <button className="send">SEND MESSAGE</button>
                        </div>
                    </div>
                    <div className="contact-column-right col-md-6">
                    <div className="contact-image">
                        <img className="contactimages" src={Img1} alt="contact" />
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}