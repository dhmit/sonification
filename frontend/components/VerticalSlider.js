import React, {useRef, useState} from "react";
import {getCookie, debounce} from "../common";
import PropTypes from "prop-types";

const VerticalSlider = (props) => {

    const updateValue = (event) => {
        const formData = new FormData();
        formData.append("id", props.id);
        formData.append("value", event.target.value);
        formData.append("type", "vertical_slider");

        const csrftoken = getCookie("csrftoken");
        const requestOptions = {
            method: "POST",
            headers: {
                "X-CSRFToken": csrftoken
            },
            body: formData
        };
        fetch("/api/settings", requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log("uploaded data:", data);
            });
    };

    return (
        <>
            <input className="vertical mr-2" orient="vertical"
                onChange={debounce(updateValue)} type="range"
            />
        </>
    );
};


VerticalSlider.propTypes = {
    id: PropTypes.number
};

export default VerticalSlider;
