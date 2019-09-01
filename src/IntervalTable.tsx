import React = require("react");
import { Interval, Fretboard, Keyboard, KeyboardProps, DEFAULT_KEYBOARD_PROPS, DEFAULT_FRETBOARD_PROPS, TONIC, ACCIDENTAL, NOTE_LABEL, TheoryEngine, INTERVAL_PAIR, INTERVAL, CHORD, SCALE, MODE } from 'C://Users/dan94/Desktop/play-what-alpha/build/play-what-alpha';
import { IntervalPresetInput } from "./CompositeInputs/IntervalPresetInput";

function getHeaders() {
    let headers = [<th className='degree' key='degree'>{'#'}</th>];
    for (let i = 0; i < 12; i++) {
        headers.push(<th key={i}>{i}</th>)
    }
    return <tr key='header'>{...headers}</tr>
}

function getIntervalBySemitones(intervals: Interval[], semitones: number) {
    return intervals.find((interval) => { return interval.semitones === semitones });
}

function getCells(rowIndex: number, intervals: Interval[]) {
    let cells = [<td key='degree' className='degree'>{rowIndex}</td>];
    for (let i = 0; i < 12; i++) {
        let interval = intervals.find((interval) => { return interval.semitones === i });
        let exists = typeof interval !== 'undefined';
        let label = exists ? interval.id : '';
        cells.push(<td className={exists ? 'degree-' + interval.degree : ''} key={i}>{label}</td>)
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