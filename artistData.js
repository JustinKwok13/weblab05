let art = [];

function addArt(e) {
    art.push(e);
}

function getArt(e) {
    return art[e];
}

function getAllArt() {
    return art;
}

function delArt(e) {
    for (var i = 0; i < art.length; i++) {
        if (art[i].name == e) {
            art.splice(i, 1);
        }
    }
}

module.exports = {
    add: addArt,
    get: getArt,
    delete: delArt,
    getAll: getAllArt
}