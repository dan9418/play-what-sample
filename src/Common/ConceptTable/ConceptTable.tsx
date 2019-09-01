import React = require("react");
import { Interval, Fretboard, Keyboard, KeyboardProps, DEFAULT_KEYBOARD_PROPS, DEFAULT_FRETBOARD_PROPS, TONIC, ACCIDENTAL, NOTE_LABEL, TheoryEngine, INTERVAL_PAIR, INTERVAL, CHORD, SCALE, MODE } from 'C://Users/dan94/Desktop/play-what-alpha/build/play-what-alpha';
import './ConceptTable.css'

function getBodyRow(rowIndex: number, concept: any) {
    return (
        <tr key={rowIndex}>
            <td>{concept.id}</td>
            <td>{concept.name}</td>
            <td>{concept.intervals.map((interval) => { return interval.id }).join(' ')}</td>
        </tr>
    );
}

function getBodyRows(concepts: any[]) {
    let rows = [];
    for (let i = 0; i < concepts.length; i++) {
        rows.push(getBodyRow(i, concepts[i]))
    }
    return [...rows]
}

function getHeaderRow() {
    return (
        <tr key='headers'>
            <th>Id</th>
            <th>Name</th>
            <th>Intervals</th>
        </tr>
    );
}

type ConceptTableProps = {
    concepts: any[];
}

export function ConceptTable(props: any) {
    return (
        <table className='formatted-table'>
            <tbody>
                {getHeaderRow()}
                {getBodyRows(props.concepts)}
            </tbody>
        </table>
    );
}