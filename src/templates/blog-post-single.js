import React from 'react'

import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Button from '@material-ui/core/Button';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider'




import Layout from '../components/layout'
import SEO from '../components/seo'


const useStyles = makeStyles({
  h1: {
    marginTop: '20px'
  },
  spacer: {
    marginTop: '20px',
    marginBottom: '20px'
  }
});

const BlogPageSingle = ({ data, pageContext }) => {

  const post = data.contentfulPost
  const previous = pageContext.previous
  const next = pageContext.next
  const classes = useStyles();


  console.log(previous)

  return (
    <Layout >
      <SEO title={post.title} />
      <Img
        fluid={post.image.fluid}
        objectFit="cover"
        alt={post.image.title}
      />

      <Typography variant="h2" component="h2" gutterBottom className={classes.h1}>
        {post.title}
      </Typography>
      <Typography variant="overline" gutterBottom>
        By {post.author} | Written on {post.createdAt}
      </Typography>

      <Divider variant="fullwidth" className={classes.spacer} />

      <Typography variant="body1" gutterBottom dangerouslySetInnerHTML={{ __html: post.content.childContentfulRichText.html }}></Typography>

      {/* Begin Pagination */}

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 30,
            margin: 0
          }}
        >
          <li>
            {previous && (
              <Link to={previous.slug} rel="prev">
                <Button color="primary">
                  <ChevronLeftIcon /> {previous.title}
                </Button>
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.slug} rel="next">
                <Button color="primary">
                  {next.title} <ChevronRightIcon />
                </Button>
              </Link>
            )}
          </li>
        </ul>
      </nav>
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