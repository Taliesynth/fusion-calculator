import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Seo from '../../components/seo'

const CompPost = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.image)
  return (
    <Layout pageTitle = {data.mdx.frontmatter.title}>

      <h3>Arcana: {data.mdx.frontmatter.arcana}</h3>
      <GatsbyImage
      image={image}
    />
      <h4>{children}</h4>
      <hr></hr>
      <p>phys: {data.mdx.frontmatter.phys}</p>
      <p>gun: {data.mdx.frontmatter.gun}</p>
      <p>fire: {data.mdx.frontmatter.fire}</p>
      <p>ice: {data.mdx.frontmatter.ice}</p>
      <p>elec: {data.mdx.frontmatter.elec}</p>
      <p>wind: {data.mdx.frontmatter.wind}</p>
      <p>psy: {data.mdx.frontmatter.psy}</p>
      <p>nuke: {data.mdx.frontmatter.nuke}</p>
      <p>bless: {data.mdx.frontmatter.bless}</p>
      <p>curse: {data.mdx.frontmatter.curse}</p>
    </Layout>
  )
}

export const query = graphql`
query ($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      title
      slug
      arcana
      bless
      curse
      elec
      fire
      gun
      ice
      nuke
      phys
      psy
      wind
      image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
}
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default CompPost