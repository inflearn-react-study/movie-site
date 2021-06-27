import React, {useEffect, useState} from 'react';
import {API_KEY, API_URL, IMAGE_BASE_URL} from "../../Config";
import MainImage from "../commons/MainImage";
import MovieInfo from "./Sections/MovieInfo";
import GridCards from "../commons/GridCards";
import {Row} from "antd";

function MovieDetail(props) {
    let movieId = props.match.params.movieId
    const [Movie, setMovie] = useState([]);
    const [Casts, setCasts] = useState([]);
    const [ActorToggle, setActorToggle] = useState([]);
    console.log('props', props);
    useEffect(() => {
        // console.log('props.match', props.match);
        const endPointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
        const endPointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
        fetch(endPointInfo)
            .then(response => response.json())
            .then(response => {
                console.log('response Movie Info', response);
                setMovie(response);
            });

        fetch(endPointCrew)
            .then(response => response.json())
            .then(response => {
                console.log('response Crew Info', response);
                setCasts(response.cast);
            });

    }, []);

    const toggleActorView = () => {
        setActorToggle(!ActorToggle);
    }

    return (
        <div>
            {/* Header */}
            {Movie.backdrop_path &&
            <MainImage
                image={`${IMAGE_BASE_URL}w1280${Movie.backdrop_path}`}
                title={Movie.original_title}
                text={Movie.overview}
            />
            }


            {/* Body */}
            <div style={{width: '85%', margin: '1rem auto'}}>
                {/* Movie Info  */}
                <MovieInfo movie={Movie}/>

                <br/>
                {/*  Actors Grid */}
                <div style={{display: 'flex', justifyContent: 'center', margin: '2rem'}}>
                    <button onClick={toggleActorView}>Toggle Actor View</button>
                </div>
                {ActorToggle &&
                <Row gutter={[16, 16]}>
                    {Casts && Casts.map((casts, idx) => (
                        <React.Fragment key={idx}>
                            {casts.profile_path &&
                            <GridCards
                                image={casts.profile_path ?
                                    `${IMAGE_BASE_URL}w500${casts.profile_path}` : null}
                                characterName={casts.name}
                            />
                            }
                        </React.Fragment>
                    ))}

                </Row>
                }

            </div>
        </div>
    );
}

export default MovieDetail;