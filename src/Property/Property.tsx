import React = require("react");
import "./Property.css";

interface PropertyProps extends React.PropsWithChildren<any> {
    label: string;
    nested?: boolean;
    array?: boolean;
}

export function Property(props: PropertyProps) {
    return (
        <div className='prop'>
            <div className='prop-label'>{props.label + ' = '}</div>
            {props.array && <div>[</div>}
            <div className='prop-input'>{props.children}</div>
            {props.array && <div>]</div>}
        </div>
    );
}