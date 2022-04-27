import React from 'react'

export default function Item({ COMUNA, ANO, SEMESTRE, ASEO, RUT, PROPIETARIO, DIRECCION, ROL_AVALUO_1, ROL_AVALUO_2, NA, CONTRIBUCION, AVALUO_TOTAL, AVALUO_EXENTO, TER_EXEN, UBICACION, DESTINO, index, tot }) {
    
    // Para calcular el digito verificador del RUT
    const getDV = () => {
        const arr = []
        const mArr = [2, 3, 4, 5, 6, 7]
        if ( RUT !== 0) {
            const inverted = RUT.toString().split("").reverse().join("")
            for (let i = 0; i < inverted.length; i++) {
                arr[i] = inverted.charAt(i)
                if(i < mArr.length) {
                    arr[i] = arr[i] * mArr[i]
                }
                else {
                    let n = i - mArr.length
                    arr[i] = arr[i] * mArr[n]
                }
            }
        }
        const firstTot = arr.reduce((prev, curr) => prev + curr, 0)
        const secondTot = firstTot - Math.floor(firstTot / 11) * 11
        let dv = (11 - secondTot).toString()
        if (dv > 9) {
            if (dv === '11') {
                return dv = '0'
            }
            return dv = 'k'
        }
        return dv
    }

    const dv = getDV()

    const currencyFormat = (val) => {
        return "$" + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
    
    return (
        <>
            { tot > 1 && <h4 className='titulo-resultado'>Resultado #{index + 1}</h4>}
            <table className='list-container'>
                <tbody>
                    <tr>
                        <th>COMUNA:</th>
                        <td>{COMUNA}</td>
                    </tr>
                    <tr>
                        <th>AÑO:</th>
                        <td>{ANO}</td>
                    </tr>
                    <tr>
                        <th>SEMSTRE:</th>
                        <td>{SEMESTRE}</td>
                    </tr>
                    <tr>
                        <th>ASEO:</th>
                        <td>{ASEO}</td>
                    </tr>
                    <tr>
                        <th>RUT:</th>
                        <td>{RUT + '-' + dv}</td>
                    </tr>
                    <tr>
                        <th>PROPIETARIO:</th>
                        <td>{PROPIETARIO}</td>
                    </tr>
                    <tr>
                        <th>DIRECCIÓN:</th>
                        <td>{DIRECCION}</td>
                    </tr>
                    <tr>
                        <th>ROL AVALÚO:</th>
                        <td>{ROL_AVALUO_1 + ' - ' + ROL_AVALUO_2}</td>
                    </tr>
                    <tr>
                        <th>N/A:</th>
                        <td>{NA}</td>
                    </tr>
                    <tr>
                        <th>CONTRIBUCIÓN:</th>
                        <td>{currencyFormat(CONTRIBUCION)}</td>
                    </tr>
                    <tr>
                        <th>AVALÚO TOTAL:</th>
                        <td>{currencyFormat(AVALUO_TOTAL)}</td>
                    </tr>
                    <tr>
                        <th>AVALÚO EXENTO:</th>
                        <td>{currencyFormat(AVALUO_EXENTO)}</td>
                    </tr>
                    <tr>
                        <th>TER.EXEN:</th>
                        <td>{currencyFormat(TER_EXEN)}</td>
                    </tr>
                    <tr>
                        <th>DESTINO:</th>
                        <td>{UBICACION}</td>
                    </tr>
                    <tr>
                        <th>UBICACIÓN:</th>
                        <td>{DESTINO}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}