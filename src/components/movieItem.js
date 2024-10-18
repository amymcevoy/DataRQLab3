import { useEffect } from "react";
import Card from 'react-bootstrap/Card';

function MovieItem(props) {
    useEffect(() => {
      console.log("Movie Item:", props.myMovie);
    }, [props.myMovie]);

    useEffect(
        ()=>{
            //connect with API
        },[]
    );

    //Display movie title,poster and year on cards
    return(
        <div>
           <Card>
        <Card.Header>{props.myMovie.Title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <img src={props.myMovie.Poster} alt={props.myMovie.Title} />
            <footer>{props.myMovie.Year}</footer>
          </blockquote>
        </Card.Body>
      </Card>
        </div>
    );
}

export default MovieItem;