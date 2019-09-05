import * as React from "react";
import { Demo } from "../Demo/Demo";
import { TONIC, ACCIDENTAL, CHORD, Fretboard, DEFAULT_FRETBOARD_PROPS, Keyboard, DEFAULT_KEYBOARD_PROPS } from 'play-what-beta';
import { CONCEPT_INPUTS, KEY_CENTER_INPUTS, KEYBOARD_INPUTS, FRETBOARD_INPUTS } from "../Inputs/Input.config";

export function Tutorial(props: any) {
    return (
        <div className='docs-section'>
            <h2>Getting started</h2>

            <h3>Prerequisites</h3>

            <p>Your project should be configured for a Node.js environment and have React as a dependency</p>

            <h3>Installation</h3>

            <p>Play What is available as an npm package and can be installed via the command-line</p>

            <pre className='syntax'>
                <span className='keyword'>npm </span>
                <span className=''>install play-what-beta</span>
            </pre>

            <h3>Include Component</h3>

            <p>
                Import a component from 'play-what' to use it in your project.
                Play What currently provides two viewer components out-of-the-box, Keyboard and Fretboard
</p>

            <p>
                Viewers are intended for use with the Higher-Order Component <span className='italic'>withNotes</span>,
                which supplies the viewer with props for musical notes.
</p>

            <p>
                To use a viewer component with the default configuration, simply pass it as the first argument to <span className='italic'>withNotes</span>.
                The returned component is ready to be rendered as-is.
</p>

            <Demo
                imports={[['withNotes', 'Keyboard', 'Fretboard']]}
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
                We will learn how to add musical notes in the next section.
</p>

            <h2>Configuring Musical Concepts</h2>

            <h3>Apply a Concept</h3>

            <p>
                To apply a music theory concept to a viewer, provide a <span className='italic'>concept</span> object as the second argument to <span className='italic'>withNotes</span>.
                A breakdown of the concept object properties is available in the API reference.
                Each property is optional and will be replaced by a default value if omitted.
            </p>

            <p>
                There are built-in presets for common chords, scales, modes, roman numerals, and interval pairs.
                To use a preset, simply import the corresponding contant and include it in the concept argument.
                A complete list is available in the reference section.
            </p>

            <Demo
                imports={[
                    ['withNotes', 'Keyboard', 'Fretboard'],
                    ['CHORD', 'SCALE', 'MODE', 'ROMAN_NUMERAL', 'INTERVAL_PAIR']
                ]}
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
                Play What interprets all concepts as an array of musical intervals.
                By default, notes are labeled with their respective name and colored by interval degree.
                For an explanation of musical intervals, degrees, or other musical concepts, please see the reference section.
            </p>

            <h3>Change The Key</h3>

            <p>
                A musical Key, or Key Center, provides a reference point from which intervals are interpretted.
                By default, intervals are relative to the key of C Natural in the octave of Middle C.
            </p>

            <p>
                To change the Key, provide a keyCenter object as the third argument to withNotes.
                Again, all properties are optional and details can be found in the reference section.
            </p>

            <Demo
                imports={[
                    ['withNotes', 'Keyboard', 'Fretboard'],
                    ['CHORD', 'SCALE', 'MODE', 'ROMAN_NUMERAL', 'INTERVAL_PAIR'],
                    ['TONIC', 'ACCIDENTAL']
                ]}
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
                See the reference section for details.
            </p>

            <Demo
                imports={[
                    ['withNotes', 'Keyboard', 'Fretboard'],
                    ['NOTE_LABEL'],
                ]}
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