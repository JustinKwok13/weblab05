const express = require('express');
const router = express.Router();

let artData = require('../artistData');

router.get('/art', (req,res) =>{
    let allArt = artData.getAll();
    for (let i = 0; i < allArt.length; i++) {
        allArt[i]['id'] = 'artist/' + i;
    }
    res.render('allArtists', {artists: allArt});
});

router.post('/addArtist', (req,res) => {
    let objName = req.body.name;
    let objAbout = req.body.about;
    let objImg = req.body.img;

    let objJSON = {
        name: objName,
        about: objAbout,
        img: objImg
    }

    artData.add(objJSON);
    res.redirect(301, '/art');
});

router.post('/search', (req,res) => {
    let find = req.body.searchtext;
    let all = artData.getAll();
    let sameArtist = [];

    for (let i = 0; i < all.length; i++) {
        if (find != null && all[i]['name'].includes(find)) {
            sameArtist.push(all[i]);
        }
    }

    res.render('allArtists', {artists: sameArtist});
});

router.post('/delete/:id', (req,res) => {
    let id = req.params.id;
    artData.delete(id);
    res.redirect(301, '/art');
});

module.exports = router;