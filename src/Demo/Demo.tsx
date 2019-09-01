import './Demo.css';
import { withNotes, Keyboard, KeyboardProps, DEFAULT_KEYBOARD_PROPS, Fretboard, FretboardProps, DEFAULT_FRETBOARD_PROPS, NOTE_LABEL } from 'C://Users/dan94/Desktop/play-what-alpha/build/play-what-alpha';
import React = require('react');
import { ViewerDefinition } from '../App';
import { DropdownInput } from '../Inputs/DropdownInput/DropdownInput';
import { PropertyDefinition } from '../Inputs/Input.config';


export function ObjectDeclaration(props: any) {
    let objectProps = props.inputs.map((input) => {
        let Input = input.component;
        return (
            <ObjectProp key={input.id} label={input.id} nested={input.nested} array={input.array}>
                <Input
                    {...input.props}
                    value={props.value[input.id]}
                    setValue={(value: any) => props.setValue(props.name, input.id, value)}
                />
            </ObjectProp>
        );
    });
    return (
        <div className='object'>
            <div>
                <span className='keyword'>{'const '}</span>
                <span className='var'>{props.name}</span>
                <span className='operator'>{' = '}</span>
                <span className='operator'>{'{'}</span>
            </div>
            {objectProps}
            <div className='operator'>{'};'}</div>
        </div>
    );
}

export function ObjectProp(props: any) {
    return (
        <div className='object-prop'>
            <span className='object-prop-name'>{props.label}</span>
            <span className='operator'>{': '}</span>
            {props.array ?
                <ObjectPropArray>{props.children}</ObjectPropArray> :
                <span className='prop-input'>{props.children}</span>}
        </div>
    );
}

export function ObjectPropArray(props: any) {
    return (
        <span className='array'>
            <span className='operator'>[</span>
            <div className='array-items'>{props.children}</div>
            <div className='operator'>]</div>
        </span>
    );
}

export function ComponentTag(props: any) {
    return (
        <div className='tag'>
            <span className='bracket'>{'<'}</span>
            <span className='component'>{props.name}</span>
            <span className='bracket'>{' />'}</span>
        </div>
    );
}

export function HocDeclaration(props: any) {
    return (
        <div className='object'>
            <span className='keyword'>{'const '}</span>
            <span className='var'>{props.varName}</span>
            <span className='operator'>{' = '}</span>
            <span className='function'>{props.hocName}</span>
            <span className='operator'>{'('}</span>
            {props.children}
            <span className='operator'>{');'}</span>
        </div>
    );
}

export function Imports(props: any) {
    let vars = props.vars.map((v, i) => {
        return (
            <React.Fragment key={v}>
                <span className='var'>{v}</span>
                {i < props.vars.length - 1 && <span className='operator'>{', '}</span>}
            </React.Fragment>
        );
    });
    return (
        <div className='imports'>
            <span className='keyword'>{'import'}</span>
            <span className='operator'>{' { '}</span>
            {vars}
            <span className='operator'>{' } '}</span>
            <span className='keyword'>{'from '}</span>
            <span className='operator'>{'\''}</span>
            <span className='string'>{props.source}</span>
            <span className='operator'>{'\';'}</span>
        </div>
    );
}

type DemoProps = {
    imports: string[];
    defaultConcept: any;
    conceptInputs: PropertyDefinition[];
    defaultKeyCenter: any;
    keyCenterInputs: PropertyDefinition[];
    viewers: ViewerDefinition[];
}

export class Demo extends React.Component<DemoProps, any> {

    constructor(props) {
        super(props);
        this.state = {
            viewerIndex: 0,
            viewerProps: Object.assign({}, this.props.viewers[0].defaultProps),
            concept: Object.assign({}, this.props.defaultConcept),
            keyCenter: Object.assign({}, this.props.defaultKeyCenter)
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
        return (
            <div className='demo'>
                <pre>
                    {this.props.imports && <Imports vars={this.props.imports} source='play-what' />}
                    <ObjectDeclaration name='concept' inputs={this.props.conceptInputs} value={this.state.concept} setValue={this.setValue} />
                    <ObjectDeclaration name='keyCenter' inputs={this.props.keyCenterInputs} value={this.state.keyCenter} setValue={this.setValue} />
                    <HocDeclaration varName={viewer.name + 'WithNotes'} hocName='withNotes'>
                        <DropdownInput data={this.props.viewers} value={viewer} setValue={(value, index) => this.changeViewer(index)} />
                        {this.props.conceptInputs && this.props.conceptInputs.length && <span>
                            <span className='operator'>{', '}</span><span className='var'>{'concept'}</span>
                        </span>}
                        {this.props.keyCenterInputs && this.props.keyCenterInputs.length && <span>
                            <span className='operator'>{', '}</span><span className='var'>{'keyCenter'}</span>
                        </span>}
                    </HocDeclaration>
                    <ObjectDeclaration name='viewerProps' inputs={viewer.inputs} value={this.state.viewerProps} setValue={this.setValue} />
                    <ComponentTag name={viewer.name + 'WithNotes'} />
                </pre>
                <Viewer {...this.state.viewerProps} />
            </div>
        )
    }
}