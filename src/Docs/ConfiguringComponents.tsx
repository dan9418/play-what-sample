import React = require("react");
import { Demo } from "../Demo/Demo";
import { KEY_CENTER_INPUTS, CONCEPT_INPUTS, KEYBOARD_INPUTS, FRETBOARD_INPUTS } from "../Inputs/Input.config";

import {
    Tonic, Accidental, Interval, ConceptPreset, PhysicalNote, FunctionalNote, CompleteNote,
    NOTE_LABEL, INTERVAL, MAJOR_SCALE, CALIBRATION_NOTE, TONIC, ACCIDENTAL, INTERVAL_PAIR, CHORD, SCALE, MODE, ROMAN_NUMERAL,
    Fretboard, FretboardProps, DEFAULT_FRETBOARD_PROPS,
    FretboardStringConfig,
    Keyboard, KeyboardProps, DEFAULT_KEYBOARD_PROPS,
    withNotes, ViewerProps, KeyCenter, DEFAULT_KEY_CENTER, Concept, DEFAULT_CONCEPT
} from 'C://Users/dan94/Desktop/play-what-alpha/build/play-what-alpha';

export function ConfiguringComponents(props: any) {
    return (
        <div className='docs-section'>

            <h2>Configuring Musical Concepts</h2>

            <h3>Apply a Concept</h3>

            <p>
                To apply a music theory concept to a viewer, provide a 'concept' object as the second argument to 'withNotes' as follows
            </p>

            <Demo
                imports={['withNotes', 'Keyboard', 'Fretboard']}
                conceptInputs={[
                    CONCEPT_INPUTS.intervals,
                    CONCEPT_INPUTS.chordInversion
                ]}
                defaultConcept={{
                    intervals: CHORD.Maj.intervals,
                    chordInversion: 0
                }}
                viewers={[
                    {
                        id: 'keyboard',
                        name: 'Keyboard',
                        component: Keyboard,
                        defaultProps: DEFAULT_KEYBOARD_PROPS
                    },
                    {
                        id: 'fretboard',
                        name: 'Fretboard',
                        component: Fretboard,
                        defaultProps: DEFAULT_FRETBOARD_PROPS
                    }
                ]}
            />

            <p>
                Every argument is optional and will be replaced by a default value if omitted.
                Play What interprets all concepts as an array of musical intervals.
                By default, notes are labeled with their respective interval and colored by degree.
                For an explanation of musical intervals, degrees, or chord inversions, please see the reference section.
            </p>

            <p>
                There are built-in presets for chords, scales, modes, roman numerals, and interval pairs.
                To use a preset, simply import the corresponding contant and pass it to concept arugment.
                A complete list can be found in the <a href=''>reference section</a>.
            </p>

            <h3>Changing The Key</h3>

            <p>
                A musical Key, or Key Center, provides a reference point from which intervals are relative.
                By default, intervals are relative to the key of C Natural in the octave of Middle C.
            </p>

            <p>
                To change the Key, provide a keyCenter object as the third argument to withNotes.
            </p>

            <Demo
                imports={['withNotes', 'Keyboard', 'Fretboard']}
                conceptInputs={[
                    CONCEPT_INPUTS.intervals,
                    CONCEPT_INPUTS.chordInversion
                ]}
                defaultConcept={{
                    intervals: CHORD.Maj.intervals,
                    chordInversion: 0
                }}
                keyCenterInputs={[
                    KEY_CENTER_INPUTS.tonic,
                    KEY_CENTER_INPUTS.accidental,
                    KEY_CENTER_INPUTS.octave
                ]}
                viewers={[
                    {
                        id: 'keyboard',
                        name: 'Keyboard',
                        component: Keyboard,
                        defaultProps: DEFAULT_KEYBOARD_PROPS
                    },
                    {
                        id: 'fretboard',
                        name: 'Fretboard',
                        component: Fretboard,
                        defaultProps: DEFAULT_FRETBOARD_PROPS
                    }
                ]}
            />

            <h2>Configuring Viewers</h2>

            <p>
                Viewers can also accept props to specify how to display the provided notes.
                Each viewer also its own API for modifying the viewer itself.
                See the <a href=''>reference section</a> for a complete list.
            </p>

            <Demo
                imports={['withNotes', 'Keyboard', 'Fretboard']}
                defaultKeyCenter={{
                    tonic: TONIC.C,
                    accidental: ACCIDENTAL.Natural,
                    octave: 4
                }}
                defaultConcept={{
                    intervals: CHORD.Maj.intervals,
                    chordInversion: 0
                }}
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
                            FRETBOARD_INPUTS.fretHigh,
                            FRETBOARD_INPUTS.showDots,
                            FRETBOARD_INPUTS.showFretNumbers,
                            FRETBOARD_INPUTS.strings
                        ]
                    }
                ]}
            />

        </div>
    );
}