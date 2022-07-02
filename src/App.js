import React from 'react'
import './App.css'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Details from './pages/Details'

import { Route } from 'wouter'

function App() {
  return (
    <div className='App'>
      <section className="App-content">
        <Route path='/' component={Home} />
        <Route path='/gifs/:keyword' component={SearchResults} />
        <Route path='/gifs/:id' component={Details} />
      </section>
    </div>
  );
}

export default App;