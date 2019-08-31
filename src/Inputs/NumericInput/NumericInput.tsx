import * as React from "react";
import "./NumericInput.css";
import { InputProps } from "../Input.config";

interface NumericInputProps extends InputProps {
    max?: number;
    min?: number;
}

export function NumericInput(props: NumericInputProps) {
    let canSubtract = typeof props.min === 'undefined' || props.value > props.min;
    let canAdd = typeof props.max === 'undefined' || props.value < props.max;

    let downClasses = ['button', 'down', canSubtract ? '' : 'disabled'];
    let upClasses = ['button', 'up', canAdd ? '' : 'disabled'];

    return (
        <div className='numeric-input'>
            <div
                onClick={() => { if (canSubtract) props.setValue(props.value - 1); }}
                className={downClasses.join(' ')}>
                {'-'}
            </div>
            <div className='value'>
                {props.value}
            </div>
            <div
                onClick={() => { if (canAdd) props.setValue(props.value + 1); }}
                className={upClasses.join(' ')}>
                {'+'}
            </div>
        </div>
    );
}