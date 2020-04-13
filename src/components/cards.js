import React from 'react'

import { Link } from 'gatsby'


import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        flexGrow: 1,
        margin: '0px',
        marginTop: '20px'
    },
}));

const PostCardGrid = (props) => {

    const classes = useStyles()
    const posts = props.cardData

    return (
        <div>
            <Grid container className={classes.root} spacing={3} justify="center">
                {posts.map(({ node }) => {

                    const title = node.title
                    const key = node.id
                    const cardSubtitle = node.subtitle
                    const image = node.image.fluid.src
                    const imageTitle = node.image.title

                    return (
                        <Grid item xs={12} sm={4}>
                            <Card key={key} className={classes.card}>
                                <Link to={node.slug}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={image}
                                            title={imageTitle}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {title}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {cardSubtitle}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Link>

                                <CardActions>
                                    <Link to={node.slug}>
                                        <Button size="small" color="primary">
                                            Learn More
                                    </Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}
export default PostCardGrid