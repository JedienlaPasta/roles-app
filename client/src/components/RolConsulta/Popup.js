import React from 'react'
import { CgClose } from 'react-icons/cg'

export default function Popup({ setShowPopup }) {

    const closePopup = () => {
        setShowPopup(false)
    }

    return (
        <div className='popup-background'>
            <div className="popup-container">
                <div className="popup-header">
                    <h4 className="popup-title">
                        Estas seguro de que quieres continuar?
                    </h4>
                    <button className='popup-close-btn' onClick={closePopup}><CgClose/></button>
                </div>
                <div className='popup-body-container'>
                    <p className='popup-body'>Los datos se sobreescribiran, por lo que estos no se podran recuperar</p>
                </div>
                <div className="popup-btns">
                    <button className='popup-continue-btn' onClick={closePopup}>Continuar</button>
                    <button className='popup-cancel-btn' onClick={closePopup}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}
