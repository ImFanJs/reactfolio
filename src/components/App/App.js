import React, { Component } from 'react'
import ProfileBox from '../ProfileBox/ProfileBox'
import InformationBox from '../InformationBox/InformationBox'
import './App.css'

export default class App extends Component {
  render () {
    return (
      <div className='App'>
        <ProfileBox />
        <InformationBox />
      </div>
    )
  }
}
