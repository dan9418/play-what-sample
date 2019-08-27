import './DemoBox.css';
import { Fretboard, Keyboard, DEGREE, ACCIDENTAL, TheoryEngine, INTERVAL_PAIR, INTERVAL, CHORD, SCALE, MODE } from 'C://Users/dan94/Desktop/play-what-alpha/build/play-what-alpha';
import React = require('react');

interface PropProps extends React.PropsWithChildren<any> {
    label: string;
    nested?: boolean;
}

export function Prop(props: PropProps) {
    return (
        <div className='prop'>
            <div className='prop-label'>{props.label}</div>
            <div className='prop-bracket'>{'={'}</div>
            <div className={props.nested ? 'prop-input-nested' : 'prop-input'}>{props.children}</div>
            <div className='prop-bracket'>{'}'}</div>
        </div>
    );
}

type InputDef = {
    inputId: string;
    inputComponent: any;
    nested?: boolean;
    props?: any;
}

type DemoBoxProps = {
    defaults: any;
    inputs: InputDef[]
}

export class DemoBox extends React.Component<DemoBoxProps, any> {

    constructor(props) {
        super(props);
        this.state = this.props.defaults;
    }

    setValue = (property: string, value: any) => {
        let update = {};
        update[property] = value;
        this.setState(update);
    }

    getInput = (input: InputDef, parentIds: string[]) => {
        let Input = input.inputComponent;
        let idChain = [...parentIds, input.inputId]
        return (
            <div className='prop' key={input.inputId}>
                <Prop label={input.inputId} nested={input.nested}>
                    <Input
                        {...this.state}
                        {...input.props}
                        value={this.state[input.inputId]}
                        setValue={(value: any) => this.setValue(input.inputId, value)}
                    />
                </Prop>
            </div>
        );
    }

    getInputs = (inputDefs: InputDef[], parentIds: string[]) => {
        let inputs = [];
        for (let i = 0; i < inputDefs.length; i++) {
            inputs.push(this.getInput(inputDefs[i], parentIds));
        }
        return inputs;
    }

    render() {
        return (
            <div className='demo-box'>
                <div className='demo-box-pre'>
                    <div className='demo-box-text'>{'<Keyboard'}</div>
                    {this.getInputs(this.props.inputs, [])}
                    <div className='demo-box-text'>{'/>'}</div>
                </div>
                <Keyboard {...this.state} />
            </div>
        )
    }
}