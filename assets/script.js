//beginning variables

//constants used

//dom elements
var tickNameEl = document.getElementById('current-name')
var tickPriceEl = document.getElementById('current-price')
var tickOneHourLowEl = document.getElementById('current-one-hour-low')

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
            console.log(data.data.id);

            var tickName = data.data.name
            tickNameEl.textContent = tickName

            var tickPrice = data.data.market_data.price_usd
            tickPriceEl.textContent = tickPrice

            var tickOneHourLow = data.data.market_data.ohlcv_last_1_hour
            tickOneHourLowEl.textContent = tickOneHourLow

            console.log(tickPrice)

        })
    }



