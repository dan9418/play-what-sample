import './KeyboardDemo.css';
import { Keyboard, KeyboardProps, DEFAULT_KEYBOARD_PROPS, NOTE_LABEL } from 'C://Users/dan94/Desktop/play-what-alpha/build/play-what-alpha';
import React = require('react');
import { KeyCenterInput } from '../KeyCenterProperties/KeyCenterProperties';
import { ConceptInput } from '../ConceptProperties/ConceptProperties';
import { EnumDropdownInput } from '../../Inputs/EnumDropdownInput/EnumDropdownInput';
import { BooleanInput } from '../../Inputs/BooleanInput/BooleanInput';
import { NumericInput } from '../../Inputs/NumericInput/NumericInput';
import { Property } from '../Property/Property';

export enum KeyboardProp {
    keyCenter = 'keyCenter',
    concept = 'concept',
    filterOctave = 'filterOctave',
    noteLabel = 'noteLabel',
    keyLow = 'keyLow',
    keyHigh = 'keyHigh'
}

type KeyboardDemoProps = {
    customProps: KeyboardProps;
    showProps: KeyboardProp[];
}

export class KeyboardDemo extends React.Component<KeyboardDemoProps, KeyboardProps> {

    constructor(props) {
        super(props);
        this.state = Object.assign({}, DEFAULT_KEYBOARD_PROPS, this.props.customProps);
    }

    setValue = (property: string, value: any) => {
        let update = {};
        update[property] = value;
        this.setState(update);
    }

    render() {
        return (
            <div className='keyboard-demo'>
                <div className='keyboard-demo-pre'>
                    <div className='keyboard-demo-text'>{'<Keyboard'}</div>
                    {this.props.showProps.indexOf(KeyboardProp.keyCenter) !== -1 &&
                        <Property label={KeyboardProp.keyCenter} nested={true}>
                            <KeyCenterInput
                                value={this.state[KeyboardProp.keyCenter]}
                                setValue={(value: any) => this.setValue(KeyboardProp.keyCenter, value)}
                            />
                        </Property>}
                    {this.props.showProps.indexOf(KeyboardProp.concept) !== -1 &&
                        <Property label={KeyboardProp.concept} nested={true}>
                            <ConceptInput
                                value={this.state[KeyboardProp.concept]}
                                setValue={(value: any) => this.setValue(KeyboardProp.concept, value)}
                            />
                        </Property>}
                    {this.props.showProps.indexOf(KeyboardProp.noteLabel) !== -1 &&
                        <Property label={KeyboardProp.noteLabel}>
                            <EnumDropdownInput
                                value={this.state[KeyboardProp.noteLabel]}
                                setValue={(value: any) => this.setValue(KeyboardProp.noteLabel, value)}
                                label='NOTE_LABEL'
                                enum={NOTE_LABEL}
                            />
                        </Property>}
                    {this.props.showProps.indexOf(KeyboardProp.filterOctave) !== -1 &&
                        <Property label={KeyboardProp.filterOctave}>
                            <BooleanInput
                                value={this.state[KeyboardProp.filterOctave]}
                                setValue={(value: any) => this.setValue(KeyboardProp.filterOctave, value)}
                            />
                        </Property>}
                    {this.props.showProps.indexOf(KeyboardProp.keyLow) !== -1 &&
                        <Property label={KeyboardProp.keyLow}>
                            <NumericInput
                                value={this.state[KeyboardProp.keyLow]}
                                setValue={(value: any) => this.setValue(KeyboardProp.keyLow, value)}
                            />
                        </Property>}
                    {this.props.showProps.indexOf(KeyboardProp.keyHigh) !== -1 &&
                        <Property label={KeyboardProp.keyHigh}>
                            <NumericInput
                                value={this.state[KeyboardProp.keyHigh]}
                                setValue={(value: any) => this.setValue(KeyboardProp.keyHigh, value)}
                            />
                        </Property>}
                    <div className='keyboard-demo-text'>{'/>'}</div>
                </div>
                <Keyboard {...this.state} />
            </div>
        )
    }
}

/*
type InputDef = {
    inputId: string;
    inputComponent: any;
    nested?: boolean;
    props?: any;
}

getInput = (input: InputDef, parentIds: string[]) => {
        let Input = input.inputComponent;
        let idChain = [...parentIds, input.inputId]
        return (
            <Prop label={input.inputId} nested={input.nested}>
                <Input
                    {...this.state}
                    {...input.props}
                    value={this.state[input.inputId]}
                    setValue={(value: any) => this.setValue(input.inputId, value)}
                />
            </Prop>
        );
    }

    getInputs = (inputDefs: InputDef[], parentIds: string[]) => {
        let inputs = [];
        for (let i = 0; i < inputDefs.length; i++) {
            inputs.push(this.getInput(inputDefs[i], parentIds));
        }
        return inputs;
    }*/