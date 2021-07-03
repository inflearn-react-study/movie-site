import React, {useEffect, useState} from 'react';
import './favorite.css'
import Axios from "axios";

function FavoritePage(props) {

    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        Axios.post('/api/favorite/getFavoredMovie', {userFrom: localStorage.getItem('userId')})
            .then(res => {

                if (res.data.success) {
                    setFavorites(res.data.favorites)
                } else {
                    alert('영화 정보를 가져오는데 실패 했습니다.');
                }
            })
    }, []);


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
                {favorites.map((el, idx) => (
                    <tr key={idx}>
                        <td>{el.movieTitle}</td>
                        <td>{el.movieRunTime}</td>
                        <td><button>Remove</button></td>

                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default FavoritePage;