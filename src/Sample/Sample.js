import React, { Component } from "react";
import "./Sample.css";
import { ViewDriver, Fretboard, Keyboard, TheoryEngine, Concepts } from "C://Users/dan94/Desktop/play-what-alpha/build/play-what-alpha";

export class Sample extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="sample-container">
                <ViewDriver />

                <Fretboard
                    notes={
                        TheoryEngine.parseIntervals(
                            {
                                degree: {
                                    id: 'C',
                                    name: 'C',
                                    value: 1,
                                    index: 0
                                },
                                accidental: {
                                    id: 'natural',
                                    name: '♮',
                                    offset: 0
                                },
                                octave: 4
                            },
                            Concepts.Chords.maj.intervals,
                            {}
                        )}
                    config={{
                        noteLabel: {
                            id: 'name',
                            name: 'Name'
                        },
                        showDots: true,
                        filterOctave: true,
                        fretLow: 0,
                        fretHigh: 12,
                        strings: [
                            { openPosition: 16 },   // e
                            { openPosition: 11 },   // B
                            { openPosition: 7 },    // G
                            { openPosition: 2 },    // D
                            { openPosition: -3 },   // A
                            { openPosition: -8 }    // E   
                        ]
                    }}
                />

                <Keyboard
                    notes={[]}
                    config={{
                        noteLabel: {
                            id: 'interval',
                            name: 'Interval'
                        },
                        filterOctave: true,
                        keyLow: 0,
                        keyHigh: 24
                    }}
                />
            </div>
        )
    }
}