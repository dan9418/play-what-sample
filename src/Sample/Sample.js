import React, { Component } from "react";
import "./Sample.css";
import { Fretboard, Keyboard, TheoryEngine, INTERVAL_PAIR, INTERVAL, CHORD, SCALE, MODE } from "C://Users/dan94/Desktop/play-what-alpha/build/play-what-alpha";

export class Sample extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="sample-container">
                <h1>Play What?</h1>

                <p>Play What is a configurable, extensible music theory visualization tool and React component library.</p>

                <h2>What does it do?</h2>

                <p>Play What provides a simple API for visualizing virtually any harmonic music theory concept.
                    Simply provide the key, concept, and configuration to one of the built-in viewer components and
                    Play What will generate the properties of the respective notes and display them however they've been configured.</p>

                <h2>That still doens't make sense. Can you show me?</h2>

                <p>Currently, Play What provides two viewer components out-of-the-box: a keyboard and a fretboard.
                    Without providing any custom configuration, they will render as follows:</p>

                <pre>
                {"<Fretboard/>"}
                </pre>

                <Fretboard/>

                <pre>
                {"<Keyboard/>"}
                </pre>

                <Keyboard/>
            </div>
        )
    }
}