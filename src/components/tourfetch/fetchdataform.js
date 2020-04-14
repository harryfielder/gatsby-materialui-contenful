import React, { Component } from 'react'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';



export class FetchDataForm extends Component {
    render() {
        const { values, handleChange, fetchTours } = this.props
        return (
            <React.Fragment>

                <TextField
                    label="country"
                    margin="normal"
                    onChange={handleChange('country')}
                    variant="outlined"
                    defaultValue={values.country}
                />

                <br />

                <Button
                    variant="contained"
                    color="primary"
                    style={styles.button}
                    onClick={fetchTours}
                    Search For Tours
                ><SearchIcon style={{ marginRight: 10 }} />Search
                </Button>
            </React.Fragment >
        )
    }
}

const styles = {
    button: {
        marginTop: 20,
        marginBottom: 20
    }
}
export default FetchDataForm
