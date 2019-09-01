import './Demo.css';
import { withNotes, DEFAULT_KEY_CENTER, DEFAULT_CONCEPT, Keyboard, KeyboardProps, DEFAULT_KEYBOARD_PROPS, Fretboard, FretboardProps, DEFAULT_FRETBOARD_PROPS, NOTE_LABEL } from 'C://Users/dan94/Desktop/play-what-alpha/build/play-what-alpha';
import React = require('react');
import { ViewerDefinition } from '../App';
import { DropdownInput } from '../Inputs/DropdownInput/DropdownInput';
import { PropertyDefinition } from '../Inputs/Input.config';
import { Imports, ObjectDeclaration, HocDeclaration, ComponentTag } from './Syntax';

type DemoProps = {
    imports?: string[];
    defaultConcept?: any;
    conceptInputs?: PropertyDefinition[];
    defaultKeyCenter?: any;
    keyCenterInputs?: PropertyDefinition[];
    viewers: ViewerDefinition[];
}

export class Demo extends React.Component<DemoProps, any> {

    constructor(props) {
        super(props);
        this.state = {
            viewerIndex: 0,
            viewerProps: Object.assign({}, this.props.viewers[0].defaultProps),
            concept: Object.assign({}, DEFAULT_CONCEPT, this.props.defaultConcept),
            keyCenter: Object.assign({}, DEFAULT_KEY_CENTER, this.props.defaultKeyCenter)
        };
    }

    /* State Management */

    setValue = (parentId: string, property: string, value: any) => {
        this.setState((oldState) => {
            let update = oldState[parentId];
            update[property] = value;
            return update;
        });
    }

    changeViewer = (index: number) => {
        let update = {
            viewerIndex: index,
            viewerProps: this.props.viewers[index].defaultProps
        }
        this.setState(update);
    }

    /* Component Rendering */

    render() {
        let viewer = this.props.viewers[this.state.viewerIndex];
        let Viewer = withNotes(viewer.component, this.state.concept, this.state.keyCenter)

        let enableConcept = this.props.conceptInputs && this.props.conceptInputs.length;
        let enableKeyCenter = this.props.keyCenterInputs && this.props.keyCenterInputs.length;
        let enableViewerProps = viewer.inputs && viewer.inputs.length;

        return (
            <div>
                <pre className='syntax'>
                    {this.props.imports && this.props.imports.length && <Imports vars={this.props.imports} source='play-what' />}

                    {enableConcept &&
                        <ObjectDeclaration name='concept' inputs={this.props.conceptInputs} value={this.state.concept} setValue={this.setValue} />
                    }

                    {enableKeyCenter &&
                        <ObjectDeclaration name='keyCenter' inputs={this.props.keyCenterInputs} value={this.state.keyCenter} setValue={this.setValue} />
                    }

                    <HocDeclaration varName={viewer.name + 'WithNotes'} hocName='withNotes'>
                        <DropdownInput data={this.props.viewers} value={viewer} setValue={(value, index) => this.changeViewer(index)} />
                        {enableConcept && <span>
                            <span className='operator'>{', '}</span><span className='var'>{'concept'}</span>
                        </span>}
                        {enableKeyCenter && <span>
                            <span className='operator'>{', '}</span><span className='var'>{'keyCenter'}</span>
                        </span>}
                    </HocDeclaration>

                    {enableViewerProps &&
                        <ObjectDeclaration name='viewerProps' inputs={viewer.inputs} value={this.state.viewerProps} setValue={this.setValue} />
                    }

                    <ComponentTag name={viewer.name + 'WithNotes'} />
                </pre>
                <Viewer {...this.state.viewerProps} />
            </div>
        )
    }
}