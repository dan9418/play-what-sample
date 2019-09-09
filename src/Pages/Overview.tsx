import * as React from "react";
import { NOTE_LABEL, INTERVAL, SCALE, ROMAN_NUMERAL, CHORD, TONIC, Fretboard, Keyboard } from 'play-what-beta';
import { Example } from "../Example/Example";

export function Overview(props: any) {
    return (
        <div className='docs-section'>

            <h1>Play What?</h1>

            <p>
                <span className='italic'>Play What</span> is a React component library and framework for visualizing music theory concepts.
                It provides a simple API for configuring viewer components and creating your own.
            </p>

            <h2>Features</h2>

            <ul>
                <li>Presets for Chords, Scales, Modes, and Roman Numerals</li>
                <li>Easy transposition of any concept to any key and/or octave</li>
                <li>Configurable viewer components to visualize these concepts</li>
                <li>Built-in viewers for keyboards and fretboards</li>
                <li>A simple API for creating custom viewers</li>
            </ul>

            <h2>Example Applications</h2>

            <h3>Configure concepts and how they're displayed</h3>

            <Example viewer={Keyboard} viewerProps={{ keyHigh: 12, keyLabel: NOTE_LABEL.Name }} concept={{ intervals: CHORD.Maj.intervals }} keyCenter={{ tonic: TONIC.E }} label='Chords' />

            <Example viewer={Keyboard} viewerProps={{ keyHigh: 12, keyLabel: NOTE_LABEL.Interval }} concept={{ intervals: SCALE.HarmonicMinor.intervals }} label='Scales and Modes' />

            <Example viewer={Keyboard} viewerProps={{ keyLow: 2, keyHigh: 16, keyLabel: NOTE_LABEL.Degree }} concept={{ intervals: CHORD.Min.intervals, chordInversion: 1 }} keyCenter={{ tonic: TONIC.D }} label='Inversions' />

            <h3>View concepts on different instruments</h3>

            <Example viewer={Fretboard} concept={{ intervals: CHORD.Maj.intervals }} label='Guitar' />

            <Example viewer={Fretboard} concept={{ intervals: CHORD.Maj.intervals }} viewerProps={{
                strings: [
                    { tuning: -5 },    // G
                    { tuning: -10 },    // D
                    { tuning: -15 },   // A
                    { tuning: -20 }    // E
                ]
            }} label='Bass Guitar' />

            <Example viewer={Keyboard} concept={{ intervals: CHORD.Maj.intervals }} label='Piano' />

            <h3>Customize tunings and voicings</h3>

            <Example viewer={Fretboard} concept={{ intervals: CHORD.Maj.intervals }} keyCenter={{ tonic: TONIC.D }} viewerProps={{
                fretHigh: 3,
                strings: [
                    { tuning: 16 },   // e
                    { tuning: 11 },   // B
                    { tuning: 7 },    // G
                    { tuning: 2 },    // D
                    { tuning: -3, unfilteredIntervals: [] },   // A
                    { tuning: -8, unfilteredIntervals: [] }    // E
                ],
                filterOctave: false,
                showDots: false
            }} label='Standard' />

            <Example viewer={Fretboard} concept={{ intervals: CHORD.Maj.intervals }} keyCenter={{ tonic: TONIC.D }} viewerProps={{
                fretLow: 10,
                fretHigh: 13,
                strings: [
                    { tuning: 16 },   // e
                    { tuning: 11 },   // B
                    { tuning: 7 },    // G
                    { tuning: 2 },    // D
                    { tuning: -3 },   // A
                    { tuning: -8 }    // E
                ],
                filterOctave: false,
                showDots: false
            }} label='Standard (Barre)' />

            <Example viewer={Fretboard} concept={{ intervals: CHORD.Maj.intervals }} keyCenter={{ tonic: TONIC.D }} viewerProps={{
                fretHigh: 3,
                strings: [
                    { tuning: 14 },   // d
                    { tuning: 9 },   // A
                    { tuning: 6, unfilteredIntervals: [INTERVAL.M3] },    // F#
                    { tuning: 2 },    // D
                    { tuning: -3 },   // A
                    { tuning: -10 }    // D
                ],
                filterOctave: false,
                showDots: false
            }} label='Open D' />

            <h3>Demonstrate chord progressions</h3>

            <Example viewer={Keyboard} viewerProps={{ keyHigh: 14 }} concept={{ intervals: ROMAN_NUMERAL.ii.intervals }} label='ii' />

            <Example viewer={Keyboard} viewerProps={{ keyHigh: 14 }} concept={{ intervals: ROMAN_NUMERAL.V.intervals }} label='V' />

            <Example viewer={Keyboard} viewerProps={{ keyHigh: 14 }} concept={{ intervals: ROMAN_NUMERAL.I.intervals }} label='I' />


            <h2>Contribute</h2>

            <p>
                Many improvements and features are planned for <span className='italic'>Play What</span>.
            </p>

            <p>
                See the <a href='https://github.com/dan9418/play-what-beta' target='_blank'>GitHub page</a> to report bugs, make a pull request, or request features.
            </p>

        </div>
    );
}