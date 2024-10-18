import { useState } from "react";
import axios from "axios";
import Movies from './movies';

// Create component for adding a new movie
const Create = () => {
    // State variables for movie details
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [poster, setPoster] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        console.log(title); // Log the movie title (you can add more functionality here)
    };

    return (
        <div>
            <h3>Hello from the Create component</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Movie Title</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} // Update title on change
                    />

                    <label>Add Movie Year</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={year} 
                        onChange={(e) => setYear(e.target.value)} // Update year on change
                    />

                    <label>Add Movie Poster</label>
                    <input 
                        type="url" 
                        className="form-control" 
                        value={poster} 
                        onChange={(e) => setPoster(e.target.value)} // Update poster URL on change
                    />
                </div>

                <div>
                    <input type="submit" value="Add Movie" /> {/* Submit button */}
                </div>
            </form>
        </div>
    );
};

export default Create;
