import './DemoBox.css';
import { Fretboard, Keyboard, DEGREE, ACCIDENTAL, TheoryEngine, INTERVAL_PAIR, INTERVAL, CHORD, SCALE, MODE } from 'C://Users/dan94/Desktop/play-what-alpha/build/play-what-alpha';
import React = require('react');

type InputDef = {
    inputComponent?: any;
    children?: InputDef[];
    inputId: string;
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

    setValue = (idChain: string[], value: any) => {
        // TODO
        if(idChain.length === 1) {
            let update = {};
            update[idChain[0]] = value;
            this.setState(update);
        }
        else if(idChain.length === 2) {
            let test = {...this.state[idChain[0]]};
            test[idChain[1]] = value;
            let update = {};
            update[idChain[0]] = test;
            this.setState(update);
        }
    }

    getInput = (input: InputDef, parentIds: string[]) => {
        let Input = input.inputComponent;
        let idChain = [...parentIds, input.inputId]
        return (
            <div className='prop' key={input.inputId}>
                <div className='prop-label'>{input.inputId}</div>
                <div className='prop-bracket'>{'={'}</div>
                {
                    Input ?
                        <Input
                            {...this.state}
                            {...input.props}
                            value={idChain.reduce((p, prop) => { return p[prop] }, this.state)}
                            setValue={(value: any) => this.setValue(idChain, value)}
                        /> :
                        this.getInputs(input.children, idChain)
                }
                <div className='prop-bracket'>{'}'}</div>
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