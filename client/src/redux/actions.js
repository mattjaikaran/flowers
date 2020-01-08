import axios from 'axios'

const url = 'http://localhost:5000/'

export const getAll = (item) => dispatch => {
  axios.get(url)
    .then(res => console.log(res))
    .then(res => dispatch(res.data))
    .catch(err => console.log(err.message))
}

export const getPostByTitle = (item) => dispatch => {
  axios.get(url)
  .then(res => dispatch())
}
