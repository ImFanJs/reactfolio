import React, { Component } from 'react'
import './Languages.css'

export default class Languages extends Component {
  render () {
    return (
      <div className='Languages'>
        <h2><i className='fa fa-language' /> IDIOMAS</h2>
        <br />
        <hr />
        <p className='texto'><i className='fa fa-comments-o' /> ESPAÑOL: Nativo</p>
        <p className='texto'><i className='fa fa-comments-o' /> INGLES: Competencia básica profesional</p>
        <p className='texto'><i className='fa fa-comments-o' /> FRANCES: Competencia básica</p>
      </div>
    )
  }
}
