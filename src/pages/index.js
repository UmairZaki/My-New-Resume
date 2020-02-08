import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic08 from '../assets/images/pic02.jpg'
import pic09 from '../assets/images/pic03.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Umair Zaki | Resume"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />
                <section >
        <div className="inner">
            <section >
                <section>
                    <div className="field half first">
                    <div className="inner">
                            <header className="major">
                                <h2>Objective</h2>
                            </header>
                            <p>Looking for a challenging role in a reputable organization to utilize my technical, database, and management skills for the growth of the organization as well as to enhance my knowledge about new and emerging trends in the IT sector.
                                   To work a dynamic and challenging environment where I can optimally utilize my professional skills. Hardworking, honest, responsible and aspiring professional seeking as a position member of your team that requires creativity, hard work and multitasking.</p>
                        </div>
                    </div>
                </section>
            </section>
        </div>
        </section>

                <div id="main">

            <section id="two" className="spotlights">
                <div className="inner">
                <header className="major">
                    <h2>My Achievements</h2>
                </header>
                </div>
                <section>
                    <div className="image">
                        <img src={pic08} alt="" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <h2>Microsoft Technology Associate</h2>
                            <h3>Introduction to programming using Python</h3>
                            <h4>I had passed the Microsoft Technology Associate Certificate (MTA-98-381) Introduction to programming using Python with 89% marks on August 23, 2019.</h4>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="image">
                        <img src={pic09} alt="" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <h2>Coursera Certificate</h2>
                            <h3>AI For Everyone deeplearning.ai</h3>
                            <h4>I had passed the Corsera Certificate (deeplearning.ai) AI For Everyone with 93% marks on July 12, 2019.
Verify at coursera.org/verify/YHQEDEGRL7QH Coursera has confirmed the identity of this individual and their participation in the course.</h4>
                        </div>
                    </div>
                </section>
            </section>
                    
                </div>

            </Layout>
        )
    }
}

export default HomeIndex