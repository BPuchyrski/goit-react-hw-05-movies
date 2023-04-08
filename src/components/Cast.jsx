import axios from "axios";
const { useEffect, useState } = require("react");
const { useParams } = require("react-router-dom")

const Cast = () => {
    const { filmId } = useParams()
    const [cast, setCast] = useState([])
    

    useEffect(() => {
        const id = filmId
        const getCast = async() => {
            const apiKey = '51934b572a5859af92b6c7b46a350a1c';
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`
            )
            
            setCast(response.data.cast)
            
        }
        getCast()
    }, [])

    

    return (
        <>
        {cast.map((item) => {
          return(
            <div key={item.id}>
            <h4>{item.character}</h4>
            <p>{item.name}</p>
            </div>
          )  
        })}
        </>
    )
}

export default Cast