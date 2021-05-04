import React from 'react';
import Layout from "./layout/Layout"
import PhoneIcon from '../assets/phone.svg'
import EmailIcon from '../assets/email.svg'
import ZoomIcon from '../assets/zoom_icon.png'
const Contact = () => {
  return (
    <Layout>
      <section className="flex-column-center auto-height contact-wrapper">
        <h2>Contact Us:</h2>
        <div className="flex-row-center contact">
          <img src={PhoneIcon} alt="" className="flex-start w-a" />
          <strong>
            <a href="tel:9603757304" target="_blank" rel="noopener noreferrer">+91-9603757304</a>
          </strong>
        </div>
        <div className="flex-row-center contact">
          <img src={EmailIcon} alt="" className="flex-start w-a" />
          <strong>
            <a href="mailto:learn.english.free@gmail.com" target="_blank" rel="noopener noreferrer">
              learn.english.free@gmail.com
            </a>
          </strong>
        </div>
        <strong>or</strong>
        <div>
          <h3>Join on:</h3>
          <a target="_blank" href="https://zoom.com" rel="noopener noreferrer">
            <img src={ZoomIcon} alt="" className="zoom-image" />
          </a>
        </div>
      </section>
    </Layout>
  )
}

export default Contact
