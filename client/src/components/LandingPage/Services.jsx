import ServicesStyles from "../../modules/ServicesStyles.css"
import React, { useState } from 'react';

function Services(props) {

    <ServicesStyles></ServicesStyles>
    // service tile
    const [ServiceTile, setServiceTile] = useState('Website Basic');
    // service description
    const [ServiceDescription, setServiceDescription] = useState('Website Plus Service: Enhance your app with additional features and scalability. Rigorous testing ensures quality over time.');
    // service purchase link
    const [purchaseLink, setPurchaseLink] = useState('https://buy.stripe.com/00gaF49Ibdbj0zmeUW');
    // monthly service price
    const [monthlyServicePrice, setMonthlyServicePrice] = useState('60.00');
    // purchase button text
    const [purchaseBTNText, setPurchaseBTNText] = useState('Get Plus');
    // payment integration
    const [paymentIntegration, setPaymentIntegration] = useState({display: 'none'});

    // database integration
    const [dataBaseIntegration, setDataBaseIntegration] = useState({display: 'none'});
    // total amount
    const [TotalAmount, setTotalAmount] = useState('$500.00');
    // analytics integration
    const [analyticsIntegration, setAnalyticsIntegration] = useState({display: 'none'});
    // highlight analytics
    const [HighlightAnalytics, setHighlightAnalytics] = useState({color: '#0092db'});

    // updated button to link to stripe
    const [basicServiceBTNStyles, setBasicServiceBTNStyles] = useState({backgroundColor: '#136db0', color: 'white'});
    const [plusServiceBTNStyles, setPlusServiceBTNStyles] = useState({backgroundColor: 'white', color: '#0092db'});
    const [premiumServiceBTNStyles, setPremiumServiceBTNStyles] = useState({backgroundColor: 'white', color: '#0092db'});
    // highlight payment
    const [HighlightPayment, setHighlightPayment] = useState({color: '#0092db'});

// basicServiceHandler
const basicServiceHandler = () => {
    //service tile
    setServiceTile('Basic Website');
    // service description
    setServiceDescription('Website Basic Service: Get a streamlined website that meets your immediate needs. Expect regular updates and cost-effectiveness.');
    setBasicServiceBTNStyles({backgroundColor: '#136db0', color: 'white'});
    setPlusServiceBTNStyles({backgroundColor: 'white', color: '#136db0'});
    setPremiumServiceBTNStyles({backgroundColor: 'white', color: '#136db0'});
    setPurchaseLink('https://buy.stripe.com/fZe6oO3jNdbj0zm149');
    // set monthly service price
    setMonthlyServicePrice('60.00');
    // set purchase button text
    setPurchaseBTNText('Get Basic');
    // payment integration
    setPaymentIntegration({display: 'none'});
    // total amount
    setTotalAmount('$500.00');
    // analytics integration
    setAnalyticsIntegration({display: 'none'});
    // database integration
    setDataBaseIntegration({display: 'none'});
}
// plusServiceHandler
const plusServiceHandler = () => {
    //service tile
    setServiceTile('Website Plus');
    // service description
    setServiceDescription('MVP Plus Service: Enhance your app with additional features and scalability. Rigorous testing ensures quality over time.');
    setPlusServiceBTNStyles({backgroundColor: '#136db0', color: 'white'});
    setBasicServiceBTNStyles({backgroundColor: 'white', color: '#136db0'});
    setPremiumServiceBTNStyles({backgroundColor: 'white', color: '#136db0'});  
    setPurchaseLink('https://buy.stripe.com/4gw00qaMfgnvbe028e');
    // set monthly service price
    setMonthlyServicePrice('260.00');
    // set purchase button text
    setPurchaseBTNText('Get Plus');
    // payment integration
    // total amount
    setTotalAmount('$1,760.00');
    // analytics integration
    setAnalyticsIntegration({display: 'grid'});
    setHighlightAnalytics({color: '#0092db'});
    // highlight payment
    setHighlightPayment({color: '#0092db'});
    // accept online payments
    setPaymentIntegration({display: 'none'});

    // database integration
    setDataBaseIntegration({display: 'none'});
}
// premiumServiceHandler
const premiumServiceHandler = () => {
    //service tile
    setServiceTile('Website Premium');
    // service description
    setServiceDescription('MVP Premium Service: Transform your app into a robust application. High availability and reliability are our focus.');
    setPremiumServiceBTNStyles( {backgroundColor: '#136db0', color: 'white'});
    setBasicServiceBTNStyles({backgroundColor: 'white', color: '#136db0'});
    setPlusServiceBTNStyles({backgroundColor: 'white', color: '#136db0'});
    
    setPurchaseLink('https://buy.stripe.com/aEUbJ85rVfjrbe0fZ5');
    // set monthly service price
    setMonthlyServicePrice('280.00');
    // set purchase button text
    setPurchaseBTNText('Get Premium');
    // payment integration
    setPaymentIntegration({display: 'grid'});
    // total amount
    setTotalAmount('$8,280.00');
    // analytics integration
    setAnalyticsIntegration({display: 'grid'});
    // highlight payment
    setHighlightPayment({color: '#0092db'});
    // highlight analytics
    setHighlightAnalytics({color: 'black'});
    // database integration
    setDataBaseIntegration({display: 'grid'});
    // payment integration
    setPaymentIntegration({display: 'grid'});



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
                            <h2>Why Every Business Needs a Website.</h2>
                            <div className='ServiceCardInfo'>
                            <img src="/img/HeroImage.png" alt="" />
                            <p>
                            In today’s digital landscape, having a website is no longer a luxury—it’s a necessity. From enterprise to small local business having a website is essential. Here are compelling reasons why your business should have a website:
                            </p>
                            <ul>
        <li><strong>Credibility and Trust:</strong> A professional website builds trust with potential customers.</li>
        <li><strong>Brand Showcase:</strong> Define your brand identity and stand out from competitors.</li>
        <li><strong>Lead Generation:</strong> Your website converts visitors into leads.</li>
        <li><strong>SEO Benefits:</strong> Optimize for search engines to increase visibility.</li>
        <li><strong>Efficient Customer Service:</strong> Provide essential information online.</li>
    </ul>
                            </div>
                            <footer>
                            <a href="https://calendly.com/d/cpbm-dt4-gh7/15min">
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
                    <h3>Pricing and Services</h3>
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
                                <ul className='pricing-container'>
                                    <li>Website design...........</li>
                                    <li>$250.00</li>
                                </ul>
                                </section>
                                <section>
                                <ul className='pricing-container'>
                                    <li>Website development...........</li>
                                    <li>$250.00</li>
                                
                                </ul>
                                </section>

                                <section style={analyticsIntegration}>
                                <ul className='pricing-container'>
                                <li style={HighlightAnalytics}>Start marketing online............</li>
                                    <li style={HighlightAnalytics}>$1,000.00</li>
                                </ul>
                                </section>

                                <section style={paymentIntegration}>
                                <ul className='pricing-container'>
                                <li style={HighlightPayment}>Accept online payments...........</li>
                                    <li style={HighlightPayment}>$1,500.00</li>
                                </ul>
                                </section>


                                <section style={dataBaseIntegration}>
                                <ul className='pricing-container'>
                                <li style={HighlightPayment}>Database integration...........</li>
                                    <li style={HighlightPayment}>$5,000.00</li>
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