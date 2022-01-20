//beginning variables

//constants used

//button section
const signUpBtn = document.querySelector(".sign-up-btn")
const signInBtn = document.querySelector(".sign-in-btn")
const searchBtn = document.querySelector(".searchButton")
var searchInput = document.getElementById("'search'")
//variables

function signIn() {
    console.log('Sign in')
}

function signUp() {
    console.log('Sign up')
}

function getInputValue() {
    console.log(search.value)
    fetch (`https://data.messari.io/api/v1/assets/${search.value}/metrics/market-data`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
        })
    }



