import React from 'react'

export default function InsertItem() {
    
    return (
        <>
            {<h4 className='titulo-resultado'>Nuevo Registro</h4>}
            <table className='insert-list-container'>
                <tbody>
                    <tr>
                        <th className='text-right'>MATRIZ:</th>
                        <td className='insert-list-input-row'><input type="number" className='insert-list-input' /></td>
                    </tr>
                    <tr>
                        <th className='text-right'>DÍGITO:</th>
                        <td className='insert-list-input-row'><input type="number" className='insert-list-input' /></td>
                    </tr>
                    <tr>
                        <th className='text-right'>NOMBRE:</th>
                        <td className='insert-list-input-row'><input type="text" className='insert-list-input' /></td>
                    </tr>
                    <tr>
                        <th className='text-right'>APELLIDO P:</th>
                        <td className='insert-list-input-row'><input type="text" className='insert-list-input' /></td>
                    </tr>
                    <tr>
                        <th className='text-right'>APELLIDO M:</th>
                        <td className='insert-list-input-row'><input type="text" className='insert-list-input' /></td>
                    </tr>
                    <tr>
                        <th className='text-right'>Mz:</th>
                        <td className='insert-list-input-row'><input type="text" className='insert-list-input' /></td>
                    </tr>
                    <tr>
                        <th className='text-right'>N°/St/Pc:</th>{/* is this field required? it contains numbers and strings */}
                        <td className='insert-list-input-row'><input type="text" className='insert-list-input' /></td>
                    </tr>
                    <tr>
                        <th className='text-right'>CALLE:</th>
                        <td className='insert-list-input-row'><input type="text" className='insert-list-input' /></td>
                    </tr>
                    <tr>
                        <th className='text-right'>SECTOR:</th>
                        <td className='insert-list-input-row'><input type="text" className='insert-list-input' /></td>
                    </tr>
                    <tr>
                        <th className='text-right'>N° VIV:</th>
                        <td className='insert-list-input-row'><input type="number" className='insert-list-input' /></td>
                    </tr>
                    <tr>
                        <th className='text-right'>M2 C/RECEP:</th>
                        <td className='insert-list-input-row'><input type="number" className='insert-list-input' /></td>
                    </tr>
                    <tr>
                        <th className='text-right'>M2 C/PERM:</th>
                        <td className='insert-list-input-row'><input type="number" className='insert-list-input' /></td>
                    </tr>
                    <tr>
                        <th className='text-right'>M2 S/PERM:</th>
                        <td className='insert-list-input-row'><input type="number" className='insert-list-input' /></td>
                    </tr>
                    <tr>
                        <th className='text-right'>M2 TOTAL:</th>
                        <td className='insert-list-input-row'><input type="number" className='insert-list-input' /></td>
                    </tr>
                    <tr>
                        <th className='text-right'>ESTADO:</th>
                        <td className='insert-list-input-row'><input type="text" className='insert-list-input' /></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}