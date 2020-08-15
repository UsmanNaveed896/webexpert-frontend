import React from 'react'
import '../../assets/style/comman.css'
import '../five-section/fivesection.css'
export default()=>{
    return(
        <>
        <div className="container-fluid five-section">
            <div className=" container our-approach-starts ">
                <div className="five-section-heading">
                    <h1 className=" fnt-48 dark-blue f-w-900">OUR APPROACH</h1>
                    <p className="fnt-17 light-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                         Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
                </div>
                <div className="five-section-cards d-flex">
                    <div className="cardsA col-sm-4">
                   <div className="icon"> <i className="fa fa-hand-pointer-o" aria-hidden="true"></i></div>
                        <h1 className="fnt-24  dark-blue f-w-900 mt-5">DATA GATHERING</h1>
                        <p className="fnt-19 light-gray mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                         Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia 
                         quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
                    </div>

                    <div className="cards col-sm-4 ">
                   <div className="icon"> <i className="fa fa-cogs" aria-hidden="true"></i></div>
                        <h1 className="fnt-24  dark-blue f-w-900 mt-5">DATA GATHERING</h1>
                        <p className="fnt-19 light-gray mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                         Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia 
                         quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
                    </div>
                    <div className="cards col-sm-4 ">
                   <div className="icon"> <i className="fa fa-tablet" aria-hidden="true"></i></div>
                        <h1 className="fnt-24  dark-blue f-w-900 mt-5">DATA GATHERING</h1>
                        <p className="fnt-19 light-gray mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                         Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia 
                         quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}