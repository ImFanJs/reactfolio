import React, { Component } from 'react'
import './ProfileContact.css'

export default class ProfileContact extends Component {
  render () {
    return (
      <div className='ProfileContact'>
        <div className='contactStyle'>
          <h2><i className='fa fa-vcard-o' /> CONTACTO</h2>
        </div>
        <div className='card'>
          <p><i className='fa fa-phone' /> <i className='fa fa-whatsapp' /> 812 150 0952</p>
          <p><i className='fa fa-envelope' /> jes.cas8612@gmail.com</p>
          <p><i className='fa fa-skype' /> jesus_castaneda86</p>
        </div>
        <div className='social'>
          <a href='https://www.facebook.com/jesuscastanedamty'>
            <i className='fa fa-facebook opacity' />
          </a>
          <a href='https://twitter.com/jesus_castaneda'>
            <i className='fa fa-twitter opacity' />
          </a>
          <a href='https://www.linkedin.com/in/jes%C3%BAs-manuel-casta%C3%B1eda-olmos-06a27ab7'>
            <i className='fa fa-linkedin opacity' />
          </a>
          <a href='https://github.com/JescoMarketing'>
            <i className='fa fa-github opacity' />
          </a>
          <a href='https://www.sololearn.com/Profile/1171988'>
            <i className='fa fa-certificate opacity' />
          </a>
          <a href='https://www.freecodecamp.com/jesuscastaneda86'>
            <i className='fa fa-free-code-camp' />
          </a>
          <a href='https://medium.com/@jesus_castaneda'>
            <i className='fa fa-medium opacity' />
          </a>
          <a href='https://drive.google.com/open?id=0B5UoTTC89hCRakdpUDVtemdNZlE'>
            <i className='fa fa-file-pdf-o opacity' />
          </a>
        </div>
        <br />
      </div>
    )
  }
}
