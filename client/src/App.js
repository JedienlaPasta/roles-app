import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RolCobro from './components/RolCobro/RolCobro'
import RolConsulta from './components/RolConsulta/RolConsulta'
import Auth from './components/Auth/Auth'
import Navbar from './components/Navbar/Navbar'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'

export default function App() {
  
  return (
    <div className='app-container'>
      <Routes>
        <Route path="/*" element={ <PrivateRoute /> }>
          <Route path="/*" element={ [<Navbar key='navApp'/>, <RolCobro key='rolbody' />] }/>
        </Route>
        <Route path="/rol2/*" element={ <PrivateRoute /> }>
          <Route path="/rol2/*" element={ [<Navbar key='navApp'/>, <RolConsulta key='rol2body' />] }/>
        </Route>
        <Route exact path='/auth/*' element={ <Auth key='auth' /> }/>
      </Routes>
    </div>
  )
}