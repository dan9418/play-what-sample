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

            <p>Your project should be configured for a Node.js environment with React as a dependency.</p>

            <h2>Installation</h2>

            <p>Play What is available as an npm package and can be installed via the command-line.</p>

            <pre className='syntax'>
                <span className='keyword'>npm </span>
                <span className=''>install play-what-beta</span>
            </pre>

            <h2>Include A Component</h2>

            <p>
                Import a viewer component from <span className='inline-pre'>'play-what-beta'</span> to use it in your project.
                Two built-in viewers are provided, <span className='inline-pre'>Keyboard</span> and <span className='inline-pre'>Fretboard</span>.
                Each viewer is ready to render with default configuration.
            </p>

            <Demo
                imports={[['Keyboard', 'Fretboard']]}
                disableHoc={true}
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

            <h1>Applying Musical Concepts</h1>

            <h2>Using the <span className='italic'>withNotes</span> HOC</h2>

            <p>
                To add musical notes to a viewer, we must first pass it to the <a href='https://reactjs.org/docs/higher-order-components.html' target='_blank'>higher-order component</a> <span className='inline-pre'>withNotes</span> as shown below.
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

            <h2>Adding Musical Notes</h2>

            <p>
                By default, the returned component does not contain any musical notes.
                To add some, provide a <span className='inline-pre'>Concept</span> object as the second argument to <span className='inline-pre'>withNotes</span>.
            </p>

            <FormattedTable
                title='Concept Interface'
                headers={['Property', 'Type', 'Default', 'Description']}
                rows={[
                    ['intervals?', 'Interval[]', '[]', 'Intervals in concept'],
                    ['chordInversion?', 'number', '0', 'Chord inversion number']
                ]}
            />

            <p>
                All values are optional.
                The most important idea here is the <span className='inline-pre'>intervals</span> array, which <span className='italic'>Play What</span> converts to musical notes.
                The <span className='inline-pre'>chordInversion</span> value alters the order of the intervals.
            </p>
            <p>
                Knowledge of musical intervals is not required.
                Simply import a preset to get started quickly, as shown below.
                Constants are available for common chords, scales, modes, roman numerals, and interval pairs.
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
                By default, notes are labeled with their respective name and colored by interval degree.
                For an explanation of musical intervals or degrees, please see the reference section.
            </p>

            <h2>Change The Key</h2>

            <p>
                To change the Key (or 'Key Center'), provide a <span className='inline-pre'>KeyCenter</span> object as the third argument.
            </p>

            <FormattedTable
                title='KeyCenter Interface'
                headers={['Property', 'Type', 'Default', 'Description']}
                rows={[
                    ['tonic', 'TONIC enum', 'C', 'Tonic of the key'],
                    ['accidental', 'ACCIDENTAL enum', 'Natural', 'Accidental of tonic'],
                    ['octave', 'number', '4', 'ISO octave number']
                ]}
            />

            <p>
                A musical key provides a reference point from which intervals are interpretted.
                Try the demo below to see how the key affects the notes.
                For explanations of tonic, accidental, and octave, see the reference section.
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
                Viewers can also accept props for additional configuration.
                Each viewer has its own API.
            </p>

            <h2>Keyboard</h2>

            <FormattedTable
                title='Keyboard Props'
                headers={['Prop', 'Type', 'Default', 'Description']}
                rows={[
                    ['filterOctave', 'boolean', 'true', 'Indicates whether to show note in all octaves'],
                    ['keyLabel', 'NOTE_LABEL enum', 'Name', 'Text overlayed on each key'],
                    ['keyLow', 'number', '0', 'The note index of the first keyboard key'],
                    ['keyHigh', 'number', '25', 'The note index of the last keyboard key']
                ]}
            />

            <Demo
                imports={[
                    ['withNotes', 'Keyboard']
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
                    }
                ]}
            />

            <h2>Fretboard</h2>

            <FormattedTable
                title='Fretboard Props'
                headers={['Prop', 'Type', 'Default', 'Description']}
                rows={[
                    ['filterOctave', 'boolean', 'true', 'Indicates whether to show notes in all octaves'],
                    ['fretLabel', 'NOTE_LABEL enum', 'Name', 'Text overlayed on each fret'],
                    ['fretLow', 'number', '0', 'The number of the first fretboard fret'],
                    ['fretHigh', 'number', '12', 'The number of the last fretboard fret'],
                    ['showDots', 'boolean', 'true', 'Indicates whether to show the helper dots commonly found on fretboards'],
                    ['showFretNumbers', 'boolean', 'true', 'Indicates whether to show fret numbers above each fret'],
                    ['strings', 'stringConfig[]', '(standard guitar)', 'An array of config ojects specifiying fretboard strings'],
                    ['strings[n].tuning', 'number', '0', 'The note index of the strings open note'],
                    ['strings[n].unfilteredIntervals', 'INTERVAL[]', 'undefined', 'If defined, specifies allowable intervals on the string (not available in demo)']
                ]}
            />

            <Demo
                imports={[
                    ['withNotes', 'Fretboard']
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
                            FRETBOARD_INPUTS.fretLabel,
                            FRETBOARD_INPUTS.filterOctave,
                            FRETBOARD_INPUTS.fretLow,
                            FRETBOARD_INPUTS.fretHigh,
                            FRETBOARD_INPUTS.strings,
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
                <span className=''>{'Viewer: '}</span>
                <span className='var'>{'Component'}</span>
                <span className='operator'>{', '}</span>
                <span className=''>{'concept?: '}</span>
                <span className='var'>{'Concept'}</span>
                <span className='operator'>{', '}</span>
                <span className=''>{'keyCenter?: '}</span>
                <span className='var'>{'KeyCenter'}</span>
                <span className='operator'>{')'}</span>
            </pre>

            <p>
                The returned component will receive one new prop <span className='inline-pre'>notes</span>, of type <span className='inline-pre'>Note[]</span>
            </p>

            <FormattedTable
                title='Note Interface'
                headers={['Property', 'Type', 'Description']}
                rows={[
                    ['name', 'string', 'Letter name of the note plus the accidental symbol'],
                    ['interval', 'Interval', 'Interval relative to the key center'],
                    ['noteIndex', 'number', 'Distance from Middle C in semitones'],
                    ['pitchClass', 'number', 'Distance from the last C in semitones'],
                    ['noteOctave', 'number', 'Octave of the note (not the key center octave)'],
                    ['frequency', 'number', 'Freqency in Hz']
                ]}
            />

        </div>
    );
}