import * as React from "react";
import { InputProps } from "../../Inputs/Input.config";
import { EnumDropdownInput } from "../../Inputs/EnumDropdownInput/EnumDropdownInput";
import { KeyCenter, DEGREE, ACCIDENTAL } from 'C://Users/dan94/Desktop/play-what-alpha/build/play-what-alpha';
import { NumericInput } from "../../Inputs/NumericInput/NumericInput";
import { Property } from "../Property/Property";

function setKeyCenter(setValue: (value) => void, keyCenter: KeyCenter, property: string, value: any) {
    let keyCopy = {...keyCenter};
    keyCopy[property] = value;
    setValue(keyCopy);
}

export function FretboardStringProperties(props: InputProps) {
    return (
        <div className='key-center-input'>
            <Property label='degree'>
                <EnumDropdownInput
                    label='DEGREE'
                    enum={DEGREE}
                    value={props.value.degree}
                    setValue={(value) => setKeyCenter(props.setValue, props.value, 'degree', value)}
                />
            </Property>
            <Property label='accidental'>
                <EnumDropdownInput
                    label='ACCIDENTAL'
                    enum={ACCIDENTAL}
                    value={props.value.degree}
                    setValue={(value) => setKeyCenter(props.setValue, props.value, 'accidental', value)}
                />
            </Property>
            <Property label='octave'>
                <NumericInput
                    value={props.value.octave}
                    setValue={(value) => setKeyCenter(props.setValue, props.value, 'octave', value)}
                />
            </Property>
        </div>
    );
}