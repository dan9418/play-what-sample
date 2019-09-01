import "./App.css"
import ReactDOM = require("react-dom");
import React = require("react");

import { withNotes, Fretboard, Keyboard, KeyboardProps, DEFAULT_KEYBOARD_PROPS, DEFAULT_FRETBOARD_PROPS, TONIC, ACCIDENTAL, NOTE_LABEL, TheoryEngine, INTERVAL_PAIR, INTERVAL, CHORD, SCALE, MODE } from 'C://Users/dan94/Desktop/play-what-alpha/build/play-what-alpha';

import { PropertyDefinition, KEY_CENTER_INPUTS, CONCEPT_INPUTS, KEYBOARD_INPUTS, FRETBOARD_INPUTS } from "./Inputs/Input.config";
import { GettingStarted } from "./Docs/GettingStarted";
import { ConfiguringComponents } from "./Docs/ConfiguringComponents";
import { MusicTheoryGlossary } from "./Docs/MusicTheoryGlossary";
import { APIReference } from "./Docs/APIReference";
import { Examples } from "./Docs/Examples";

export class App extends React.Component<any, any> {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className='sample-container'>

                <h1>Play What?</h1>

                <p>Play What is a configurable, extensible music theory visualization tool and React component library.</p>

                <p>It provides a simple API for visualizing virtually any harmonic music theory concept.
                    Just provide the key, concept, and (optional) configuration to one of the built-in viewer components and
                    Play What will generate the properties of the respective notes and display them however they've been configured.</p>

                <GettingStarted/>
                
                <ConfiguringComponents/>

                <MusicTheoryGlossary/>

                <APIReference/>

                <Examples/>

            </div >
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#app"));