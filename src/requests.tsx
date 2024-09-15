import axios from "axios";
import {useEffect, useState} from 'react'
import request from './request_api'

const Request = () => {
    const [movies, setMovies] = useState([]) //Initializes a state variable `movies` with an empty array. This variable will hold the list of movies fetched from the API. setMovies` is a function used to update the `movies` state.

    const movie = movies.length > 0 ? movies[Math.floor(Math.random() * movies.length)] : null; //random movie from the `movies` array if it contains any movies. If `movies` is empty, `movie` is set to `null`
    useEffect(()=>{
        axios.get(request.requestTrending).then((response)=>{  //GET request to the TMDb API to fetch trending movies.
            setMovies(response.data.results) //updates the `movies` state with the results from the API response
        })

    },[]) //empty dependency array (`[]`) ensures that this effect runs only once, similar to `componentDidMount`.
    console.log(movie);
    
    return(
        <div>Request</div>
    )
}
export default Request  