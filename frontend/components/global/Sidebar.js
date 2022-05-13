import React from "react";
import * as PropTypes from "prop-types";
import Home from "../../images/icons/home.svg";


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
    </div>;
};

Sidebar.propTypes = {
    content: PropTypes.object
};

export default Sidebar;
