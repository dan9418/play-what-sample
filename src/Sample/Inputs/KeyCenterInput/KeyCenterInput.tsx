import * as React from "react";
import "./KeyCenterInput.css";
import { InputProps } from "../Input.config";
import { Prop } from "../../DemoBox/DemoBox";
import { EnumDropdownInput } from "../EnumDropdownInput/EnumDropdownInput";

import { KeyCenter, DEGREE, ACCIDENTAL } from 'C://Users/dan94/Desktop/play-what-alpha/build/play-what-alpha';
import { NumericInput } from "../NumericInput/NumericInput";

export interface KeyCenterInputProps extends InputProps {
    keyCenter: KeyCenter;
}

function setKeyCenter(setValue: (value) => void, keyCenter: KeyCenter, property: string, value: any) {
    let keyCopy = {...keyCenter};
    keyCopy[property] = value;
    setValue(keyCopy);
}

export function KeyCenterInput(props: KeyCenterInputProps) {
    return (
        <div className='key-center-input'>
            <Prop label='degree'>
                <EnumDropdownInput
                    label='DEGREE'
                    enum={DEGREE}
                    value={props.keyCenter.degree}
                    setValue={(value) => setKeyCenter(props.setValue, props.keyCenter, 'degree', value)}
                />
            </Prop>
            <Prop label='accidental'>
                <EnumDropdownInput
                    label='ACCIDENTAL'
                    enum={ACCIDENTAL}
                    value={props.keyCenter.degree}
                    setValue={(value) => setKeyCenter(props.setValue, props.keyCenter, 'accidental', value)}
                />
            </Prop>
            <Prop label='octave'>
                <NumericInput
                    value={props.keyCenter.octave}
                    setValue={(value) => setKeyCenter(props.setValue, props.keyCenter, 'octave', value)}
                />
            </Prop>
        </div>
    );
}