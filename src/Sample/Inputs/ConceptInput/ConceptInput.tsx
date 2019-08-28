import * as React from "react";
import "./ConceptInput.css";
import { InputProps } from "../Input.config";
import { EnumDropdownInput } from "../EnumDropdownInput/EnumDropdownInput";

import { KeyCenter, Fretboard, Keyboard, DEGREE, ACCIDENTAL, NOTE_LABEL, TheoryEngine, ROMAN_NUMERAL, INTERVAL_PAIR, INTERVAL, CHORD, SCALE, MODE } from "C://Users/dan94/Desktop/play-what-alpha/build/play-what-alpha";
import { NumericInput } from "../NumericInput/NumericInput";
import { BooleanInput } from "../BooleanInput/BooleanInput";
import { DropdownInput } from "../DropdownInput/DropdownInput";
import { Prop } from "../../Prop/Prop";

function setIntervals(setValue: (value) => void, concept: any, value: any) {
    let conceptCopy = { ...concept };
    conceptCopy.intervals = value;
    setValue(conceptCopy);
}

function setIntervalOptions(setValue: (value) => void, concept: any, property: string, value: any) {
    let conceptCopy = { ...concept };
    if (!conceptCopy.intervalOptions)
        conceptCopy.intervalOptions = {};
    conceptCopy.intervalOptions[property] = value;
    setValue(conceptCopy);
}

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
]

export class ConceptInput extends React.Component<InputProps, any> {

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
                <Prop label='intervals'>
                    <select
                        defaultValue={INTERVAL_PRESETS[this.state.conceptIndex].id}
                        onChange={(event) => { this.setState({ conceptIndex: event.target.selectedIndex }); }}>
                        {this.getConceptOptions()}
                    </select>
                    <EnumDropdownInput
                        label=''
                        enum={INTERVAL_PRESETS[this.state.conceptIndex].presets}
                        value={null}
                        setValue={(value) => setIntervals(this.props.setValue, this.props.value, value.intervals)}
                    />
                    .intervals
                </Prop>
                <Prop label='intervalOptions' nested={true}>
                    <div>
                        <Prop label='chordInversion'>
                            <NumericInput
                                value={this.props.value.intervalOptions && this.props.value.intervalOptions.chordInversion || 0}
                                setValue={(value) => setIntervalOptions(this.props.setValue, this.props.value, 'chordInversion', value)}
                                min={0}
                                max={this.props.value.intervals && this.props.value.intervals.length - 1}
                            />
                        </Prop>
                        <Prop label='melodicInversion'>
                            <BooleanInput
                                value={this.props.value.intervalOptions && this.props.value.intervalOptions.melodicInversion}
                                setValue={(value) => setIntervalOptions(this.props.setValue, this.props.value, 'melodicInversion', value)}
                            />
                        </Prop>
                    </div>
                </Prop>

            </div>
        );
    }
}