import React from 'react';
import Layout from "./layout/Layout"
import PhoneIcon from '../assets/phone.svg'
import EmailIcon from '../assets/email.svg'
import ZoomIcon from '../assets/zoom_icon.png'
const Contact = () => {
  return (
    <Layout>
      <section className="flex-column-center contact-wrapper">
        <h1 className="contact-title">Contact Us:</h1>
        <div className="contact">
          <img src={PhoneIcon} alt="" className="flex-start w-a" />
          <strong className="big-p phone-p" title="call to this number">
            <a className="external-link" href="tel:9848006050" target="_blank" rel="noopener noreferrer">+91-9848006050</a>
          </strong>
        </div>
        <div className="contact">
          <img src={EmailIcon} alt="" className="flex-start w-a" />
          <strong className="big-p email-p" title="mail to this gmail">
            <a className="external-link" href="mailto:spokenglish.free@gmail.com" target="_blank" rel="noopener noreferrer">
              spokenglish.free@gmail.com
            </a>
          </strong>
        </div>
        <div>
          <h1 className="contact-title">Join us on:</h1>
          <a className="external-img-link" target="_blank" href="https://zoom.us/" rel="noopener noreferrer">
            <img src={ZoomIcon} alt="" className="zoom-image" />
          </a>
        </div>
      </section>
    </Layout>
  )
}

export default Contact
