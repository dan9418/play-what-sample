import * as React from "react";
import './IntervalTable.css'

import {
    Tonic, Accidental, Interval, ConceptPreset, PhysicalNote, FunctionalNote, CompleteNote,
    NOTE_LABEL, INTERVAL, MAJOR_SCALE, CALIBRATION_NOTE, TONIC, ACCIDENTAL, INTERVAL_PAIR, CHORD, SCALE, MODE, ROMAN_NUMERAL,
    Fretboard, FretboardProps, DEFAULT_FRETBOARD_PROPS,
    FretboardStringConfig,
    Keyboard, KeyboardProps, DEFAULT_KEYBOARD_PROPS,
    withNotes, ViewerProps, KeyCenter, DEFAULT_KEY_CENTER, Concept, DEFAULT_CONCEPT
} from 'C://Users/dan94/Desktop/play-what-alpha/build/play-what-alpha';

function getIntervalBySemitones(intervals: Interval[], semitones: number) {
    return intervals.find((interval) => { return interval.semitones === semitones });
}

function getCells(rowIndex: number, intervals: Interval[]) {
    let cells = [<td key='d' className='degree-label'>{rowIndex}</td>];
    for (let i = 0; i < 12; i++) {
        let interval = getIntervalBySemitones(intervals, i);
        let exists = typeof interval !== 'undefined';
        let label = exists ? interval.id : '';
        cells.push(<td className={exists ? 'degree-' + interval.degree : 'inactive'} key={i}>{label}</td>)
    }
    return <tr key={rowIndex}>{...cells}</tr>
}

function getRows(intervals: Interval[]) {
    let rows = [];
    for (let i = 1; i <= 7; i++) {
        rows.push(getCells(i, intervals.filter((interval) => { return interval.degree === i })))
    }
    return [...rows]
}

function getHeaders() {
    let headers = [<th key='s' />];
    for (let i = 0; i < 12; i++) {
        headers.push(<th className='semitones-label' key={i}>{i}</th>)
    }
    return <tr key='header'>{...headers}</tr>
}

export function IntervalTable(props: any) {
    return (
        <table className='interval-table'>
            <tbody>
                {getHeaders()}
                {getRows(props.intervals)}
            </tbody>
        </table>
    );
}

/*
type IntervalListProps = {
    intervals: Interval[];
}

export function IntervalList(props: IntervalListProps) {
    let boxes = [];
    for (let i = 0; i < 12; i++) {
        let interval = getIntervalBySemitones(props.intervals, i);
        let exists = typeof interval !== 'undefined';
        let label = exists ? interval.id : '';
        let classes = ['interval-box', exists ? 'degree-' + interval.degree : 'inactive'];
        boxes.push(<div className={classes.join(' ')} key={i}>{label}</div>)
    }
    return <div className='interval-box-container'>{...boxes}</div>
}*/