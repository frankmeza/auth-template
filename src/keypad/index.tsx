import React from "react";

const DIGITS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"];

interface KeyPadItemProps {
    readonly digit: string;
}

type OnClickEventHandler = void;

export const KeypadItem = (props: KeyPadItemProps): JSX.Element => {
    const { digit } = props;

    const onClick = (digit: string): OnClickEventHandler => {
        console.log("you clicked on ", digit);
    };

    return (
        <div className="keypad-item">
            <p onClick={() => onClick(digit)}>{digit}</p>
        </div>
    );
};

export const Keypad = (): JSX.Element => {
    const generateKeypad = () => {
        return DIGITS.map(digit => <KeypadItem key={digit} digit={digit} />);
    };

    return <div className="keypad">{generateKeypad()}</div>;
};
