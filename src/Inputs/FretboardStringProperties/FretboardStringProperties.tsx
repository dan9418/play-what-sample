import * as React from "react";
import { InputProps } from "../Input.config";
import { NumericInput } from "../NumericInput/NumericInput";
import { FretboardStringConfig, FretboardProps } from "C://Users/dan94/Desktop/play-what-alpha/build/play-what-alpha";
import "./FretboardStringProperties.css";

export class FretboardStringProperties extends React.Component<InputProps | FretboardProps, null> {

    constructor(props) {
        super(props);
    }

    setValue = (stringIndex: number, property: string, value: any) => {
        let mergedConfig = [...this.props.value];
        mergedConfig[stringIndex][property] = value;
        this.props.setValue(mergedConfig);
    }

    getStringTuner = (stringConfig: FretboardStringConfig, stringIndex: number) => {
        return (
            <div key={stringIndex}>
                <span className=''>{'{ tuning={'}</span>
                <NumericInput value={stringConfig.tuning} setValue={(value) => { this.setValue(stringIndex, 'tuning', value); }} />
                <span className=''>{'} },'}</span>
            </div>
        );
    }

    getStringTuners = () => {
        let items = [];
        for (let i = 0; i < this.props.value.length; i++) {
            let child = this.props.value[i];
            items.push(this.getStringTuner(child, i));
        }
        return items;
    }

    render = () => {
        return (
            <div className='fretboard-tuner'>
                {'// Number of strings: '}
                <NumericInput
                    value={this.props.value.length}
                    setValue={(value) => this.props.setValue([...this.props.value.slice(0, value - 1), { tuning: 0 }])}
                />
                <div className='fretboard-tuners'>
                    {this.getStringTuners()}
                </div>
            </div>
        );
    }
}