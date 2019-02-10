import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import typography from '../utils/typography'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div className='main-header'
  >
    <div className='main-header-wrapper'>
      {/* <h1 style={{ margin: 0, textAlign: 'center' }}>
        <Link
          to="/"
          style={{
            color: 'hsla(0, 0%, 0%, 0.8)',
            textDecoration: `none`,
            fontSize: '2.5rem'
          }}
        >
          {siteTitle}
        </Link>
      </h1> */}
      <nav className="site-nav">
        <h1>
          <a href="/">JSConf</a>
        </h1>
        <div>
          <a href="/trailer">Sponsors</a>
        </div>
        <div>
          <a href="/trailer">Teams</a>
        </div>
        
      </nav>
      <nav className="social-links">
        <div>
          <a className="social-facebook" href="https://www.facebook.com/Lobsterfilm/" target="_blank">
          <img src="http://thelobster-movie.com/assets/img/facebook-icon.svg" /></a>
        </div>
        <div>
          <a className="social-twitter" href="https://twitter.com/LobsterFilm" target="_blank">
            <img src="http://thelobster-movie.com/assets/img/twitter-icon.svg" />
          </a>
        </div>
      </nav>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
