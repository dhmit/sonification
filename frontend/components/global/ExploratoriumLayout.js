import React from "react";
import * as PropTypes from "prop-types";
import Sidebar from "../global/Sidebar";
const ExploratoriumLayout = ({main, sidebar}) => {
    return (
        <>
            <div id="main-container">
                <main className='container mx-auto' role="main">
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
    sidebar: PropTypes.object
};


export default ExploratoriumLayout;
