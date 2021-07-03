import React, {useEffect, useState} from 'react';
import './favorite.css'
import Axios from "axios";
import {Popover} from 'antd';
import {IMAGE_BASE_URL} from "../../Config";

function FavoritePage(props) {

    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        fetchFavoredMovie();
    }, []);
    const fetchFavoredMovie = () => {
        Axios.post('/api/favorite/getFavoredMovie', {userFrom: localStorage.getItem('userId')})
            .then(res => {

                if (res.data.success) {
                    setFavorites(res.data.favorites)
                } else {
                    alert('영화 정보를 가져오는데 실패 했습니다.');
                }
            })
    }

    const onClickDelete = (movieId, userFrom) => {
        const variables = {
            movieId,
            userFrom,
        }
        Axios.post('/api/favorite/removeFromFavorite', variables)
            .then(res => {

                if (res.data.success) {
                    fetchFavoredMovie()
                } else {
                    alert('리스트에서 지우는데 실패 했습니다.');
                }
            })
    }
    const renderCards = favorites.map((el, idx) => {
        const content = (
            <div>
                {el.moviePost ?
                    <img src={`${IMAGE_BASE_URL}w500${el.moviePost}`}/> : "No Image"}

            </div>
        )
        // const renderEventHandler1 = (movieId, userFrom) => {
        //     console.log('1', movieId, userFrom);
        // }
        //
        // const renderEventHandler2 = (movieId, userFrom) => {
        //     console.log('2', movieId, userFrom);
        // }
        //
        // const renderEventHandler3 = (e) => {
        //     console.log('3', e.target.dataset.movieId, e.target.dataset.userFrom);
        // }

        return <tr key={idx}>
            <Popover content={content} title={`${el.movieTitle}`}>
                <td>{el.movieTitle}</td>
            </Popover>
            <td>{el.movieRunTime}</td>
            <td>
                <button onClick={() => onClickDelete(el.movieId, el.userFrom)}>Remove</button>
                {/*<button onClick={renderEventHandler1(el.movieId, el.userFrom)}>Remove</button>*/}
                {/*<button onClick={() => renderEventHandler2(el.movieId, el.userFrom)}>Remove</button>*/}
                {/*<button data-movie-id={el.movieId} data-user-from={el.userFrom}onClick={renderEventHandler3}>Remove</button>*/}
            </td>

        </tr>
    })
    return (
        <div style={{width: '85%', margin: '3rem auto'}}>
            <h2> Favorite Movies</h2>
            <hr/>

            <table>
                <thead>
                <tr>
                    <th>Movie Title</th>
                    <th>Movie RuntTime</th>
                    <td>Remove from favorites</td>
                </tr>
                </thead>
                <tbody>
                {renderCards}
                </tbody>
            </table>
        </div>
    );
}

export default FavoritePage;