import * as React from "react";
import { Demo } from "../Demo/Demo";
import { KEY_CENTER_INPUTS, CONCEPT_INPUTS, KEYBOARD_INPUTS, FRETBOARD_INPUTS } from "../Inputs/Input.config";
import { TONIC, ACCIDENTAL, CHORD, Fretboard, DEFAULT_FRETBOARD_PROPS, Keyboard, DEFAULT_KEYBOARD_PROPS } from 'play-what-beta';

export function Examples(props: any) {
    return (
        <div className='docs-section'>
            <h2>Examples</h2>

            <p>Here is a "kitchen sink" example with all inputs enabled for all viewers.</p>

            <Demo
                imports={[
                    ['withNotes', 'Keyboard', 'Fretboard'],
                    ['CHORD', 'SCALE', 'MODE', 'ROMAN_NUMERAL', 'INTERVAL_PAIR'],
                    ['TONIC', 'ACCIDENTAL'],
                    ['NOTE_LABEL']
                ]}
                defaultKeyCenter={{
                    tonic: TONIC.C,
                    accidental: ACCIDENTAL.Natural,
                    octave: 4
                }}
                keyCenterInputs={[
                    KEY_CENTER_INPUTS.tonic,
                    KEY_CENTER_INPUTS.accidental,
                    KEY_CENTER_INPUTS.octave
                ]}
                defaultConcept={{
                    intervals: CHORD.Maj.intervals,
                    chordInversion: 0
                }}
                conceptInputs={[
                    CONCEPT_INPUTS.intervals,
                    CONCEPT_INPUTS.chordInversion
                ]}
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
                    },
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
                            FRETBOARD_INPUTS.showDots,
                            FRETBOARD_INPUTS.showFretNumbers,
                            FRETBOARD_INPUTS.strings
                        ]
                    }
                ]}
            />

        </div>
    );
}