import * as React from "react";
import { Demo } from "../Demo/Demo";
import { TONIC, ACCIDENTAL, INTERVAL, CHORD, SCALE, MODE, ROMAN_NUMERAL, INTERVAL_PAIR, Fretboard, DEFAULT_FRETBOARD_PROPS, Keyboard, DEFAULT_KEYBOARD_PROPS } from 'play-what-beta';
import { FormattedTable } from "../Common/FormattedTable/FormattedTable";
import { IntervalTable } from "../Common/IntervalTable/IntervalTable";
import { ConceptTable } from "../Common/ConceptTable/ConceptTable";

export function Reference(props: any) {
    return (
        <div className='docs-section'>

            <h1>Music Theory Constants</h1>

            <p>The following constants are available to import to make configuration easy and readable.</p>

            <h2>TONIC</h2>

            <p>
                The tonic is the note from which all other notes are referenced. It is always assigned the diatonic degree of 1
                and a letter name from A-G.
            </p>

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

            <FormattedTable
                headers={['Prop', 'Type', 'Description']}
                rows={[
                    ['id', 'string', 'Unique identifier'],
                    ['name', 'string', 'Display name'],
                    ['degreeInC', 'number', 'Degree in the key of C Major'],
                    ['pitchClass', 'number', 'Pitch class in the key of C Major']
                ]}
            />

            <h2>ACCIDENTAL</h2>

            <p>
                An accidental offsets the pitch of a note. It is represented by a symbol (b or #) appended to the note's letter name.
            </p>

            <FormattedTable
                headers={['Value', 'Description']}
                rows={[
                    ['Natural', 'Does not alter the key tonic'],
                    ['Flat', 'Lowers the key tonic by one semitone'],
                    ['Sharp', 'Raises the key tonic by one semitone']
                ]}
            />

            <FormattedTable
                headers={['Prop', 'Type', 'Description']}
                rows={[
                    ['id', 'string', 'Unique identifier'],
                    ['name', 'string', 'Display name'],
                    ['offset', 'number', 'Offset applied by accidental in semitones']
                ]}
            />

            <h2>INTERVAL</h2>

            <p>
                A musical interval represents the distance between two notes.
                The distance is measured in two ways, degree and semitones.
                Degree represents the difference in letter names (e.g. A to B).
                Semitones represent the difference in pitch.
            </p>

            <h4>Degree vs. Semitones</h4>

            <IntervalTable intervals={(Object as any).values(INTERVAL)} />

            <FormattedTable
                headers={['Prop', 'Type', 'Description']}
                rows={[
                    ['id', 'string', 'Unique identifier'],
                    ['name', 'string', 'Display name'],
                    ['degree', 'number', 'Difference in degrees'],
                    ['semitones', 'number', 'Difference in semitones']
                ]}
            />

            <h2>NOTE_LABEL</h2>

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

            <h1>Viewer Props</h1>

            <p>Each viewer has its own API for configuring how notes are displayed.</p>

            <h4>Keyboard</h4>

            <FormattedTable
                headers={['Prop', 'Type', 'Default', 'Description']}
                rows={[
                    ['filterOctave', 'boolean', 'true', 'Indicates whether to show note in all octaves'],
                    ['keyLabel', 'NOTE_LABEL', 'NOTE_LABEL.Name', 'Text overlayed on each key'],
                    ['keyLow', 'number', '0', 'The note index of the first keyboard key'],
                    ['keyHigh', 'number', '25', 'The note index of the last keyboard key']
                ]}
            />

            <h4>Fretboard</h4>

            <FormattedTable
                headers={['Prop', 'Type', 'Default', 'Description']}
                rows={[
                    ['filterOctave', 'boolean', 'true', 'Indicates whether to show note in all octaves'],
                    ['fretLabel', 'NOTE_LABEL', 'NOTE_LABEL.Name', 'Text overlayed on each fret'],
                    ['fretLow', 'number', '0', 'The number of the first fretboard fret'],
                    ['fretHigh', 'number', '12', 'The number of the last fretboard fret'],
                    ['showDots', 'boolean', 'true', 'Indicates whether to show the helper dots commonly found on fretboards'],
                    ['showFretNumbers', 'boolean', 'true', 'Indicates whether to show fret numbers above each fret'],
                    ['strings', 'stringConfig[]', '(standard guitar)', 'An array of config ojects specifiying fretboard strings'],
                    ['strings[n].tuning', 'number', '0', 'The note index of the strings open note'],
                    ['strings[n].unfilteredIntervals', 'INTERVAL[]', 'undefined', 'If defined, specifies allowable intervals on the string']
                ]}
            />

            <h1>Concept Presets</h1>

            <p>The following constants are presets for common musical concepts. Each contains an 'intervals' property.</p>

            <h2>CHORD</h2>

            <ConceptTable concepts={(Object as any).values(CHORD)} />

            <h2>SCALE</h2>

            <ConceptTable concepts={(Object as any).values(SCALE)} />

            <h2>MODE</h2>

            <ConceptTable concepts={(Object as any).values(MODE)} />

            <h2>ROMAN_NUMERAL</h2>

            <p><span className='italic'>*More roman numeral support planned for future releases</span></p>

            <ConceptTable concepts={(Object as any).values(ROMAN_NUMERAL)} />

            <h2>INTERVAL_PAIR</h2>

            <p><span className='italic'>*Not to be confused with INTERVAL, which specifies a single interval</span></p>

            <ConceptTable concepts={(Object as any).values(INTERVAL_PAIR)} />

        </div>
    );
}