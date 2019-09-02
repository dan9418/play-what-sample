import "./App.css"
import * as React from "react";
import * as ReactDOM from "react-dom";

import { GettingStarted } from "./Docs/GettingStarted";
import { ConfiguringComponents } from "./Docs/ConfiguringComponents";
import { APIReference } from "./Docs/APIReference";
import { Examples } from "./Docs/Examples";

import {
    Tonic, Accidental, Interval, ConceptPreset, PhysicalNote, FunctionalNote, CompleteNote,
    NOTE_LABEL, INTERVAL, MAJOR_SCALE, CALIBRATION_NOTE, TONIC, ACCIDENTAL, INTERVAL_PAIR, CHORD, SCALE, MODE, ROMAN_NUMERAL,
    Fretboard, FretboardProps, DEFAULT_FRETBOARD_PROPS,
    FretboardStringConfig,
    Keyboard, KeyboardProps, DEFAULT_KEYBOARD_PROPS,
    withNotes, ViewerProps, KeyCenter, DEFAULT_KEY_CENTER, Concept, DEFAULT_CONCEPT
} from 'play-what-beta';
import { ConstantsReference } from "./Docs/ConstantsReference";

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

                <GettingStarted />

                <ConfiguringComponents />

                <APIReference />

                <ConstantsReference />

                <Examples />

            </div >
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#app"));