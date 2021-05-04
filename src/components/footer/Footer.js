import React from 'react'
import FbIcon from '../../assets/facebook_icon.svg'
import InstaIcon from '../../assets/instagram_icon.svg'
import TwitterIcon from '../../assets/twitter_icon.svg'
const Footer = () => {
  return (
    <>
      <footer>
        <div className="flex-row-center">
            <a target="_blank" href="https://facebook.com/" rel="noopener noreferrer">
                <img loading="lazy" src={FbIcon} alt="facebook" className="footer-icon" />
            </a>
            <a target="_blank" href="https://instagram.com/" rel="noopener noreferrer">
                <img loading="lazy" src={InstaIcon} alt="instagram" className="footer-icon" />
            </a>
            <a target="_blank" href="https://twitter.com/" rel="noopener noreferrer">
                <img loading="lazy" src={TwitterIcon} alt="twitter" className="footer-icon" />
            </a>
        </div>
      </footer>
    </>
  )
}

export default Footer
