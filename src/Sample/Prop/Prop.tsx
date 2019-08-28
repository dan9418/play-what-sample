import React = require("react");
import "./Prop.css";

interface PropProps extends React.PropsWithChildren<any> {
    label: string;
    nested?: boolean;
}

export function Prop(props: PropProps) {
    return (
        <div className='prop'>
            <div className='prop-label'>{props.label}</div>
            <div className='prop-bracket'>{'={'}</div>
            <div className={props.nested ? 'prop-input-nested' : 'prop-input'}>{props.children}</div>
            <div className='prop-bracket'>{'}'}</div>
        </div>
    );
}