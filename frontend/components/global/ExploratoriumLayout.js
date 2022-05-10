import React from "react";
import Nav from "./Nav";
import * as PropTypes from "prop-types";

const ExploratoriumLayout = ({main, sidebar}) => {
    return (
        <>
            <Nav/>
            <div id="main-container">
                <main className='container mx-auto' role="main">
                    <div className='row'>
                        <div className='col-8'>
                            {main}
                        </div>
                        <div className='col-4 pl-4'>
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
    sidebar: PropTypes.object,
};


export default ExploratoriumLayout;
