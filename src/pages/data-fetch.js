import React from 'react'

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


import Layout from '../components/layout'
import SEO from '../components/seo'

import { countries } from '../components/countries'

function countryToFlag(isoCode) {
    return typeof String.fromCodePoint !== 'undefined'
        ? isoCode
            .toUpperCase()
            .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
        : isoCode;
}

const useStyles = makeStyles({
    option: {
        fontSize: 15,
        '& > span': {
            marginRight: 10,
            fontSize: 18,
        },
    },
    buttonStyle: {
        marginTop: '20px'
    }
});

const FetchExample = () => {

    const classes = useStyles();

    return (
        <Layout>
            <SEO title="Test Data Fetch" />
            <h1>Test Data Fetch</h1>
            <p>Using the G Adventures API.</p>

            <Autocomplete
                id="country-select-demo"
                style={{ width: 300 }}
                options={countries}
                classes={{
                    option: classes.option,
                }}
                autoHighlight
                getOptionLabel={(option) => option.label}
                renderOption={(option) => (
                    <React.Fragment>
                        <span>{countryToFlag(option.code)}</span>
                        {option.label} ({option.code}) +{option.phone}
                    </React.Fragment>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Choose a country"
                        variant="outlined"
                        inputProps={{
                            ...params.inputProps,
                            autoComplete: 'new-password', // disable autocomplete and autofill
                        }}
                    />
                )}
            />
            <Button variant="contained" color="primary" className={classes.buttonStyle}>
                Search For Tours
            </Button>
        </Layout>
    )
}

export default FetchExample
