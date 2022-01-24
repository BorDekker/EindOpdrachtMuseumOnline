var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n >x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}







const myTitle = document.getElementById("myTitle");
const myImage = document.getElementById("myImage");
const myInput = document.getElementById("myInput");

const knopNoord = document.getElementById('knopNoord');
const knopOost = document.getElementById('knopOost');
const knopZuid = document.getElementById('knopZuid');
const knopNo = document.getElementById('knopWest');

let directionButtons = {
    "noord": document.getElementById('knopNoord'),
    "oost": document.getElementById('knopOost'),
    "zuid": document.getElementById('knopZuid'),
    "west": document.getElementById('knopWest'),

}

let current_index = 0;

let locaties = 
[ // array
    { //1 object
        "titel":"voorhal",
        "image":"images/voorhal.jpg",
        "directions": {
            "noord": 1,
        }
    },
    {

        "titel":"eregallerij",
        "image":"images/eregallerij2.jpg",
        "directions": {
            "noord": 2,
            "zuid":0,
        }
    },
    {

        "titel":"NachtwachtZaal",
        "image":"images/nachtwachtkamer.jpg",
        "directions":{
            "zuid":1,
            "oost":3,
            "noord":4,
            "west":5,
        }
    },
    {

        "titel":"2.15 william rex",
        "image":"images/william-rex.jpg",
        "directions": {
            "west": 2,
            "oost": 6,
        }
    },
    {

        "titel":"Beeldengallerij",
        "image":"images/beeldengallerij.jpg",
        "directions": {
            "zuid": 2,
        }
    },
    {

        "titel":"2.1 Willem van Oranje maniërisme",
        "image":"images/2.1.png",
        "directions": {
            "oost": 2,
            "west": 7,
        }
    },
    {

        "titel":"Both",
        "image":"images/2.17.png",
        "directions": {
            "west": 5,
            "oost": 7,
            "zuid": 11
        }
    },
    {

        "titel":"2.3 kunstkamer",
        "image":"images/2.3.png",
        "directions": {
            "oost": 5,
            "noord":9,
            "zuid":8,
        }
    },
    {

        "titel":"2.4 vlaamse invloeden",
        "image":"images/2.4.jpg",
        "directions": {
            "noord":7,
            "zuid":10,
        }
    },
    {

        "titel":"2.2 wandtapijten",
        "image":"images/2.2.jpg",
        "directions": {
            "zuid": 7,
        }
    },
    {

        "titel":"2.5 Hugo De Groot",
        "image":"images/2.5.jpg",
        "directions": {
            "noord": 8,
            "zuid": 5
        }
    },
    {

        "titel":"toiletten",
        "image":"img/11.jpg",
        "directions": {
            "noord": 6
        }
    }
]
//myTitle.innerHTML = "dit is door het script toegevoegd"
//myImage.src = "img/1.jpg"

function show(index){
    myTitle.innerHTML = locaties[index].titel;
    myImage.src = locaties[index].image;
    current_index = index;

    //knoppen opnieuw berekenen
    updateDirections();
}

function updateDirections(){
    // haal eerst de mogelijke directions op voor de current_index
    let possible = locaties[current_index].directions

    // zet de direction keys in een aparte variabele
    let possible_keys = Object.keys(possible);
   
    // zet de keys van de buttons in een aparte variabele
    let button_keys = Object.keys(directionButtons)
    
    //zet eerst alle knoppen uit
    for(const key of button_keys){
        directionButtons[key].style.visibility = "hidden";
    }

    // zet nu de mogelijke knoppen (directions) aan
    for(const key of possible_keys){
        directionButtons[key].style.visibility = "visible";
    }
}

function getInput(){
    show(myInput.value);
    //console.log(myInput.value)
    myInput.value = "";
    myInput.focus();
}

function goDirection(richting){
    let punt_index = locaties[current_index].directions[richting];
    show(punt_index);
}


show(0);