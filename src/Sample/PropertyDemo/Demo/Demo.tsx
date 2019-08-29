import './Demo.css';
import { Keyboard, KeyboardProps, DEFAULT_KEYBOARD_PROPS, Fretboard, FretboardProps, DEFAULT_FRETBOARD_PROPS, NOTE_LABEL } from 'C://Users/dan94/Desktop/play-what-alpha/build/play-what-alpha';
import React = require('react');
import { Property } from '../Property/Property';
import { ViewerDefinition, PropertyDefinition } from '../../Sample';
import { DropdownInput } from '../../Inputs/DropdownInput/DropdownInput';

type DemoProps = {
    viewer: ViewerDefinition;
}

export class Demo extends React.Component<DemoProps, KeyboardProps> {

    constructor(props) {
        super(props);
        this.state = this.props.viewer.defaultProps;
    }

    setValue = (property: string, value: any) => {
        let update = {};
        update[property] = value;
        this.setState(update);
    }

    getInput = (input: PropertyDefinition) => {
        let Input = input.component;
        return (
            <Property key={input.id} label={input.id} nested={input.nested} array={input.array}>
                <Input
                    {...input.props}
                    value={this.state[input.id]}
                    setValue={(value: any) => this.setValue(input.id, value)}
                />
            </Property>
        );
    }

    getInputs = (inputDefs: PropertyDefinition[]) => {
        let inputs = [];
        for (let i = 0; i < inputDefs.length; i++) {
            inputs.push(this.getInput(inputDefs[i]));
        }
        return inputs;
    }

    render() {
        let Viewer = this.props.viewer.component;
        return (
            <>
                {this.getInputs(this.props.viewer.inputs)}
            </>
        )
    }
}


type DemoSelectorProps = {
    comment?: string;
    viewers: ViewerDefinition[];
}

type DemoSelectorState = {
    viewerIndex: number;
}

export class DemoSelector extends React.Component<DemoSelectorProps, DemoSelectorState> {

    constructor(props) {
        super(props);
        this.state = { viewerIndex: 0 };
    }

    render() {
        let viewer = this.props.viewers[this.state.viewerIndex];
        let Viewer = viewer.component;
        return (
            <div className='demo'>
                <div className='demo-pre'>
                    {this.props.comment && <div className='demo-comment'>{'//' + this.props.comment}</div>}
                    <div className='demo-angle-bracket'>{'<'}</div>
                    <DropdownInput
                        data={this.props.viewers}
                        value={this.props.viewers[this.state.viewerIndex]}
                        setValue={(value, index) => this.setState({ viewerIndex: index })}
                    />
                    <Demo key={viewer.id} viewer={viewer} />
                    <div className='demo-angle-bracket'>{'/>'}</div>
                </div>
                <Viewer {...this.state} />
            </div>
        )
    }
}