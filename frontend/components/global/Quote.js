import React from "react";
import * as PropTypes from "prop-types";
import Blob1 from "../../images/blobs/blob1.svg";
import Blob2 from "../../images/blobs/blob2.svg";
import Blob3 from "../../images/blobs/blob3.svg";
import Blob4 from "../../images/blobs/blob4.svg";
import LeftQuote from "../../images/icons/leftquote.svg";
import RightQuote from "../../images/icons/leftquote.svg";

// const randWidth = () => {}
const Quote = ({quotation, attribution, color}) => {
    const blobs = [
        <Blob1 key={1} className="quote-blob" fill={color}/>,
        <Blob2 key={2} className="quote-blob" fill={color}/>,
        <Blob3 key={3} className="quote-blob" fill={color}/>,
        <Blob4 key={4} className="quote-blob" fill={color}/>];
    const randomBlob = blobs[Math.floor(Math.random() * blobs.length)];
    console.log("randomblob", randomBlob);
    return (<>

            <LeftQuote/>
            {randomBlob}
            <div className={"quotation"}>{quotation}</div>
            <div>{attribution}</div>
            <RightQuote/>
        </>
    );
};


Quote.propTypes = {
    quotation: PropTypes.string,
    attribution: PropTypes.string,
    color: PropTypes.string
};

export default Quote;
