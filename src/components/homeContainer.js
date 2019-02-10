import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const HomeContainer = () => (
  <article className="page page-intro">
    <div className="page-content">
      <header>
        <h1 className='title-jsconf'>JSConf MX</h1>
        <h2 className='subtitle-jsconf'>2020</h2>
      </header>
      <span className='prox'>Próximanente</span>
    </div >
  </article>
)

HomeContainer.propTypes = {
}

HomeContainer.defaultProps = {
}

export default HomeContainer
