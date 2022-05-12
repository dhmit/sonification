import React from "react";
import {Row, Col} from "react-bootstrap";
import Nav from "./Nav";
import * as PropTypes from "prop-types";
import Home from "../../images/icons/home.svg";
import Quote from "./Quote";

const ExploratoriumLayout = ({main, sidebar}) => {
    return (
        <>
        <Nav/>
        <div id="main-container">
            <main className='container mx-auto' role="main">
                <div className='main-content'>
                    {main}
                </div>
                <div className='sidebar p-0'>
                    <div className="sidebar-top p-0">
                        <div className="sidebar-about">
                            <a href="/about">About</a>
                        </div>
                        <div className="sidebar-home">
                            <a href={"/"}>
                                <Home width="110px" fill={"#EF724F"}/>
                            </a>
                        </div>
                    </div>
                    <Quote quotation={"My favorite part of the project was learning more " +
                    "about how pitches and notes work and seeing our final feature at " +
                    "the end. I personally don’t have any musical background, " +
                    "so a lot of this was new to me. [...] Normally when you look at " +
                    "something visual, you don’t think ‘Oh, this is what " +
                    "it would sound like.’"} attribution={"Peihua H."} color={"#EF724F"}/>
                    {sidebar}
                </div>
        </main>
        </div>

</>
)
    ;
};

ExploratoriumLayout.propTypes = {
    main: PropTypes.object,
    sidebar: PropTypes.object,
};


export default ExploratoriumLayout;
