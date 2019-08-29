import * as React from "react";
import { InputProps } from "../Input.config";
import { DropdownInput } from "./DropdownInput";

interface EnumDropdownInputProps extends InputProps {
    label: string;
    enum: any;
}

export class EnumDropdownInput extends React.Component<EnumDropdownInputProps> {

    constructor(props) {
        super(props);
    }

    render = () => {
        let data = Object.keys(this.props.enum)
            .filter((x) => Number.isNaN(parseInt(x, 10)))
            .map((value) => { return { id: value, name: value }; });
        return (<>
            <span>{this.props.label}{'.'}</span>
            <DropdownInput
                data={data}
                value={this.props.value}
                setValue={(value) => this.props.setValue(this.props.enum[value.id])}
            />
        </>)
    };
}