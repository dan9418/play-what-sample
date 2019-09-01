import React = require("react");
import { IntervalTable } from "../Common/IntervalTable/IntervalTable";

import {
    Tonic, Accidental, Interval, ConceptPreset, PhysicalNote, FunctionalNote, CompleteNote,
    NOTE_LABEL, INTERVAL, MAJOR_SCALE, CALIBRATION_NOTE, TONIC, ACCIDENTAL, INTERVAL_PAIR, CHORD, SCALE, MODE, ROMAN_NUMERAL,
    Fretboard, FretboardProps, DEFAULT_FRETBOARD_PROPS,
    FretboardStringConfig,
    Keyboard, KeyboardProps, DEFAULT_KEYBOARD_PROPS,
    withNotes, ViewerProps, KeyCenter, DEFAULT_KEY_CENTER, Concept, DEFAULT_CONCEPT
} from 'C://Users/dan94/Desktop/play-what-alpha/build/play-what-alpha';

export function MusicTheoryGlossary(props: any) {
    return (
        <div className='docs-section'>
            <h2>Music Theory Glossary</h2>

            <p>Music theory is a huge topic, but you only need a basic understanding of two concepts to use Play What effectively, Key Center and Intervals.</p>

            <IntervalTable intervals={(Object as any).values(INTERVAL)} />
        </div>
    );
}