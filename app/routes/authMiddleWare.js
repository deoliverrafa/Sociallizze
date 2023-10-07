const aunthMiddleWare = false
const userLoggedIn = localStorage.getItem('userLoggedIn');

if (userLoggedIn == "true") {
    aunthMiddleWare = true;
}

module.exports = aunthMiddleWare;