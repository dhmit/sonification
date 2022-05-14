import React from "react";
import {Image} from "react-bootstrap";

import {StudentQuote, EVAN_QUOTE, EVAN_QUOTE2} from "../studentQuotes";
import Photo1 from "../images/photos/photo-1.png";
import Photo2 from "../images/photos/photo-2.png";
import Photo3 from "../images/photos/photo-3.png";
import Home from "../images/icons/home.svg";

const About = () => {
    return (<>
        <div id="main-container">
            <main id="about" className="container" role="main">
                <div className="content">
                    <div className="row">
                        <div className="col-8 pl-0">
                            <h1 className="title">MIT’s Digital<br/>
                                Humanities Lab</h1>
                            <p className="description">
                                Founded in 2018 with a major seed grant from the Andrew W. Mellon
                                Foundation and with support from alumni donors, the Digital
                                Humanities
                                Lab enhances humanistic education among engineering and computer
                                science
                                students. Working closely with faculty mentors, undergraduates gain
                                real-world opportunities to apply new technologies to cutting-edge
                                problems in the humanities, arts, and social sciences.
                            </p>
                        </div>
                        <div className="col-4 sidebar-quotes pl-0">
                            <nav>
                                <div className="sidebar-home mb-5">
                                    <a href={"/"}>
                                        <Home width="70px" fill={"#EF724F"}/>
                                    </a>
                                </div>
                            </nav>
                            <div className='pr-4'>
                                <StudentQuote
                                    quoteData={EVAN_QUOTE2}
                                    blob={6}
                                    color={"#FEDE6C"}
                                />
                            </div>
                        </div>
                        <ul className="list-inline photo-row">
                            <li className="list-inline-item">
                                <Image src={Photo1}/>
                            </li>
                            <li className="list-inline-item">
                                <Image src={Photo2}/>
                            </li>
                            <li className="list-inline-item">
                                <Image src={Photo3}/>
                            </li>
                        </ul>

                    </div>

                    <div className="container pl-0">
                        <div className="row pt-4">
                            <div className="col">
                                <h3>About the lab</h3>
                                <p >
                                    Now serving the largest cohort of UROP students at MIT, each
                                    semester the lab centers on approximately 30 undergraduate
                                    researchers who work closely with fellows, staff, and SHASS
                                    faculty on groundbreaking research and teaching initiatives.

                                    Driven by faculty focused on new research opportunities,
                                    projects have ranged from creating music out of
                                    multidisciplinary data to analyzing gender across thousands
                                    of novels to using computer vision to navigate vast visual
                                    archives. The pillars that uphold these
                                    projects are code, communication, and community.
                                </p>
                            </div>
                            <div className="col ml-4">
                                <h3>About the project</h3>
                                <p>
                                    Sonification is to sound as Data Visualization is to sight, both
                                    allow us to understand information in a different way. These
                                    digital technologies have ancient roots: visualization is a
                                    sundial, translating planetary motion into measured time; while
                                    sonification is a ticking clock. More recent sonifications would
                                    include Geiger Counters, SONAR, and the detection of
                                    gravitational waves. By making the abstract audible,
                                    sonification can help us experience information in a different
                                    way.
                                </p>
                            </div>
                            <div className="col ml-4">
                                <h3>Faculty Fellow, Evan Ziporyn</h3>
                                <p>My name is Evan Ziporyn, I'm a composer and sound artist, and
                                    I've been a member of MIT's music faculty since 1990. My own
                                    interest in sonification is primarily artistic, and this fall,
                                    as Faculty Fellow in the SHASS Digital Humanities Lab, I had the
                                    pleasure of working with a remarkable group of undergraduates,
                                    developing a Sonification Toolkit: online resources that explore
                                    fundamental relationships between sound and color, sound and
                                    gesture, sound and shape. From this ongoing work, we've put
                                    together a few things that demonstrate some of these
                                    relationships, turning colors into intervals, shapes into
                                    scales, and gestures into melodies. We hope you enjoy exploring
                                    them! </p>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>


    </>);
};

export default About;
