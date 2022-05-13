import React, {useState, useEffect} from "react";
import * as PropTypes from "prop-types";
import NiceAudioPlayer from "./components/instruments/NiceAudioPlayer";

import ANGELINA_IMG from "./images/headshots/Wu_Angelina.jpg";
import EESHA_IMG from "./images/headshots/Banerjee_Eesha.jpg";
import EMEKA_IMG from "./images/headshots/Echezona_Emeka.jpg";
import GRACE_IMG from "./images/headshots/Jau_Grace.jpg";
import MOISES_IMG from "./images/headshots/Trejo_Moises.jpg";
import PEIHUA_IMG from "./images/headshots/Huang_Peihua.jpg";
import QUINCY_IMG from "./images/headshots/Johnson_Quincy.jpg";

import ANGELINA_AUDIO from "./audio/Polygons_Angelina_2022-05-04.mp4";
import EESHA_AUDIO from "./audio/TimeSeries_Eesha_2022-05-02.m4a";
import EMEKA_AUDIO from "./audio/Colors_Emeka_2022-05-04.m4a";
import GRACE_AUDIO from "./audio/Gestures_Grace_2022-04-28.mp4";
import MOISES_AUDIO from "./audio/TimeSeries_Moises_2022-04-27.m4a";
import PEIHUA_AUDIO from "./audio/Gestures_Peihua_2022-05-02.mp3";
import QUINCY_AUDIO from "./audio/Polygons_Quincy_2022-05-02.mp3";

import Blob1 from "./images/blobs/blob1.svg";
import Blob2 from "./images/blobs/blob2.svg";
import Blob3 from "./images/blobs/blob3.svg";
import Blob4 from "./images/blobs/blob4.svg";
import Blob5 from "./images/blobs/blob5.svg";
import Blob6 from "./images/blobs/blob6.svg";
import QuoteIcon from "./images/icons/leftquote.svg";

// TODO(ra): import the actual audio / img for all of these students!

// COLORS
export const EMEKA_QUOTE = {
    quote: "My favorite part of working on the colors feature was collaborating to figure out" +
        " what the final representation of a color would be.",
    firstName: "Emeka",
    lastName: "Echezona",
    classYear: 24,
    img: EMEKA_IMG,
    audio: EMEKA_AUDIO,
};

// Gestures:
export const GRACE_QUOTE = {
    quote: "It was really cool to see the intersections between math and programming and music, and how all of that could come together to form a final project. [...] It really helped me understand how the different pieces fit together to form a product.",
    firstName: "Grace",
    lastName: "Jau",
    classYear: 25,
    img: GRACE_IMG,
    audio: GRACE_AUDIO,
};

export const PEIHUA_QUOTE = {
    quote: "My favorite part of the project was learning more about how pitches and notes work." +
     " [...]" +
     "Normally when you look at something visual, you don’t think ‘Oh, this is what it" +
      " would sound like.’",
    firstName: "Peihua",
    lastName: "Huang",
    classYear: 24,
    img: PEIHUA_IMG,
    audio: PEIHUA_AUDIO,
};

// Polygons
export const ANGELINA_QUOTE = {
    quote: "This project is all about making tools to get people to play with sound in hopefully new ways, so of course we had to ourselves stretch what we knew to different shapes. That creative process was really fun.",
    firstName: "Angelina",
    lastName: "Wu",
    classYear: 25,
    img: ANGELINA_IMG,
    audio: ANGELINA_AUDIO,
};

export const QUINCY_QUOTE = {
    quote: "I really enjoyed being able to combine my computer science and musical background to create something unique and memorable.",
    firstName: "Quincy",
    lastName: "Johnson",
    classYear: 23,
    img: QUINCY_IMG,
    audio: QUINCY_AUDIO,
};

// Time Series
export const EESHA_QUOTE = {
    quote: "I really enjoyed was the imagination that had to go into it in order to find connections between two different types of data.",
    firstName: "Eesha",
    lastName: "Banerjee",
    classYear: 24,
    img: EESHA_IMG,
    audio: EESHA_AUDIO,
};

export const MOISES_QUOTE = {
    quote: "I really enjoyed being able to use computer science to make something out of nothing. It felt like I could make music out of thin air, out of sunset data, out of CO2 emission data, and use it to make something that could move people.",
    firstName: "Moises",
    lastName: "Trejo",
    classYear: 22,
    img: MOISES_IMG,
    audio: MOISES_AUDIO,
};


let blobStylesDefault = {width: "100%", height: "100px", left: "20px"};
const blobs = [
    <Blob1 key={1} className="quote-blob" fill={"#A5E0EC"} style={{
        height: "380px", left: "40px"
    }}/>,
    <Blob2 key={2} className="quote-blob" fill={"#DAFBB1"} style={{
        width: "auto", height: "400px", left: "-80px"

    }}/>,
    <Blob3 key={3} className="quote-blob" fill={"#FEDE6C"} style={blobStylesDefault}/>,
    <Blob4 key={4} className="quote-blob" fill={"#ea957d"} style={blobStylesDefault}/>,
    <Blob5 key={5} className="quote-blob" fill={"#A5E0EC"} style={blobStylesDefault}/>,
    <Blob6 key={6} className="quote-blob" fill={"#DAFBB1"} style={blobStylesDefault}/>
];
export const StudentQuote = ({quoteData, color = "#EF724F", blob}) => {
    const [randomBlob, setRandomBlob] = useState(<></>);

    useEffect(() => {
        if (blob) {
            setRandomBlob(blobs[blob - 1]);
        } else {
            setRandomBlob(blobs[Math.floor(Math.random() * blobs.length)]);
        }
    }, []);
    const {quote, firstName, lastName, classYear, img, audio} = quoteData;

    return (
        <div className="mb-2">
            <div className="row">
                {/*<div className="col-1">*/}
                {/*    <img*/}
                {/*        className='img-fluid'*/}
                {/*        alt={`Headshot of ${firstName} ${lastName}`} src={img}*/}
                {/*    />*/}
                {/*</div>*/}
                {randomBlob}
                <div className="col-11 quotation">
                    <QuoteIcon className={"quote-icon"}/>
                    <blockquote className="blockquote">
                        {quote}
                    </blockquote>
                    <QuoteIcon className={"quote-icon right"}/>
                    <footer className="blockquote-footer">
                        {firstName} {lastName} ’{classYear}
                    </footer>
                </div>
                <NiceAudioPlayer
                    src={audio}
                    extraClass={"mb-5"}
                    text={`Click to hear ${firstName} say more about this project`}
                />
            </div>
        </div>
    );
};


StudentQuote.propTypes = {
    color: PropTypes.string,
    quoteData: PropTypes.object
};
