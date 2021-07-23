import React from "react";

const ErrorNotFoundComponent = () => {

    return (
        <>
            <h1>Error: No React Component found</h1>
            <p>
                This is likely an error in development.
                <br />
                Make sure that you register your component in <code>index.js</code> and reference it
                by name in the relevant <code>view</code> function.
            </p>
        </>
    );
};

export default ErrorNotFoundComponent;