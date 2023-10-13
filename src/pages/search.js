import * as React from 'react'
import Layout from '../components/layout'
import SearchLayout from '../components/search layout'

const SearchPage = () => {
  return (
    <div>
    <Layout pageTitle="Search">
    </Layout>
    <SearchLayout>
    </SearchLayout>
    </div>
  )
}

export const Head = () => <title>Search</title>

export default SearchPage