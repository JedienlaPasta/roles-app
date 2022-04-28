import React from 'react'

export default function InsertItem() {
    
    return (
        <>
            {<h4 className='titulo-resultado'>Nuevo Registro</h4>}
            <table className='insert-list-container'>
                <tbody>
                    <tr>
                        <th>MATRIZ:</th>
                        <td><input type="number" className='insert-list-input' /></td>
                    </tr>
                    <tr>
                        <th>DÍGITO:</th>
                        <td><input type="number" className='insert-list-input' /></td>
                    </tr>
                    <tr>
                        <th>NOMBRE:</th>
                        <td><input type="text" className='insert-list-input' /></td>
                    </tr>
                    <tr>
                        <th>APELLIDO P:</th>
                        <td><input type="text" className='insert-list-input' /></td>
                    </tr>
                    <tr>
                        <th>APELLIDO M:</th>
                        <td><input type="text" className='insert-list-input' /></td>
                    </tr>
                    <tr>
                        <th>Mz:</th>
                        <td><input type="text" className='insert-list-input' /></td>
                    </tr>
                    <tr>
                        <th>N°/St/Pc:</th>{/* is this field required? it contains numbers and strings */}
                        <td><input type="text" className='insert-list-input' /></td>
                    </tr>
                    <tr>
                        <th>CALLE:</th>
                        <td><input type="text" className='insert-list-input' /></td>
                    </tr>
                    <tr>
                        <th>SECTOR:</th>
                        <td><input type="text" className='insert-list-input' /></td>
                    </tr>
                    <tr>
                        <th>N° VIV:</th>
                        <td><input type="number" className='insert-list-input' /></td>
                    </tr>
                    <tr>
                        <th>M2 C/RECEP:</th>
                        <td><input type="number" className='insert-list-input' /></td>
                    </tr>
                    <tr>
                        <th>M2 C/PERM:</th>
                        <td><input type="number" className='insert-list-input' /></td>
                    </tr>
                    <tr>
                        <th>M2 S/PERM:</th>
                        <td><input type="number" className='insert-list-input' /></td>
                    </tr>
                    <tr>
                        <th>M2 TOTAL:</th>
                        <td><input type="number" className='insert-list-input' /></td>
                    </tr>
                    <tr>
                        <th>ESTADO:</th>
                        <td><input type="text" className='insert-list-input' /></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}