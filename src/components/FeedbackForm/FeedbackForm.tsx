import React, {ChangeEvent} from 'react';
import s from "./FeedbackForm.module.css";
import {PanelWithNumber} from "./PanelWithNumber/PanelWithNumber";
import QR from "../../img/index 1.jpg"


type FeedbackFormType = {
    valueNumber: string,
    changeNumber: (value: string) => void
    onChangeNumber: (e: ChangeEvent<HTMLInputElement>) => void
    changePersonalData: () => void
    isPersonalData: boolean
    isButtonAccept: boolean
    confirmNumber: () => void
    isConfirmNumber: boolean
    returnToStartPage: () => void
}

export const FeedbackForm: React.FC<FeedbackFormType> = ({
                                                             valueNumber,
                                                             changeNumber,
                                                             onChangeNumber,
                                                             changePersonalData,
                                                             isPersonalData,
                                                             isButtonAccept,
                                                             confirmNumber,
                                                             isConfirmNumber,
                                                             returnToStartPage
                                                         }) => {

    const finalStyleButton = `${s.button} ${isConfirmNumber && s.changeColorButton}`

    return (
        <div className={s.wrapper}>
            <PanelWithNumber valueNumber={valueNumber}
                             changeNumber={changeNumber}
                             onChangeNumber={onChangeNumber}
                             changePersonalData={changePersonalData}
                             isPersonalData={isPersonalData}
                             isButtonAccept={isButtonAccept}
                             confirmNumber={confirmNumber}
                             isConfirmNumber={isConfirmNumber}
            />
            <div className={s.wrap}>
                <div>
                    <button onClick={returnToStartPage} className={finalStyleButton}>X</button>
                </div>

                <div className={s.qr}>
                    <div className={s.text}>???????????????????? QR-?????? ?????? ?????????????????? ???????????????????????????? ????????????????????</div>
                    <img src={QR}/>
                </div>
            </div>

        </div>
    );
};


