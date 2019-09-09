import * as React from "react";
import "./Example.css";
import { withNotes } from 'play-what-beta';

export function Example(props: any) {
    let Viewer = withNotes(props.viewer, props.concept, props.keyCenter);
    return (
        <div className='example'>
            <Viewer {...props.viewerProps} />
            <div className='example-label'>{props.label}</div>
        </div>
    );
}