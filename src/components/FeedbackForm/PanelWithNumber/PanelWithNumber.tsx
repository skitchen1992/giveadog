import s from "./PanelWithNumber.module.css";
import InputMask from "react-input-mask";
import React, {ChangeEvent} from "react";
import Keyboard from "./Keyboard/Keyboard";


type PanelWithNumberType = {
    valueNumber: string,
    changeNumber: (value: string) => void
    onChangeNumber: (e: ChangeEvent<HTMLInputElement>) => void
    changePersonalData: () => void
    isPersonalData: boolean
    isButtonAccept: boolean
    confirmNumber: () => void
    isConfirmNumber: boolean
}
export const PanelWithNumber: React.FC<PanelWithNumberType> = ({
                                                                   valueNumber,
                                                                   changeNumber,
                                                                   onChangeNumber,
                                                                   changePersonalData,
                                                                   isPersonalData,
                                                                   isButtonAccept,
                                                                   confirmNumber,
                                                                   isConfirmNumber
                                                               }) => {
    const finalButtonStyle = `${isButtonAccept ? s.button : s.isButton} `
    return (
        <div className={s.panel}>
            {isConfirmNumber
                ? <div className={s.wrapPromoFinal}>
                    <div className={s.wrapPromoFinalTitle}>ЗАЯВКА ПРИНЯТА</div>
                    <div className={s.wrapPromoFinalText}>Держите телефон под рукой. Скоро с Вами свяжется наш
                        менеджер.
                    </div>
                </div>
                : <>
                    <div>Введите ваш номер мобильного телефона</div>
                    <InputMask value={valueNumber} className={s.inputNumber} onChange={(e) => onChangeNumber(e)}
                               mask="+7 (999) 999-99-99" alwaysShowMask/>
                    <div>и с Вами свяжется наш менеждер для дальнейшей консультации</div>
                    <Keyboard changeNumber={changeNumber}/>
                    <form className={s.wrapper}>
                        <input className={s.checkbox} type="checkbox" id={"check"} checked={isPersonalData}
                               onClick={changePersonalData}/>
                        <label className={s.label} htmlFor={"check"} onClick={() => changePersonalData}>Согласие на
                            обработку
                            персональных данных</label>
                    </form>
                    <button className={finalButtonStyle} disabled={isButtonAccept} onClick={confirmNumber}>Подтвердить
                        номер
                    </button>
                </>
            }
        </div>
    );
}

