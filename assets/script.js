//beginning variables

//constants used

//button section
const newSignUpBtn = document.querySelector(".sign-up-btn")
const newSignInBtn = document.querySelector(".sign-in-btn")

//api
fetch (`https://data.messari.io/api/v1/assets/btc/metrics/market-data`)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
})


