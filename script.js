var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
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
let rooms = {
    "voorhal": 0,
    "eregallerij": 1,
    "nachtwachtzaal": 2,
    "2.15": 3, 
    "2.16": 16,
    "2.17": 6,
    "2.18": 18,
    "bibliotheek": 17,
    "2.19": 19,
    "2.20": 20,
    "2.21": 21,
    "2.22": 22,
    "2.23": 23,
    "2.24": 24,
    "2.1": 5,
    "2.3": 7,
    "2.2": 9,
    "2.4": 8,
    "2.5": 10,
    "2.6": 11,
    "2.7": 12,
    "2.8": 13,
    "2.9": 14,
    "2.10": 15,
    "2.14": 15,
    "beeldengallerij": 4,
};


let locaties =
    [ // array
        { //1 object
            "titel": "voorhal",
            "image": "Images/voorhal.jpg",
            "directions": {
                "noord": 1,
                "west": 15,
                "oost": 24,
            }
        },
        {
            //1
            "titel": "eregallerij",
            "image": "Images/eregallerij2.jpg",
            "directions": {
                "noord": 2,
                "zuid": 0,
            }
        },
        {
            //2
            "titel": "NachtwachtZaal",
            "image": "Images/nachtwachtkamer.jpg",
            "directions": {
                "zuid": 1,
                "oost": 3,
                "noord": 4,
                "west": 5,
            }
        },
        {
            //3
            "titel": "2.15 william rex",
            "image": "Images/william-rex.jpg",
            "directions": {
                "west": 2,
                "oost": 6,
            }
        },
        {
            //4
            "titel": "Beeldengallerij",
            "image": "Images/beeldengallerij.jpg",
            "directions": {
                "zuid": 2,
            }
        },
        {
            //5
            "titel": "2.1 Willem van Oranje maniërisme",
            "image": "Images/2.1.png",
            "directions": {
                "oost": 2,
                "west": 7,
            }
        },
        {
            //6
            "titel": "2.17 Both",
            "image": "Images/2.17.png",
            "directions": {
                "west": 3,
                "zuid": 18,
                "noord": 16,
            }
        },
        
        
        {
            //7
            "titel": "2.3-kunstkamer",
            "image": "Images/2.3.png",
            "directions": {
                "oost": 5,
                "noord": 9,
                "zuid": 8,
            }
        },
        {
            //8
            "titel": "2.4 vlaamse invloeden",
            "image": "Images/2.4.jpg",
            "directions": {
                "noord": 7,
                "zuid": 10,
            }
        },
        {
            //9
            "titel": "2.2 wandtapijten",
            "image": "Images/2.2.jpg",
            "directions": {
                "zuid": 7,
            }
        },
        {
            //10
            "titel": "2.5 Hugo De Groot",
            "image": "Images/2.5.jpg",
            "directions": {
                "noord": 8,
                "zuid": 11
            }
        },
        {
            //11
            "titel": "2.6 avercamp",
            "image": "Images/2.6.png",
            "directions": {
                "noord": 10,
                "zuid": 12,
            }
        },
        {
            //12
            "titel": "2.7 prentenkabinet",
            "image": "Images/2.7.png",
            "directions": {
                "noord": 11,
                "oost": 13,
                "zuid": 14,
            }


        },
        {
            //13
            "titel": "2.8 de jonge Rembrandt vrede van Münster",
            "image": "Images/2.8.png",
            "directions": {
                "west": 12,
            }


        },

        {
            //14
            "titel": "2.9 Nova Zembla",
            "image": "Images/2.9.png",
            "directions": {
                "noord": 12,
                "oost": 15,
            }


        },

        {
            //15
            "titel": "2.10-2.14 schilderkunst",
            "image": "Images/2.10.png",
            "directions": {
                "west": 14,
                "oost": 0,
            }


        },

        {
            //16
            "titel": "2.16 penningen",
            "image": "Images/2.16.jpg",
            "directions": {
                "zuid": 6,
                "noord": 17,
            }


        },

        {
            //17
            "titel": "Bibliotheek",
            "image": "Images/Bibliotheek.jpg",
            "directions": {
                "zuid": 16,
            }


        },

        {
            //18
            "titel": "2.18 quellinus van der Helst",
            "image": "Images/2.18.jpg",
            "directions": {
                "zuid": 19,
                "noord": 6,
            }


        },

        {
            //19
            "titel": "2.19 het herenhuis",
            "image": "Images/2.19.png",
            "directions": {
                "noord": 18,
                "zuid": 20,
            }


        },
        {
            //20
            "titel": "2.20 poppenhuizen",
            "image": "Images/2.20.jpg",
            "directions": {
                "zuid": 21,
                "noord": 19,
            }


        },

        {
            //21
            "titel": "2.21 prenten",
            "image": "Images/2.21.png",
            "directions": {
                "noord": 20,
                "zuid": 23,
                "west": 22,
            }


        },
        {
            //22
            "titel": "2.22 Willem III Delfts Blauw",
            "image": "Images/2.22.png",
            "directions": {
                "oost": 21,
            }


        },

        {
            //23
            "titel": "2.23 Franse hoekzaal",
            "image": "Images/2.23.png",
            "directions": {
                "noord": 21,
                "west": 24,
            }


        },
        {
            //24
            "titel": "2.24 schilderkunst",
            "image": "Images/2.24.png",
            "directions": {
                "oost": 23,
                "west": 0,
            }


        },


    ]
//myTitle.innerHTML = "dit is door het script toegevoegd"
//myImage.src = "img/1.jpg"

function show(index) {
    //testen of index een nummer is if true -> op index pakken
    //als false -> loop locaties vergelijk index met de zaaltitle
   
    myTitle.innerHTML = locaties[index].titel;
    myImage.src = locaties[index].image;
    current_index = index;

    //knoppen opnieuw berekenen
    updateDirections();
}

function showRoom(name) {
    //testen of index een nummer is if true -> op index pakken
    //als false -> loop locaties vergelijk index met de zaaltitle
   if(rooms[name] !== undefined){
       let index = rooms[name];
    myTitle.innerHTML = locaties[index].titel;
    myImage.src = locaties[index].image;
    current_index = index;
    console.log(name)

    //knoppen opnieuw berekenen
    updateDirections();
   }
   
}

function updateDirections() {
    // haal eerst de mogelijke directions op voor de current_index
    let possible = locaties[current_index].directions

    // zet de direction keys in een aparte variabele
    let possible_keys = Object.keys(possible);

    // zet de keys van de buttons in een aparte variabele
    let button_keys = Object.keys(directionButtons)

    //zet eerst alle knoppen uit
    for (const key of button_keys) {
        directionButtons[key].style.visibility = "hidden";
    }

    // zet nu de mogelijke knoppen (directions) aan
    for (const key of possible_keys) {
        directionButtons[key].style.visibility = "visible";
    }
}

function getInput() {
    showRoom(myInput.value);
    //console.log(myInput.value)
    myInput.value = "";
    myInput.focus();
}

function goDirection(richting) {
    let punt_index = locaties[current_index].directions[richting];
    show(punt_index);
}


show(0);


const menu = document.getElementById("js--menu");
const navigation = document.getElementById("js--nav")
const li = document.getElementById("js--hide");



menu.onclick = function() {
    navigation.style.visibility = "visible";
    navigation.style.opacity = 1;
}








