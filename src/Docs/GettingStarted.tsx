import * as React from "react";
import { Demo } from "../Demo/Demo";

import {
    Tonic, Accidental, Interval, ConceptPreset, PhysicalNote, FunctionalNote, CompleteNote,
    NOTE_LABEL, INTERVAL, MAJOR_SCALE, CALIBRATION_NOTE, TONIC, ACCIDENTAL, INTERVAL_PAIR, CHORD, SCALE, MODE, ROMAN_NUMERAL,
    Fretboard, FretboardProps, DEFAULT_FRETBOARD_PROPS,
    FretboardStringConfig,
    Keyboard, KeyboardProps, DEFAULT_KEYBOARD_PROPS,
    withNotes, ViewerProps, KeyCenter, DEFAULT_KEY_CENTER, Concept, DEFAULT_CONCEPT
} from 'C://Users/dan94/Desktop/play-what-alpha/build/play-what-alpha';

export function GettingStarted(props: any) {
    return (
        <div className='docs-section'>

            <h2>Getting started</h2>

            <h3>Installation</h3>

            <p>Play What is available as an npm package and can be installed via the command-line</p>

            <pre className='syntax'>
                <span className='keyword'>npm </span>
                <span className=''>install play-what</span>
            </pre>

            <h3>Include Component</h3>

            <p>
                Import a component from 'play-what' to use it in your project.
                Play What currently provides two viewer components out-of-the-box, Keyboard and Fretboard
            </p>

            <p>
                Viewers are intended for use with the Higher-Order Component <span className='italic'>withNotes</span>,
                which supplies the viewer with props for musical notes.
            </p>

            <p>
                To use a viewer component with the default configuration, simply pass it as the first argument to <span className='italic'>withNotes</span>.
                The returned component is ready to be rendered as-is.
            </p>

            <Demo
                imports={[['withNotes', 'Keyboard', 'Fretboard']]}
                viewers={[
                    {
                        id: 'keyboard',
                        name: 'Keyboard',
                        component: Keyboard,
                        defaultProps: DEFAULT_KEYBOARD_PROPS
                    },
                    {
                        id: 'fretboard',
                        name: 'Fretboard',
                        component: Fretboard,
                        defaultProps: DEFAULT_FRETBOARD_PROPS
                    }
                ]}
            />

            <p>
                We will learn how to add musical notes in the next section.
            </p>

        </div>
    );
}