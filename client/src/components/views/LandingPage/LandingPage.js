import React, {useEffect, useState} from 'react'
// import {FaCode} from "react-icons/fa";
import {API_KEY, API_URL, IMAGE_BASE_URL} from "../../Config";
import MainImage from "./Sections/MainImage";
import GridCards from "../commons/GridCards";
import {Row} from 'antd';

function LandingPage() {

    const [Movies, setMovies] = useState([]);
    const [MainMovieImg, setMainMovieImg] = useState(null);

    useEffect(() => {
        const endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        fetch(endPoint)
            .then(response => response.json())
            .then(response => {
                setMovies([...response.results]);
                setMainMovieImg(response.results[0]);
            });

    }, [])

    return (
        <div style={{width: '100%', margin: '0'}}>
            {/* Main Image */}
            {MainMovieImg &&
            <MainImage
                image={`${IMAGE_BASE_URL}w1280${MainMovieImg.backdrop_path}`}
                title={MainMovieImg.original_title}
                text={MainMovieImg.overview}
            />
            }
            <div style={{width: '85%', margin: '0'}}>
                <h2>Movies by latest</h2>
                <hr/>
                <Row gutter={[16, 16]}>
                    {Movies && Movies.map((movie, idx) => (
                        <React.Fragment key={idx}>
                            <GridCards
                                image={movie.poster_path ?
                                    `${IMAGE_BASE_URL}w500${movie.poster_path}` : null}
                                movieId={movie.id}
                                movieName={movie.original_title}
                            />
                        </React.Fragment>
                    ))}

                </Row>

            </div>

            <div style={{display: 'flex', justifyContent: 'center'}}>
                <button> Load More</button>
            </div>

        </div>
    )
}

export default LandingPage
