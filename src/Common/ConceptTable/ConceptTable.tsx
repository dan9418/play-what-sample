import * as React from "react";
import './ConceptTable.css'

import {
    Tonic, Accidental, Interval, ConceptPreset, PhysicalNote, FunctionalNote, CompleteNote,
    NOTE_LABEL, INTERVAL, MAJOR_SCALE, CALIBRATION_NOTE, TONIC, ACCIDENTAL, INTERVAL_PAIR, CHORD, SCALE, MODE, ROMAN_NUMERAL,
    Fretboard, FretboardProps, DEFAULT_FRETBOARD_PROPS,
    FretboardStringConfig,
    Keyboard, KeyboardProps, DEFAULT_KEYBOARD_PROPS,
    withNotes, ViewerProps, KeyCenter, DEFAULT_KEY_CENTER, Concept, DEFAULT_CONCEPT
} from 'play-what-beta';

function getBodyRow(rowIndex: number, concept: Concept) {
    return (
        <tr key={rowIndex}>
            <td>{concept.id}</td>
            <td>{concept.name}</td>
            <td>{concept.intervals.map((interval) => {
                let classes = ['interval-id', 'degree-' + interval.degree];
                return <div className={classes.join(' ')}>{interval.id}</div>
            })}</td>
        </tr>
    );
}

function getBodyRows(concepts: Concept[]) {
    let rows = [];
    for (let i = 0; i < concepts.length; i++) {
        rows.push(getBodyRow(i, concepts[i]))
    }
    return [...rows]
}

function getHeaderRow() {
    return (
        <tr key='headers'>
            <th className='id'>Id</th>
            <th className='name'>Name</th>
            <th className='intervals'>Intervals</th>
        </tr>
    );
}

type ConceptTableProps = {
    concepts: Concept[];
}

export function ConceptTable(props: ConceptTableProps) {
    return (
        <table className='formatted-table concept-table'>
            <tbody>
                {getHeaderRow()}
                {getBodyRows(props.concepts)}
            </tbody>
        </table>
    );
}