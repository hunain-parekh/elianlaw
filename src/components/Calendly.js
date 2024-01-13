import React, { useEffect } from 'react';
import { PopupWidget } from "react-calendly";

import { PopupButton } from "react-calendly";


const Calendly = () => {




   
    

  return (

    
    <>
 
 
 {/* <div className="App">
      <InlineWidget url="https://calendly.com/nomanahmed1919" pageSettings={{
  backgroundColor: 'ffffff',
  hideEventTypeDetails: false,
  hideLandingPageDetails: false,
  primaryColor: '00a2ff',
  textColor: '4d5055'
}}
styles={{
    height: '100px'
  }}
/>
    </div> */}

    {/* <PopupWidget
        url="https://calendly.com/nomanahmed1919"
        
        rootElement={document.getElementById("root")}
        text="Click here to schedule!"
        textColor="#ffffff"
        color="black"

        
      /> */}


{/* <a href="#" onClick={(e) => { e.preventDefault(); Calendly.showPopupWidget({ url: 'https://calendly.com/nomanahmed1919' }); }}>Schedule time with me</a> */}



<PopupButton className='calendly-color'
        url="https://calendly.com/nomanahmed1919"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text="Click here to schedule!"
      />

    </>
  )
}

export default Calendly
