import * as React from "react";
import { Demo } from "../Demo/Demo";
import { TONIC, ACCIDENTAL, CHORD, Fretboard, DEFAULT_FRETBOARD_PROPS, Keyboard, DEFAULT_KEYBOARD_PROPS } from 'play-what-beta';
import { CONCEPT_INPUTS, KEY_CENTER_INPUTS, KEYBOARD_INPUTS, FRETBOARD_INPUTS } from "../Inputs/Input.config";
import { FormattedTable } from "../Common/FormattedTable/FormattedTable";

export function Tutorial(props: any) {
    return (
        <div className='docs-section'>
            <h1>Getting started</h1>

            <h2>Prerequisites</h2>

            <p>Your project should be configured for a Node.js environment and have React as a dependency</p>

            <h2>Installation</h2>

            <p>Play What is available as an npm package and can be installed via the command-line</p>

            <pre className='syntax'>
                <span className='keyword'>npm </span>
                <span className=''>install play-what-beta</span>
            </pre>

            <h2>Include A Component</h2>

            <p>
                Import a viewer component from 'play-what-beta' to use it in your project.
                Two built-in viewers are provided, Keyboard and Fretboard.
            </p>

            <p>
                To use a viewer component, pass it to the higher-order component <span className='inline-pre'>withNotes</span>.
                The returned component is ready to render with default configuration.
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

            <h1>Configuring Musical Concepts</h1>

            <h2>Apply a Concept</h2>

            <p>
                To apply a music theory concept to a viewer, provide a <span className='inline-pre'>concept</span> object as the second argument to <span className='inline-pre'>withNotes</span>.
            </p>

            <FormattedTable
                headers={['Property', 'Type', 'Default', 'Description']}
                rows={[
                    ['intervals?', 'Interval[]', '[]', 'Intervals in concept'],
                    ['chordInversion?', 'number', '0', 'Chord inversion number']
                ]}
            />

            <p>
                Interval presets are available for common chords, scales, modes, roman numerals, and interval pairs.
                Simply import a constant and include its intervals in the concept object as illustrated below.
                See the reference section for a complete list of presets.
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
                Play What converts the array of musical intervals to actual notes.
                By default, notes are labeled with their respective name and colored by interval degree.
                For an explanation of musical intervals or degrees, please see the reference section.
            </p>

            <h2>Change The Key</h2>

            <p>
                To change the Key (or 'Key Center'), provide a keyCenter object as the third argument.
            </p>

            <FormattedTable
                headers={['Property', 'Type', 'Default', 'Description']}
                rows={[
                    ['tonic', 'Tonic', 'TONIC.C', 'Tonic of the key'],
                    ['accidental', 'Accidental', 'ACCIDENTAL.Natural', 'Accidental of tonic'],
                    ['octave', 'number', '4', 'Octave number of tonic following ISO specs']
                ]}
            />

            <p>
                A musical Key provides a reference point from which intervals are interpretted.
                For explanations of tonic, accidental, and octave, see the reference section or try the demo below.
            </p>

            <Demo
                imports={[
                    ['withNotes', 'Keyboard', 'Fretboard'],
                    ['CHORD', 'SCALE', 'MODE', 'ROMAN_NUMERAL', 'INTERVAL_PAIR'],
                    ['TONIC', 'ACCIDENTAL']
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

            <h1>Configuring Viewers</h1>

            <p>
                Viewers can also accept props to specify how to display the provided notes.
                Each viewer also its own API for modifying the viewer itself.
                See the reference section for details.
            </p>

            <h2>Change The Instrument's Note Range</h2>

            <Demo
                imports={[
                    ['withNotes', 'Keyboard', 'Fretboard']
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
                            FRETBOARD_INPUTS.fretLow,
                            FRETBOARD_INPUTS.fretHigh,
                            FRETBOARD_INPUTS.strings
                        ]
                    }
                ]}
            />

            <h2>Change How And What Notes Are Displayed</h2>

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
                            KEYBOARD_INPUTS.filterOctave
                        ]
                    },
                    {
                        id: 'fretboard',
                        name: 'Fretboard',
                        component: Fretboard,
                        defaultProps: DEFAULT_FRETBOARD_PROPS,
                        inputs: [
                            FRETBOARD_INPUTS.fretLabel,
                            FRETBOARD_INPUTS.filterOctave
                        ]
                    }
                ]}
            />

            <h2>Change How The Viewer Looks</h2>

            <Demo
                imports={[
                    ['withNotes', 'Keyboard', 'Fretboard']
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
                        id: 'fretboard',
                        name: 'Fretboard',
                        component: Fretboard,
                        defaultProps: DEFAULT_FRETBOARD_PROPS,
                        inputs: [
                            FRETBOARD_INPUTS.showDots,
                            FRETBOARD_INPUTS.showFretNumbers
                        ]
                    }
                ]}
            />

            <h2>Create Your Own Viewer</h2>

            <p>
                Viewer components aren't limited to the built-in presets.
                Any component, including your own, can be passed to the <span className='inline-pre'>withNotes</span> HOC.
            </p>

            <pre className='syntax'>
                <span className='function'>{'withNotes'}</span>
                <span className='operator'>{'('}</span>
                <span className=''>{'Viewer: Component'}</span>
                <span className='operator'>{', '}</span>
                <span className=''>{'concept?: Concept'}</span>
                <span className='operator'>{', '}</span>
                <span className=''>{'keyCenter?: KeyCenter'}</span>
                <span className='operator'>{')'}</span>
            </pre>

            <p>
                The component will be returned with one new prop, <span className='inline-pre'>notes</span>, of type <span className='inline-pre'>Note</span>.
            </p>

            <FormattedTable
                headers={['Property', 'Type', 'Description']}
                rows={[
                    ['name', 'string', 'Spelling of the note plus the accidental symbol'],
                    ['interval', 'Interval', 'Interval relative to the key center'],
                    ['noteIndex', 'number', 'Distance from Middle C in semitones'],
                    ['pitchClass', 'number', 'Distance from the last C in semitones'],
                    ['noteOctave', 'number', 'Octave of the note (not the key center)'],
                    ['frequency', 'number', 'Freqency in Hz']
                ]}
            />

        </div>
    );
}