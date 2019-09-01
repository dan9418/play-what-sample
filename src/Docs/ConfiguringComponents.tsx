import React = require("react");
import { Demo } from "../Demo/Demo";
import { KEY_CENTER_INPUTS, CONCEPT_INPUTS, KEYBOARD_INPUTS, FRETBOARD_INPUTS } from "../Inputs/Input.config";
import { withNotes, DEFAULT_KEY_CENTER, DEFAULT_CONCEPT, Fretboard, Keyboard, KeyboardProps, DEFAULT_KEYBOARD_PROPS, DEFAULT_FRETBOARD_PROPS, TONIC, ACCIDENTAL, NOTE_LABEL, TheoryEngine, INTERVAL_PAIR, INTERVAL, CHORD, SCALE, MODE } from 'C://Users/dan94/Desktop/play-what-alpha/build/play-what-alpha';

export function ConfiguringComponents(props: any) {
    return (
        <div className='docs-section'>
            <h2>Configuring Components</h2>

            <p>To apply a music theory concept to a viewer, simply provide a value to the intervals prop.
                For an explanation of musical interval or concepts, please see the <a href=''>music theory appendix</a>.</p>
            <p>
                There are built-in presets for chords, scales, modes, roman numerals, and interval pairs.
                A complete list can be found in the <a href=''>reference section</a>.
                By default, notes are labeled with their respective interval and colored by degree.</p>

            <h3>Modifying a Concept</h3>

            <p>By default, intervals are relative to the <a href=''>key</a> of C in the octave of <a href=''>Middle C</a>.
                To change the key, provide a value for the keyCenter prop.</p>

            <h4>Inversions</h4>

            <p>There is also support for chordal inversions.</p>

            <h3>Configuring How Notes Are Displayed</h3>

            <p>Components also accept props to specify how to display the provided notes.
                For example, notes can be labeled or shown idependent of the provided octave.</p>

            <h3>Configuring Viewers</h3>

            <p>Each viewer also its own API for modifying the viewer itself.
                See the <a href=''>reference section</a> for a complete list.</p>
        </div>
    );
}