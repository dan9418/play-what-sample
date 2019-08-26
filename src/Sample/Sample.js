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
                <Fretboard/>
                <Keyboard/>
            </div>
        )
    }
}