import React, { Component } from 'react';
import { NavLink, useHistory } from 'react-router-dom'
import Classes from './main_page.css';
import vision_img from '../../assets/vision.jpg';
import InitiativeCard from './initiativeCard/InitiativeCard';
import card3 from '../../assets/card3.jpeg';
import card2 from '../../assets/card2.jpeg';
import card1 from '../../assets/card1.jpeg';
import video from '../../assets/backgroundVideo.mp4';

import navSection from '../../components/NavSection/NavSection';
import Footer from '../../components/Footer/Footer'
import Carousel from '../../components/Carousel/Carousel';

const main_page = () => {

    const history = useHistory();
        return (
            <React.Fragment>
            
                <div className={Classes.hero}>

                    <div className={Classes.section}>

                        <div className={Classes.section1}>
                            <video autoPlay loop muted className={Classes.video}>
                                <source src={video} type={'video/mp4'} />
                            </video>

                            <div className={Classes.quote}><h1>What the Price of Copper Can Tell Us About the Stock Market?</h1><br />
                                <div id={'circle'}></div><p>Read More</p>
                            </div>
                        </div>

                        <div className={Classes.section4}>
                            <div className={Classes.s4_heading}>
                                <h2>Our Vision</h2>
                            </div>
                            <div className={Classes.s4_body}>
                                <div className={Classes.s4_body_1}>
                                    <img src={vision_img} alt='vision' />
                                    <div className={Classes.s4_message}><span>Rewrite Tomorrow</span><br />
                                        <p>We are relentlessly reimagining the markets of today to realize<br />the potential of tomorrow.</p>
                                    </div>
                                </div>
                                <div className={Classes.s4_body_2}>
                                    <p>Powering Market Everywhere<br /><span className={Classes.s4_body_text}>115+</span></p>
                                    <p>Nasdaq-powered markets worldwide</p>
                                </div>
                            </div>
                        </div>



                        
                            <Carousel />
                            
                            
                         

                        


                        <div className={Classes.section3}>
                            <h4><span>Our</span> Initiative</h4>
                            <div className={Classes.s3_body}>
                                <InitiativeCard src={card3} heading={'Environmental, Social and Governance'}
                                    content={'We are committed to catalyzing progress towards a more' +
                                        'sustainable tomorrow.'}
                                />
                                <InitiativeCard src={card2} heading={'Nasdaq Ventures'}
                                    content={"Nasdaq Ventures is dedicated to discovering, investing in " +
                                        "and collaborating on new technologies and groundbreaking solutions " +
                                        "that align with our company's long-term objectives in the " +
                                        "global capital markets."}
                                />
                                <InitiativeCard src={card1} heading={'Total Markets'}
                                    content={"We are creating more market choice and opportunity to help " +
                                        "unleash the dynamic, entrepreneurial spirit that drives the U.S. economy."}
                                />
                            </div>
                        </div>

                        

                        <Footer top = '420vh'/>

                    </div>
                </div>
            </React.Fragment>
        );
    }

export default main_page;