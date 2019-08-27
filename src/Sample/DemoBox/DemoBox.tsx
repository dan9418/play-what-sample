import "./DemoBox.css";
import { Fretboard, Keyboard, DEGREE, ACCIDENTAL, TheoryEngine, INTERVAL_PAIR, INTERVAL, CHORD, SCALE, MODE } from "C://Users/dan94/Desktop/play-what-alpha/build/play-what-alpha";
import React = require("react");

type InputDef = {
    inputComponent: any;
    inputId: string;
    nested?: boolean;
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

    getInputs = () => {
        let inputs = [];
        for (let i = 0; i < this.props.inputs.length; i++) {
            let input = this.props.inputs[i];
            let Input = input.inputComponent;
            inputs.push(<div className="demo-box-input" key={input.inputId}>
                <div className="demo-box-prop">{input.inputId}</div>
                {'={'}
                <Input {...this.state} value={this.state[input.inputId]} setValue={(value: any) => this.setValue(input.inputId, value)} />
                {'}'}
            </div>)
        }
        return inputs;
    }

    render() {
        return (
            <div className="demo-box">
                <div className="demo-box-pre">
                    <div className="demo-box-text">{'<Keyboard'}</div>
                    {this.getInputs()}
                    <div className="demo-box-text">{'/>'}</div>
                </div>
                <Keyboard {...this.state} />
            </div>
        )
    }
}