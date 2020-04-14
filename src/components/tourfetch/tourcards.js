import React, { Component } from 'react'

export default class TourCards extends Component {

    render() {
        const isSearching = this.props.searchVisible
        console.log("Searching Status " + { isSearching })
        return (
            <div>
                <h1>{this.props.toursToRender}</h1>
            </div>
        )
    }
}
