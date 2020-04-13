import React from 'react'

import { graphql } from "gatsby"
import Img from "gatsby-image"


import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogPageSingle = ({ data }) => {

    const post = data.contentfulPost

    return (
        <Layout >
            <SEO title={post.title} />
            <Img
                fluid={post.image.fluid}
                objectFit="cover"
                alt={post.image.title}
            />
            <h1>{post.title}</h1>
            <section dangerouslySetInnerHTML={{ __html: post.content.childContentfulRichText.html }} />
        </Layout >
    )
}

export default BlogPageSingle


export const pageQuery = graphql`
  query ContentfulBlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPost( slug: { eq: $slug}) {
      title
      author
      createdAt
      subtitle
      content {
        childContentfulRichText {
          html
        }
      }
      image {
        fluid(maxHeight: 900) {
          ...GatsbyContentfulFluid
        }
        title
      }
    }
  }
`