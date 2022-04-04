const changeColorBlueBtn = document.querySelector("#blueBtn")
 
changeColorBlueBtn.addEventListener("click", (event) => {
    event.preventDefault();

    // Jumbotron background color to #588fbd
    document.querySelector(".jumbotron").style.background = "#588fbd"

    // Donate a bike button background color to #ffa500
    document.querySelector(".jumbotron .btn-primary").style.background = "#ffa500"

    // Volunteer button background color to black and text color to white
    const volunteerButton = document.querySelector(".jumbotron .btn-secondary")
    volunteerButton.style.background = "black"
    volunteerButton.style.color = "white"
})

// Orange Button

const changeColorOrangeBtn = document.querySelector("#orangeBtn")
 
changeColorOrangeBtn.addEventListener("click", (event) => {
    event.preventDefault();

    // Jumbotron background color to #588fbd
    document.querySelector(".jumbotron").style.background = "#f0ad4e"

    // Donate a bike button background color to #ffa500
    document.querySelector(".jumbotron .btn-primary").style.background = "#5751fd"

    // Volunteer button background color to black and text color to white
    const volunteerButton = document.querySelector(".jumbotron .btn-secondary")
    volunteerButton.style.background = "#31b0d5"
    volunteerButton.style.color = "white"
})

// Green Button

const changeColorGreenBtn = document.querySelector("#greenBtn")
 
changeColorGreenBtn.addEventListener("click", (event) => {
    event.preventDefault();

    // Jumbotron background color to #588fbd
    document.querySelector(".jumbotron").style.background = "#87ca8a"

    // Donate a bike button background color to #ffa500
    document.querySelector(".jumbotron .btn-primary").style.background = "black"

    // Volunteer button background color to black and text color to white
    const volunteerButton = document.querySelector(".jumbotron .btn-secondary")
    volunteerButton.style.background = "#8c9c08"
    
})


