import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import AdventureForm from '../components/tourfetch/adventureForm';


const FetchExample = () => {

    return (
        <Layout>
            <SEO title="Test Data Fetch" />
            <h1>Test Data Fetch</h1>
            <p>Using the G Adventures API.</p>
            <AdventureForm />
        </Layout>
    )
}

export default FetchExample
