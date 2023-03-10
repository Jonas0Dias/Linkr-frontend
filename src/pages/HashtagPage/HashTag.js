import axios from "axios"
import { useEffect, useState} from "react"
import styled from "styled-components"




export default function trending () {

    const { trendingHashtag, setTrandingHashtag } = useState()

    const config = { headers: {authorization: `Bearer ${localStorage.getItem("token")}`}

}

useEffect (() => {

    const req = axios.get(process.env.REACT_APP_API_URL + "/hashtag", {config})
    req.then(response => {
        setTrandingHashtag(response.data)
    })
}, [])


return (
    <TrendingContainer>
        <h1>trending</h1>
        <ul>
            {trendingHashtag.map((hashtag, index) => (
                <li key={index}>
                    <span>{hashtag.name}</span>
                </li>
            ))}
        </ul>
    </TrendingContainer>
)
}

const TrendingContainer = styled.div`
width: 290px;
height: 100%;
background-color: #171717;
border-radius: 16px;
padding: 20px;
margin-top: 270px;
margin-left: 73px;
h1 {
    font-family: 'Oswald', sans-serif;
    font-size: 25px;
    color: #FFF;
    margin-bottom: 20px;
    border-bottom: #333333 1px solid;
}
ul {
    li {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        span {
            font-family: 'Lato', sans-serif;
            font-size: 19px;
            color: #FFF;
            margin-left: 10px;
        }
        
    }
}

`  



