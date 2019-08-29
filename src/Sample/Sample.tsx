import './Sample.css';
import { Fretboard, Keyboard, KeyboardProps, DEFAULT_KEYBOARD_PROPS, DEFAULT_FRETBOARD_PROPS, DEGREE, ACCIDENTAL, NOTE_LABEL, TheoryEngine, INTERVAL_PAIR, INTERVAL, CHORD, SCALE, MODE } from 'C://Users/dan94/Desktop/play-what-alpha/build/play-what-alpha';
import React = require('react');
import { DemoSelector } from './PropertyDemo/Demo/Demo';
import { KeyCenterInput } from './PropertyDemo/KeyCenterProperties/KeyCenterProperties';
import { PresetIntervalsInput } from './PropertyDemo/PresetIntervalsInput/PresetIntervalsInput';
import { EnumDropdownInput } from './Inputs/EnumDropdownInput/EnumDropdownInput';
import { BooleanInput } from './Inputs/BooleanInput/BooleanInput';
import { NumericInput } from './Inputs/NumericInput/NumericInput';
import { FretboardStringProperties } from './PropertyDemo/FretboardStringProperties/FretboardStringProperties';

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
        component: PresetIntervalsInput,
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
            <div className='sample-container'>

                <h1>Play What?</h1>

                <p>Play What is a configurable, extensible music theory visualization tool and React component library.</p>

                <p>It provides a simple API for visualizing virtually any harmonic music theory concept.
                    Just provide the key, concept, and (optional) configuration to one of the built-in viewer components and
                    Play What will generate the properties of the respective notes and display them however they've been configured.</p>

                <h2>Getting started</h2>

                <h3>Installation</h3>

                <p>Play What is available as an npm package and can be installed via the command-line:</p>

                <div className='command-line'>npm install play-what</div>

                <h3>Include Component</h3>

                <p>Import a component from 'play-what' to use it in your project.
                    Play What currently provides two viewer components out-of-the-box, 'Keyboard' and 'Fretboard'.
                    Each component will render with default configuration if no props are provided.</p>

                <DemoSelector
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

                <h2>Configuring Components</h2>

                <p>To apply a music theory concept to a viewer, simply provide a value to the intervals prop.
                    For an explanation of musical interval or concepts, please see the <a href=''>music theory appendix</a>.</p>
                <p>
                    There are built-in presets for chords, scales, modes, roman numerals, and interval pairs.
                    A complete list can be found in the <a href=''>reference section</a>.
                    By default, notes are labeled with their respective interval and colored by degree.</p>

                <DemoSelector
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

                <p>By default, intervals are relative to the <a href=''>key</a> of C in the octave of <a href=''>Middle C</a>.
                To change the key, provide a value for the keyCenter prop.</p>

                <DemoSelector
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

                <h4>Inversions</h4>

                <p>There is also support for chordal and melodic inversions.</p>

                <DemoSelector
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
                                VIEWER_PROPS.chordInversion,
                                VIEWER_PROPS.melodicInversion
                            ]
                        }
                    ]}
                />

                <h3>Configuring How Notes Are Displayed</h3>

                <p>Components also accept props to specify how to display the provided notes.
                    For example, notes can be labeled or shown idependent of the provided octave.</p>

                <DemoSelector
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
                                VIEWER_PROPS.noteLabel,
                                VIEWER_PROPS.filterOctave
                            ]
                        },
                        {
                            id: 'fretboard',
                            name: 'Fretboard',
                            component: Fretboard,
                            defaultProps: DEFAULT_FRETBOARD_PROPS,
                            inputs: [
                                VIEWER_PROPS.noteLabel,
                                VIEWER_PROPS.filterOctave
                            ]
                        }
                    ]}
                />

                <h3>Configuring Viewers</h3>

                <p>Each viewer also its own API for modifying the viewer itself.
                    See the <a href=''>reference section</a> for a complete list.</p>

                <DemoSelector
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
                                VIEWER_PROPS.keyLow,
                                VIEWER_PROPS.keyHigh
                            ]
                        },
                        {
                            id: 'fretboard',
                            name: 'Fretboard',
                            component: Fretboard,
                            defaultProps: DEFAULT_FRETBOARD_PROPS,
                            inputs: [
                                VIEWER_PROPS.fretLow,
                                VIEWER_PROPS.fretHigh,
                                VIEWER_PROPS.showDots,
                                VIEWER_PROPS.showFretNumbers,
                                VIEWER_PROPS.strings
                            ]
                        }
                    ]}
                />

                <h2>Reference</h2>

                <h3>Constants</h3>

                <h4>Degree</h4>

                <h4>Accidental</h4>

                <h4>Note Label</h4>

                <h3>Keyboard</h3>

                <h3>Fretboard</h3>

                <h3>Theory Engine</h3>

                <h2>Music Theory Appendix</h2>

                <h2>Create Your Own Component</h2>

                <h2>Examples</h2>

            </div >
        )
    }
}