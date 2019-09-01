import React = require("react");
import { Demo } from "../Demo/Demo";
import { KEY_CENTER_INPUTS, CONCEPT_INPUTS, KEYBOARD_INPUTS, FRETBOARD_INPUTS } from "../Inputs/Input.config";
import { withNotes, DEFAULT_KEY_CENTER, DEFAULT_CONCEPT, Fretboard, Keyboard, KeyboardProps, DEFAULT_KEYBOARD_PROPS, DEFAULT_FRETBOARD_PROPS, TONIC, ACCIDENTAL, NOTE_LABEL, TheoryEngine, INTERVAL_PAIR, INTERVAL, CHORD, SCALE, MODE } from 'C://Users/dan94/Desktop/play-what-alpha/build/play-what-alpha';

export function Examples(props: any) {
    return (
        <div className='docs-section'>
            <h2>Examples</h2>

            <p>Here is a "kitchen sink" example with all inputs enabled for all viewers.</p>

            <Demo
                imports={['withNotes', 'Keyboard', 'Fretboard']}
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