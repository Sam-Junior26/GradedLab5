//Srudent Number: 225093349

let makeNames = ["VW", "BMW", "Benz", "Audi", "Ford", "Toyota"];
let selection = document.getElementById("make-list");
let carName = document.getElementById("car-name");
let carType = document.getElementById("car-type");
let carImage = document.getElementById("car-img");
let guessBTN = document.getElementById("guess-btn");
let correctGuesses = document.getElementById("correct");
let totalGuesses = document.getElementById("total");
let randomIndex = 0;

let carsDetails = [
    {name: "Golf", type: "Hatchback", make: "VW", image: "/pictures/VW Golf.jpeg"},
    {name: "M3 E30", type: "Sport Evolution", make: "BMW", image: "/pictures/BWM M3 E30.jpeg"},
    {name: "280sl Pagoda", type: "2-door Roadster/Coupe", make: "Benz", image: "/pictures/280sl Pagoda.jpeg"},
    {name: "Auto Union", type: "Sedan", make: "Audi", image: "/pictures/Auto Union Audi.jpg"},
    {name: "Model A", type: "Sedan", make: "Ford", image: "/pictures/Model A.jpeg"},
    {name: "2000GT", type: "Sport", make: "Toyota", image: "/pictures/200GT.jpeg"}
];

for(let i = 0; i < makeNames.length; i++){

    let option = document.createElement("option");
    option.value = makeNames[i]
    option.textContent = makeNames[i];
    selection.appendChild(option)
}

let countCorrectGuesses = 0;
let countTotalGuesses = 0;

if(countTotalGuesses === 0){
    randomIndex = Math.floor(Math.random() * carsDetails.length);
    carName.textContent = carsDetails[randomIndex].name;
    carType.textContent = carsDetails[randomIndex].type;
    carImage.src = carsDetails[randomIndex].image;
    carImage.style.width = "250px";
    carImage.style.height = "200px";
    carImage.classList.remove("hidden")
    guessBTN.classList.remove("disabled")
}


guessBTN.addEventListener("click", function(){

    if(selection.value === carsDetails[randomIndex].make){
        
        countCorrectGuesses++;
        countTotalGuesses++;

        correctGuesses.textContent = countCorrectGuesses;
        totalGuesses.textContent = countTotalGuesses;
        
    }
    else{
        countTotalGuesses++;
        totalGuesses.textContent = countTotalGuesses;
    }

    randomIndex = Math.floor(Math.random() * carsDetails.length);
    carName.textContent = carsDetails[randomIndex].name;
    carType.textContent = carsDetails[randomIndex].type;
    carImage.src = carsDetails[randomIndex].image;
    carImage.style.width = "250px";
    carImage.style.height = "200px";
    guessBTN.classList.remove("disabled")
})
