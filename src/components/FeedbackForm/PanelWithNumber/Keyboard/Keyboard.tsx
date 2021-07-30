import React from "react";
import s from "./Keyboard.module.css";

type KeyboardType = {
    changeNumber: (value: string) => void
}
const Keyboard: React.FC<KeyboardType> = ({changeNumber}) => {
    const buttons = [
        {number: "1"},
        {number: "2"},
        {number: "3"},
        {number: "4"},
        {number: "5"},
        {number: "6"},
        {number: "7"},
        {number: "8"},
        {number: "9"},
        {number: "Стереть", style: s.item_del},
        {number: "0"},
    ]
    return (
        <div className={s.wrapper}>
            {buttons.map((el, i) => <div key={i} onClick={() => changeNumber(el.number)}
                                         className={`${el.style} ${s.border}`}>{el.number}</div>)}
        </div>
    );
};
export default Keyboard;
