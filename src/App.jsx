import React, {useState} from 'react'
import Gallery from './components/Gallery.jsx'
import './styles/styles.css'

function App() { 
  const [tours, setTours] = useState([]) //Hold list of tours fetched from the API
  const [loading, setLoading] = useState(true) //Loading status
  const [error, setError] = useState(false) //Error status

  const removeTour = (id) => { 
    setTours(tours.filter((tour) => tour.id !== id))
  }

  return (
    <main>
      <h1>Available Tours</h1>
      <Gallery tours={tours} loading={loading} error={error} removeTour={removeTour} />
      </main>
    );
  }
  export default App