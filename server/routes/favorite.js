const express = require('express');
const router = express.Router();
const {Favorite} = require("../models/Favorite");

router.post('/favoriteNumber', (req, res) => {


    //mongoDB 에서 favorite 숫자를 가져오기
    Favorite.find({"movieId": req.body.movieId})
        .exec((err, info) => {
            if (err) {
                return res.status(400).send(err);
            }
            //그다음에 프론트에 다시 숫자정보를 보내주기
            res.status(200).json({success: true, favoriteNumber: info.length});
        })
})

router.post('/favorited', (req, res) => {

    // 내가 이 영화를 Favorite 리스트에 넣었는지 정보를 DB에서 가져오기
    Favorite.find({"movieId": req.body.movieId, "userFrom": req.body.userFrom})
        .exec((err, info) => {
            if (err) {
                return res.status(400).send(err);
            }
            let flag = false;
            if (info.length) {
                flag = true
            }

            res.status(200).json({success: true, favorited: flag});
        })
})

router.post('/removeFromFavorite', (req, res) => {
    Favorite.findOneAndDelete({movieId: req.body.movieId, userFrom: req.body.userFrom})
        .exec((err, doc) => {
            if (err) {
                return res.status(400).send(err);
            }

            return res.status(200).json({success: true, doc})
        })

})

router.post('/addFromFavorite', (req, res) => {

    const favorite = new Favorite(req.body)
    console.log('addFavorite', req.body);
    favorite.save((err, doc) => {
        if (err) {
            return res.status(400).send(err);
        }

        return res.status(200).json({success: true, doc})

    });
})

router.post('/getFavoredMovie', (req, res) => {
    console.log('getFavoredMovie', req.body)
    Favorite.find({ 'userFrom': req.body.userFrom})
        .exec((err, favorites) => {
            console.log('favorites', favorites);
            if (err) {
                return res.status(400).send(err)
            }

            return res.status(200).json({success: true, favorites})
        })
})

module.exports = router;
