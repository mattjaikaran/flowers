import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Edit from './components/Edit'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/edit/:title" component={Edit} />
      </Switch>
    </div>
  )
}

export default App
