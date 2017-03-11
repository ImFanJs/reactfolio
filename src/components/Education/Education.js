import React, { Component } from 'react'
import './Education.css'

export default class Education extends Component {
  render () {
    return (
      <div className='Education'>
        <h2><i className='fa fa-graduation-cap' /> FORMACION</h2>
        <br />
        <hr />
        <div>
          <p className='company'><i className='fa fa-building' /> PLATZI | 2015 - Actual</p>
          <p className='company'><i className='fa fa-graduation-cap' /> Full Stack Developer</p>
          <p className='texto'>Cursos de desarrollo de aplicaciones web y móviles, mediante las mas recientes tecnologías.</p>
        </div>
        <hr />
        <div>
          <p className='company'><i className='fa fa-building' /> UDEMY | 2015 - Actual</p>
          <p className='company'><i className='fa fa-graduation-cap' /> Full Stack Developer</p>
          <p className='texto'>Cursos de desarrollo de aplicaciones web y móviles, mediante las mas recientes tecnologías.</p>
        </div>
        <hr />
        <div>
          <p className='company'><i className='fa fa-building' /> Universidad CNCI | 2016 - 2019</p>
          <p className='company'><i className='fa fa-graduation-cap' /> Ingeniería en Sistemas Computacionales (Pasante 4 tetras de 9).</p>
        </div>
        <hr />
        <div>
          <p className='company'><i className='fa fa-building' /> Universidad CNCI | 2013 - 2016</p>
          <p className='company'><i className='fa fa-graduation-cap' /> Licenciatura en Mercadotecnia (Trunca 6 tetras de 9).</p>
        </div>
      </div>
    )
  }
}
