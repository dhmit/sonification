import React from "react";
import * as PropTypes from "prop-types";
import Home from "../../images/icons/home.svg";
import DHLogo from "../../images/dh_logo.svg";

const Sidebar = ({content}) => {
    return <div className='sidebar p-0'>
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
            {content}
        </div>
        <footer className="sidebar-footer">
            <div className="sidebar-footer-content">
                <a href="https://digitalhumanities.mit.edu/">
                    <DHLogo width={"400px"} height={"auto"}/>
                </a>
            </div>
        </footer>
    </div>;
};

Sidebar.propTypes = {
    content: PropTypes.object
};

export default Sidebar;
