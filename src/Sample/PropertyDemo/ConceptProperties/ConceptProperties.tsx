import * as React from "react";
import { InputProps } from "../../Inputs/Input.config";
import { EnumDropdownInput } from "../../Inputs/EnumDropdownInput/EnumDropdownInput";
import { ROMAN_NUMERAL, INTERVAL_PAIR, CHORD, SCALE, MODE } from "C://Users/dan94/Desktop/play-what-alpha/build/play-what-alpha";
import { NumericInput } from "../../Inputs/NumericInput/NumericInput";
import { BooleanInput } from "../../Inputs/BooleanInput/BooleanInput";
import { Property } from "../Property/Property";

const INTERVAL_PRESETS = [
    {
        id: 'chord',
        name: 'CHORD',
        presets: CHORD
    },
    {
        id: 'scale',
        name: 'SCALE',
        presets: SCALE
    },
    {
        id: 'mode',
        name: 'MODE',
        presets: MODE
    },
    {
        id: 'romanNumeral',
        name: 'ROMAN_NUMERAL',
        presets: ROMAN_NUMERAL
    },
    {
        id: 'intervalPair',
        name: 'INTERVAL_PAIR',
        presets: INTERVAL_PAIR
    }
];

export class IntervalsInput extends React.Component<InputProps, any> {

    constructor(props) {
        super(props);
        this.state = {
            conceptIndex: 0
        }
    }

    getConceptOptions = () => {
        let options = [];
        for (let i = 0; i < INTERVAL_PRESETS.length; i++) {
            let datum = INTERVAL_PRESETS[i];
            options.push(<option key={datum.id} value={datum.id}>{datum.name}</option>);
        }
        return options;
    }

    render = () => {
        return (
            <div className='concept-input'>
                <select
                    defaultValue={INTERVAL_PRESETS[this.state.conceptIndex].id}
                    onChange={(event) => { this.setState({ conceptIndex: event.target.selectedIndex }); }}>
                    {this.getConceptOptions()}
                </select>
                <EnumDropdownInput
                    label=''
                    enum={INTERVAL_PRESETS[this.state.conceptIndex].presets}
                    value={null}
                    setValue={(value) => this.props.setValue(value.intervals)}
                />
                .intervals
            </div>
        );
    }
}