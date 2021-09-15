import React from "react";
import UploadButton from "./UploadButton";
import VerticalSlider from "./VerticalSlider";

const Home = () => {
    const verticalSlidersNum = 9;
    const verticalSlidersList = [];
    for (let i = 0; i < verticalSlidersNum; i++) {
        verticalSlidersList.push(
            <li className="list-inline-item" key={i} >
                <VerticalSlider id={i} />
            </li>);
    }
    return (
        <>
            <h2>Welcome to our Sonification toolkit!</h2>

            <UploadButton/>
            <ul className="list-inline">{verticalSlidersList}</ul>
        </>
    );
};

export default Home;
