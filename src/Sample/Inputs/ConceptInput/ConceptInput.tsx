import * as React from "react";
import "./ConceptInput.css";
import { InputProps } from "../Input.config";
import { Prop } from "../../DemoBox/DemoBox";
import { EnumDropdownInput } from "../EnumDropdownInput/EnumDropdownInput";

import { KeyCenter, DEGREE, ACCIDENTAL } from 'C://Users/dan94/Desktop/play-what-alpha/build/play-what-alpha';
import { NumericInput } from "../NumericInput/NumericInput";
import { BooleanInput } from "../BooleanInput/BooleanInput";

export interface ConceptInputProps extends InputProps {
    concept: any;
}

function setKeyCenter(setValue: (value) => void, keyCenter: KeyCenter, property: string, value: any) {
    let keyCopy = { ...keyCenter };
    keyCopy[property] = value;
    setValue(keyCopy);
}

function setIntervalOptions(setValue: (value) => void, concept: any, property: string, value: any) {
    let conceptCopy = { ...concept };
    if (!conceptCopy.intervalOptions)
        conceptCopy.intervalOptions = {};
    conceptCopy.intervalOptions[property] = value;
    setValue(conceptCopy);
}

export function ConceptInput(props: ConceptInputProps) {
    return (
        <div className='concept-input'>
            <Prop label='intervals'>

            </Prop>
            <Prop label='intervalOptions' nested={true}>
                <div>
                    <Prop label='chordInversion'>
                        <NumericInput
                            value={props.value.intervalOptions && props.value.intervalOptions.chordInversion || 0}
                            setValue={(value) => setIntervalOptions(props.setValue, props.value, 'chordInversion', value)}
                            min={0}
                            max={props.value.intervals && props.value.intervals.length -1}
                        />
                    </Prop>
                    <Prop label='melodicInversion'>
                        <BooleanInput
                            value={props.value.intervalOptions && props.value.intervalOptions.melodicInversion}
                            setValue={(value) => setIntervalOptions(props.setValue, props.value, 'melodicInversion', value)}
                        />
                    </Prop>
                </div>
            </Prop>

        </div>
    );
}