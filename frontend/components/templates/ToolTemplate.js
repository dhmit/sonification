import {object, string, array, func, bool, arrayOf} from 'prop-types';
import React, {useState} from 'react';
import InstrumentPicker from '../instruments/InstrumentPicker';
import STYLES from './Templates.module.scss';

const loadResults = async (event, handleSubmit, setLoading) => {
    setLoading(true);
    await handleSubmit(event);
    setLoading(false);
};

const ToolTemplate = ({
    tool, music, instrumentSamples, title, description, handleSubmit, sonifyButtonDisabled, customInstruments=[],
}) => {
    const [loading, setLoading] = useState(false);
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
                        disabled={sonifyButtonDisabled ?? false}
                        className={"btn btn-outline-dark mt-2" + STYLES.submit}
                        onClick={(event) => loadResults(event, handleSubmit, setLoading)}
                    >
                        {loading ? 'loading' : (instrumentSamples
                            ? "Update"
                            : "Sonify!")}
                    </button>
                    {loading && <div className="spinner-border" role="status"></div>}
                    {music && instrumentSamples && 
                        <InstrumentPicker samples={instrumentSamples} music={music} customInstruments={customInstruments} />}
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
    customInstruments: arrayOf(object),
};

export default ToolTemplate;