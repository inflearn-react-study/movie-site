import React from 'react';
import {Descriptions} from "antd";

function MovieInfo(props) {

    let {movie} = props;

    return (
        <Descriptions title="Movie Info" bordered>
            <Descriptions.Item label="title">{movie.title}</Descriptions.Item>
            <Descriptions.Item label="release_date">{movie.release_date}</Descriptions.Item>
            <Descriptions.Item label="revenue">{movie.revenue}</Descriptions.Item>
            <Descriptions.Item label="runtime">{movie.runtime}</Descriptions.Item>
            <Descriptions.Item label="vote_average">{movie.vote_average}</Descriptions.Item>
            <Descriptions.Item label="vote_counter">{movie.vote_counter}</Descriptions.Item>
            <Descriptions.Item label="status">{movie.status}</Descriptions.Item>
            <Descriptions.Item label="popularity">{movie.popularity}</Descriptions.Item>
        </Descriptions>
    );
}

export default MovieInfo;