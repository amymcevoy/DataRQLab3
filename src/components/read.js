import axios from "axios";
import { useEffect, useState } from 'react';
import Movies from './movies';

// Read component to fetch and display movies
const Read = () => {

  // State variable to hold movie data
  const [movies, setMovies] = useState([]);

  // Fetch movie data when the component mounts
  useEffect(() => 
        {
        // Make an API request using axios
        axios.get("https://jsonblob.com/api/jsonblob/1287718524221775872").then((response) => {
            console.log(response.data); // Log the response data
            setMovies(response.data.movies); // Update state with movies
          })
          .catch((error) => 
          {
            console.log(error); // Log any errors
          });

      }, []); // Empty array means this runs once when the component mounts

  return 
  (
    <div>
      <h3>Hello from the Read component</h3>
      <Movies myMovies={movies} />
    </div>
  );
};

export default Read;
