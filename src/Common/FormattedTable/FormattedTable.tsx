import * as React from "react";
import "./FormattedTable.css";

type FormattedTableProps = {
    title?: string;
    headers: string[];
    rows: string[][];
}

export function FormattedTable(props: FormattedTableProps) {
    return (
        <table className='formatted-table'>
            <caption>{props.title}</caption>
            <tbody>
                <tr>
                    {props.headers.map((header, index) => { return <th key={index}>{header}</th> })}
                </tr>
                {props.rows.map((row, index) => {
                    return (
                        <tr key={index}>
                            {row.map((cell, index) => { return <td key={index}>{cell}</td>; })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}