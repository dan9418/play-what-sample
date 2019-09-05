import * as React from "react";
import { Demo } from "../Demo/Demo";
import { TONIC, ACCIDENTAL, INTERVAL, CHORD, SCALE, MODE, ROMAN_NUMERAL, INTERVAL_PAIR, Fretboard, DEFAULT_FRETBOARD_PROPS, Keyboard, DEFAULT_KEYBOARD_PROPS } from 'play-what-beta';
import { FormattedTable } from "../Common/FormattedTable/FormattedTable";
import { IntervalTable } from "../Common/IntervalTable/IntervalTable";
import { ConceptTable } from "../Common/ConceptTable/ConceptTable";

export function Reference(props: any) {
    return (
        <div className='docs-section'>

            <h2>API Reference</h2>

            <h3>Object Types</h3>

            <h4>Tonic</h4>

            <p>
                The tonic is the note from which all other notes are referenced. It is always assigned the diatonic degree of 1
                and a letter name from A-G.
            </p>

            <FormattedTable
                headers={['Prop', 'Type', 'Description']}
                rows={[
                    ['id', 'string', 'Unique identifier'],
                    ['name', 'string', 'Display name'],
                    ['degreeInC', 'number', 'Degree in the key of C Major'],
                    ['pitchClass', 'number', 'Pitch class in the key of C Major']
                ]}
            />

            <h4>Accidental</h4>

            <p>
                An accidental offsets the pitch of a note. It is represented by a symbol (b or #) appended to the note's letter name.
            </p>

            <FormattedTable
                headers={['Prop', 'Type', 'Description']}
                rows={[
                    ['id', 'string', 'Unique identifier'],
                    ['name', 'string', 'Display name'],
                    ['offset', 'number', 'Offset applied by accidental in semitones']
                ]}
            />

            <h4>Interval</h4>

            <p>
                A musical interval represents the distance between two notes.
                The distance is measured in two ways, degree and semitones.
                Degree represents the difference in letter names (e.g. A to B).
                Semitones represent the difference in pitch.
            </p>

            <FormattedTable
                headers={['Prop', 'Type', 'Description']}
                rows={[
                    ['id', 'string', 'Unique identifier'],
                    ['name', 'string', 'Display name'],
                    ['degree', 'number', 'Difference in degrees'],
                    ['semitones', 'number', 'Difference in semitones']
                ]}
            />

            <h4>Concept</h4>

            <p>
                In Play What, a Concept is a collection of intervals including any instructions on how to interpret them.
            </p>

            <FormattedTable
                headers={['Prop', 'Type', 'Description']}
                rows={[
                    ['intervals', 'Interval', 'Intervals to derive notes from'],
                    ['chordInversion', 'number', 'Chord inversion (applied % intervals.length)']
                ]}
            />

            <h4>KeyCenter</h4>

            <p>
                In Play What, a KeyCenter specifies the exact tonic center from which to interpret the Intervals in Concepts.
            </p>

            <FormattedTable
                headers={['Prop', 'Type', 'Description']}
                rows={[
                    ['tonic', 'Tonic', 'Tonic of the key'],
                    ['accidental', 'Accidental', 'Accidental of tonic'],
                    ['octave', 'number', 'Octave number of tonic following ISO specs']
                ]}
            />

            <h4>Note</h4>

            <p>
                In Play What, Intervals are interpretted from their KeyCenter and converted to Note objects.
            </p>

            <FormattedTable
                headers={['Prop', 'Type', 'Description']}
                rows={[
                    ['name', 'string', 'Spelling of the note plus the accidental symbol'],
                    ['interval', 'Interval', 'Interval relative to the key center'],
                    ['noteIndex', 'number', 'Distance from Middle C in semitones'],
                    ['pitchClass', 'number', 'Distance from the last C in semitones'],
                    ['noteOctave', 'number', 'Octave of the note (not the key center)'],
                    ['frequency', 'number', 'Freqency in Hz']
                ]}
            />

            <h3>Using The withNotes HOC</h3>

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

            <h4>Defaults</h4>

            <p>
                If any property is omitted from the function call, it will be replaced with a default value.
            </p>

            <FormattedTable
                headers={['Prop', 'Value']}
                rows={[
                    ['concept.intervals', '[]'],
                    ['concept.chordInversion', '0'],
                    ['keyCenter.tonic', 'TONIC.C'],
                    ['keyCenter.accidental', 'ACCIDENTAL.Natural'],
                    ['keyCenter.octave', '4']
                ]}
            />

            <h4>Create Your Own Viewer</h4>

            <p>
                Viewer components aren't limited to the built-in presets.
                Any component, including your own, can be passed to the <span className='italic'>Viewer</span> argument and <span className='italic'>withNotes</span> will return that component with one new prop <span className='italic'>(notes: Note[])</span>.
            </p>

            <h3>Viewer Props</h3>

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

            <h2>Constants Reference</h2>

            <p>The following constants are available to import to make configuration easy and readable.</p>

            <h3>INTERVAL</h3>

            <h4>Degree vs. Semitones</h4>

            <IntervalTable intervals={(Object as any).values(INTERVAL)} />

            <h3>TONIC</h3>

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

            <h3>ACCIDENTAL</h3>

            <FormattedTable
                headers={['Value', 'Description']}
                rows={[
                    ['Natural', 'Does not alter the key tonic'],
                    ['Flat', 'Lowers the key tonic by one semitone'],
                    ['Sharp', 'Raises the key tonic by one semitone']
                ]}
            />

            <h3>NOTE_LABEL</h3>

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

            <h3>Concept Presets</h3>

            <p>The following constants are presets for common musical concepts. Each one contains an 'intervals' property.</p>

            <h3>CHORD</h3>

            <ConceptTable concepts={(Object as any).values(CHORD)} />

            <h3>SCALE</h3>

            <ConceptTable concepts={(Object as any).values(SCALE)} />

            <h3>MODE</h3>

            <ConceptTable concepts={(Object as any).values(MODE)} />

            <h3>ROMAN_NUMERAL</h3>

            <ConceptTable concepts={(Object as any).values(ROMAN_NUMERAL)} />

            <h3>INTERVAL_PAIR</h3>

            <p><span className='italic'>*Not to be confused with INTERVAL, which specifies a single interval</span></p>

            <ConceptTable concepts={(Object as any).values(INTERVAL_PAIR)} />

        </div>
    );
}