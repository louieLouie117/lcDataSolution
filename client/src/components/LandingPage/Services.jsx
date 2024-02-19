import ServicesStyles from "../../modules/ServicesStyles.css"
import React, { useState } from 'react';

function Services(props) {

    <ServicesStyles></ServicesStyles>
    // service tile
    const [ServiceTile, setServiceTile] = useState('MVP Plus');
    // service description
    const [ServiceDescription, setServiceDescription] = useState('MVP Plus Service: Enhance your app with additional features and scalability. Rigorous testing ensures quality over time.');
    // service purchase link
    const [purchaseLink, setPurchaseLink] = useState('https://buy.stripe.com/00gaF49Ibdbj0zmeUW');
    // monthly service price
    const [monthlyServicePrice, setMonthlyServicePrice] = useState('240.00');
    // purchase button text
    const [purchaseBTNText, setPurchaseBTNText] = useState('Get Plus');
    // payment integration
    const [paymentIntegration, setPaymentIntegration] = useState({display: 'grid'});
    // total amount
    const [TotalAmount, setTotalAmount] = useState('$6,740.00');
    // analytics integration
    const [analyticsIntegration, setAnalyticsIntegration] = useState({display: 'none'});
    // highlight analytics
    const [HighlightAnalytics, setHighlightAnalytics] = useState({color: '#136db0'});

    // updated button to link to stripe
    const [basicServiceBTNStyles, setBasicServiceBTNStyles] = useState({backgroundColor: 'white', color: '#136db0'});
    const [plusServiceBTNStyles, setPlusServiceBTNStyles] = useState({backgroundColor: '#136db0', color: 'white'});
    const [premiumServiceBTNStyles, setPremiumServiceBTNStyles] = useState({backgroundColor: 'white', color: '#136db0'});
    // highlight payment
    const [HighlightPayment, setHighlightPayment] = useState({color: '#136db0'});

// basicServiceHandler
const basicServiceHandler = () => {
    //service tile
    setServiceTile('MVP Basic');
    // service description
    setServiceDescription('MVP Basic Service: Get a streamlined app that meets your immediate needs. Expect regular updates and cost-effectiveness.');
    setBasicServiceBTNStyles({backgroundColor: '#136db0', color: 'white'});
    setPlusServiceBTNStyles({backgroundColor: 'white', color: '#136db0'});
    setPremiumServiceBTNStyles({backgroundColor: 'white', color: '#136db0'});
    setPurchaseLink('https://buy.stripe.com/3cscNcg6z1sB0zm4gj');
    // set monthly service price
    setMonthlyServicePrice('120.00');
    // set purchase button text
    setPurchaseBTNText('Get Basic');
    // payment integration
    setPaymentIntegration({display: 'none'});
    // total amount
    setTotalAmount('$5,1200.00');
    // analytics integration
    setAnalyticsIntegration({display: 'none'});
}
// plusServiceHandler
const plusServiceHandler = () => {
    //service tile
    setServiceTile('MVP Plus');
    // service description
    setServiceDescription('MVP Plus Service: Enhance your app with additional features and scalability. Rigorous testing ensures quality over time.');
    setPlusServiceBTNStyles({backgroundColor: '#136db0', color: 'white'});
    setBasicServiceBTNStyles({backgroundColor: 'white', color: '#136db0'});
    setPremiumServiceBTNStyles({backgroundColor: 'white', color: '#136db0'});  
    setPurchaseLink('https://buy.stripe.com/00gaF49Ibdbj0zmeUW');
    // set monthly service price
    setMonthlyServicePrice('240.00');
    // set purchase button text
    setPurchaseBTNText('Get Plus');
    // payment integration
    setPaymentIntegration({display: 'grid'});
    // total amount
    setTotalAmount('$6,740.00');
    // analytics integration
    setAnalyticsIntegration({display: 'none'});
    // highlight payment
    setHighlightPayment({color: '#0092db'});
}
// premiumServiceHandler
const premiumServiceHandler = () => {
    //service tile
    setServiceTile('MVP Premium');
    // service description
    setServiceDescription('MVP Premium Service: Transform your app into a robust application. High availability and reliability are our focus.');
    setPremiumServiceBTNStyles( {backgroundColor: '#136db0', color: 'white'});
    setBasicServiceBTNStyles({backgroundColor: 'white', color: '#136db0'});
    setPlusServiceBTNStyles({backgroundColor: 'white', color: '#136db0'});
    
    setPurchaseLink('https://buy.stripe.com/5kAcNc7A3fjr2Hu7sw');
    // set monthly service price
    setMonthlyServicePrice('560.00');
    // set purchase button text
    setPurchaseBTNText('Get Premium');
    // payment integration
    setPaymentIntegration({display: 'grid'});
    // total amount
    setTotalAmount('$8,560.00');
    // analytics integration
    setAnalyticsIntegration({display: 'grid'});
    // highlight payment
    setHighlightPayment({color: 'black'});
    // highlight analytics
    setHighlightAnalytics({color: '#0092db'});

}





  return (
    <div className='Services-Container'>
        {/* <header>
            <h1>My Services</h1>

            </header> */}

            <main>
                <section>
                    <ul className='ServicesCard'>

                        <li>
                            <h2>MVP Application</h2>
                            <div className='ServiceCardInfo'>
                            <img src="/img/mvpComic.png" alt="" />
                            <p>Unlock efficiency and drive success with a Minimum Viable Product (MVP).</p>
                            <p>
                            Streamlining processes involves pinpointing and eliminating redundant and unnecessary steps, transforming your workflow into a lean, effective powerhouse.
                            </p>
                            <p>
                            By embracing streamlined processes, businesses can go paperless, reclaim valuable time, and optimize their financial resources.</p>
                            </div>
                            <footer>
                            <a href="https://calendly.com/cardona-luis/15min">
                            <button className='MainBTN'>Schedule Consultation</button>
                            </a>
                            </footer>

                        </li>
                    </ul>
                </section>

                <section>
                    <div className="PeaceOfMind">
                        <h2>Peace of mind</h2>
                        <main>
                        <img src="/img/PeaceOfMindImg.png" alt="" />

                            <div className="PeaceOfMindInfo">
                            <h3>Have a expert at your fingertips.</h3>
                            

                            </div>

                        </main>
                    </div>
                </section>

                <section className='Cost-Container'>
                    <header>
                    <img src="/img/CostImg.png" alt="" />
                    <h3>Pricing and Services test</h3>
                    {/* <p>You can build a price base on your buisness needs or get full services.</p>
                    <nav>
                    <button>Build a price</button>
                    <button>Full Services</button>
                    </nav> */}

                    </header>

                    <main>
                    <ul className='ServicesCard ServiceBackground'>
                    <div className="MonthlyOptions">
                                    <button style={basicServiceBTNStyles} onClick={() => basicServiceHandler()}>Basic</button>

                                    <button style={ plusServiceBTNStyles }  onClick={() => plusServiceHandler()}>Plus</button>

                                    <button style={premiumServiceBTNStyles}  onClick={() => premiumServiceHandler()}>Premium</button>

                                </div>
                        <li>
                            
                            <header>
                      
                            <h2>{ServiceTile}</h2>
                       
                            </header>
                            <main className='AppPricing-Container'>
                            <section>
                                <h3>Database</h3>
                                <ul className='pricing-container'>
                                    <li>Strategy and development...........</li>
                                    <li>$3,000.00</li>
                                
                                </ul>
                                </section>
                                <section>
                                <h3>App Design</h3>
                                <ul className='pricing-container'>
                                    <li>Mobile, Tablet, and Desktop...........</li>
                                    <li>$1,000.00</li>
                                
                                </ul>
                                </section>

                                <section>
                                <h3>App Development</h3>
                                <ul className='pricing-container'>
                                <li>Mobile, Tablet, and Desktop...........</li>
                                    <li>$1,000.00</li>
                                </ul>
                                </section>

                                <section style={paymentIntegration}>
                                <h3 style={HighlightPayment}>Payment Integration</h3>
                                <ul className='pricing-container'>
                                <li style={HighlightPayment}>Accept payment or subscription...........</li>
                                    <li style={HighlightPayment}>$1,500.00</li>
                                </ul>
                                </section>

                                   
                                <section style={analyticsIntegration}>
                                <h3 style={HighlightAnalytics}>Analytics Integration</h3>
                                <ul className='pricing-container'>
                                <li style={HighlightAnalytics}>Improve user experience with analytics............</li>
                                    <li style={HighlightAnalytics}>$1,500.00</li>
                                </ul>
                                </section>

                                


                                <section>
                                <h3>Monthly Services</h3>
                                
                                <div className="MonthlyServicesInfo">
                            
                               
                                </div>
                                <ul className='pricing-container'>
                                    <li>{ServiceDescription}..........</li>
                                    <li  >${monthlyServicePrice}/m</li>
                                
                                </ul>
                                </section>
                              
                            </main>
                            <footer>
                            <a id="PurchaseLink" href={purchaseLink}>
                            {/* button to update link */}
                            <button className='MainBTN' >{purchaseBTNText}</button>

                            </a>
                            <section>
                                    
                                    <ul className='pricing-container'>
                                        <li>Total........................................................</li>
                                        <li>{TotalAmount}</li>
                                    
                                    </ul>
                                    </section>
                            </footer>
                        </li>


                

                        



                    </ul>
                    </main>
                </section>
            </main>








            {/* <div className='CustomWebsite-Container' >

            <section className='AlignTop'>
            <h1>Having a website is crucial for any business in today’s digital age. </h1>
            <p>I can design, develop, and maintain your website.</p>
            <a  href="https://buy.stripe.com/aEU6rFcPy7qj6xGeUV">
            <button className='MainBTN' >View My Services</button>
            </a>
            </section>

            <picture>
            <source media="(min-width: 1100px)" srcset="/img/DesktopFocusMobile.png"/>               
            <img src="/img/MobileWebsite.png" alt="" />
            </picture>
            
                <section>
                <p>A website makes your business appear more professional and credible, and it allows you to reach a wider audience than ever before.</p>
                <p>With a well-designed website, you can generate leads and sales for your business, showcase your work, and provide valuable information to repeat customers. </p>
                <p>In addition, through the use of modern SEO tactics, you can beat your competitors online and establish yourself as a leader in your industry.</p>
                </section>

            </div> */}
    </div>
  )
}


export default Services