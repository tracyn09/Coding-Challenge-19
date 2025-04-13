import React, {useState} from 'react'
import Gallery from './components/Gallery.jsx'
import './styles/styles.css'

function App() { 
  const [tours, setTours] = useState([]) //Hold list of tours fetched from the API

  const removeTour = (id) => { 
    setTours(tours.filter((tour) => tour.id !== id))
  }

  return (
    <main>
      <h1>Available Tours</h1>
      <Gallery tours={tours} />
      </main>
    );
  }
  export default App