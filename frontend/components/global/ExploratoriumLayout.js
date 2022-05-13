import React from "react";
import * as PropTypes from "prop-types";
import Sidebar from "../global/Sidebar";

const ExploratoriumLayout = ({main, sidebar, extraClass, title}) => {
    return (
        <>
            <div id="main-container" className={extraClass}>
                <h1>{title}</h1>
                <main className='container' role="main">
                    <div className='main-content'>
                        {main}
                    </div>
                    <Sidebar content={sidebar}/>
                </main>
            </div>
        </>
    );
};

ExploratoriumLayout.propTypes = {
    main: PropTypes.object,
    sidebar: PropTypes.object,
    extraClass: PropTypes.string,
    title: PropTypes.string
};


export default ExploratoriumLayout;
