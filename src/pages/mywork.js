import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic41.png'
import pic09 from '../assets/images/pic42.png'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Umair Zaki | My Work</title>
            <meta name="description" content="Generic Page" />
        </Helmet>
        <BannerLanding />

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <div id="main">
                    <header className="major">
                        <h2>Artificial Intelligence</h2>
                    </header>
                    <h3>Deep Learning Projects</h3>
                    <p>I trained the model with all following aspects:</p>
                    <ul>
                        <li>Baseline Neural Network (Import Libraries, Load Data, Prepare partitions(train, test and validation data), label encoding and One hot encoding if needed, Make Model, Make Compiler, Train Model, Evaluate Model and Save Model)</li>
                        <li>Baseline Model With Data Standarization</li>
                        <li>Evaluate a Smaller Network (small Dense Layers)</li>
                        <li>Evaluate a very Smaller Network that Underfit</li>
                        <li>Evaluate a larger Network (Large Dense Layers)</li>
                        <li>Evaluate a very Larger Network that Overfit</li>
                        <li>Tuning the Model (Change Optimizer and number of Epochs)</li>
                        <li>Visualization of Epochs(Accuracy and Loss) through Matplotlib</li>
                        <li>Use Dropout and Weight Regularization for best results</li>
                    </ul>
                    <h3>1- Binary Classification Sonar Dataset</h3>
                    <p>to see my code <a href="https://github.com/UmairZaki/Deep-Learning-Sonar-Dataset" target = "_blank"> Click Here</a></p>
                    <h3>2- Multiclass Classification Iris Dataset</h3>
                    <p>to see my code <a href="https://github.com/UmairZaki/Deep-Learning-Iris-Dataset" target = "_blank"> Click Here</a></p>
                    <h3>3- Regression Housing Dataset</h3>
                    <p>to see my code <a href="https://github.com/UmairZaki/Deep-Learning-Housing-Dataset" target = "_blank"> Click Here</a></p>
                    <h3>4- Save & Load Keras Model</h3>
                    <p>to see my code <a href="https://github.com/UmairZaki/Save-Load-Keras-Model" target = "_blank"> Click Here</a></p>
                    <h3>5- Face Detection with Keras MTCNN</h3>
                    <p>to see my code <a href="https://github.com/UmairZaki/Face-Detection-with-Keras-MTCNN" target = "_blank"> Click Here</a></p>
                    </div>
                    <div id="main">
                    <header className="major">
                        <h2>Python Flask Project</h2>
                    </header>
                    <h3>1- GraphQl-Mongodb-API</h3>
                    <p>to see my code <a href="https://github.com/UmairZaki/GraphQl-Mongodb-API" target = "_blank"> Click Here</a></p>
                    <h3>2- PostgreSQL-Todo-APP-Unit-Testing</h3>
                    <p>to see my code <a href="https://github.com/UmairZaki/PostgreSQL-Todo-APP-Unit-Testing" target = "_blank"> Click Here</a></p>
                    <h3>3- Todo-APP-Unit-Testing-Mongodb</h3>
                    <p>to see my code <a href="https://github.com/UmairZaki/Todo-APP-Unit-Testing-Mongodb" target = "_blank"> Click Here</a></p>
                    </div>
                    <div id="main">
                    <header className="major">
                        <h2>Gatsby React Project</h2>
                    </header>
                    <p>I design this websites with Gatsby, React, HTML5, Sass(CSS) and Java Script.</p>
                    <p>Some of the following websites made by me</p>
                    <h3>1- Umair Zaki Resume</h3>
                    <p>to see my website <a href="https://umairzakiresume.netlify.com/" target = "_blank"> Click Here</a></p>
                    <h3>2- Umair Zaki</h3>
                    <p>to see my website <a href="https://umairzaki.netlify.com/" target = "_blank"> Click Here</a></p>
                    <h3>3- PIAIC New</h3>
                    <p>to see my website <a href="https://piaic-new.netlify.com/" target = "_blank"> Click Here</a></p>
                    <h3>4- PIAIC For Learning</h3>
                    <p>to see my website <a href="https://peaceful-goldwasser-23267b.netlify.com/" target = "_blank"> Click Here</a></p>
                    </div>
                </div>
            </section>
        </div>
        <div id="main">

            <section id="two" className="spotlights2">
                <div className="inner">
                <header className="major">
                    <h1>Freelance</h1>
                </header>
                </div>
                <section>
                    <div className="image">
                        <img src={pic08} alt="" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <h1>Upwork</h1>
                            <p>to see my Upwork Profile <a href="https://www.upwork.com/freelancers/~0141d6a9695a2de52a" target = "_blank"> Click Here</a></p>
                        </div>
                    </div>
                </section>
            </section>
                    
                </div>
                <div id="main">

<section id="two" className="spotlights2">
    <div >
    </div>
    <section>
        <div className="image">
            <img src={pic09} alt="" />
        </div>
        <div className="content">
            <div className="inner">
            <h1>Fiverr</h1>
            <p>to see my Fiverr Profile <a href="https://www.upwork.com/freelancers/~0141d6a9695a2de52a" target = "_blank"> Click Here</a></p>
            </div>
        </div>
    </section>
</section>
        
    </div>

    </Layout>
)

export default Generic