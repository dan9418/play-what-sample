import * as React from "react";
import "./Example.css";
import { Demo } from "../Demo/Demo";
import { KEY_CENTER_INPUTS, CONCEPT_INPUTS, KEYBOARD_INPUTS, FRETBOARD_INPUTS } from "../Inputs/Input.config";
import { withNotes, TONIC, ACCIDENTAL, CHORD, Fretboard, DEFAULT_FRETBOARD_PROPS, Keyboard, DEFAULT_KEYBOARD_PROPS } from 'play-what-beta';

export function Example(props: any) {
    let Viewer = withNotes(props.viewer, props.concept, props.keyCenter);
    return (
        <div className='example'>
            <Viewer {...props.viewerProps} />
            <div className='example-label'>{props.label}</div>
        </div>
    );
}


export class ExampleBox extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
        };
    }

    render = () => {
        let child = this.props.children[this.state.index];
        return (
            <div className='example-box'>
                <div className='example-box-nav last'
                onClick={() => this.setState((oldState) => { return { index: oldState.index - 1} })}>{'<'}</div>
                {child}
                <div className='example-box-nav next'
                onClick={() => this.setState((oldState) => { return { index: oldState.index + 1} })}>{'>'}</div>
            </div >
        );
    }
}