import React from "react";
import UploadFileInput from "./UploadFileInput";
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

            <UploadFileInput id={0}/>
            <ul className="list-inline">{verticalSlidersList}</ul>
        </>
    );
};

export default Home;
