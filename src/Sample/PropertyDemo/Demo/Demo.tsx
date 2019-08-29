import './Demo.css';
import { Keyboard, KeyboardProps, DEFAULT_KEYBOARD_PROPS, Fretboard, FretboardProps, DEFAULT_FRETBOARD_PROPS, NOTE_LABEL } from 'C://Users/dan94/Desktop/play-what-alpha/build/play-what-alpha';
import React = require('react');
import { Property } from '../Property/Property';
import { ViewerDefinition, PropertyDefinition } from '../../Sample';

type DemoProps = {
    comment?: string;
    viewers: ViewerDefinition[];
}

export class Demo extends React.Component<DemoProps, KeyboardProps> {

    constructor(props) {
        super(props);
        this.state = Object.assign({ viewerIndex: 0 }, this.props.viewers[0].defaultProps);
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

    changeViewer = (index: number) => {
        let update = Object.assign({ viewerIndex: index }, this.props.viewers[index].defaultProps)
        this.setState(update);
    }

    getViewerOptions = () => {
        let options = [];
        for (let i = 0; i < this.props.viewers.length; i++) {
            let datum = this.props.viewers[i];
            options.push(<option key={datum.id} value={datum.id}>{datum.name}</option>);
        }
        return options;
    }

    render() {
        let viewer = this.props.viewers[this.state.viewerIndex];
        let Viewer = viewer.component;
        return (
            <div className='demo'>
                <div className='demo-pre'>
                    {this.props.comment && <div className='demo-comment'>{'//' + this.props.comment}</div>}
                    <div className='demo-angle-bracket'>{'<'}</div>
                    <select
                        className='demo-component'
                        defaultValue={this.props.viewers[this.state.viewerIndex].id}
                        onChange={(event) => { this.changeViewer(event.target.selectedIndex) }}>
                        {this.getViewerOptions()}
                    </select>
                    {this.getInputs(viewer.inputs)}
                    <div className='demo-angle-bracket'>{'/>'}</div>
                </div>
                <Viewer {...this.state} />
            </div>
        )
    }
}