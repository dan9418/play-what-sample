import * as React from "react";
import "./BooleanInput.css";
import { InputProps } from "../Input.config";

export class BooleanInput extends React.Component<InputProps, null> {

    constructor(props) {
        super(props);
    }

    render = () => {
        let classes = ['boolean-input', this.props.value ? 'true' : 'false']
        return (
            <div className={classes.join(' ')}>
                <div className='true' onClick={() => this.props.setValue(true)}>
                    true
                </div>
                 | 
                <div className='false' onClick={() => this.props.setValue(false)}>
                    false
                </div>
            </div>)
    };
}