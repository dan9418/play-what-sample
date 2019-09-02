import * as React from "react";
import { FormattedTable } from "../Common/FormattedTable/FormattedTable";
import { ConceptTable } from "../Common/ConceptTable/ConceptTable";

import {
    Tonic, Accidental, Interval, ConceptPreset, PhysicalNote, FunctionalNote, CompleteNote,
    NOTE_LABEL, INTERVAL, MAJOR_SCALE, CALIBRATION_NOTE, TONIC, ACCIDENTAL, INTERVAL_PAIR, CHORD, SCALE, MODE, ROMAN_NUMERAL,
    Fretboard, FretboardProps, DEFAULT_FRETBOARD_PROPS,
    FretboardStringConfig,
    Keyboard, KeyboardProps, DEFAULT_KEYBOARD_PROPS,
    withNotes, ViewerProps, KeyCenter, DEFAULT_KEY_CENTER, Concept, DEFAULT_CONCEPT
} from 'C://Users/dan94/Desktop/play-what-alpha/build/play-what-alpha';
import { IntervalTable } from "../Common/IntervalTable/IntervalTable";

export function ConstantsReference(props: any) {
    return (
        <div className='docs-section'>

            <h2>Constants Reference</h2>

            <p>The following constants are available to import to make configuration easy and readable.</p>

            <h3>INTERVAL</h3>

            <h4>Degree vs. Semitones</h4>

            <IntervalTable intervals={(Object as any).values(INTERVAL)} />

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

            <h3>DEGREE</h3>

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

        </div>
    );
}