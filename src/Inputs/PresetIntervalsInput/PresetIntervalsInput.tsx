import * as React from "react";
import { InputProps } from "../Input.config";
import { EnumDropdownInput } from "../DropdownInput/EnumDropdownInput";
import { ROMAN_NUMERAL, INTERVAL_PAIR, CHORD, SCALE, MODE } from "C://Users/dan94/Desktop/play-what-alpha/build/play-what-alpha";
import { DropdownInput } from "../DropdownInput/DropdownInput";

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

export class PresetIntervalsInput extends React.Component<InputProps, any> {

    constructor(props) {
        super(props);
        this.state = {
            conceptIndex: 0
        }
    }

    render = () => {
        return (
            <div className='concept-input'>
                <DropdownInput
                    data={INTERVAL_PRESETS}
                    value={INTERVAL_PRESETS[this.state.conceptIndex]}
                    setValue={(value, index) => { this.setState({ conceptIndex: index }); }}
                />
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