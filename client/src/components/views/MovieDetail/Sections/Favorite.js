import React, {useEffect, useState} from 'react';
import Axios from 'axios'
import {Button} from 'antd'

function Favorite(props) {

    const movieId = props.movieId
    const userFrom = props.userFrom
    const movieTitle = props.movieInfo.title
    const moviePost = props.movieInfo.backdrop_path
    const movieRunTime = props.movieInfo.runtime

    const [favoriteNumber, setFavoriteNumber] = useState(0);
    const [favorited, setFavorited] = useState(false);
    let variables = {
        userFrom,
        movieId,
        movieTitle,
        moviePost,
        movieRunTime,
    }


    useEffect(() => {
        Axios.post('/api/favorite/favoriteNumber', variables)
            .then(response => {
                console.log('favoriteNumber', response.data);
                if (response.data.success) {
                    setFavoriteNumber(response.data.favoriteNumber);
                } else {
                    alert('숫자 정보를 가져오는데 실패 했습니다.')
                }
            })
        Axios.post('/api/favorite/favorited', variables)
            .then(response => {
                console.log('favorited', response.data);
                if (response.data.success) {
                    setFavorited(response.data.favorited);
                } else {
                    alert('정보를 가져오는데 실패 했습니다.')
                }
            })
    }, []);

    const onClickFavortie = () => {

        if (favorited) {
            Axios.post('/api/favorite/removeFromFavorite', variables)
                .then(response => {
                    if (response.data.success) {
                        setFavoriteNumber(favoriteNumber - 1);
                        setFavorited(!favorited);
                    } else {
                        alert('Favorite 리스트에서 지우는 걸 실패했습니다.')
                    }

                })
        } else {
            Axios.post('/api/favorite/addFromFavorite', variables)
                .then(response => {
                    if (response.data.success) {
                        setFavoriteNumber(favoriteNumber + 1);
                        setFavorited(!favorited);
                    } else {
                        alert('Favorite 리스트에서 추가하는 걸 실패했습니다.')
                    }
                })
        }
    }

    return (
        <div>
            <Button
                onClick={onClickFavortie}>{favorited ? "Not Favorited" : "Add to Favorite"} {favoriteNumber}</Button>
        </div>
    );
}

export default Favorite;