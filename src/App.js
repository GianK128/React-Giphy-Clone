import React from 'react'
import './App.css'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Details from './pages/Details'
import { GifsContextProvider } from './context/GifsContext'

import { Route } from 'wouter'

function App() {
  return (
    <div className='App'>
      <section className="App-content">
        <GifsContextProvider>
          <Route path='/' component={Home} />
          <Route path='/search/:keyword' component={SearchResults} />
          <Route path='/gif/:id' component={Details} />
        </GifsContextProvider>
      </section>
    </div>
  );
}

export default App;