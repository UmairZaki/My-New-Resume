import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
        <section className="split">
                <section>
                    <div className="field half first">
                        <h1>Profile</h1>
                        <ul>
                        <li>Father: Muhammad Zaki</li>
                        <li>CNIC: 42301-6362390-9</li>
                        <li>Date of Birth: 16-July-1989</li>
                        <li>Marital Status: Single</li>
                        <li>Country: Pakistan</li>
                        </ul>
                        <h1>Education</h1>
                        <ul>
                        <li>Matriculation from Bahawalpur Board (Pre-medical Grade "B"2005)</li>
                        <li>Intermediate from Karachi Board (Commerce Grade "C" 2010)</li>
                        <li>Studying Artificial intelligence, Cloud Native Computing and Internet of Things from Axiom PIAIC Headquarter.</li>  
                        </ul>
                    </div>
                </section>
            </section>
            
               
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="https://mail.google.com/mail/u/0/" target = "_blank">umairzakicnbc@gmail.com</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Phone</h3>
                        <span>+92 313-287-3668</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Address</h3>
                        <span>Plot # 1/29, 4th Floor, Flat # A7,<br />
                        Block 5b, Nazimabad,<br />
                        Karachi, Pakistan.</span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
