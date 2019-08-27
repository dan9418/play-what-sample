import "./DemoBox.css";
import { Fretboard, Keyboard, DEGREE, ACCIDENTAL, TheoryEngine, INTERVAL_PAIR, INTERVAL, CHORD, SCALE, MODE } from "C://Users/dan94/Desktop/play-what-alpha/build/play-what-alpha";
import React = require("react");

type DemoBoxProps = {
    defaults: any;
    inputComponent: any;
    inputId: string;
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

    render() {
        let Input = this.props.inputComponent;
        return (
            <div className="demo-box">
                <div className="demo-box-pre">
                    <div className="demo-box-text">{'<Keyboard'}</div>
                    <div className="demo-box-prop">{this.props.inputId}</div>
                    {'={'}
                    <Input {...this.state} value={this.state[this.props.inputId]} setValue={(value: any) => this.setValue(this.props.inputId, value)} />
                    {'}'}
                    <div className="demo-box-text">{'/>'}</div>
                </div>
                <Keyboard {...this.state} />
            </div>
        )
    }
}