import * as React from "react";
import { InputProps } from "../../Inputs/Input.config";
import { NumericInput } from "../../Inputs/NumericInput/NumericInput";
import { FretboardStringConfig, Fretboard, Keyboard, DEGREE, ACCIDENTAL, NOTE_LABEL, TheoryEngine, INTERVAL_PAIR, Interval, FretboardProps, INTERVAL, CHORD, SCALE, MODE } from "C://Users/dan94/Desktop/play-what-alpha/build/play-what-alpha";
import "./FretboardStringProperties.css";

export class FretboardStringProperties extends React.Component<InputProps | FretboardProps, null> {

    constructor(props) {
        super(props);
    }

    setValue = (stringIndex: number, property: string, value: any) => {
        let mergedConfig = [...this.props.value];
        mergedConfig[stringIndex][property] = value;
        this.props.setValue(mergedConfig);
    }

    toggleInterval = (interval: Interval, unfilteredIntervals: Interval[], stringIndex: number) => {
        let newIntervals: boolean | Interval[] = false;

        // If currently in "off" state, add all other intervals
        if (!unfilteredIntervals) {
            newIntervals = this.props.concept.intervals.filter((x) => { return x.id !== interval.id; });
        }
        // If interval is already filtered, remove it
        else if (this.isIntervalFiltered(interval, unfilteredIntervals)) {
            newIntervals = unfilteredIntervals.filter((x) => { return x.id !== interval.id; });
        }
        // Otherwise, add it
        else {
            newIntervals = [...unfilteredIntervals];
            newIntervals.push(interval);
            // If all intervals are now filtered, set to "off" state for efficiency
            if (newIntervals.length === this.props.concept.intervals.length)
                newIntervals = false;
        }
        this.setValue(stringIndex, 'unfilteredIntervals', newIntervals);
    }

    isIntervalFiltered = (interval: Interval, unfilteredIntervals: Interval[]): boolean => {
        // If in "off" state, no intervals are filtered. Otherwise, check for existence in array.
        return 'undefined' !== typeof unfilteredIntervals.find((filterInteval) => { return filterInteval.id === interval.id; });
    }

    getHeaderRow = () => {
        let items = [<th key='header-num'>#</th>, <th key='header-tuning'>Tuning</th>];
        for (let i = 0; i < this.props.concept.intervals.length; i++) {
            let child = this.props.concept.intervals[i];
            items.push(<th key={child.id}>{child.id}</th>);
        }
        return <tr>{...items}</tr>;
    }

    getStringTuner = (stringConfig: FretboardStringConfig, stringIndex: number) => {
        let items = [
            <td key='num' className='string-number'>{stringIndex + 1}</td>,
            <td key='tuner'><NumericInput value={stringConfig.tuning} setValue={(value) => { this.setValue(stringIndex, 'tuning', value); }} /></td>
        ];
        for (let i = 0; i < this.props.concept.intervals.length; i++) {
            let interval = this.props.concept.intervals[i];
            items.push(
                <td key={interval.id}>
                    {<input
                        type='checkbox'
                        checked={!stringConfig.unfilteredIntervals || this.isIntervalFiltered(interval, stringConfig.unfilteredIntervals)}
                        onChange={() => { this.toggleInterval(interval, stringConfig.unfilteredIntervals, stringIndex); }}
                    />}
                </td>
            );
        }
        return <tr key={stringIndex}>{...items}</tr>;
    }

    getStringTuners = () => {
        let items = [];
        for (let i = 0; i < this.props.value.length; i++) {
            let child = this.props.value[i];
            items.push(this.getStringTuner(child, i));
        }
        return items;
    }

    render = () => {
        return (
            <div className='fretboard-tuner'>
                <NumericInput
                    value={this.props.value.length}
                    setValue={(value) => this.props.setValue([...this.props.value.slice(0, value - 1), { tuning: 0 }])}
                />
                <table className='fretboard-tuner-table'>
                    <tbody>
                        {this.getHeaderRow()}
                        {this.getStringTuners()}
                    </tbody>
                </table>
            </div>
        );
    }
}