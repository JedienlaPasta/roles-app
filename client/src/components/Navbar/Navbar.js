import React from 'react'
import { Routes, Link, Route, useParams } from 'react-router-dom'

export default function Navbar() {

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>home</Link>
                    </li>
                    <li>
                        <Link to='/auth'>auth</Link>
                    </li>
                </ul>

                <Routes>
                    <Route path='/:id' element={<Child />} />
                </Routes>
            </nav>
        </header>
    )
}

const Child = () => {
    let { id } = useParams()

    return (
        <div>
            <p>ID: {id}</p>
        </div>
    )
}