import * as React from "react";
import { Demo } from "../Demo/Demo";
import { Fretboard, DEFAULT_FRETBOARD_PROPS, Keyboard, DEFAULT_KEYBOARD_PROPS } from 'play-what-beta';

export function Overview(props: any) {
    return (
        <div className='docs-section'>
            <h1>Play What?</h1>

            <p>Play What is a configurable, extensible music theory visualization tool and React component library.</p>

            <p>It provides a simple API for visualizing virtually any harmonic music theory concept.
                Just provide the key, concept, and (optional) configuration to one of the built-in viewer components and
                Play What will generate the properties of the respective notes and display them however they've been configured.</p>


        </div>
    );
}