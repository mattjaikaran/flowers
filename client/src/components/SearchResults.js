import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const SearchResults = (props) => {
  console.log(props)
  const dispatch = useDispatch()
  const query = useSelector(state => state.query)

  return (
    <div>
      <h3>Search Results</h3>
      <div className="results">
        {/* {props.data.map(item => {
          const { id, title, body } = item
          return (
            <div className="post">
              <h3>{title}</h3>
              <h6>{id}</h6>
              <p>{body}</p>
            </div>
          )
        })}
        */}
      </div>
    </div>
  )
}

export default SearchResults
