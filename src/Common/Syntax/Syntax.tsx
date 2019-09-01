import './Syntax.css';
import { withNotes, DEFAULT_KEY_CENTER, DEFAULT_CONCEPT, Keyboard, KeyboardProps, DEFAULT_KEYBOARD_PROPS, Fretboard, FretboardProps, DEFAULT_FRETBOARD_PROPS, NOTE_LABEL } from 'C://Users/dan94/Desktop/play-what-alpha/build/play-what-alpha';
import React = require('react');

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
            {props.spreadProp &&
                <span>
                    <span className='operator'>{' {...'}</span>
                    <span className='var'>{props.spreadProp}</span>
                    <span className='operator'>{'}'}</span>
                </span>
            }
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