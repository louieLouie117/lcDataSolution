import ServicesStyles from "../../modules/ServicesStyles.css"
import React, { useState } from 'react';

function Services(props) {

    <ServicesStyles></ServicesStyles>
    // service tile
    const [ServiceTile, setServiceTile] = useState('MVP Basic');
    // service description
    const [ServiceDescription, setServiceDescription] = useState('MVP Basic Service: Get a streamlined app that meets your immediate needs. Expect regular updates and cost-effectiveness.');
    // service purchase link
    const [purchaseLink, setPurchaseLink] = useState('https://buy.stripe.com/00gaF49Ibdbj0zmeUW');
    // monthly service price
    const [monthlyServicePrice, setMonthlyServicePrice] = useState('120.00');
    // purchase button text
    const [purchaseBTNText, setPurchaseBTNText] = useState('Get Basic');
    // payment integration
    const [paymentIntegration, setPaymentIntegration] = useState({display: 'none'});

    // database integration
    const [dataBaseIntegration, setDataBaseIntegration] = useState({display: 'none'});
    // total amount
    const [TotalAmount, setTotalAmount] = useState('$5,120.00');
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
    setServiceTile('MVP Basic');
    // service description
    setServiceDescription('MVP Basic Service: Get a streamlined app that meets your immediate needs. Expect regular updates and cost-effectiveness.');
    setBasicServiceBTNStyles({backgroundColor: '#136db0', color: 'white'});
    setPlusServiceBTNStyles({backgroundColor: 'white', color: '#136db0'});
    setPremiumServiceBTNStyles({backgroundColor: 'white', color: '#136db0'});
    setPurchaseLink('https://buy.stripe.com/fZe6oO3jNdbj0zm149');
    // set monthly service price
    setMonthlyServicePrice('120.00');
    // set purchase button text
    setPurchaseBTNText('Get Basic');
    // payment integration
    setPaymentIntegration({display: 'none'});
    // total amount
    setTotalAmount('$5,120.00');
    // analytics integration
    setAnalyticsIntegration({display: 'none'});
    // database integration
    setDataBaseIntegration({display: 'none'});
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
    setPurchaseLink('https://buy.stripe.com/4gw00qaMfgnvbe028e');
    // set monthly service price
    setMonthlyServicePrice('240.00');
    // set purchase button text
    setPurchaseBTNText('Get Plus');
    // payment integration
    // total amount
    setTotalAmount('$6,740.00');
    // analytics integration
    setHighlightAnalytics({color: '#0092db'});
    // highlight payment
    setHighlightPayment({color: '#0092db'});
    // accept online payments
    setPaymentIntegration({display: 'none'});
    setPaymentIntegration({display: 'grid'});
    setAnalyticsIntegration({display: 'none'});


    // database integration
    setDataBaseIntegration({display: 'none'});
}
// premiumServiceHandler
const premiumServiceHandler = () => {
    //service tile
    setServiceTile('MVP Premium');
    // service description
    setServiceDescription('MVP Premium Service: Transform your app into a robust application. High availability and reliability is the focus.');
    setPremiumServiceBTNStyles( {backgroundColor: '#136db0', color: 'white'});
    setBasicServiceBTNStyles({backgroundColor: 'white', color: '#136db0'});
    setPlusServiceBTNStyles({backgroundColor: 'white', color: '#136db0'});
    
    setPurchaseLink('https://buy.stripe.com/aEUbJ85rVfjrbe0fZ5');
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
    // database integration
    setDataBaseIntegration({display: 'none'});
    // payment integration

    setAnalyticsIntegration({display: 'grid'});


}





  return (
    <div className='Services-Container'>
        {/* <header>
            <h1>My Services</h1>

            </header> */}

            <main>
              
                

                <section className='Cost-Container'>
                    {/* <header>
                    <h3>Pricing and Services</h3>

                    </header> */}
                    {/* <header>
                    <p>You can build a price base on your buisness needs or get full services.</p>
                    <nav>
                    <button>Build a price</button>
                    <button>Full Services</button>
                    </nav>

                    </header> */}
                    <aside>

                    <h1>Get an app with a custom database to fit your business needed.</h1>

                    </aside>

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

                <section>
                    <ul className='ServicesCard'>

                        <h1>Tips for Businesses Looking for an App:</h1>
                        <li>
                            <h2># 1 Tip: Avoid No-Code Developers.</h2>
                      

                            {/* <p>In today’s digital age, having a custom app can significantly enhance your business operations, customer engagement, and overall efficiency. However, the path to developing a successful app is fraught with decisions, one of which is whether to use a no-code development platform or hire a professional developer. Here are some tips for businesses looking to develop an app and why you might want to avoid no-code developers.</p> */}
                            <p>The most crucial tip for businesses looking to develop an app is to avoid no-code developers.</p>
                            <p> These developers rely on no-code platforms, which, despite their ease of use, often result in apps with significant limitations. No-code platforms typically lack the customization, scalability, and security needed for robust business applications.</p>
                            <p>
                             By steering clear of no-code developers, you ensure that your app is built by professionals who can provide tailored solutions, superior performance, and enhanced security. Always ask potential developers about the tools they use to ensure you’re making the best choice for your business’s long-term success.
                            </p>


                          
                        </li>
                        <li>
                            <h2># 2 Tip: Know the Limitations of No-Code Platforms.</h2>
                         

                            <p>If a developer are using no-code platforms they are not true developers and should be avoided. These so-called “developers” rely on no-code platforms that come with significant limitations:</p>
                            <ul className="NestedArticles">
                                <li>
                                    <h3>Customization Constraints:</h3>
                                    <p>No-code platforms often provide limited customization options. If your app requires unique features or complex functionalities, these platforms may not be able to accommodate your needs.</p>
                                
                                </li>
                                <li>
                                    <h3>Scalability Issues:</h3>
                                    <p>As your business grows, your app will need to handle more users and data. No-code platforms will struggle with scalability, leading to performance issues.</p>
                                
                                </li>

                                <li>
                                    <h3>Security Concerns:</h3>
                                    <p>No-code platforms might not offer the same level of security as custom-developed apps. This can be a critical issue, especially if your app handles sensitive data.</p>
                                
                                </li>

                                <li>
                                    <h3>Vendor Lock-In:</h3>
                                    <p>Relying on a no-code platform can lead to vendor lock-in, where you’re dependent on the platform for updates, maintenance, and support. This can limit your flexibility and control over the app.</p>
                                
                                </li>
                            </ul>

                                                  
                        </li>

                        <li>
                            <h2># 3 Tip: Understand why Professional Developers Are a Better Choice.</h2>
                         
                            <p>Whether you choose me or other professional developers, make sure you don’t choose a no-code developer. Hiring a professional developer can provide several advantages over no-code platforms:</p>
                            <ul className="NestedArticles">
                                <li>
                                    <h3>Tailored Solutions:</h3>
                                    <p>Professional developers can create custom solutions tailored to your specific needs, ensuring that your app stands out and meets all your requirements.</p>
                                
                                </li>
                                <li>
                                    <h3>Better Performance and Scalability:</h3>
                                    <p>Custom-developed apps are generally more robust and scalable, capable of handling increased loads and complex functionalities.</p>
                                </li>
                                <li>
                                    <h3>Enhanced Security:</h3>
                                    <p>Professional developers can implement advanced security measures to protect your app and its data.</p>
                                </li>
                                <li>
                                    <h3>Long-Term Support:</h3>
                                    <p>With a dedicated development team, you have ongoing support for updates, maintenance, and troubleshooting.</p>
                                </li>
                            </ul>

                          
                        </li>

                        <li>
                            <h2># 4 Tip: Be Cautious Of Popular No-Code Tools.</h2>
                         
                            <p>Here are some popular no-code tools and why you might want to avoid them for serious app development. When hiring a developer, ask if they use any of these popular no-code tools and avoid them for serious app development.</p>

                            <ul className="NestedArticles">
                                <li>
                                <h3>Salesforce:</h3>
                                    <p>While excellent for CRM and business automation, Salesforce’s no-code app development can be limiting for highly customized apps.</p>
                                </li>

                                <li>
                                    <h3>Bubble:</h3>
                                    <p>For prototyping and simple apps, but it can struggle with performance and scalability for more complex applications.</p>
                                </li>

                                <li>
                                    <h3>Adalo:</h3>
                                    <p>For basic apps, but lacks the flexibility and power needed for more sophisticated projects.</p>
                                </li>

                                <li>
                                    <h3>Glide:</h3>
                                    <p>For creating simple mobile apps from spreadsheets, but not suitable for complex, feature-rich applications.</p>
                                </li>

                                <li>
                                    <h3>Airtable:</h3>
                                    <p>For database management and simple apps, but not designed for high-performance or highly customized apps.</p>
                                </li>

                            </ul>

                          
                        </li>

                        <li>
                        <div className='ServiceCardInfo'>
                        <h2>Lets chat about any questions you may have.</h2>
                            <img src="/img/HeroSoftwareImg.png" alt="" />
                            </div> 
                            <p>If you have any questions or are ready to take the next step in developing a custom app for your business, don’t hesitate to schedule a consultation.</p>
                            <p>During the consultation, we can discuss your unique needs, explore potential solutions, and determine the best path forward for your business. Whether you’re looking to streamline operations, enhance customer engagement, or create new revenue streams, a custom app can help you achieve your goals.</p>
                            
                       
                              
                           <a href="https://calendly.com/cardona-luis/30min">
                           <button className='MainBTN'>Schedule Consultation</button>
                           </a>
                           
                   </li>
                      
                    </ul>
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