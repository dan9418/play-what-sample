import "./Sample.css";
import { Fretboard, Keyboard, DEGREE, ACCIDENTAL, NOTE_LABEL, TheoryEngine, INTERVAL_PAIR, INTERVAL, CHORD, SCALE, MODE } from "C://Users/dan94/Desktop/play-what-alpha/build/play-what-alpha";
import React = require("react");
import { DemoBox } from "./DemoBox/DemoBox";
import { NumericInput } from "./Inputs/NumericInput/NumericInput";
import { SwitchInput } from "./Inputs/SwitchInput/SwitchInput";
import { EnumDropdownInput } from "./Inputs/EnumDropdownInput/EnumDropdownInput";

export class Sample extends React.Component<any, any> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="sample-container">

                <DemoBox
                    inputs={[
                        {
                            inputId: 'keyCenter',
                            children: [
                                {
                                    inputComponent: EnumDropdownInput,
                                    inputId: 'degree',
                                    props: {
                                        label: 'DEGREE',
                                        enum: DEGREE
                                    }
                                },
                                {
                                    inputComponent: EnumDropdownInput,
                                    inputId: 'accidental',
                                    props: {
                                        label: 'ACCIDENTAL',
                                        enum: ACCIDENTAL
                                    }
                                },
                                {
                                    inputComponent: NumericInput,
                                    inputId: 'octave'
                                },
                            ]
                        },
                        {
                            inputComponent: EnumDropdownInput,
                            inputId: 'noteLabel',
                            props: {
                                label: 'NOTE_LABEL',
                                enum: NOTE_LABEL
                            }
                        },
                        {
                            inputComponent: SwitchInput,
                            inputId: 'filterOctave'
                        },
                        {
                            inputComponent: NumericInput,
                            inputId: 'keyLow'
                        },
                        {
                            inputComponent: NumericInput,
                            inputId: 'keyHigh'
                        }
                    ]}
                    defaults={{
                        keyCenter: { degree: DEGREE.C, accidental: ACCIDENTAL.Natural, octave: 4 },
                        concept: { intervals: CHORD.Maj.intervals },
                        noteLabel: NOTE_LABEL.None,
                        filterOctave: true,
                        keyLow: 0,
                        keyHigh: 24
                    }}
                ></DemoBox>

                <h1>Play What?</h1>

                <p>Play What is a configurable, extensible music theory visualization tool and React component library.</p>

                <p>It provides a simple API for visualizing virtually any harmonic music theory concept.
                    Just provide the key, concept, and (optional) configuration to one of the built-in viewer components and
                    Play What will generate the properties of the respective notes and display them however they've been configured.</p>

                <h2>Usage</h2>

                <p>Currently, Play What provides two viewer components out-of-the-box: a keyboard and a fretboard.
                    Without providing any custom configuration, they will render as follows:</p>

                <pre>
                    {"<Fretboard/>"}
                </pre>

                <Fretboard />

                <pre>
                    {"<Keyboard/>"}
                </pre>

                <Keyboard />


                <p>To apply a music theory concept to a viewer, simply provide one via props.
                    There are built-in presets for chords, scales, modes, roman numerals, and interval pairs.
                    A complete list can be found in the documentation. By default, the notes are labeled with their respective interval and color-coded by degree.</p>

                <pre>{
                    `<Keyboard
    concept={{intervals: CHORD.Maj.intervals}}
/>`
                }</pre>

                <Keyboard
                    concept={{ intervals: CHORD.Maj.intervals }}
                />

                <h3>Modifying a Concept</h3>

                <p>By default, concepts are assumed to be in the key of C in the octave of Middle C. To change the key, provide a value for the keyCenter prop.</p>

                <pre>{
                    `<Keyboard
                    keyCenter={{ degree: DEGREE.G, accidental: ACCIDENTAL.Flat, octave: 5 }}
                    concept={{ intervals: CHORD.Maj.intervals }}
                />`
                }</pre>

                <Keyboard
                    keyCenter={{ degree: DEGREE.G, accidental: ACCIDENTAL.Flat, octave: 5 }}
                    concept={{ intervals: CHORD.Maj.intervals }}
                />

                <p>There is also support for chordal inversions and melodic inversions.</p>

                <pre>{
                    `<Keyboard
    keyCenter={{ degree: DEGREE.C, accidental: ACCIDENTAL.Natural, octave: 5 }}
    concept={{ intervals: CHORD.Maj.intervals, intervalOptions: { chordInversion: 1 } }}
/>`
                }</pre>

                <Keyboard
                    keyCenter={{ degree: DEGREE.C, accidental: ACCIDENTAL.Natural, octave: 5 }}
                    concept={{ intervals: CHORD.Maj.intervals, intervalOptions: { chordInversion: 1 } }}
                />

                <pre>{
                    `<Keyboard
    keyCenter={{ degree: DEGREE.C, accidental: ACCIDENTAL.Natural, octave: 5 }}
    concept={{ intervals: CHORD.Maj.intervals, intervalOptions: { melodicInversion: true } }}
/>`
                }</pre>

                <Keyboard
                    keyCenter={{ degree: DEGREE.C, accidental: ACCIDENTAL.Natural, octave: 5 }}
                    concept={{ intervals: CHORD.Maj.intervals, intervalOptions: { melodicInversion: true } }}
                />

                <h3>Configuring Viewers</h3>

                <p>Each viewer also its own API for modifying how concepts are displayed. A complete list of all the props and values is available in the documentation.</p>




            </div>
        )
    }
}