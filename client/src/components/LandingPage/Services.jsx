import ServicesStyles from "../../modules/ServicesStyles.css"

import React, { useState } from 'react';
import HeroBanner from '../../components/LandingPage/HeroBanner'


function Services(props) {

    const renderBasicService = () => {
        return (
            <ul className='pricing-container' style={BasicServicesStyles}>
                 <li>App Design.......</li>
                 <li>$1,000.00</li>

                 <li>App Development.......</li>
                 <li>$1,000.00</li>

                <li>Database Strategy.......</li>
                <li>$3,000.00</li>
            </ul>
        );
    };

    // render puls service
    const renderPlusService = () => {
        return (
            <ul className='pricing-container' style={PlusServers}>
                <li>App Design.......</li>
                <li>$1,000.00</li>

                <li>App Development.......</li>
                <li>$1,000.00</li>

           
                <li>Database Strategy.......</li>
                <li>$3,000.00</li>

                <li>Payment Integration.......</li>
                <li>$1,500.00</li>
            </ul>
        );
    };

    const renderPremiumService = () => {
        return (
            <ul className='pricing-container' style={PremiumServicesStyles}>
                <li>App Design.......</li>
                <li>$1,000.00</li>

                <li>App Development.......</li>
                <li>$1,000.00</li>

           
                <li>Database Strategy.......</li>
                <li>$3,000.00</li>

                <li>Payment Integration.......</li>
                <li>$1,500.00</li>

                <li>Analytics.......</li>
                <li>$1,500.00</li>
            </ul>
        );
    };
    
    
    const [BasicServicesStyles, setBasicServicesStyles] = useState({display: 'grid'});


    <ServicesStyles></ServicesStyles>
    // service tile
    const [ServiceTile, setServiceTile] = useState('Launch a New App or Convert Your Website into a Web App.');
    // service description
    const [ServiceDescription, setServiceDescription] = useState('Receive a streamlined app tailored to your immediate needs. Jumpstart your project by focusing on the #1 essential feature your app needs. Fast delivery and cost-effective pricing.');
    // service purchase link
    const [purchaseLink, setPurchaseLink] = useState('https://buy.stripe.com/fZe6oO3jNdbj0zm149');
    // monthly service price
    const [monthlyServicePrice, setMonthlyServicePrice] = useState('120.00');
    // purchase button text
    const [purchaseBTNText, setPurchaseBTNText] = useState('Get Basic');
   

    // branding logo integration
    const [PremiumServicesStyles, setPremiumServicesStyles] = useState({display: 'none'});
    // total amount
    const [TotalAmount, setTotalAmount] = useState('$5,120.00');
    // analytics integration
    const [PlusServers, setPlusServers] = useState({display: 'none'});
    // highlight analytics

    // updated button to link to stripe
    const [basicServiceBTNStyles, setBasicServiceBTNStyles] = useState({backgroundColor: '#136db0', color: 'white'});
    const [plusServiceBTNStyles, setPlusServiceBTNStyles] = useState({backgroundColor: 'white', color: '#0092db'});
    const [premiumServiceBTNStyles, setPremiumServiceBTNStyles] = useState({backgroundColor: 'white', color: '#0092db'});
    // branding styles

// basicServiceHandler
const basicServiceHandler = () => {
    //service tile
    setServiceTile('Launch a New App or Convert Your Website into a Web App.');
    // service description
    setServiceDescription('Receive a streamlined app tailored to your immediate needs. Jumpstart your project by focusing on the #1 essential feature your app needs. Fast delivery and cost-effective pricing.');
    setBasicServiceBTNStyles({backgroundColor: '#136db0', color: 'white'});
    setPlusServiceBTNStyles({backgroundColor: 'white', color: '#136db0'});
    setPremiumServiceBTNStyles({backgroundColor: 'white', color: '#136db0'});
    setPurchaseLink('https://buy.stripe.com/fZe6oO3jNdbj0zm149');
    // set monthly service price
    setMonthlyServicePrice('120.00');
    // set purchase button text
    setPurchaseBTNText('Get Basic');
    // payment integration

    setPlusServers({display: 'none'});
    setPremiumServicesStyles({display: 'none'});

    setBasicServicesStyles({display: 'grid'});
    
    setTotalAmount('$5,120.00');


}
// plusServiceHandler
const plusServiceHandler = () => {
    //service tile
    setServiceTile('App with Integrated Payment or Subscription features.');
    // service description
    setServiceDescription('Enhance your app with additional features and scalability. Rigorous testing ensures quality over time..........');
    setPlusServiceBTNStyles({backgroundColor: '#136db0', color: 'white'});
    setBasicServiceBTNStyles({backgroundColor: 'white', color: '#136db0'});
    setPremiumServiceBTNStyles({backgroundColor: 'white', color: '#136db0'});  
    setPurchaseLink('https://buy.stripe.com/aEUbJ85rVfjrbe0fZ5');
    // set monthly service price
    setMonthlyServicePrice('240.00');
    // set purchase button text
    setPurchaseBTNText('Get Plus');
    // total amount
    setTotalAmount('$6,740.00');

    // display basic service none renderBasicService
    setBasicServicesStyles({display: 'none'});

    // PremiumServicesStyles
    setPremiumServicesStyles({display: 'none'});
    // analytics integration
    setPlusServers({display: 'grid'});

    // BasicServicesStyles 
    setBasicServicesStyles({display: 'none'});
}
  
// premiumServiceHandler
const premiumServiceHandler = () => {
    setPremiumServicesStyles({display: 'grid'});


    setBasicServicesStyles({display: 'none'});
    setPlusServers({display: 'none'});
    //service tile
    setServiceTile('App with high availability and reliability.');
    // service description
    setServiceDescription('A robust application...........');
    setPremiumServiceBTNStyles( {backgroundColor: '#136db0', color: 'white'});
    setBasicServiceBTNStyles({backgroundColor: 'white', color: '#136db0'});
    setPlusServiceBTNStyles({backgroundColor: 'white', color: '#136db0'});
    
    setPurchaseLink('https://buy.stripe.com/aEUbJ85rVfjrbe0fZ5');
    // set monthly service price
    setMonthlyServicePrice('560.00');
    // set purchase button text
    setPurchaseBTNText('Get Premium');

    // total amount
    setTotalAmount('$8,560.00');
    




}





  return (
    <div className='Services-Container'>
        {/* <header>
            <h1>My Services</h1>

            </header> */}

            <main>
               
    

                <section className='Cost-Container'>
                <aside>

        <h1>Custom Solutions for Every Business Need.</h1>

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
                                {renderBasicService()}

                                </section>
                                <section>
                                {renderPlusService()}
                                </section>

                                <section>
                                {renderPremiumService()}
                                </section>


                            

                              

                                <section>
                                
                                <div className="MonthlyServicesInfo">
                            
                               
                                </div>
                                <h3>Monthly Services</h3>

                                <ul className='pricing-container'>

                                <li>Server Maintenance and Updates.</li>
                                    <li  >${monthlyServicePrice}/m</li>
                                
                                </ul>
                                </section>

                                <section>
                                    
                                    <ul className='pricing-container'>
                                        <li>Total........................................................</li>
                                        <li>{TotalAmount}</li>
                                    
                                    </ul>
                                    </section>
                            <p>{ServiceDescription}</p>
                              
                            </main>
                            <footer>
                            <a id="PurchaseLink" href={purchaseLink}>
                            {/* button to update link */}
                            <button className='MainBTN' >{purchaseBTNText}</button>

                            </a>
                            
                            </footer>
                        </li>


                

                        



                    </ul>
                    </main>
                </section>

                <section>
                <HeroBanner></HeroBanner>

                </section>

                <section>
                    <ul className='ServicesCard'>

                        <li>
                            <h2>Get a custom app solutions in three months.</h2>
                            <div className='ServiceCardInfo'>
                            <img src="/img/HeroSoftwareImg.png" alt="" />

                            <p>
                            I specialize in creating custom applications that meet your unique needs and goals. Whether you’re looking to create a new app or convert a website to an app, I can help. 
                            </p>

                            <p>I have experience working with a variety of industries. Schedule an appointment today to discuss your app needs, and let’s create something amazing together.</p>

                            
      
                            </div>
                            <footer>
                            <a href="https://calendly.com/cardona-luis/30min">
                            <button className='MainBTN'>Schedule Appointment</button>
                            </a>
                            </footer>


                        </li>
                    </ul>
                </section>

                <section>
                    <ul className='ServicesCard'>

                        <h1>Five Tips for Businesses Looking for an App</h1>
                        <li>
                            <h2># 1 Tip: Ensure Your Database is Correct.</h2>
                            <p>The most critical tip for any app development project is to ensure your database is correctly designed and implemented.</p>

                            <p>The database is the backbone of your application, storing all the essential data that your app relies on.</p>

                            <p>Avoid no-code databases. These platforms often lack the flexibility and limit your ability to customize your app to meet specific needs.</p>

                        </li>
                        <li>
                            <h2># 2 Tip: Avoid No-Code Developers.</h2>
                      
                            <p>Businesses looking to develop an app is vital to avoid no-code developers.</p>

                            <p>Think of app development like building a house. The foundation is crucial; if it’s weak, the entire structure is at risk. No-code developers use tools that are like trying to build a house on a shaky foundation. </p>

                            <p> These tools might seem convenient, but they come with significant limitations.</p>
{/* 
                            <p>By avoiding no-code developers, you ensure that your app is built on a solid foundation by professionals who can provide tailored solutions, superior performance, and enhanced security. Always ask potential developers about the tools they use to make sure you’re making the best choice for your business’s future.</p> */}
                          
                        </li>
                        <li>
                            <h2># 3 Tip: Know the Limitations of No-Code Platforms.</h2>
                         

                            <p>Think of no-code platforms as a one-size-fits-all solution. They might work for simple tasks, but when it comes to building something unique and complex, they fall short. If a developer relies on these platforms, they aren’t true developers. Here are some reasons why:</p>
                            <ul className="NestedArticles">
                                <li>
                                    <h3>Customization Constraints</h3>
                                    
                                
                                </li>
                                <li>
                                    <h3>Scalability Issues</h3>
                                    
                                
                                </li>

                                <li>
                                    <h3>Security Concerns</h3>
                                   
                                
                                </li>

                                <li>
                                    <h3>Vendor Lock-In</h3>
                                  
                                
                                </li>
                            </ul>

                                                  
                        </li>

                       

                        <li>
                            <h2># 4 Tip: Be Cautious Of Popular No-Code Tools.</h2>
                         
                            <p>When hiring a developer, ask if they use any of these popular no-code tools and avoid them for serious app development. Here are some tools to watch out for:</p>

                            <ul className="NestedArticles">
                                <li>
                                <h3>Salesforce:</h3>
                                <p>Used for CRM and business automation, Salesforce’s no-code app development can be limiting for highly customized apps.</p>
                                    
                                </li>

                                <li>
                                    <h3>Bubble:</h3>
                                    <p>Used for prototyping and simple apps, but it can struggle with performance and scalability for more complex applications.</p>
                                   
                                </li>

                                <li>
                                    <h3>Adalo:</h3>
                                    <p>
                                    Used for basic apps, but lacks the flexibility and power needed for more sophisticated projects.</p>
                                   
                                </li>

                                <li>
                                    <h3>Glide:</h3>
                                    <p>Use for creating simple mobile apps from spreadsheets, but not suitable for complex, feature-rich applications.</p>
                                    
                                </li>

                                <li>
                                    <h3>Airtable:</h3>
                                    <p>Use for database management and simple apps, but not designed for high-performance or highly customized apps.</p>
                                    
                                </li>

                             

                            </ul>

                          
                        </li>
                        <li>
                            <h2># 5 Tip: Understand why Professional Developers Are a Better Choice.</h2>
                         
                            <p>Whether you choose me or another professional developer, make sure you avoid no-code developers. Professional developers are like master chefs who can create a dish exactly to your taste. They offer several advantages:</p>
                            <ul className="NestedArticles">
                                <li>
                                    <h3>Tailored Solutions</h3>
                                   
                                
                                </li>
                                <li>
                                    <h3>Better Performance and Scalability</h3>
                                   
                                </li>
                                <li>
                                    <h3>Enhanced Security</h3>
                                   
                                </li>
                                <li>
                                    <h3>Long-Term Support</h3>
                                    
                                </li>
                            </ul>

                          
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