import React, { Component } from 'react'
import './ProfileHeader.css'
import ProfilePic from './perfil.jpg'

export default class ProfileHeader extends Component {
  render () {
    return (
      <section className='ProfileHeader'>
        <figure>
          <img src={ProfilePic} alt='foto perfil' />
        </figure>
        <h1>JESUS MANUEL <br />CASTAÑEDA OLMOS</h1>
      </section>
    )
  }
}
