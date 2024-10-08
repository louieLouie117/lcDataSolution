import React from 'react'
import { useState } from 'react'



function HeroBanner(props) {

const [timeLabel, setTimeLabel] = useState("Hello");


window.onload = function() {

    const current = new Date();
    const time = current.getHours();
    console.log(time);

    if(time >= 0 && time <= 3){
      console.log("Hello Night Owl")
      setTimeLabel("Hello Night Owl");
      return;
    }

    if(time >= 4 && time <= 6){
      console.log("Hello Early Bird")
      setTimeLabel("Hello Early Bird");
      return;
    }

    if(time >= 7  &&time <= 11){
      console.log("Good Morning")
      setTimeLabel("Good Morning");
      return;

    }

    if(time >= 12  && time <= 17){
      console.log("Good Afternoon")
      setTimeLabel("Good Afternoon");
      return;

    }
  
    if(time >= 18 && time <= 23){
      console.log("Good Evening")
      setTimeLabel("Good Evening");
      return;

    }

}


const [contactOptions, setContactOptions] = useState(false)

const ContactMeHandler = e =>{
  if(e.target.innerText === "Contact me"){
    setContactOptions(true)
  }else{
    setContactOptions(false)
  }

}




  
  return (
    <div className="myHeader-container">
          <header>
            {/* <img src="/img/portfolioImg.png" alt=""/> */}

              
                    <div className="name-container">

                    <header>
                    <h2>{timeLabel},</h2>
                    <h3>my name is </h3>
                    <h1>Luis Cardona</h1>
                    {/* <p>LC Solutions</p> */}
                
                  </header>
                  
  
                  <img id="PortfolioImg" src="/img/PortfolioPhoto350.png" alt="" />
                  </div>
                  <footer>
                  <h2>I help businesses with database and app development solutions.</h2>

                  

                  </footer>

                  <div className='GridContainer'>
                    {/* <a href="https://buy.stripe.com/aEU6rFcPy7qj6xGeUV">
                      <button>My Services</button>
                    </a> */}

                    {/* <button onClick={ContactMeHandler}>Contact me</button> */}

                    </div>
         

                

                                  
             

                


         </header>
                  
                  <div className='Contact-Container' style={{display: contactOptions ? "grid" : "none"}}>

                      <header>
                        <button onClick={ContactMeHandler}>Close</button>
                      </header>

                      <main>
                      <a href="tel:931-401-7238">
                        <img src="/img/Icons/IconPhone.png" alt="" />
                      <button>Call</button>

                      </a>

                      <a href="sms:931-401-7238">
                        <img src="/img/Icons/IconText.png" alt="" />
                      <button>Text</button>
                      </a>

                      <a href="mailTo:LCwebsitesolutions@outlook.com?subject=Website&body= Hello Luis Cardona">
                        <img src="/img/Icons/IconEmail.png" alt="" />
                        <button>Email</button>
                      </a>
                      <a href="https://www.instagram.com/garagesally.founder/">
                        <img src="/img/Icons/IconInsta.png" alt="" />
                      <button>DM</button>
                      </a>

                      </main>
               

                    </div>

     
        
    </div>

  )
}


export default HeroBanner