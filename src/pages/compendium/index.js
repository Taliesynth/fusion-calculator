import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'


const compendium = ({ data }) => {
  return (
    <Layout pageTitle="Compendium">     
      {        
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/compendium/${node.frontmatter.slug}/`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Arcana: {node.frontmatter.arcana}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { title: ASC }}) {
      nodes {
        frontmatter {
          title
          slug
          arcana
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="Compendium" />

export default compendium