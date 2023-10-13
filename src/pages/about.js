// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About">
    <p>This site is to help those complete their compendium in the Persona games. It's also very under construction so please be nice thanks</p>
  </Layout>
  )
}

export const Head = () => <Seo title="About" />

// Step 3: Export your component
export default AboutPage
