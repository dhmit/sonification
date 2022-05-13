import React from "react";
import Nav from "./Nav";
import * as PropTypes from "prop-types";

const Base = ({children}) => {
    return (
        <>
            <div id="base-main-container">
                <main className='container' role="main">
                    {children}
                </main>
            </div>
        </>
    );
};

Base.propTypes = {
    children: PropTypes.object,
};

export default Base;
