import * as React from "react";
import { InputProps } from "../Inputs/Input.config";
import { NumericInput } from "../Inputs/NumericInput/NumericInput";

const DEFAULT_STRING_CONFIG = { tuning: 0 };

import {
    Tonic, Accidental, Interval, ConceptPreset, PhysicalNote, FunctionalNote, CompleteNote,
    NOTE_LABEL, INTERVAL, MAJOR_SCALE, CALIBRATION_NOTE, TONIC, ACCIDENTAL, INTERVAL_PAIR, CHORD, SCALE, MODE, ROMAN_NUMERAL,
    Fretboard, FretboardProps, DEFAULT_FRETBOARD_PROPS,
    FretboardStringConfig,
    Keyboard, KeyboardProps, DEFAULT_KEYBOARD_PROPS,
    withNotes, ViewerProps, KeyCenter, DEFAULT_KEY_CENTER, Concept, DEFAULT_CONCEPT
} from 'play-what-beta';

function setFretboardStrings(setValue: (value: FretboardStringConfig[]) => void, strings: FretboardStringConfig[], stringIndex: number, property: string, value: FretboardStringConfig) {
    let mergedStrings = [...strings];
    mergedStrings[stringIndex][property] = value;
    setValue(mergedStrings);
}

type FretboardStringTunerProps = {
    strings: FretboardStringConfig[];
    index: number;
    setValue: (value: FretboardStringConfig) => void
}

function FretboardStringTuner(props: FretboardStringTunerProps) {
    return (
        <div>
            <span className='bracket'>{'{ '}</span>
            <span className=''>{'tuning'}</span>
            <span className='operator'>{': '}</span>
            <NumericInput
                value={props.strings[props.index].tuning}
                setValue={(value) => { setFretboardStrings(props.setValue, props.strings, props.index, 'tuning', value); }}
            />
            <span className='bracket'>{' }'}</span>
            {props.index < props.strings.length - 1 && <span className='operator'>{', '}</span>}
        </div>
    );
}

export function FretboardStringInput(props: InputProps) {
    return (
        <div className='fretboard-string-input'>
            <div className='comment'>
                {'// Number of strings: '}
                <NumericInput
                    value={props.value.length}
                    setValue={(value) => {
                        value > props.value.length ?
                            props.setValue([...props.value.slice(0, value - 1), DEFAULT_STRING_CONFIG]) :
                            props.setValue([...props.value.slice(0, value)])
                    }}
                />
            </div>
            <div>
                {props.value.map((s, i) => {
                    return <FretboardStringTuner setValue={props.setValue} strings={props.value} index={i} key={i} />
                })}
            </div>
        </div>
    );
}