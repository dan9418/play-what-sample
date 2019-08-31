import './Demo.css';
import { withNotes, Keyboard, KeyboardProps, DEFAULT_KEYBOARD_PROPS, Fretboard, FretboardProps, DEFAULT_FRETBOARD_PROPS, NOTE_LABEL } from 'C://Users/dan94/Desktop/play-what-alpha/build/play-what-alpha';
import React = require('react');
import { Property } from '../Property/Property';
import { ViewerDefinition } from '../App';
import { DropdownInput } from '../Inputs/DropdownInput/DropdownInput';
import { PropertyDefinition } from '../Inputs/Input.config';

type HocDemoProps = {
    defaultConcept: any;
    conceptInputs: PropertyDefinition[];
    defaultKeyCenter: any;
    keyCenterInputs: PropertyDefinition[];
    viewers: ViewerDefinition[];
}

export class HocDemo extends React.Component<HocDemoProps, any> {

    constructor(props) {
        super(props);
        this.state = {
            viewerIndex: 0,
            viewerProps: Object.assign({}, this.props.viewers[0].defaultProps),
            concept: Object.assign({}, this.props.defaultConcept),
            keyCenter: Object.assign({}, this.props.defaultKeyCenter)
        };
    }

    setValue = (parentId: string, property: string, value: any) => {
        this.setState((oldState) => {
            let update = oldState[parentId];
            update[property] = value;
            return update;
        });
    }

    getInput = (parentId: string, input: PropertyDefinition) => {
        let Input = input.component;
        return (
            <Property key={input.id} label={input.id} nested={input.nested} array={input.array}>
                <Input
                    {...input.props}
                    value={this.state[parentId][input.id]}
                    setValue={(value: any) => this.setValue(parentId, input.id, value)}
                />
            </Property>
        );
    }

    getInputs = (parentId: string, inputDefs: PropertyDefinition[]) => {
        let inputs = [];
        for (let i = 0; i < inputDefs.length; i++) {
            inputs.push(this.getInput(parentId, inputDefs[i]));
        }
        return <div>
            <div>{'const ' + parentId + ' = {'}</div>
            <div>{[...inputs]}</div>
            <div>{'};'}</div>
        </div>;
    }

    changeViewer = (index: number) => {
        let update = {
            viewerIndex: index,
            viewerProps: this.props.viewers[index].defaultProps
        }
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
        let Viewer = withNotes(viewer.component, this.state.concept, this.state.keyCenter)
        return (
            <div className='demo'>
                <div className='demo-pre'>
                    {/* Concept */}
                    {this.getInputs('concept', this.props.conceptInputs)}
                    {/* Key Center */}
                    {this.getInputs('keyCenter', this.props.keyCenterInputs)}
                    {/* HOC */}
                    <span>{'const ' + viewer.name + 'WithNotes = withNotes('}</span>
                    <DropdownInput
                        data={this.props.viewers}
                        value={viewer}
                        setValue={(value, index) => this.changeViewer(index)}
                    />
                    <span>{');'}</span>
                    {/* Viewer Props */}
                    {this.getInputs('viewerProps', viewer.inputs)}
                    {/* Viewer */}
                    <div>{'<' + viewer.name + 'WithNotes />'}</div>
                </div>
                <Viewer {...this.state.viewerProps} />
            </div>
        )
    }
}