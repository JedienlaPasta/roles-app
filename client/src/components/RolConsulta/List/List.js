import React, { useContext, useState } from 'react'
import { ACTIONS, DataContext } from '../../../context/DataContext'
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'
import InsertItem from './InsertItem'
import Item from './Item'
import { patchPermiso, postPermiso } from '../../../actions/permisos'

export default function List({ crudFilter, setCrudFilter, setShowPopup }) {
    const [rolIndex, setRolIndex] = useState(0)
    const { roles, user, dispatch } = useContext(DataContext)
    const totRoles = roles.length
    const type = crudFilter.type
    const [newPermiso, setNewPermiso] = useState({  
        MATRIZ: roles[0]?.MATRIZ || '',
        DIGITO: roles[0]?.DIGITO || '',
        NOMBRE: roles[0]?.NOMBRE || '',
        APELLIDO_P: roles[0]?.APELLIDO_P || '',
        APELLIDO_M: roles[0]?.APELLIDO_M || '',
        MZ: roles[0]?.MZ || '',
        NSTPC: roles[0]?.NSTPC || '',
        CALLE: roles[0]?.CALLE || '',
        SECTOR: roles[0]?.SECTOR || '',
        N_VIV: roles[0]?.N_VIV || '',
        M2_C_RECEP: roles[0]?.M2_C_RECEP || '',
        M2_C_PERM: roles[0]?.M2_C_PERM || '',
        M2_S_PERM: roles[0]?.M2_S_PERM || '',
        M2_TOTAL: roles[0]?.M2_TOTAL || '',
        ESTADO: roles[0]?.ESTADO || ''
    })

    // Displayed items

    let displayItems
    if (type === 'insert') { displayItems = <InsertItem type={type} newPermiso={newPermiso} setNewPermiso={setNewPermiso} /> }
    else if (type === 'update') { displayItems = roles.map((rol) => <InsertItem type={type} newPermiso={newPermiso} setNewPermiso={setNewPermiso} data={rol} key={rol._id} />) }
    else {
        displayItems = roles.map((rol, index) => ( index === rolIndex ?
            <Item key={rol._id} {...rol} index={index} tot={totRoles} /> : null
        ))
    }

    // Functions

    const goForward = () => {
        setRolIndex(prev => {
            if (prev === 4) return 0
            return prev + 1
        })
    }

    const goBackwards = () => {
        setRolIndex(prev => {
            if (prev === 0) return 4
            return prev - 1
        })
    }

    const deletePermiso = () => {

    }

    const editPermiso = () => {
        dispatch({ type: ACTIONS.FETCH_MATCHES, payload: [roles[rolIndex]] })
        if (crudFilter) {
            setCrudFilter({...crudFilter, type: 'update'})
        }
    }

    if (crudFilter) { console.log(crudFilter.type)}

    const savePermiso = (event) => {
        event.preventDefault()
        // filtra al 'newPermiso' sacando el campo 'MZ'
        const permisoToCheck = Object.fromEntries(Object.entries(newPermiso).filter(([key]) => key !== 'MZ'))
        // reviza si todos los campos del nuevo objeto son distintos de ''
        const isValid = Object.values(permisoToCheck).every(field => {
            if (field === '') return false
            else return true
        })
        if (type === 'insert') {
            postPermiso(newPermiso)
        }
        if (type === 'update') {
            patchPermiso(newPermiso)
        }
        // Se vacia el formulario una vez ingresado el permiso
        setNewPermiso({ MATRIZ: '', DIGITO: '', NOMBRE: '', APELLIDO_P: '', APELLIDO_M: '', MZ: '', NSTPC: '', CALLE: '', SECTOR: '', N_VIV: '', M2_C_RECEP: '', M2_C_PERM: '', M2_S_PERM: '', M2_TOTAL: '', ESTADO: '' })
        setShowPopup(true)
    }

    const cancel = (event) => {
        event.preventDefault()
        console.log('cancel')
        dispatch({ type: ACTIONS.FETCH_MATCHES, payload: [] })
        if (crudFilter) {
            setCrudFilter({...crudFilter, crudType: 'Consultar', type: 'read'})
        }
    }

    return (
        <form>
            {   user.role === 'admin' && type !== 'insert' && type !== 'update' &&
                <div>
                    <p className='warning'>Cuidado, usted tiene permisos para editar y eliminar registros</p>
                    <div className="crud-btns-container">
                        <button className='crud-btn delete'>Eliminar</button>
                        <button className='crud-btn edit' onClick={editPermiso}>Editar</button>
                    </div>
                </div>
            }
            <div className="list-items">
                { crudFilter.filter === 'DIR' && totRoles > 1 && 
                    <div className="list-items-btns">
                        <h4 className='titulo-resultado'>Resultado #{rolIndex + 1}</h4>
                        <button className="list-btn btn-left" onClick={goBackwards}><FiChevronsLeft/></button>
                        <button className="list-btn btn-right" onClick={goForward}><FiChevronsRight/></button>
                    </div>
                }
                {displayItems}
            </div>
            {
                type === 'insert' &&
                <div className="crud-btns-container">
                    <button className='crud-btn save' onClick={savePermiso}>Guardar</button>
                    <button className='crud-btn cancel' onClick={cancel}>Cancelar</button>
                </div>
            }
            {
                type === 'update' &&
                <div className="crud-btns-container">
                    <button className='crud-btn save' onClick={savePermiso}>Guardar</button>
                    <button className='crud-btn cancel'>Cancelar</button>
                </div>
            }
        </form>
    )
}