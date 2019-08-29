import "./Sample.css";
import { Fretboard, Keyboard, KeyboardProps, DEFAULT_KEYBOARD_PROPS, DEFAULT_FRETBOARD_PROPS, DEGREE, ACCIDENTAL, NOTE_LABEL, TheoryEngine, INTERVAL_PAIR, INTERVAL, CHORD, SCALE, MODE } from "C://Users/dan94/Desktop/play-what-alpha/build/play-what-alpha";
import React = require("react");
import { Demo } from "./PropertyDemo/Demo/Demo";
import { KeyCenterInput } from "./PropertyDemo/KeyCenterProperties/KeyCenterProperties";
import { IntervalsInput } from "./PropertyDemo/ConceptProperties/ConceptProperties";
import { EnumDropdownInput } from "./Inputs/EnumDropdownInput/EnumDropdownInput";
import { BooleanInput } from "./Inputs/BooleanInput/BooleanInput";
import { NumericInput } from "./Inputs/NumericInput/NumericInput";
import { FretboardStringProperties } from "./PropertyDemo/FretboardStringProperties/FretboardStringProperties";

/* General */

export interface PropertyDefinition {
    id: string;
    nested?: boolean;
    array?: boolean;
    component: any;
    props?: any;
}

export const VIEWER_PROPS: { [id: string]: PropertyDefinition } = {
    keyCenter: {
        id: 'keyCenter',
        nested: true,
        component: KeyCenterInput,
    },
    intervals: {
        id: 'intervals',
        component: IntervalsInput,
    },
    chordInversion: {
        id: 'chordInversion',
        component: NumericInput
    },
    melodicInversion: {
        id: 'melodicInversion',
        component: BooleanInput
    },
    noteLabel: {
        id: 'noteLabel',
        component: EnumDropdownInput,
        props: {
            label: 'NOTE_LABEL',
            enum: NOTE_LABEL
        }
    },
    filterOctave: {
        id: 'filterOctave',
        component: BooleanInput
    },
    keyLow: {
        id: 'keyLow',
        component: NumericInput
    },
    keyHigh: {
        id: 'keyHigh',
        component: NumericInput
    },
    fretLow: {
        id: 'fretLow',
        component: NumericInput
    },
    fretHigh: {
        id: 'fretHigh',
        component: NumericInput
    },
    showDots: {
        id: 'showDots',
        component: BooleanInput
    },
    showFretNumbers: {
        id: 'showFretNumbers',
        component: BooleanInput
    },
    strings: {
        id: 'strings',
        component: FretboardStringProperties,
        nested: true,
        array: true
    }
};

export type ViewerDefinition = {
    id: string;
    name: string;
    component: any;
    defaultProps: any;
    inputs: PropertyDefinition[];
}

/* Sample */

export class Sample extends React.Component<any, any> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="sample-container">

                <h1>Play What?</h1>

                <p>Play What is a configurable, extensible music theory visualization tool and React component library.</p>

                <p>It provides a simple API for visualizing virtually any harmonic music theory concept.
                    Just provide the key, concept, and (optional) configuration to one of the built-in viewer components and
                    Play What will generate the properties of the respective notes and display them however they've been configured.</p>

                <h2>Usage</h2>

                <p>Currently, Play What provides two viewer components out-of-the-box: a keyboard and a fretboard.
                    Without providing any custom configuration, they will render as follows:</p>

                <Demo
                    comment='Select viewer here'
                    viewers={[
                        {
                            id: 'keyboard',
                            name: 'Keyboard',
                            component: Keyboard,
                            defaultProps: DEFAULT_KEYBOARD_PROPS,
                            inputs: []
                        },
                        {
                            id: 'fretboard',
                            name: 'Fretboard',
                            component: Fretboard,
                            defaultProps: DEFAULT_FRETBOARD_PROPS,
                            inputs: []
                        }
                    ]}
                />

                <p>To apply a music theory concept to a viewer, simply provide one via props.
                    There are built-in presets for chords, scales, modes, roman numerals, and interval pairs.
                    A complete list can be found in the documentation. By default, the notes are labeled with their respective interval and color-coded by degree.</p>

                <Demo
                    viewers={[
                        {
                            id: 'keyboard',
                            name: 'Keyboard',
                            component: Keyboard,
                            defaultProps: Object.assign({}, DEFAULT_KEYBOARD_PROPS, {
                                intervals: CHORD.Maj.intervals
                            }),
                            inputs: [
                                VIEWER_PROPS.intervals
                            ]
                        },
                        {
                            id: 'fretboard',
                            name: 'Fretboard',
                            component: Fretboard,
                            defaultProps: DEFAULT_FRETBOARD_PROPS,
                            inputs: [
                                VIEWER_PROPS.intervals
                            ]
                        }
                    ]}
                />

                <h3>Modifying a Concept</h3>

                <p>By default, concepts are assumed to be in the key of C in the octave of Middle C. To change the key, provide a value for the keyCenter prop.</p>

                <Demo
                    viewers={[
                        {
                            id: 'keyboard',
                            name: 'Keyboard',
                            component: Keyboard,
                            defaultProps: Object.assign({}, DEFAULT_KEYBOARD_PROPS, {
                                intervals: CHORD.Maj.intervals,
                                keyCenter: { degree: DEGREE.F, accidental: ACCIDENTAL.Sharp, octave: 4 }
                            }),
                            inputs: [
                                VIEWER_PROPS.keyCenter,
                                VIEWER_PROPS.intervals
                            ]
                        },
                        {
                            id: 'fretboard',
                            name: 'Fretboard',
                            component: Fretboard,
                            defaultProps: DEFAULT_FRETBOARD_PROPS,
                            inputs: [
                                VIEWER_PROPS.keyCenter,
                                VIEWER_PROPS.intervals
                            ]
                        }
                    ]}
                />

                <p>There is also support for chordal inversions and melodic inversions.</p>

                <Demo
                    viewers={[
                        {
                            id: 'keyboard',
                            name: 'Keyboard',
                            component: Keyboard,
                            defaultProps: Object.assign({}, DEFAULT_KEYBOARD_PROPS, {
                                intervals: CHORD.Maj.intervals,
                                keyCenter: { degree: DEGREE.F, accidental: ACCIDENTAL.Sharp, octave: 4 }
                            }),
                            inputs: [
                                VIEWER_PROPS.keyCenter,
                                VIEWER_PROPS.intervals,
                                VIEWER_PROPS.chordInversion,
                                VIEWER_PROPS.melodicInversion
                            ]
                        },
                        {
                            id: 'fretboard',
                            name: 'Fretboard',
                            component: Fretboard,
                            defaultProps: DEFAULT_FRETBOARD_PROPS,
                            inputs: [
                                VIEWER_PROPS.keyCenter,
                                VIEWER_PROPS.intervals,
                                VIEWER_PROPS.chordInversion,
                                VIEWER_PROPS.melodicInversion
                            ]
                        }
                    ]}
                />

                <h3>Configuring Viewers</h3>

                <p>Each viewer also its own API for modifying how concepts are displayed. A complete list of all the props and values is available in the documentation.</p>

            </div >
        )
    }
}