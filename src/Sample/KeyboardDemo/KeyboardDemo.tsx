import './KeyboardDemo.css';
import { Fretboard, Keyboard, KeyboardProps, NOTE_LABEL, DEGREE, ACCIDENTAL, TheoryEngine, INTERVAL_PAIR, INTERVAL, CHORD, SCALE, MODE } from 'C://Users/dan94/Desktop/play-what-alpha/build/play-what-alpha';
import React = require('react');
import { KeyCenterInput } from '../Inputs/KeyCenterInput/KeyCenterInput';
import { ConceptInput } from '../Inputs/ConceptInput/ConceptInput';
import { EnumDropdownInput } from '../Inputs/EnumDropdownInput/EnumDropdownInput';
import { BooleanInput } from '../Inputs/BooleanInput/BooleanInput';
import { NumericInput } from '../Inputs/NumericInput/NumericInput';
import { Prop } from '../Prop/Prop';

type KeyboardDemoProps = {
    defaults: any;
}

export class KeyboardDemo extends React.Component<KeyboardDemoProps, KeyboardProps> {

    constructor(props) {
        super(props);
        this.state = this.props.defaults;
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
                    <Prop label='keyCenter' nested={true}>
                        <KeyCenterInput
                            value={this.state['keyCenter']}
                            setValue={(value: any) => this.setValue('keyCenter', value)}
                        />
                    </Prop>
                    <Prop label='concept' nested={true}>
                        <ConceptInput
                            value={this.state['concept']}
                            setValue={(value: any) => this.setValue('concept', value)}
                        />
                    </Prop>
                    <Prop label='noteLabel'>
                        <EnumDropdownInput
                            value={this.state['noteLabel']}
                            setValue={(value: any) => this.setValue('noteLabel', value)}
                            label='NOTE_LABEL'
                            enum={NOTE_LABEL}
                        />
                    </Prop>
                    <Prop label='filterOctave'>
                        <BooleanInput
                            value={this.state['filterOctave']}
                            setValue={(value: any) => this.setValue('filterOctave', value)}
                        />
                    </Prop>
                    <Prop label='keyLow'>
                        <NumericInput
                            value={this.state['keyLow']}
                            setValue={(value: any) => this.setValue('keyLow', value)}
                        />
                    </Prop>
                    <Prop label='keyHigh'>
                        <NumericInput
                            value={this.state['keyHigh']}
                            setValue={(value: any) => this.setValue('keyHigh', value)}
                        />
                    </Prop>
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