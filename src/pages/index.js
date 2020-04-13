import React from 'react'
import { graphql } from "gatsby"


import Layout from '../components/layout'


import PostCardGrid from '../components/cards'
import Welcome from '../components/welcome'


import Divider from '@material-ui/core/Divider'

const IndexPage = ({ data }) => {

  const pageContent = data.contentfulHomePage
  const posts = data.allContentfulPost.edges

  return (
    <Layout>

      <Welcome welcomeContent={pageContent} />

      <Divider variant="middle" />

      <PostCardGrid cardData={posts} />

    </Layout >
  )
}

export default IndexPage

export const pageQuery = graphql`
query MyQuery {
  contentfulHomePage(contentful_id: {eq: "4T1AWsUXoNVYZRHLpVJ1kU"}) {
    id
    bio
    title
  }
  allContentfulPost {
    edges {
      node {
        id
        title
        author
        slug
        subtitle
        image {
          title
          fluid {
            src
          }
        }
      }
    }
  }
}
`