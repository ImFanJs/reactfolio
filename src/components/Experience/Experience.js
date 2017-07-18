import React, { Component } from 'react'
import './Experience.css'

export default class Experience extends Component {
  render () {
    return (
      <div className='Experience'>
        <h2><i className='fa fa-suitcase' /> EXPERIENCIA</h2>
        <br />
        <hr />
        
        <div>
          <p className='company'><i className='fa fa-building' /> Gamma Partners Chihuahua, Chihuahua | 2017 - Actual</p>
          <hr/>
          <p className='company'><i className='fa fa-building' /> Bridge Studio Guadalajara, Jalisco | 2016 - 2017</p>
          <hr/>
          <p className='company'><i className='fa fa-building' /> Jesco Marketing Monterrey N.L | 2012 - 2017</p>
          <hr/>
          <p className='texto'>
            Como desarrollador web y móvil he trabajado en diferentes proyectos y en cada uno he utilizado la tecnología mas adecuada.
          </p>
          <p className='texto'>
            Desarrollo mediante Angular o React en base a componentes, utilizando html5, css3, jquery, bootstrap, foundation, javascript es6, entre otras.
          </p>
          <p className='texto'>
            También tengo experiencia en desarrollo móvil utilizando tecnologías como Ionic y React Native.
          </p>
          <p className='texto'>
            Mi trabajo es pasar a código los diseños en photoshop y realizar la conexión entre las vistas con las apis que utilizamos, tanto api rest creada por nosotros o apis de terceros como facebook, twitter, google maps, spotify, etc...
          </p>
          <p className='texto'>
            Siempre con la mentalidad de escribir buen código limpio y reusable. Tratando de estar al día siempre con las tecnologías mas nuevas en el mercado.
          </p>
          <p className='texto'>
            Apoyo en el lado del backend, realizando las apis mediante nodejs y su framework express o en algunos casos utilizando php y su framework laravel.
          </p>
        </div>
      </div>
    )
  }
}
