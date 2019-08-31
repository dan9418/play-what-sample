import * as React from "react";
import "./BooleanInput.css";
import { InputProps } from "../Input.config";

export function BooleanInput(props: InputProps) {
    return (
        <div className='boolean-input'>
            <div className={'button ' + (props.value ? 'inactive' : 'active')} onClick={() => props.setValue(false)}>{'false'}</div>
            <div className='separator'>{' | '}</div>
            <div className={'button ' + (props.value ? 'active' : 'inactive')} onClick={() => props.setValue(true)}>{'true'}</div>
        </div>
    );
};