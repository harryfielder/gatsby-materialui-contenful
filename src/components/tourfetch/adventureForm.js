import React, { Component } from 'react'
import { FetchDataForm } from './fetchdataform';
import MuiAlert from '@material-ui/lab/Alert';
import TourCards from './tourcards';



export default class AdventureForm extends Component {

    state = {
        country: 'Please Choose',
        sendCountry: 'Not Set',
        searching: false,
        person: 'Harry',

    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }


    fetchTours = () => {
        this.setState({ sendCountry: this.state.country })
        this.setState({ search: true })
        const url = "https://randomuser.me/api/?results=1"
        const that = this;

        fetch(url) // Call the fetch function passing the url of the API as a parameter
            .then((resp) => resp.json())
            .then(function (data) {
                const name = data.results[0].name.first
                that.setState({ person: name })
                console.log(name)
            })
            .catch(function () {
                // This is where you run code if the server returns any errors
            });
    }

    render() {

        const { country, autoCompleteVar } = this.state
        const values = { country, autoCompleteVar }
        return (
            <div>
                <FetchDataForm
                    handleChange={this.handleChange}
                    fetchTours={this.fetchTours}
                    values={values}
                />

                <MuiAlert severity="info">Working State: {this.state.country}</MuiAlert>
                <br />
                <MuiAlert severity="success">Sent State: {this.state.sendCountry}</MuiAlert>

                <TourCards
                    toursToRender={this.state.person}
                    searchVisible={this.state.searching}
                />

            </div>
        )
    }
}
