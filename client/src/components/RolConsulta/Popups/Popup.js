import React, { useContext, useEffect, useState } from 'react'
import { CgClose } from 'react-icons/cg'
import { patchPermiso, postPermiso } from '../../../actions/permisos'
import { ACTIONS, DataContext } from '../../../context/DataContext'

export default function Popup({ showPopup, setShowPopup, crudFilter, setCrudFilter }) {
    const [msg, setMsg] = useState('')
    const [loading, setLoading] = useState(true)
    const [sent, setSent] = useState(false)
    const { message, setMessage, newPermiso, setNewPermiso, dispatch } = useContext(DataContext)

    useEffect(() => {
        setMsg(message)
    }, [message])

    useEffect(() => {
        if (message) {
            console.log('sent')
            setMsg(message)
            setLoading(false)
        }
        else if (crudFilter.type === 'update' && !message) {
            console.log('not sent')
            setMsg('Los datos se sobreescribiran, por lo que estos no se podran recuperar')
            console.log(crudFilter.type)
            setLoading(false)
        }
    }, [showPopup, message])

    const savePermiso = () => {
        const permisoToCheck = Object.fromEntries(Object.entries(newPermiso).filter(([key]) => key !== 'MZ'))
        // reviza si todos los campos del nuevo objeto son distintos de ''
        const isValid = Object.values(permisoToCheck).every(val => val !== '')
        if (isValid) {
            if (crudFilter.type === 'insert') {
                postPermiso(newPermiso, setMessage)
                setSent(true)
                setShowPopup(false)
            }
            if (crudFilter.type === 'update') {
                patchPermiso(newPermiso, setMessage)
                setSent(true)
                setShowPopup(false)
                // setCrudFilter({...crudFilter, type: 'read'})
            }
            // Se vacia el formulario una vez ingresado el permiso
            setNewPermiso({ MATRIZ: '', DIGITO: '', NOMBRE: '', APELLIDO_P: '', APELLIDO_M: '', MZ: '', NSTPC: '', CALLE: '', SECTOR: '', N_VIV: '', M2_C_RECEP: '', M2_C_PERM: '', M2_S_PERM: '', M2_TOTAL: '', ESTADO: '' })
        }
    }

    const reset = () => {
        setShowPopup(false)
        setMsg('')
        setMessage('')
        setLoading(true)
    }

    const close = () => {
        reset()
    }
    
    const finish = () => {
        reset()
        setCrudFilter({...crudFilter, type: 'read'})
        dispatch({ type: ACTIONS.FETCH_MATCHES, payload: [] })
    }

    console.log(message)

    return (
        <div className='popup-background'>
            { !message &&
                <div className="popup-container">
                    <div className="popup-header">
                        { crudFilter.type === 'update' && <h4 className="popup-title"> {/* !message && ... */}
                            Estas seguro de que quieres continuar?
                        </h4>}
                        <button className='popup-close-btn' onClick={close}><CgClose/></button>
                    </div>
                    <div className='popup-body-container'>
                        <p className='popup-body'>{ loading ? 'Loading...' : msg }</p>
                    </div>
                    { crudFilter.type === 'update' && <div className="popup-btns"> {/* !message && ... */}
                        <button className='popup-continue-btn' onClick={savePermiso}>Continuar</button>
                        <button className='popup-cancel-btn' onClick={close}>Cancelar</button>
                    </div>}
                </div>
            }
            {   message &&
                <div className="popup-container">
                    <div className="popup-header">
                        <button className='popup-close-btn' onClick={close}><CgClose/></button>
                    </div>
                    <div className='popup-body-container'>
                        <p className='popup-body'>{ loading ? 'Loading...' : msg }</p>
                    </div>
                    <button className='popup-cancel-btn' onClick={finish}>Cerrar</button>
                </div>
            }
        </div>
    )
}
