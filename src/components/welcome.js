import React from 'react'


import Image from '../components/image'
import SEO from '../components/seo'


import Grid from '@material-ui/core/Grid'

const Welcome = (props) => {

    const pageContent = props.welcomeContent

    return (
        <div>
            <SEO title="Home" />
            <Grid container spacing={3} alignItems="center" justify="center">
                <Grid item xs={3}>
                    <div style={{ maxWidth: `100px`, marginBottom: `1.45rem` }}>
                        <Image />
                    </div>
                </Grid>
                <Grid item xs={9}>
                    <h1>{pageContent.title}</h1>
                    <h5>{pageContent.bio}</h5>
                </Grid>
            </Grid>
        </div>
    )
}

export default Welcome
