import * as React from "react";
import { Demo } from "../Demo/Demo";
import { TONIC, ACCIDENTAL, INTERVAL, CHORD, SCALE, MODE, ROMAN_NUMERAL, INTERVAL_PAIR, Fretboard, DEFAULT_FRETBOARD_PROPS, Keyboard, DEFAULT_KEYBOARD_PROPS } from 'play-what-beta';
import { FormattedTable } from "../Common/FormattedTable/FormattedTable";
import { IntervalTable } from "../Common/IntervalTable/IntervalTable";
import { ConceptTable } from "../Common/ConceptTable/ConceptTable";

export function Reference(props: any) {
    return (
        <div className='docs-section'>

            <h1>Enum Values</h1>

            <p>The following enums can be imported to make configuration easy and readable.</p>

            <h2>Tonics</h2>

            <p>
                The tonic is the note from which all other notes are referenced.
                <br />
                It always has a degree of 1 and a letter name from A-G.
            </p>

            <FormattedTable
                title='TONIC'
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

            {/*<FormattedTable
                title=''
                headers={['Prop', 'Type', 'Description']}
                rows={[
                    ['id', 'string', 'Unique identifier'],
                    ['name', 'string', 'Display name'],
                    ['degreeInC', 'number', 'Degree in the key of C Major'],
                    ['pitchClass', 'number', 'Pitch class in the key of C Major']
                ]}
            />*/}

            <h2>Accidental</h2>

            <p>
                An accidental offsets the pitch of a note.
                <br />
                It is represented by a symbol (generally b or #) appended to the note's letter name.
            </p>

            <FormattedTable
                title='ACCIDENTAL'
                headers={['Value', 'Description']}
                rows={[
                    ['Natural', 'Does not alter the key tonic'],
                    ['Flat', 'Lowers the key tonic by one semitone'],
                    ['Sharp', 'Raises the key tonic by one semitone']
                ]}
            />

            {/*<FormattedTable
                title=''
                headers={['Prop', 'Type', 'Description']}
                rows={[
                    ['id', 'string', 'Unique identifier'],
                    ['name', 'string', 'Display name'],
                    ['offset', 'number', 'Offset applied by accidental in semitones']
                ]}
            />*/}

            <h2>Interval</h2>

            <p>
                A musical interval represents the distance between two notes.
                <br />
                The distance is measured in two ways, <span className='italic'>degree</span> and <span className='italic'>semitones</span>.
                <br/>
                Degree represents the difference in letter names (e.g. A to B).
                <br />
                Semitones represent the difference in pitch.
                <br />
                There are 12 semitones in an octave,
            </p>

            <p>
                The table below shows the available <span className='inline-pre'>INTERVAL</span> enums organized by degree (y) and semitones (x).
            </p>

            <IntervalTable intervals={(Object as any).values(INTERVAL)} />

            {/*<FormattedTable
                title=''
                headers={['Prop', 'Type', 'Description']}
                rows={[
                    ['id', 'string', 'Unique identifier'],
                    ['name', 'string', 'Display name'],
                    ['degree', 'number', 'Difference in degrees'],
                    ['semitones', 'number', 'Difference in semitones']
                ]}
            />*/}

            <h2>Note Label</h2>

            <p>
                The following enums can be used to represent the properties exposed by a <span className='inline-pre'>Note</span> object.
            </p>

            <FormattedTable
                title='NOTE_LABEL'
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

            <h1>Concept Presets</h1>

            <p>
                The following constants contain presets for common musical concepts.
                <br />
                Each preset has an <span className='inline-pre'>intervals</span> property that can be included in a <span className='inline-pre'>Concept</span> object.
            </p>

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