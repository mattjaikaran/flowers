import React from 'react'
import { connect } from 'react-redux'
import SearchResults from './SearchResults'

const Home = ({ searchResults }) => {
  console.log(searchResults)
  return (
    <div>
      <h2>Home</h2>
      <SearchResults data={searchResults} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  searchResults: state.SEARCH_RESULTS
})

export default connect(null, mapStateToProps)(Home)
