import React from 'react'

function ToolsTechnologies(props) {
  return (
    <div className="devTools-container">


        <h2>Developer Tools and Technologies</h2>
            
            <section></section>
            <section>
            <div className="blueLine"></div>

            <ul>
                    <li>
                    <h2>Languages</h2>
                    <h3>JavaScript, C#, Python, Html5, CSS, Markdown</h3>
                    </li>

                    <li>
                    <h2>Database</h2>
                    <h3>MySQL, MongoDB, SQLServer</h3>
                    </li>

                    <li>
                    <h2>Version Control</h2>
                    <h3>Git, GitHub</h3>
                    </li>

                    <li id="frameworks">
                    <h2>Frameworks</h2>
                    <h3>React, Express, Node, Express-fileupload, ASP.NET, Entity Framework, jQuery, SASS</h3>
                    </li>

                </ul>
               
              </section>
              <section>
                    <div className="PeaceOfMind">
                        <main>
                        <img src="/img/PeaceOfMindImg.png" alt="" />

                            <div className="PeaceOfMindInfo">
                            <h3>Interested in mastering Full Stack Development? Move beyond endless tutorials—learn, create, and document your journey.</h3>
                            <div className='Contact-Container'>


                     
                      <footer>
                              
                              <a href="https://calendly.com/cardona-luis/30min">
                              <button className='MainBTN'>Schedule Mentorship</button>
                              </a>
                              
                      </footer>
                          <p>Free mentorship.</p>

                    </div>

                            </div>

                        </main>
                    </div>
                </section>

            

              
          


              
    </div>
  )
}


export default ToolsTechnologies