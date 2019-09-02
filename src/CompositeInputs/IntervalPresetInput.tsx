import * as React from "react";
import { InputProps } from "../Inputs/Input.config";
import { EnumDropdownInput } from "../Inputs/DropdownInput/EnumDropdownInput";
import { DropdownInput } from "../Inputs/DropdownInput/DropdownInput";

import {
    Tonic, Accidental, Interval, ConceptPreset, PhysicalNote, FunctionalNote, CompleteNote,
    NOTE_LABEL, INTERVAL, MAJOR_SCALE, CALIBRATION_NOTE, TONIC, ACCIDENTAL, INTERVAL_PAIR, CHORD, SCALE, MODE, ROMAN_NUMERAL,
    Fretboard, FretboardProps, DEFAULT_FRETBOARD_PROPS,
    FretboardStringConfig,
    Keyboard, KeyboardProps, DEFAULT_KEYBOARD_PROPS,
    withNotes, ViewerProps, KeyCenter, DEFAULT_KEY_CENTER, Concept, DEFAULT_CONCEPT
} from 'play-what-beta';

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

export class IntervalPresetInput extends React.Component<InputProps, any> {

    constructor(props) {
        super(props);
        this.state = {
            conceptIndex: 0
        }
    }

    render = () => {
        return (
            <>
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
            </>
        );
    }
}