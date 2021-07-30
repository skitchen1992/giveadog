import React from "react";
import s from "./StartPage.module.css"
// @ts-ignore
import Video from "../../video/Video1.mp4"
import QR from "../../img/index 1.jpg";


type StartPageType = {
    goToFeedbackForm: () => void
    isViewBanner: boolean
}

const StartPage: React.FC<StartPageType> = ({goToFeedbackForm, isViewBanner}) => {
    const finalStyleBanner = `${s.banner} ${isViewBanner && s.contentHide}`
    return (
        <div className={s.wrapper}>
            <video autoPlay muted loop preload="auto" className={s.fullScreenVideo}>
                <source type={"video/webm"} src={Video}/>
                <source type={"video/mp4"} src={Video}/>
            </video>
            <div className={finalStyleBanner}>
                <div className={s.contentTitle}>ИСПОЛНИТЕ МЕЧТУ ВАШЕГО<br/> МАЛЫША!<br/>
                    ПОДАРИТЕ ЕМУ СОБАКУ!
                </div>
                <img className={s.img} src={QR}/>
                <div className={s.contentSubTitle}>Сканируйте QR-код или нажмите ОК</div>
                <button onClick={goToFeedbackForm} className={s.button}>OK</button>
            </div>
        </div>
    );
};
export default StartPage;