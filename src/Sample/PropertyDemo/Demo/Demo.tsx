import './Demo.css';
import { Keyboard, KeyboardProps, DEFAULT_KEYBOARD_PROPS, Fretboard, FretboardProps, DEFAULT_FRETBOARD_PROPS, NOTE_LABEL } from 'C://Users/dan94/Desktop/play-what-alpha/build/play-what-alpha';
import React = require('react');
import { KeyCenterInput } from '../KeyCenterProperties/KeyCenterProperties';
import { ConceptInput } from '../ConceptProperties/ConceptProperties';
import { EnumDropdownInput } from '../../Inputs/EnumDropdownInput/EnumDropdownInput';
import { BooleanInput } from '../../Inputs/BooleanInput/BooleanInput';
import { NumericInput } from '../../Inputs/NumericInput/NumericInput';
import { Property } from '../Property/Property';
import { FretboardStringProperties } from '../FretboardStringProperties/FretboardStringProperties';

interface PropertyDefinition {
    id: string;
    nested?: boolean;
    array?: boolean;
    component: any;
    props?: any;
}

const KEYBOARD_PROPS: PropertyDefinition[] = [
    {
        id: 'keyCenter',
        nested: true,
        component: KeyCenterInput,
    },
    {
        id: 'concept',
        nested: true,
        component: ConceptInput,
    },
    {
        id: 'noteLabel',
        component: EnumDropdownInput,
        props: {
            label: 'NOTE_LABEL',
            enum: NOTE_LABEL
        }
    },
    {
        id: 'filterOctave',
        component: BooleanInput
    },
    {
        id: 'keyLow',
        component: NumericInput
    },
    {
        id: 'keyHigh',
        component: NumericInput
    }
];

const FRETBOARD_PROPS: PropertyDefinition[] = [
    {
        id: 'keyCenter',
        nested: true,
        component: KeyCenterInput,
    },
    {
        id: 'concept',
        nested: true,
        component: ConceptInput,
    },
    {
        id: 'noteLabel',
        component: EnumDropdownInput,
        props: {
            label: 'NOTE_LABEL',
            enum: NOTE_LABEL
        }
    },
    {
        id: 'filterOctave',
        component: BooleanInput
    },
    {
        id: 'fretLow',
        component: NumericInput
    },
    {
        id: 'fretHigh',
        component: NumericInput
    },
    {
        id: 'showDots',
        component: BooleanInput
    },
    {
        id: 'showFretNumbers',
        component: BooleanInput
    },
    {
        id: 'strings',
        component: FretboardStringProperties,
        nested: true,
        array: true
    }
];

type ViewerDefinition = {
    id: string;
    name: string;
    component: any;
    defaultProps: KeyboardProps;
    inputs: PropertyDefinition[];
}

export const VIEWERS: ViewerDefinition[] = [
    {
        id: 'keyboard',
        name: 'Keyboard',
        component: Keyboard,
        defaultProps: DEFAULT_KEYBOARD_PROPS,
        inputs: KEYBOARD_PROPS
    },
    {
        id: 'fretboard',
        name: 'Fretboard',
        component: Fretboard,
        defaultProps: DEFAULT_FRETBOARD_PROPS,
        inputs: FRETBOARD_PROPS
    }
];

type DemoProps = {
    viewers: ViewerDefinition[];
}

export class Demo extends React.Component<DemoProps, KeyboardProps> {

    constructor(props) {
        super(props);
        this.state = Object.assign({ viewerIndex: 0 }, this.props.viewers[0].defaultProps);
    }

    setValue = (property: string, value: any) => {
        let update = {};
        update[property] = value;
        this.setState(update);
    }

    /*showProp = (prop: DemoProp) => {
        return (this.props.showProps) ? (this.props.showProps.indexOf(prop) !== -1) : true;
    }*/

    getInput = (input: PropertyDefinition) => {
        let Input = input.component;
        return (
            <Property label={input.id} nested={input.nested} array={input.array}>
                <Input
                    {...input.props}
                    value={this.state[input.id]}
                    setValue={(value: any) => this.setValue(input.id, value)}
                />
            </Property>
        );
    }

    getInputs = (inputDefs: PropertyDefinition[]) => {
        let inputs = [];
        for (let i = 0; i < inputDefs.length; i++) {
            inputs.push(this.getInput(inputDefs[i]));
        }
        return inputs;
    }

    changeViewer = (index: number) => {
        let update = Object.assign({ viewerIndex: index }, this.props.viewers[index].defaultProps)
        this.setState(update);
    }

    getViewerOptions = () => {
        let options = [];
        for (let i = 0; i < this.props.viewers.length; i++) {
            let datum = this.props.viewers[i];
            options.push(<option key={datum.id} value={datum.id}>{datum.name}</option>);
        }
        return options;
    }

    render() {
        let viewer = this.props.viewers[this.state.viewerIndex];
        let Viewer = viewer.component;
        return (
            <div className='demo'>
                <div className='demo-pre'>
                    <div className='demo-text'>{'<'}
                        <select
                            defaultValue={this.props.viewers[this.state.viewerIndex].id}
                            onChange={(event) => { this.changeViewer(event.target.selectedIndex) }}>
                            {this.getViewerOptions()}
                        </select>
                    </div>
                    {this.getInputs(viewer.inputs)}
                    <div className='demo-text'>{'/>'}</div>
                </div>
                <Viewer {...this.state} />
            </div>
        )
    }
}