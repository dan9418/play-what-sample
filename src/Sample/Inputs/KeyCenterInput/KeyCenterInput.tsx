import * as React from "react";
import "./KeyCenterInput.css";
import { InputProps } from "../Input.config";
import { EnumDropdownInput } from "../EnumDropdownInput/EnumDropdownInput";

import { KeyCenter, DEGREE, ACCIDENTAL } from 'C://Users/dan94/Desktop/play-what-alpha/build/play-what-alpha';
import { NumericInput } from "../NumericInput/NumericInput";
import { Prop } from "../../Prop/Prop";

function setKeyCenter(setValue: (value) => void, keyCenter: KeyCenter, property: string, value: any) {
    let keyCopy = {...keyCenter};
    keyCopy[property] = value;
    setValue(keyCopy);
}

export function KeyCenterInput(props: InputProps) {
    return (
        <div className='key-center-input'>
            <Prop label='degree'>
                <EnumDropdownInput
                    label='DEGREE'
                    enum={DEGREE}
                    value={props.value.degree}
                    setValue={(value) => setKeyCenter(props.setValue, props.value, 'degree', value)}
                />
            </Prop>
            <Prop label='accidental'>
                <EnumDropdownInput
                    label='ACCIDENTAL'
                    enum={ACCIDENTAL}
                    value={props.value.degree}
                    setValue={(value) => setKeyCenter(props.setValue, props.value, 'accidental', value)}
                />
            </Prop>
            <Prop label='octave'>
                <NumericInput
                    value={props.value.octave}
                    setValue={(value) => setKeyCenter(props.setValue, props.value, 'octave', value)}
                />
            </Prop>
        </div>
    );
}