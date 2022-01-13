import {object, string, array, func} from 'prop-types';
import React from 'react';
import InstrumentPicker from '../instruments/InstrumentPicker';
import STYLES from './Templates.module.scss';

const ToolTemplate = ({tool, music, instrumentSamples, title, description, handleSubmit}) => {
    return (
        <>
            <div className='row'>
                <div className='col'>
                    <h1>{title}</h1>
                    {description}
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    {tool}
                </div>
                <div className='col'>
                    <button 
                        className={"btn btn-outline-dark mt-2" + STYLES.submit}
                        onClick={handleSubmit}
                    >
                        {instrumentSamples
                            ? "Update"
                            : "Sonify!"}
                    </button>
                    {music && instrumentSamples && 
                        <InstrumentPicker samples={instrumentSamples} music={music} />}
                </div>
            </div>
        </>
    );
};

ToolTemplate.propTypes = {
    tool: object,
    music: string,
    instrumentSamples: array,
    title: string,
    description: object,
    handleSubmit: func,
};

export default ToolTemplate;