import React from 'react'
import { Link } from 'gatsby'

import '../fonts/AvenirNextLTPro-Bold.woff'
// import '../fonts/font-file.woff'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import HomeContainer from '../components/homeContainer'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeContainer />

  </Layout>
)

export default IndexPage
