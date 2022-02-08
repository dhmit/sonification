import {object, string, array, func, bool} from 'prop-types';
import React, {useState} from 'react';
import InstrumentPicker from '../instruments/InstrumentPicker';
import STYLES from './Templates.module.scss';

const loadResults = async (event, handleSubmit, setLoading) => {
    setLoading(true);
    await handleSubmit(event);
    setLoading(false);
};

const ToolTemplate = ({
    tool,
    dataViz,
    music,
    instrumentSamples,
    title,
    description,
    handleSubmit,
    sonifyButtonDisabled,
    instrumentPickerProps={},
}) => {
    const [loading, setLoading] = useState(false);
    return (
        <>
            <div className='row'>
                <div className='col mb-2'>
                    <h1>{title}</h1>
                    {description}
                </div>
                <hr className='mb-4'/>
            </div>
            <div className='row mb-2'>
                <div className='col mb-4'>
                    {tool}
                </div>
                <hr/>
            </div>
            <div className='row'>
                <div className='col px-0'>
                    <div className={`${STYLES.buttonLoading}`}>
                        <button
                            disabled={sonifyButtonDisabled ?? false}
                            className="w-100 btn btn-outline-primary mb-4"
                            onClick={(event) => loadResults(event, handleSubmit, setLoading)}
                        >
                            {loading
                                ? <div className='spinner-border' role="status" />
                                : (instrumentSamples
                                    ? "Update"
                                    : "Sonify!")}
                        </button>
                    </div>
                    {dataViz}
                    {music && instrumentSamples &&
                        <InstrumentPicker
                            samples={instrumentSamples}
                            music={music}
                            {...instrumentPickerProps}
                        />}
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
    sonifyButtonDisabled: bool,
    instrumentPickerProps: object,
    dataViz: object,

};

export default ToolTemplate;
