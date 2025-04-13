import React, {useEffect, useState} from 'react'
import TourCard from './TourCard'

const Gallery = () => { 
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true); //loading status
    const [error, setError] = useState(false); //tracks error
    const fetchTours = async () => { //handles loading and error states
        setLoading(true);
        setError(false);
        try {
            const response = await fetch('https://cors-anywhere.herokuapp.com/https://course-api.com/react-tours-project');
            const data = await response.json(); 
            setTours(data); //sets the tours state 
        } catch (err) {
            setError(true);
            console.error('Error fetching tours:', err);
        }
        setLoading(false);
    };

    useEffect(() => { 
        fetchTours();
    }, []);

    const onRemove = (id) => { 
        setTours(tours.filter((tour) => tour.id !== id));
    };

    if (loading) {
        return (
            <div className="spinner"></div> // Use the spinner class here
        );
    }

    if (error) {
        return <h2>Error</h2>; //error message if fetching fails
    }

    if (tours.length === 0) {
        return (
            <div>
                <h2>No Tours Left</h2>
                <button onClick={() => fetchTours()}>Refresh</button>
            </div>
        );
    } 

    return (
        <div>
            {tours.map((tour) => (
                <TourCard 
                    key={tour.id}
                    {...tour} 
                    onRemove={onRemove}
                /> 
            ))}
        </div>
    );
};

export default Gallery