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
            <div className='prop-label'>{props.label}</div>
            <div className='prop-bracket'>{props.array ? '=[' : '={'}</div>
            <div className={props.nested ? 'prop-input-nested' : 'prop-input'}>{props.children}</div>
            <div className='prop-bracket'>{props.array ? ']' : '}'}</div>
        </div>
    );
}