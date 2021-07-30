import React, {ChangeEvent, useEffect, useState} from 'react';
import StartPage from "./components/StartPage/StartPage";
import {FeedbackForm} from "./components/FeedbackForm/FeedbackForm";

function App() {
    const [valueNumber, setNumber] = useState<string>("")
    const [isButtonAccept, setIsButtonAccept] = useState<boolean>(true)
    const [isPersonalData, setIsPersonalData] = useState<boolean>(false)
    const [isConfirmNumber, setIsConfirmNumber] = useState<boolean>(false)
    const [isReadyToOrder, setIsReadyToOrder] = useState<boolean>(false)
    const [isViewBanner, setIsViewBanner] = useState<boolean>(false)

    useEffect(() => {
        setTimeout(() => {
            setIsViewBanner(true)
        }, 5000)
    }, [])
    const goToFeedbackForm = () => {
        setIsReadyToOrder(true)
    }

    const changeNumber = (value: string) => {
        if (value === "Стереть") {
            setNumber("")
        } else {
            setNumber(`${valueNumber}${value}`)
        }
    }
    const onChangeNumber = (e: ChangeEvent<HTMLInputElement>) => {
        setNumber(e.currentTarget.value)
    }
    const changePersonalData = () => {
        setIsPersonalData(!isPersonalData)
    }
    const confirmNumber = () => {
        setIsConfirmNumber(true)
    }
    useEffect(() => {
        if (valueNumber.length >= 10 && isPersonalData) {
            setIsButtonAccept(false)
        } else {
            setIsButtonAccept(true)
        }
    }, [valueNumber, isPersonalData])

    const returnToStartPage = () => {
        setIsReadyToOrder(false)
    }

    return (
        <div className="App">
            {isReadyToOrder
                ? <FeedbackForm valueNumber={valueNumber}
                                changeNumber={changeNumber}
                                onChangeNumber={onChangeNumber}
                                changePersonalData={changePersonalData}
                                isPersonalData={isPersonalData}
                                isButtonAccept={isButtonAccept}
                                confirmNumber={confirmNumber}
                                isConfirmNumber={isConfirmNumber}
                                returnToStartPage={returnToStartPage}
                />
                : <StartPage goToFeedbackForm={goToFeedbackForm} isViewBanner={isViewBanner}/>
            }

        </div>
    );
}


export default App;




