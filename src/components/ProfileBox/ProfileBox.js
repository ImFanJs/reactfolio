import React, { Component } from 'react'
import ProfileHeader from '../ProfileHeader/ProfileHeader'
import ProfileDescription from '../ProfileDescription/ProfileDescription'
import ProfileContact from '../ProfileContact/ProfileContact'
import './ProfileBox.css'

export default class ProfileBox extends Component {
  render () {
    return (
      <section className='ProfileBox'>
        <ProfileHeader />
        <ProfileDescription />
        <ProfileContact />
      </section>
    )
  }
}
