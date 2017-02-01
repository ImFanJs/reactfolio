import React, { Component } from 'react'
import './ProfileDescription.css'

export default class ProfileDescription extends Component {
  render () {
    return (
      <div className='ProfileDescription'>
        <div className='titleStyle'>
          <i className='fa fa-user' />
          <h2>FULL STACK DEVELOPER</h2>
        </div>
        <p>Desarrollador de aplicaciones web y móviles. Apasionado por el mundo de la tecnología, autodidacta, fan del nuevo JavaScript y del buen código.</p>
      </div>
    )
  }
}
