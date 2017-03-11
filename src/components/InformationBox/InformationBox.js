import React, { Component } from 'react'
import Education from '../Education/Education'
import Experience from '../Experience/Experience'
import Technologies from '../Technologies/Technologies'
import Languages from '../Languages/Languages'
import './InformationBox.css'

export default class InformationBox extends Component {
  render () {
    return (
      <section className='InformationBox'>
        <Education />
        <Experience />
        <Technologies />
        <Languages />
      </section>
    )
  }
}
