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

        "titel":"Ingang silver bullet",
        "image":"images/voorhal.jpg",
        "directions": {
            "noord": 1,
        }
    },
    {

        "titel":"gang bij docentenkamer",
        "image":"images/gallerij1.jpg",
        "directions": {
            "noord": 2,
            "west":2,
            "oost":2,
            "zuid":4
        }
    },
    {

        "titel":"gang voor de trap",
        "image":"img/2.jpg",
        "directions":{
            "zuid":3,
            "oost":1,

        }
    },
    {

        "titel":"Kleine ruimte",
        "image":"img/3.jpg",
        "directions": {
            "noord": 2
        }
    },
    {

        "titel":"docentenkamer",
        "image":"img/4.jpg",
        "directions": {
            "noord": 1
        }
    },
    {

        "titel":"Gang voor c 0.90",
        "image":"img/5.jpg",
        "directions": {
            "noord": 10,
            "oost": 6,
            "west": 1
        }
    },
    {

        "titel":"gang voor toiletten",
        "image":"img/6.jpg",
        "directions": {
            "west": 5,
            "oost": 7,
            "zuid": 11
        }
    },
    {

        "titel":"gang bij 0.93",
        "image":"img/7.jpg",
        "directions": {
            "noord":9,
            "zuid":8
        }
    },
    {

        "titel":"lokaal 0.93",
        "image":"img/8.jpg",
        "directions": {
            "noord":7,
        }
    },
    {

        "titel":"Lokaal 0.92",
        "image":"img/9.jpg",
        "directions": {
            "zuid": 7,
            "west": 10
        }
    },
    {

        "titel":"lokaal 0.90",
        "image":"img/10.jpg",
        "directions": {
            "west": 9,
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