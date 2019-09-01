import React = require("react");
import { Demo } from "../Demo/Demo";
import { KEY_CENTER_INPUTS, CONCEPT_INPUTS, KEYBOARD_INPUTS, FRETBOARD_INPUTS } from "../Inputs/Input.config";
import { withNotes, DEFAULT_KEY_CENTER, DEFAULT_CONCEPT, Fretboard, Keyboard, KeyboardProps, DEFAULT_KEYBOARD_PROPS, DEFAULT_FRETBOARD_PROPS, TONIC, ACCIDENTAL, NOTE_LABEL, TheoryEngine, INTERVAL_PAIR, INTERVAL, CHORD, SCALE, MODE, ROMAN_NUMERAL } from 'C://Users/dan94/Desktop/play-what-alpha/build/play-what-alpha';
import { FormattedTable } from "../Common/FormattedTable/FormattedTable";
import { ConceptTable } from "../Common/ConceptTable/ConceptTable";

export function APIReference(props: any) {
    return (
        <div className='docs-section'>

            <h4>CHORD</h4>

            <ConceptTable concepts={(Object as any).values(CHORD)} />

            <h4>SCALE</h4>

            <ConceptTable concepts={(Object as any).values(SCALE)} />

            <h4>MODE</h4>

            <ConceptTable concepts={(Object as any).values(MODE)} />

            <h4>ROMAN_NUMERAL</h4>

            <ConceptTable concepts={(Object as any).values(ROMAN_NUMERAL)} />

            <h4>INTERVAL_PAIR</h4>

            <ConceptTable concepts={(Object as any).values(INTERVAL_PAIR)} />

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
                    ['chordInversion', 'number', '0', 'Chord inversion']
                ]}
            />

            <h4>Keyboard</h4>

            <FormattedTable
                headers={['Prop', 'Value', 'Default', 'Effect']}
                rows={[
                    ['filterOctave', 'boolean', 'true', 'Whether to show note in all octaves'],
                    ['keyLabel', 'NOTE_LABEL', 'NOTE_LABEL.Name', 'Text overlayed on each key'],
                    ['keyLow', 'noteIndex', '0', 'The note index of the first keyboard key'],
                    ['keyHigh', 'noteIndex', '25', 'The note index of the last keyboard key']
                ]}
            />

            <h4>Fretboard</h4>

            <FormattedTable
                headers={['Prop', 'Value', 'Default', 'Effect']}
                rows={[
                    ['filterOctave', 'boolean', 'true', 'Whether to show note in all octaves'],
                    ['fretLabel', 'NOTE_LABEL', 'NOTE_LABEL.Name', 'Text overlayed on each fret'],
                    ['fretLow', 'noteIndex', '0', 'The number of the first fretboard fret'],
                    ['fretHigh', 'noteIndex', '12', 'The number of the last fretboard fret'],
                    ['showDots', 'boolean', 'true', 'Indicates whether to show the helper dots commonly found on fretboards'],
                    ['showFretNumbers', 'boolean', 'true', 'Indicates whether to show fret numbers above each fret'],
                    ['strings', 'stringConfig[]', '(standard guitar)', 'An array of config ojects specifiying fretboard strings'],
                    ['strings[n].tuning', 'noteIndex', '0', 'The node index of the strings open note'],
                    ['strings[n].unfilteredIntervals', 'INTERVAL[]', 'undefined', 'If defined, specifies allowable intervals on the string']
                ]}
            />
        </div>
    );
}