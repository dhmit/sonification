import React from "react";
import * as PropTypes from "prop-types";
import Sidebar from "../global/Sidebar";
const ExploratoriumLayout = ({main, sidebar, extraClass}) => {
    return (
        <>
            <div id={`main-container`} className={extraClass}>
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
    extraClass: PropTypes.string
};


export default ExploratoriumLayout;
