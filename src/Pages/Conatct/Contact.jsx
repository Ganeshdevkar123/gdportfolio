import React from 'react'
import './contact.css'

import { FaRegEnvelopeOpen, FaPhoneSquareAlt, FaFacebookF, FaTwitter, FaTelegramPlane, FaYoutube } from "react-icons/fa"
import { FiSend } from "react-icons/fi"

import './contact.css'

const Contact = () => {
  return (
    <section className='contact section'>
      <h2 className='section__title'>
        Get In <span>Touch</span>
      </h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">
            Don't be shy !
          </h3>
          <p className="contact__description">
            Feel free top get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaRegEnvelopeOpen className='info__icon' />

              <div>
                <span className="info__title">Mail Me</span>
                <h4 className="info__desc">ganeshdevkar6164@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className='info__icon' />

              <div>
                <span className="info__title">Call Me</span>
                <h4 className="info__desc">9158926164</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a href='https://facebook.com/' target='_blank' className='contact__social-link'>
              <FaFacebookF />
            </a>
            <a href='https://twitter.com/' target='_blank' className='contact__social-link'>
              <FaTwitter />
            </a>
            <a href='https://web.telegram.org/' target='_blank' className='contact__social-link'>
              <FaTelegramPlane />
            </a>
            <a href='https://www.youtube.com/' target='_blank' className='contact__social-link'>
              <FaYoutube />
            </a>
          </div>



        </div>

        <form action="" className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input type="text" placeholder='Enter your name' className="form__control" />
            </div>
            <div className="form__input-div">
              <input type="email" placeholder='Enter your email ' className="form__control" />
            </div>
            <div className="form__input-div">
              <input type="text" placeholder='Enter your subject' className="form__control" />
            </div>
          </div>
          <div className="form__input-div">
            <textarea className="textarea form__control" placeholder='Enter your message'></textarea>
          </div>
          <button className='button'>
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact