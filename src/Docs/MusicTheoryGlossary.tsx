import React = require("react");
import { Demo } from "../Demo/Demo";
import { KEY_CENTER_INPUTS, CONCEPT_INPUTS, KEYBOARD_INPUTS, FRETBOARD_INPUTS } from "../Inputs/Input.config";
import { withNotes, DEFAULT_KEY_CENTER, DEFAULT_CONCEPT, Fretboard, Keyboard, KeyboardProps, DEFAULT_KEYBOARD_PROPS, DEFAULT_FRETBOARD_PROPS, TONIC, ACCIDENTAL, NOTE_LABEL, TheoryEngine, INTERVAL_PAIR, INTERVAL, CHORD, SCALE, MODE } from 'C://Users/dan94/Desktop/play-what-alpha/build/play-what-alpha';
import { IntervalTable } from "../Common/IntervalTable/IntervalTable";

export function MusicTheoryGlossary(props: any) {
    return (
        <div className='docs-section'>
            <h2>Music Theory Glossary</h2>

            <p>Music theory is a huge topic, but you only need a basic understanding of two concepts to use Play What effectively, Key Center and Intervals.</p>

            <IntervalTable intervals={(Object as any).values(INTERVAL)} />
        </div>
    );
}