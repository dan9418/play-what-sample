import { EnumDropdownInput } from "./DropdownInput/EnumDropdownInput";
import { NumericInput } from "./NumericInput/NumericInput";
import { IntervalPresetInput } from "../CompositeInputs/IntervalPresetInput";
import { BooleanInput } from "./BooleanInput/BooleanInput";
import { FretboardStringInput } from "../CompositeInputs/FretboardStringInput";

import {
    Tonic, Accidental, Interval, ConceptPreset, PhysicalNote, FunctionalNote, CompleteNote,
    NOTE_LABEL, INTERVAL, MAJOR_SCALE, CALIBRATION_NOTE, TONIC, ACCIDENTAL, INTERVAL_PAIR, CHORD, SCALE, MODE, ROMAN_NUMERAL,
    Fretboard, FretboardProps, DEFAULT_FRETBOARD_PROPS,
    FretboardStringConfig,
    Keyboard, KeyboardProps, DEFAULT_KEYBOARD_PROPS,
    withNotes, ViewerProps, KeyCenter, DEFAULT_KEY_CENTER, Concept, DEFAULT_CONCEPT
} from 'C://Users/dan94/Desktop/play-what-alpha/build/play-what-alpha';

export interface InputProps {
    value: any;
    setValue: (value: any) => void;
}

export interface PropertyDefinition {
    id: string;
    nested?: boolean;
    array?: boolean;
    component: any;
    props?: any;
}

export const KEY_CENTER_INPUTS: { [id: string]: PropertyDefinition } = {
    tonic: {
        id: 'tonic',
        component: EnumDropdownInput,
        props: {
            label: 'TONIC',
            enum: TONIC
        }
    },
    accidental: {
        id: 'accidental',
        component: EnumDropdownInput,
        props: {
            label: 'ACCIDENTAL',
            enum: ACCIDENTAL
        }
    },
    octave: {
        id: 'octave',
        component: NumericInput
    }
};

export const CONCEPT_INPUTS: { [id: string]: PropertyDefinition } = {
    intervals: {
        id: 'intervals',
        component: IntervalPresetInput,
    },
    chordInversion: {
        id: 'chordInversion',
        component: NumericInput,
        props: {
            min: 0
        }
    }
};

export const KEYBOARD_INPUTS: { [id: string]: PropertyDefinition } = {
    keyLabel: {
        id: 'keyLabel',
        component: EnumDropdownInput,
        props: {
            label: 'NOTE_LABEL',
            enum: NOTE_LABEL
        }
    },
    filterOctave: {
        id: 'filterOctave',
        component: BooleanInput
    },
    keyLow: {
        id: 'keyLow',
        component: NumericInput
    },
    keyHigh: {
        id: 'keyHigh',
        component: NumericInput
    }
};

export const FRETBOARD_INPUTS: { [id: string]: PropertyDefinition } = {
    fretLabel: {
        id: 'fretLabel',
        component: EnumDropdownInput,
        props: {
            label: 'NOTE_LABEL',
            enum: NOTE_LABEL
        }
    },
    filterOctave: {
        id: 'filterOctave',
        component: BooleanInput
    },
    fretLow: {
        id: 'fretLow',
        component: NumericInput
    },
    fretHigh: {
        id: 'fretHigh',
        component: NumericInput
    },
    showDots: {
        id: 'showDots',
        component: BooleanInput
    },
    showFretNumbers: {
        id: 'showFretNumbers',
        component: BooleanInput
    },
    strings: {
        id: 'strings',
        component: FretboardStringInput,
        nested: true,
        array: true
    }
};