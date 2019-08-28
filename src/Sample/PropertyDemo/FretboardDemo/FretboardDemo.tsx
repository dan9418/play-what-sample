import './FretboardDemo.css';
import { Fretboard, FretboardProps, DEFAULT_FRETBOARD_PROPS, NOTE_LABEL } from 'C://Users/dan94/Desktop/play-what-alpha/build/play-what-alpha';
import React = require('react');
import { KeyCenterInput } from '../KeyCenterProperties/KeyCenterProperties';
import { ConceptInput } from '../ConceptProperties/ConceptProperties';
import { EnumDropdownInput } from '../../Inputs/EnumDropdownInput/EnumDropdownInput';
import { BooleanInput } from '../../Inputs/BooleanInput/BooleanInput';
import { NumericInput } from '../../Inputs/NumericInput/NumericInput';
import { Property } from '../Property/Property';

export enum FretboardProp {
    keyCenter = 'keyCenter',
    concept = 'concept',
    filterOctave = 'filterOctave',
    showDots = 'showDots',
    showFretNumbers = 'showFretNumbers',
    noteLabel = 'noteLabel',
    fretLow = 'fretLow',
    fretHigh = 'fretHigh'
}

type FretboardDemoProps = {
    customProps: FretboardProps;
    showProps?: FretboardProp[];
}

export class FretboardDemo extends React.Component<FretboardDemoProps, FretboardProps> {

    constructor(props) {
        super(props);
        this.state = Object.assign({}, DEFAULT_FRETBOARD_PROPS, this.props.customProps);
    }

    setValue = (property: string, value: any) => {
        let update = {};
        update[property] = value;
        this.setState(update);
    }

    showProp = (prop: FretboardProp) => {
        return (this.props.showProps) ? (this.props.showProps.indexOf(prop) !== -1) : true;
    }

    render() {
        return (
            <div className='demo'>
                <div className='demo-pre'>
                    <div className='demo-text'>{'<Fretboard'}</div>
                    {this.showProp(FretboardProp.keyCenter) &&
                        <Property label={FretboardProp.keyCenter} nested={true}>
                            <KeyCenterInput
                                value={this.state[FretboardProp.keyCenter]}
                                setValue={(value: any) => this.setValue(FretboardProp.keyCenter, value)}
                            />
                        </Property>}
                    {this.showProp(FretboardProp.concept) &&
                        <Property label={FretboardProp.concept} nested={true}>
                            <ConceptInput
                                value={this.state[FretboardProp.concept]}
                                setValue={(value: any) => this.setValue(FretboardProp.concept, value)}
                            />
                        </Property>}
                    {this.showProp(FretboardProp.noteLabel) &&
                        <Property label={FretboardProp.noteLabel}>
                            <EnumDropdownInput
                                value={this.state[FretboardProp.noteLabel]}
                                setValue={(value: any) => this.setValue(FretboardProp.noteLabel, value)}
                                label='NOTE_LABEL'
                                enum={NOTE_LABEL}
                            />
                        </Property>}
                    {this.showProp(FretboardProp.filterOctave) &&
                        <Property label={FretboardProp.filterOctave}>
                            <BooleanInput
                                value={this.state[FretboardProp.filterOctave]}
                                setValue={(value: any) => this.setValue(FretboardProp.filterOctave, value)}
                            />
                        </Property>}
                    {this.showProp(FretboardProp.showDots) &&
                        <Property label={FretboardProp.showDots}>
                            <BooleanInput
                                value={this.state[FretboardProp.showDots]}
                                setValue={(value: any) => this.setValue(FretboardProp.showDots, value)}
                            />
                        </Property>}
                    {this.showProp(FretboardProp.showFretNumbers) &&
                        <Property label={FretboardProp.showFretNumbers}>
                            <BooleanInput
                                value={this.state[FretboardProp.showFretNumbers]}
                                setValue={(value: any) => this.setValue(FretboardProp.showFretNumbers, value)}
                            />
                        </Property>}
                    {this.showProp(FretboardProp.fretLow) &&
                        <Property label={FretboardProp.fretLow}>
                            <NumericInput
                                value={this.state[FretboardProp.fretLow]}
                                setValue={(value: any) => this.setValue(FretboardProp.fretLow, value)}
                            />
                        </Property>}
                    {this.showProp(FretboardProp.fretHigh) &&
                        <Property label={FretboardProp.fretHigh}>
                            <NumericInput
                                value={this.state[FretboardProp.fretHigh]}
                                setValue={(value: any) => this.setValue(FretboardProp.fretHigh, value)}
                            />
                        </Property>}
                    <div className='keyboard-demo-text'>{'/>'}</div>
                </div>
                <Fretboard {...this.state} />
            </div>
        )
    }
}