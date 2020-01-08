import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const Edit = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const obj = {
      title: setTitle,
      body: setBody
    }
    dispatch({ type: '', payload: obj })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField
          label="Title"
          name="title"
          onChange={e => setTitle(e.target.value)}
          defaultValue={title} />
      </div>
      <div>
        <TextField
          label="Body"
          name="body"
          onChange={e => setBody(e.target.value)}
          defaultValue={body} />
      </div>
      <Button variant="outlined" color="primary">
        Submit
      </Button>
    </form>
  )
}

export default Edit
