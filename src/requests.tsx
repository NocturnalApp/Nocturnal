import axios from "axios";
import {useEffect, useState} from 'react'
import request from './request_api'

const Request = () => {
    const [movies, setMovies] = useState([])
    const movie = movies.length > 0 ? movies[Math.floor(Math.random() * movies.length)] : null;
    useEffect(()=>{
        axios.get(request.requestTrending).then((response)=>{
            setMovies(response.data.results)
        })

    },[])
    console.log(movie);
    
    return(
        <div>Request</div>
    )
}
export default Request