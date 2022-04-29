import React, { useState } from 'react'

export default function InsertItem({ type, data }) {
    const title = type === 'insert' ? 'Nuevo Registro' : 'Actualizar Registro'
    const [newRol, setNewRol] = useState({  
        MATRIZ: data.COMUNA || 0,
        DIGITO: data.DIGITO || 0,
        NOMBRE: data.NOMBRE || '',
        APELLIDO_P: data.APELLIDO_P || '',
        APELLIDO_M: data.APELLIDO_M || '',
        MZ: data.MZ || '',
        NSTPC: data.NSTPC || '',
        CALLE: data.CALLE || '',
        SECTOR: data.SECTOR || '',
        N_VIV: data.N_VIV || 0,
        M2_C_RECEP: data.M2_C_RECEP || 0,
        M2_C_PERM: data.M2_C_PERM || 0,
        M2_S_PERM: data.M2_S_PERM || 0,
        M2_TOTAL: data.M2_TOTAL || 0,
        ESTADO: data.ESTADO || ''})
    console.log(newRol.MATRIZ)

    const handleOnChange = (e) => {
        setNewRol(prev => ({...prev, [e.target.name]: e.target.value}))
    }
    
    return (
        <>
            {<h4 className='titulo-resultado'>{title}</h4>}
            <table className='insert-list-container'>
                <tbody>
                    <tr>
                        <th className='text-right'>MATRIZ:</th>
                        <td className='insert-list-input-row'><input type="number" required name='MATRIZ' className='insert-list-input' value={newRol.MATRIZ} onChange={handleOnChange} /></td>
                    </tr>
                    <tr>
                        <th className='text-right'>DÍGITO:</th>
                        <td className='insert-list-input-row'><input type="number" required name='DIGITO' className='insert-list-input' value={newRol.DIGITO} onChange={handleOnChange} /></td>
                    </tr>
                    <tr>
                        <th className='text-right'>NOMBRE:</th>
                        <td className='insert-list-input-row'><input type="text" required name='NOMBRE' className='insert-list-input' value={newRol.NOMBRE} onChange={handleOnChange} /></td>
                    </tr>
                    <tr>
                        <th className='text-right'>APELLIDO P:</th>
                        <td className='insert-list-input-row'><input type="text" required name='APELLIDO_P' className='insert-list-input' value={newRol.APELLIDO_P} onChange={handleOnChange} /></td>
                    </tr>
                    <tr>
                        <th className='text-right'>APELLIDO M:</th>
                        <td className='insert-list-input-row'><input type="text" required name='APELLIDO_M' className='insert-list-input' value={newRol.APELLIDO_M} onChange={handleOnChange} /></td>
                    </tr>
                    <tr>
                        <th className='text-right'>Mz:</th>
                        <td className='insert-list-input-row'><input type="text" name='MZ' className='insert-list-input' value={newRol.MZ} onChange={handleOnChange} /></td>
                    </tr>
                    <tr>
                        <th className='text-right'>N°/St/Pc:</th>{/* is this field required? it contains numbers and strings */}
                        <td className='insert-list-input-row'><input type="text" required name='NSTPC' className='insert-list-input' value={newRol.NSTPC} onChange={handleOnChange} /></td>
                    </tr>
                    <tr>
                        <th className='text-right'>CALLE:</th>
                        <td className='insert-list-input-row'><input type="text" required name='CALLE' className='insert-list-input' value={newRol.CALLE} onChange={handleOnChange} /></td>
                    </tr>
                    <tr>
                        <th className='text-right'>SECTOR:</th>
                        <td className='insert-list-input-row'><input type="text" required name='SECTOR' className='insert-list-input' value={newRol.SECTOR} onChange={handleOnChange} /></td>
                    </tr>
                    <tr>
                        <th className='text-right'>N° VIV:</th>
                        <td className='insert-list-input-row'><input type="number" required name='N_VIV' className='insert-list-input' value={newRol.N_VIV} onChange={handleOnChange} /></td>
                    </tr>
                    <tr>
                        <th className='text-right'>M2 C/RECEP:</th>
                        <td className='insert-list-input-row'><input type="number" required name='M2_C_RECEP' className='insert-list-input' value={newRol.M2_C_RECEP} onChange={handleOnChange} /></td>
                    </tr>
                    <tr>
                        <th className='text-right'>M2 C/PERM:</th>
                        <td className='insert-list-input-row'><input type="number" required name='M2_C_PERM' className='insert-list-input' value={newRol.M2_C_PERM} onChange={handleOnChange} /></td>
                    </tr>
                    <tr>
                        <th className='text-right'>M2 S/PERM:</th>
                        <td className='insert-list-input-row'><input type="number" required name='M2_S_PERM' className='insert-list-input' value={newRol.M2_S_PERM} onChange={handleOnChange} /></td>
                    </tr>
                    <tr>
                        <th className='text-right'>M2 TOTAL:</th>
                        <td className='insert-list-input-row'><input type="number" required name='M2_TOTAL' className='insert-list-input' value={newRol.M2_TOTAL} onChange={handleOnChange} /></td>
                    </tr>
                    <tr>
                        <th className='text-right'>ESTADO:</th>
                        <td className='insert-list-input-row'><input type="text" required name='ESTADO' className='insert-list-input' value={newRol.ESTADO} onChange={handleOnChange} /></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}