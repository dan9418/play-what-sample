import React = require("react");
import { ConceptDefinition, Interval, Fretboard, Keyboard, KeyboardProps, DEFAULT_KEYBOARD_PROPS, DEFAULT_FRETBOARD_PROPS, TONIC, ACCIDENTAL, NOTE_LABEL, TheoryEngine, INTERVAL_PAIR, INTERVAL, CHORD, SCALE, MODE } from 'C://Users/dan94/Desktop/play-what-alpha/build/play-what-alpha';
import './ConceptTable.css'

function getBodyRow(rowIndex: number, concept: ConceptDefinition) {
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

function getBodyRows(concepts: ConceptDefinition[]) {
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
    concepts: ConceptDefinition[];
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