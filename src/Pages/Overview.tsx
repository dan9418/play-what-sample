import * as React from "react";
import { Demo } from "../Demo/Demo";
import { withNotes, CHORD, TONIC, Fretboard, DEFAULT_FRETBOARD_PROPS, Keyboard, DEFAULT_KEYBOARD_PROPS } from 'play-what-beta';
import { Example } from "../Example/Example";

export function Overview(props: any) {
    return (
        <div className='docs-section'>
            <h1>Play What?</h1>

            <p>
                <span className='italic'>Play What</span> is a configurable, extensible music theory visualization tool and React component library.
                It provides a simple API for visualizing virtually any harmonic music theory concept.
            </p>

            <h2>Features</h2>

            <ul>
                <li>Built-in presets for Chords, Scales, Modes, and Roman Numerals</li>
                <li>Support for chordal inversions</li>
                <li>Easy transposition of any concept to any key and/or octave</li>
                <li>Highly configurable viewer components to visualize these concepts</li>
                <li>Built-in viewers for keyboards and fretboards</li>
                <li>A simple API for creating custom viewers</li>
            </ul>

            <h2>Examples</h2>

            <h3>Compare concepts between instruments</h3>

            <Example viewer={Keyboard} concept={{ intervals: CHORD.Maj.intervals }} label='Piano' />

            <Example viewer={Fretboard} concept={{ intervals: CHORD.Maj.intervals }} label='Guitar' />

            <h3>Tune and restring instruments</h3>

            <Example viewer={Fretboard} concept={{ intervals: CHORD.Maj.intervals }} keyCenter={{ tonic: TONIC.E, octave: 3 }} label='Guitar' />

            <Example viewer={Fretboard} concept={{ intervals: CHORD.Maj.intervals }} keyCenter={{ tonic: TONIC.E, octave: 3 }} viewerProps={{
                strings: [
                    { tuning: -5 },    // G
                    { tuning: -10 },    // D
                    { tuning: -15 },   // A
                    { tuning: -20 }    // E
                ]
            }} label='Bass' />

            <h3>Create chord progressions</h3>

            <h3>Control viewers ryhtymically</h3>

        </div>
    );
}