import "./App.css"
import ReactDOM = require("react-dom");
import React = require("react");

import { withNotes, Fretboard, Keyboard, KeyboardProps, DEFAULT_KEYBOARD_PROPS, DEFAULT_FRETBOARD_PROPS, TONIC, ACCIDENTAL, NOTE_LABEL, TheoryEngine, INTERVAL_PAIR, INTERVAL, CHORD, SCALE, MODE } from 'C://Users/dan94/Desktop/play-what-alpha/build/play-what-alpha';

import { IntervalTable } from "./IntervalTable";
import { Demo } from "./Demo/Demo";
import { PropertyDefinition, KEY_CENTER_INPUTS, CONCEPT_INPUTS, KEYBOARD_INPUTS, FRETBOARD_INPUTS } from "./Inputs/Input.config";
import { GettingStarted } from "./Docs/GettingStarted";

/* General */

export type ViewerDefinition = {
    id: string;
    name: string;
    component: any;
    defaultProps: any;
    inputs?: PropertyDefinition[];
}

type FormattedTableProps = {
    headers: string[];
    rows: string[][];
}

function FormattedTable(props: FormattedTableProps) {
    return (
        <table className='prop-table'>
            <tbody>
                <tr>
                    {props.headers.map((header, index) => { return <th key={index}>{header}</th> })}
                </tr>
                {props.rows.map((row, index) => {
                    return (
                        <tr key={index}>
                            {row.map((cell, index) => { return <td key={index}>{cell}</td>; })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

/* Sample */

export class App extends React.Component<any, any> {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className='sample-container'>

                {/*<Demo
                    imports={['withNotes', 'Keyboard', 'Fretboard']}
                    defaultKeyCenter={{
                        tonic: TONIC.C,
                        accidental: ACCIDENTAL.Natural,
                        octave: 4
                    }}
                    keyCenterInputs={[
                        KEY_CENTER_INPUTS.tonic,
                        KEY_CENTER_INPUTS.accidental,
                        KEY_CENTER_INPUTS.octave
                    ]}
                    defaultConcept={{
                        intervals: CHORD.Maj.intervals,
                        chordInversion: 0
                    }}
                    conceptInputs={[
                        CONCEPT_INPUTS.intervals,
                        CONCEPT_INPUTS.chordInversion
                    ]}
                    viewers={[
                        {
                            id: 'keyboard',
                            name: 'Keyboard',
                            component: Keyboard,
                            defaultProps: DEFAULT_KEYBOARD_PROPS,
                            inputs: [
                                KEYBOARD_INPUTS.keyLabel,
                                KEYBOARD_INPUTS.filterOctave,
                                KEYBOARD_INPUTS.keyLow,
                                KEYBOARD_INPUTS.keyHigh
                            ]
                        },
                        {
                            id: 'fretboard',
                            name: 'Fretboard',
                            component: Fretboard,
                            defaultProps: DEFAULT_FRETBOARD_PROPS,
                            inputs: [
                                FRETBOARD_INPUTS.fretLabel,
                                FRETBOARD_INPUTS.filterOctave,
                                FRETBOARD_INPUTS.fretLow,
                                FRETBOARD_INPUTS.fretLow,
                                FRETBOARD_INPUTS.showDots,
                                FRETBOARD_INPUTS.showFretNumbers,
                                FRETBOARD_INPUTS.strings
                            ]
                        }
                    ]}
                />*/}



                <h1>Play What?</h1>

                <p>Play What is a configurable, extensible music theory visualization tool and React component library.</p>

                <p>It provides a simple API for visualizing virtually any harmonic music theory concept.
                    Just provide the key, concept, and (optional) configuration to one of the built-in viewer components and
                    Play What will generate the properties of the respective notes and display them however they've been configured.</p>


                <GettingStarted/>

                <h2>Configuring Components</h2>

                <p>To apply a music theory concept to a viewer, simply provide a value to the intervals prop.
                    For an explanation of musical interval or concepts, please see the <a href=''>music theory appendix</a>.</p>
                <p>
                    There are built-in presets for chords, scales, modes, roman numerals, and interval pairs.
                    A complete list can be found in the <a href=''>reference section</a>.
                    By default, notes are labeled with their respective interval and colored by degree.</p>



                <h3>Modifying a Concept</h3>

                <p>By default, intervals are relative to the <a href=''>key</a> of C in the octave of <a href=''>Middle C</a>.
                To change the key, provide a value for the keyCenter prop.</p>


                <h4>Inversions</h4>

                <p>There is also support for chordal inversions.</p>



                <h3>Configuring How Notes Are Displayed</h3>

                <p>Components also accept props to specify how to display the provided notes.
                    For example, notes can be labeled or shown idependent of the provided octave.</p>


                <h3>Configuring Viewers</h3>

                <p>Each viewer also its own API for modifying the viewer itself.
                    See the <a href=''>reference section</a> for a complete list.</p>


                <h2>API and Music Theory Reference</h2>

                <h3>Constants</h3>

                <h4>INTERVAL</h4>

                <IntervalTable intervals={(Object as any).values(INTERVAL)} />

                <FormattedTable
                    headers={['Value', 'Description', 'Degree', 'Semitones']}
                    rows={[
                        ['PU', 'Perfect Unison', '1', '0']
                    ]}
                />

                <h4>CHORD</h4>

                <FormattedTable
                    headers={['Value', 'Description', 'Intervals']}
                    rows={[
                        ['Maj', 'Major Triad', 'PU, M3, P5']
                    ]}
                />

                <h4>SCALE</h4>

                <FormattedTable
                    headers={['Value', 'Description', 'Intervals']}
                    rows={[
                        ['Major', 'Major', 'PU, M2, M3, P4, P5, M6, M7']
                    ]}
                />

                <h4>MODE</h4>

                <FormattedTable
                    headers={['Value', 'Description', 'Intervals']}
                    rows={[
                        ['Ionian', 'Ionian', 'PU, M2, M3, P4, P5, M6, M7']
                    ]}
                />

                <h4>ROMAN_NUMERAL</h4>

                <FormattedTable
                    headers={['Value', 'Description', 'Chord']}
                    rows={[
                        ['I', 'Major 1', 'Maj']
                    ]}
                />

                <h4>DEGREE</h4>

                <FormattedTable
                    headers={['Value', 'Description']}
                    rows={[
                        ['C', 'Sets the 7 degrees as C D E F G A B, respectively'],
                        ['D', 'Sets the 7 degrees as D E F G A B C, respectively'],
                        ['E', 'Sets the 7 degrees as E F G A B C D, respectively'],
                        ['F', 'Sets the 7 degrees as F G A B C D E, respectively'],
                        ['G', 'Sets the 7 degrees as G A B C D E F, respectively'],
                        ['A', 'Sets the 7 degrees as A B C D E F G, respectively'],
                        ['B', 'Sets the 7 degrees as B C D E F G A, respectively']
                    ]}
                />

                <h4>ACCIDENTAL</h4>

                <FormattedTable
                    headers={['Value', 'Description']}
                    rows={[
                        ['Natural', 'Does not alter the key tonic'],
                        ['Flat', 'Lowers the key tonic by one semitone'],
                        ['Sharp', 'Raises the key tonic by one semitone']
                    ]}
                />

                <h4>NOTE_LABEL</h4>

                <FormattedTable
                    headers={['Value', 'Description']}
                    rows={[
                        ['None', 'No label'],
                        ['Name', 'The symbol of the notes degree and accidental e.g. A#, Gb...'],
                        ['Interval', 'The interval of the note relative to the key tonic'],
                        ['PitchClass', 'The number of semitones from the last key tonic'],
                        ['NoteIndex', 'The number of semitones from Middle C'],
                        ['RelativeDegree', 'The diatonic degree of the note'],
                        ['Octave', 'The octave that the note belongs to'],
                        ['Frequency', 'The pitch of the note in Hz']
                    ]}
                />

                <h3>Viewer Props</h3>

                <h4>Common</h4>

                <FormattedTable
                    headers={['Prop', 'Value', 'Default', 'Effect']}
                    rows={[
                        ['tonic', 'TONIC', 'TONIC.C', 'Tonic of the key'],
                        ['accidental', 'ACCIDENTAL', 'ACCIDENTAL.Natural', 'Accidental of tonic'],
                        ['octave', 'number', '4', 'Octave of tonic'],
                        ['intervals', 'INTERVAL[]', '[]', 'Intervals to derive notes from'],
                        ['chordInversion', 'number', '0', 'Chord inversion'],
                        ['filterOctave', 'boolean', 'true', 'Whether to show note in all octaves'],
                        ['noteLabel', 'NOTE_LABEL', 'NOTE_LABEL.Name', 'Text overlayed on each note']
                    ]}
                />

                <h4>Keyboard</h4>

                <FormattedTable
                    headers={['Prop', 'Value', 'Default', 'Effect']}
                    rows={[
                        ['keyLow', 'noteIndex', '0', 'The note index of the first keyboard key'],
                        ['keyHigh', 'noteIndex', '25', 'The note index of the last keyboard key']
                    ]}
                />

                <h4>Fretboard</h4>

                <FormattedTable
                    headers={['Prop', 'Value', 'Default', 'Effect']}
                    rows={[
                        ['fretLow', 'noteIndex', '0', 'The number of the first fretboard fret'],
                        ['fretHigh', 'noteIndex', '12', 'The number of the last fretboard fret'],
                        ['showDots', 'boolean', 'true', 'Indicates whether to show the helper dots commonly found on fretboards'],
                        ['showFretNumbers', 'boolean', 'true', 'Indicates whether to show fret numbers above each fret'],
                        ['strings', 'stringConfig[]', '(standard guitar)', 'An array of config ojects specifiying fretboard strings'],
                        ['strings[n].tuning', 'noteIndex', '0', 'The node index of the strings open note'],
                        ['strings[n].unfilteredIntervals', 'INTERVAL[]', 'undefined', 'If defined, specifies allowable intervals on the string']
                    ]}
                />
                <h2>Examples</h2>

                <p>Here is a "kitchen sink" example with all inputs enabled for all viewers.</p>

            </div >
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#app"));