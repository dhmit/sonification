import React, {useState} from "react";
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

import QuoteIcon from "./images/icons/leftquote.svg";

// TODO(ra): import the actual audio / img for all of these students!

// COLORS
export const EMEKA_QUOTE = {
    quote: "My favorite part of working on the colors feature was collaborating to figure out" +
        " what the final representation of a color would be.",
    speaker: "Emeka Echezona",
    img: EMEKA_IMG,
    audio: EMEKA_AUDIO,
};

// Gestures:
export const GRACE_QUOTE = {
    quote: "It was really cool to see the intersections between math and programming and music, and how all of that could come together to form a final project. [...] It really helped me understand how the different pieces fit together to form a product.",
    speaker: "Grace J.",
    img: GRACE_IMG,
    audio: GRACE_AUDIO,
};

export const PEIHUA_QUOTE = {
    quote: "My favorite part of the project was learning more about how pitches and notes work and seeing our final feature at the end. I personally don’t have any musical background, so a lot of this was new to me. [...] Normally when you look at something visual, you don’t think ‘Oh, this is what it would sound like.’",
    speaker: "Peihua H.",
    img: PEIHUA_IMG,
    audio: PEIHUA_AUDIO,
};

// Polygons
export const ANGELINA_QUOTE = {
    quote: "This project is all about making tools to get people to play with sound in hopefully new ways, so of course we had to ourselves stretch what we knew to different shapes. That creative process was really fun.",
    speaker: "Angelina W.",
    img: ANGELINA_IMG,
    audio: ANGELINA_AUDIO,
};

export const QUINCY_QUOTE = {
    quote: "I really enjoyed being able to combine my computer science and musical background to create something unique and memorable.",
    speaker: "Quincy J",
    img: QUINCY_IMG,
    audio: QUINCY_AUDIO,
};

// Time Series
export const EESHA_QUOTE = {
    quote: "I really enjoyed was the imagination that had to go into it in order to find connections between two different types of data.",
    speaker: "Eesha B.",
    img: EESHA_IMG,
    audio: EESHA_AUDIO,
};

export const MOISES_QUOTE = {
    quote: "I really enjoyed being able to use computer science to make something out of nothing. It felt like I could make music out of thin air, out of sunset data, out of CO2 emission data, and use it to make something that could move people.",
    speaker: "Moises T.",
    img: MOISES_IMG,
    audio: MOISES_AUDIO,
};


export const StudentQuote = ({quoteData, color = "#EF724F"}) => {
    const [blobStyles, setBlobStyles] = useState({
        width: "200px", height: "150px", left: "20px", top: "10px"
    });
    const blobs = [
        <Blob1 key={1} className="quote-blob" fill={color} width={blobStyles.width} height={blobStyles.height} top={blobStyles.top} left={blobStyles.left}/>,
        <Blob2 key={2} className="quote-blob" fill={color} width={blobStyles.width} height={blobStyles.height} top={blobStyles.top} left={blobStyles.left}/>,
        <Blob3 key={3} className="quote-blob" fill={color} width={blobStyles.width} height={blobStyles.height} top={blobStyles.top} left={blobStyles.left}/>,
        <Blob4 key={4} className="quote-blob" fill={color} width={blobStyles.width} height={blobStyles.height} top={blobStyles.top} left={blobStyles.left}/>
    ];

    const randomBlob = blobs[Math.floor(Math.random() * blobs.length)];

    const {quote, speaker, img, audio} = quoteData;

    return (
        <div className="mb-2">
            <div className="row">
                <div className="col-1">
                    <img
                        className='img-fluid'
                        alt={`Headshot of ${speaker}`} src={img}
                    />
                </div>
                {randomBlob}
                <div className="col-11 quotation">
                    <QuoteIcon className={"quote-icon"}/>
                    <blockquote className="blockquote">
                        {quote}
                    </blockquote>
                    <QuoteIcon className={"quote-icon right"}/>
                    <footer className="blockquote-footer">
                        {speaker}
                    </footer>
                </div>
                <NiceAudioPlayer
                    src={audio}
                    text={`Click to hear ${speaker} say more about this project`}
                />
            </div>
        </div>
    );
};


StudentQuote.propTypes = {
    color: PropTypes.string,
    quoteData: PropTypes.object
};
