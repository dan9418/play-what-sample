import * as React from "react";
import "./EnumDropdownInput.css";
import { InputProps } from "../Input.config";

interface EnumDropdownInputProps extends InputProps {
    label: string;
    enum: any;
}

export class EnumDropdownInput extends React.Component<EnumDropdownInputProps> {

    constructor(props) {
        super(props);
    }

    getOptions = (data: string[]) => {
        let options = [];
        for (let i = 0; i < data.length; i++) {
            let datum = data[i];
            options.push(<option key={datum} value={datum} className={'enum-dropdown-option'}>{datum}</option>);
        }
        return options;
    }

    render = () => {
        let data = Object.keys(this.props.enum).filter((x) => Number.isNaN(parseInt(x, 10)));
        return (
            <div className='enum-dropdown-input'>
                {this.props.label}.
                <select
                    defaultValue={this.props.value}
                    onChange={(event) => { this.props.setValue(this.props.enum[data[event.target.selectedIndex]]); }}>
                    {this.getOptions(data)}
                </select>
            </div>)
    };
}