// Part 1

// Blue Button

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


// Part 2

// Display an alert to thank you for filling out the form
// Blank out (make empty) all the text fields

const submitButton = document.querySelector("form button")
submitButton.addEventListener("click", (event) => {
    event.preventDefault();
   

    // Your name, Email and Describe yourself fields
    const emailInput = document.querySelector("#exampleInputEmail1")
    const email = emailInput.value
    const isEmailValid = email.length > 0 && email.includes("@")
    if (isEmailValid === false) {
        emailInput.style.background = "red"
    } else {
        emailInput.style.background = "white"
    }

    const nameInput = document.querySelector("#example-text-input")
    const name = nameInput.value
    const isNameValid = name.length > 0
    if (isNameValid === false) {
        nameInput.style.background = "red"
    } else {
        nameInput.style.background = "white"
    }

    const personalDescriptionInput = document.querySelector("#exampleTextarea")
    const personalDescription = personalDescriptionInput.value
    const isPersonalDescriptionValid = personalDescription.length > 0
    if (isPersonalDescriptionValid === false) {
        personalDescriptionInput.style.background = "red"
    } else {
        personalDescriptionInput.style.background = "white"
    }

    const isEverythingValid = isEmailValid && isNameValid && isPersonalDescriptionValid 
    if (isEverythingValid) {
        window.alert("Thank you for filling out the form") 
        emailInput.value=''
        nameInput.value=''
        personalDescriptionInput.value=''
    }
})


