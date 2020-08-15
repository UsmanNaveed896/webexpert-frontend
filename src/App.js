import React from 'react';
import './assets/style/comman.css'
import HeaderSection from './components/Top-section//Header'
import SecondSection from './components/second-section/secondsection'
import Third from './components/Third-section/thirdsection'
import Fourth from './components/fourth-section/fourthsection'
import Fifth from './components/five-section/fivesection'
import Contact from './components/contact-us/contactus'

export default ()=>{
return(
<>
<HeaderSection/>
<SecondSection/>
<Fourth/>
<Fifth/>
<Contact/>
</>
)
};