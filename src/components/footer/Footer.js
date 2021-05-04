import React from 'react'
import FbIcon from '../../assets/facebook_icon.svg'
import InstaIcon from '../../assets/instagram_icon.svg'
import TwitterIcon from '../../assets/twitter_icon.svg'
const Footer = () => {
  return (
    <>
      <footer>
        <h3>Follow Us On:</h3>
        <div className="flex-row-center">
            <a target="_blank" href="https://facebook.com/" rel="noopener noreferrer">
                <img loading="lazy" src={FbIcon} alt="" className="footer-icon" />
            </a>
            <a target="_blank" href="https://instagram.com/" rel="noopener noreferrer">
                <img loading="lazy" src={InstaIcon} alt="" className="footer-icon" />
            </a>
            <a target="_blank" href="https://twitter.com/" rel="noopener noreferrer">
                <img loading="lazy" src={TwitterIcon} alt="" className="footer-icon" />
            </a>
        </div>
      </footer>
    </>
  )
}

export default Footer
