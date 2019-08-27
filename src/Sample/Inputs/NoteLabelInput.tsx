import { InputProps } from "./Input.config";
import { DropdownInput } from "./DropdownInput/DropdownInput";
import { Fretboard, Keyboard, DEGREE, ACCIDENTAL, NOTE_LABEL, TheoryEngine, INTERVAL_PAIR, INTERVAL, CHORD, SCALE, MODE } from "C://Users/dan94/Desktop/play-what-alpha/build/play-what-alpha";

import React = require("react");

export function NoteLabelInput(props: InputProps) {
    return <>
        NOTE_LABEL.
        <DropdownInput
            setValue={(value) => props.setValue(value.id)}
            value={props.value}
            data={[
                { id: NOTE_LABEL.None, name: 'None' },
                { id: NOTE_LABEL.Name, name: 'Name' },
                { id: NOTE_LABEL.Interval, name: 'Interval' },
                { id: NOTE_LABEL.PitchClass, name: 'PitchClass' },
                { id: NOTE_LABEL.NoteIndex, name: 'NoteIndex' },
                { id: NOTE_LABEL.RelativeDegree, name: 'RelativeDegree' },
                { id: NOTE_LABEL.Octave, name: 'Octave' },
                { id: NOTE_LABEL.Frequency, name: 'Frequency' },
            ]}
        />
    </>;
}