import React from "react";
import * as PropTypes from "prop-types";
import Home from "../../images/icons/home.svg";

const ExploratoriumLayout = ({main, sidebar}) => {
    return (
        <>
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
                        <div className="sidebar-content">
                            {sidebar}
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

ExploratoriumLayout.propTypes = {
    main: PropTypes.object,
    sidebar: PropTypes.object
};


export default ExploratoriumLayout;
