import React = require("react");
import { Demo } from "../Demo/Demo";
import { KEY_CENTER_INPUTS, CONCEPT_INPUTS, KEYBOARD_INPUTS, FRETBOARD_INPUTS } from "../Inputs/Input.config";
import { withNotes, DEFAULT_KEY_CENTER, DEFAULT_CONCEPT, Fretboard, Keyboard, KeyboardProps, DEFAULT_KEYBOARD_PROPS, DEFAULT_FRETBOARD_PROPS, TONIC, ACCIDENTAL, NOTE_LABEL, TheoryEngine, INTERVAL_PAIR, INTERVAL, CHORD, SCALE, MODE } from 'C://Users/dan94/Desktop/play-what-alpha/build/play-what-alpha';

export function GettingStarted(props: any) {
    return (
        <div className='docs-section'>
            <p>Play What is a configurable, extensible music theory visualization tool and React component library.</p>

            <p>It provides a simple API for visualizing virtually any harmonic music theory concept.
                Just provide the key, concept, and (optional) configuration to one of the built-in viewer components and
                Play What will generate the properties of the respective notes and display them however they've been configured.</p>

            <h2>Getting started</h2>

            <h3>Installation</h3>

            <p>Play What is available as an npm package and can be installed via the command-line:</p>

            <pre className='syntax'>
                <span className='keyword'>npm </span>
                <span className=''>install play-what</span>
            </pre>

            <h3>Include Component</h3>

            <p>Import a component from 'play-what' to use it in your project.
                Play What currently provides two viewer components out-of-the-box, 'Keyboard' and 'Fretboard'.
                Each component will render with default configuration if no props are provided.</p>

            <Demo
                imports={['withNotes', 'Keyboard', 'Fretboard']}
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
        </div>
    );
}