//console.log(archEnemies);
// DEFINE RECORDS FROM SUPERHERO API BY ID //

const characterIds = [
    {   
        name: "professorX",
        id:527,
        auto: "Professor Xavier"
    },
    { 
        name: "magneto",
        id:423,
        auto: "Magneto"
    },
    {   name: "batman",
        id:70,
        auto: "Batman"
    },
    {   name: "cheeta",
        id:174,
        auto: "Cheeta"
    },
    {   name: "robin",
        id:561,
        auto: "Robin"
    },
    {   name: "joker",
        id:370,
        auto: "Joker"
    },
    {   name: "wonderWoman",
        id:720,
        auto: "Wonder Woman"
    },
    {   name: "antMan",
        id:30,
        auto: "Ant Man"
    },
    {   name: "angel",
        id:24,
        auto: "Angel"
    },
    {   name: "aquaman",
        id:38,
        auto: "Aquaman"
    },
    {   name: "batgirl",
        id:63,
        auto: "Batgirl"
    },
    {   name: "batwoman",
        id:73,
        auto: "Batwoman"
    },
    {   name: "blackPanther",
        id:106,
        auto: "Black Panther"
    },
    {   name: "blackWidow",
        id:107,
        auto: "Black Panther"
    },
    {   name: "captainAmerica",
        id:149,
        auto: "Captain America"
    },
    {   name: "cable",
        id:145,
        auto: "Cable"
    },
    {   name: "shazam",
        id:156,
        auto: "Shazam"
    },
    {   name: "captainMarvel",
        id:157,
        auto: "Captain Marvel"
    },
    {   name: "catwoman",
        id:165,
        auto: "Catwoman"
    },
    {   name: "cyborg",
        id:194,
        auto: "Cyborg"
    },
    {   name: "deadpool",
        id:213,
        auto: "Deadpool"
    },
    {   name: "doctorDoom",
        id:222,
        auto: "Doctor Doom"
    },
    {   name: "falcon",
        id:251,
        auto: "Falcon"
    },
    {   name: "flash",
        id:265,
        auto: "Flash"
    },
    {   name: "gambit",
        id:274,
        auto: "Gambit"
    },
    {   name: "greenArrow",
        id:298,
        auto: "Green Arrow"
    },
    {   name: "greenGoblin",
        id: 299,
        auto: "Green Goblin"
    },
    {   name: "harleyQuinn",
        id: 309,
        auto: "Harley Quinn"
    },
    {   name: "hawkman",
        id: 316,
        auto: "Hawkman"
    },
    {   name: "hawkgirl",
        id: 315,
        auto: "Hawkgirl"
    },
    {   name: "hulk",
        id: 332,
        auto: "Hulk"
    },
    {   name: "huntress",
        id: 334,
        auto: "Huntress"
    },
    {   name: "ironMan",
        id: 346,
        auto: "Iron Man"
    },
    {   name: "lexLuthor",
        id: 405,
        auto: "Lex Luthor"
    },
    {   name: "lukeCage",
        id: 416,
        auto: "Luke Cage"
    },
    {   name: "martianManhunter",
        id: 432,
        auto: "Martian Manhunter"
    },
    {   name: "nightcrawler",
        id: 490,
        auto: "Night Crawler"
    },
    {   name: "nightwing",
        id: 491,
        auto: "Nightwing"
    },
    {   name: "oracle",
        id: 505,
        auto: "Oracle"
    },
    {   name: "penquin",
        id: 514,
        auto: "Penguin"
    },
    {   name: "poisonIvy",
        id: 522,
        auto: "Poison Ivy"
    },
    {   name: "psylocke",
        id: 529,
        auto: "Psylocke"
    },
    {   name: "riddler",
        id: 558,
        auto: "Riddler"
    },
    {   name: "rogue",
        id: 567,
        auto: "Rogue"
    },
    {   name: "sabertooth",
        id: 570,
        auto: "Sabertooth"
    },
    {   name: "scarecrow",
        id: 576,
        auto: "Scarecrow"
    },
    {   name: "scarletWitch",
        id: 579,
        auto: "Scarlet Witch"
    },
    {   name: "sheHulk",
        id: 589,
        auto: "She Hulk"
    },
    {   name: "solomonGrundy",
        id: 609,
        auto: "Solomon Grundy"
    },
    {   name: "spiderGwen",
        id: 619,
        auto: "Spider Gwen"
    },
    {   name: "spiderman",
        id: 620,
        auto: "Spider-Man (Peter Parker)"
    },
    {   name: "spiderman2",
        id: 622,
        auto: "Spider-Man (Miles Morales)"
    },
    {   name: "supergirl",
        id: 643,
        auto: "Supergirl"
    },
    {   name: "superman",
        id: 644,
        auto: "Superman"
    },
    {   name: "twoFace",
        id: 678,
        auto: "Two Face"
    },
    {   name: "vision",
        id: 698,
        auto: "Vision"
    },
    {   name: "warMachine",
        id: 709,
        auto: "War Machine"
    },
    {   name: "wolverine",
        id: 717,
        auto: "Wolverine"
    },
    {   name: "alfred",
        id: 17,
        auto: "Alfred Pennyworth"
    },
    {   name: "thor",
        id: 659,
        auto: "Thor"
    },
    {   name: "loki",
        id: 414,
        auto: "Loki"
    },
    {   name: "blackManta",
        id: 105,
        auto: "Black Manta"
    },
    {   name: "blackAdam",
        id: 95,
        auto: "Black Adam"
    },
    {   name: "sinestro",
        id: 601,
        auto: "Sinestro"
    },
    {   name: "bizarro",
        id: 93,
        auto: "Bizarro"
    },
];

const batFamily = characterIds.filter(function (el){
    return el.name === "batman"
            || el.name === "robin"
            || el.name === "nightwing"
            || el.name === "batgirl"
            || el.name === "alfred"
            || el.name === "batwoman"
            || el.name === "catwoman"
            || el.name === "oracle"
    }
);

let batFamilyDeck = [];
batFamily.map(id => batFamilyDeck.push(id.id));
batFamily.map(id => batFamilyDeck.push(id.id));

//console.log(batFamily);

const roguesGallery = characterIds.filter(function (el){
    return el.name === "joker"
            || el.name === "harleyQuinn"
            || el.name === "scarecrow"
            || el.name === "twoFace"
            || el.name === "penquin"
            || el.name === "poisonIvy"
            || el.name === "solomonGrundy"
            || el.name === "riddler"
    }
);

let roguesDeck = [];
roguesGallery.map(id => roguesDeck.push(id.id));
roguesGallery.map(id => roguesDeck.push(id.id));

const xMen = characterIds.filter(function (el){
    return el.name === "professorX"
            || el.name === "rogue"
            || el.name === "gambit"
            || el.name === "psylocke"
            || el.name === "wolverine"
            || el.name === "nightcrawler"
            || el.name === "angel"
            || el.name === "magneto"
    }
);
let xMenDeck = [];
xMen.map(id => xMenDeck.push(id.id))
xMen.map(id => xMenDeck.push(id.id))
//  console.log(xMenDeck);

const justiceLeague = characterIds.filter(function (el){
    return el.name === "aquaman"
            || el.name === "martianManhunter"
            || el.name === "wonderWoman"
            || el.name === "batman"
            || el.name === "superman"
            || el.name === "flash"
            || el.name === "cyborg"
            || el.name === "hawkgirl"
    }
);
let justiceLeagueDeck = [];
justiceLeague.map(id => justiceLeagueDeck.push(id.id))
justiceLeague.map(id => justiceLeagueDeck.push(id.id))

// console.log(justiceLeague);
// console.log(justiceLeagueDeck);

const avengers = characterIds.filter(function (el){
    return el.name === "ironMan"
            || el.name === "blackPanther"
            || el.name === "blackWidow"
            || el.name === "hulk"
            || el.name === "captainAmerica"
            || el.name === "thor"
            || el.name === "antMan"
            || el.name === "falcon"
    }
);
let avengersDeck = [];
avengers.map(id => avengersDeck.push(id.id))
avengers.map(id => avengersDeck.push(id.id))

console.log(avengersDeck);


const girlPower = characterIds.filter(function (el){
    return el.name === "wonderWoman"
            || el.name === "harleyQuinn"
            || el.name === "hawkgirl"
            || el.name === "supergirl"
            || el.name === "spiderGwen"
            || el.name === "sheHulk"
            || el.name === "captainMarvel"
            || el.name === "batgirl"
    }
);
let girlPowerDeck = [];
girlPower.map(id => girlPowerDeck.push(id.id))
girlPower.map(id => girlPowerDeck.push(id.id))

const legionOfDoom = characterIds.filter(function (el){
    return el.name === "cheeta"
            || el.name === "scarecrow"
            || el.name === "blackManta"
            || el.name === "lexLuthor"
            || el.name === "joker"
            || el.name === "blackAdam"
            || el.name === "sinestro"
            || el.name === "bizarro"
    }
);
let legionOfDoomDeck = [];
legionOfDoom.map(id => legionOfDoomDeck.push(id.id))
legionOfDoom.map(id => legionOfDoomDeck.push(id.id))

const archEnemies = characterIds.filter(function (el){
    return el.name === "batman"
            || el.name === "joker"
            || el.name === "superman"
            || el.name === "lexLuthor"
            || el.name === "professorX"
            || el.name === "magneto"
            || el.name === "spiderman"
            || el.name === "greenGoblin"
            || el.name === "wolverine"
            || el.name === "sabertooth"
            || el.name === "wonderWoman"
            || el.name === "cheeta"
            || el.name === "thor"
            || el.name === "loki"
            || el.name === "aquaman"
            || el.name === "blackManta"
        }
);
let enemiesDeck =[];
archEnemies.map(id => enemiesDeck.push(id.id))
//console.log(enemiesDeck);
//console.log(archEnemies);

// >>>>>> Objects and variables declaration section >>>>>>

//Create a list that holds all of your cards
// this array should be the same during all the time of a single macth and change only when the player press the btn "restart"
//let cardsArray = ['fa-anchor', 'fa-anchor', 'fa-bicycle', 'fa-bolt', 'fa-cube', 'fa-diamond', 'fa-diamond', 'fa-plane', 'fa-leaf', 'fa-bomb', 'fa-leaf', 'fa-bomb', 'fa-bolt', 'fa-bicycle', 'fa-plane', 'fa-cube'];
let selectedDeck = girlPowerDeck;
let cardsArray = selectedDeck;

let lock = false;
let firstClick = null, secondClick = null;
let li1 = null, li2 = null; //element of firstClick and secondClick
let score = document.querySelector('#fin-score');
//move(s) variables
let moves = 0;
let lastMoves = document.querySelector('#fin-moves');
let lastTime = document.querySelector('#fin-time');
let counter = document.querySelector('.moves');
let machedCard = 0;

// star icon variable
const allStars = document.querySelectorAll('.fa-star');
// console.log(allStars, "STAR");

// Time variables
let time = document.querySelector('.displayTime');
let startGame = 0;
let gameInterval;

let modal = document.querySelector('.pop-up')

const buttonRestart = document.getElementsByClassName('restart');

// <<<<<< End of objects and variables declaration section <<<<<<

// >>>>>> Functions declaration section >>>>>>


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


//Timer inspired by https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer
function timer() {
    let minutes = 0;
    let seconds = 0;
    gameInterval = setInterval(function () {
        seconds = parseInt(seconds, 10) + 1;
        minutes = parseInt(minutes, 10);
        if (seconds >= 60) {
            minutes += 1;
            seconds = 0;
        }

        seconds = seconds < 10 ? "0" + seconds : seconds;
        minutes = minutes < 10 ? "0" + minutes : minutes;

        time.innerHTML = minutes + ":" + seconds;
        lastTime.textContent = time.textContent;
        // console.log(time,"hellooooo are you there????");
    }, 1000);
}

function endOfGame() {
    clearInterval(gameInterval);
}


function displaySymbol(el) {
    el.classList.add("open");
    el.classList.add("show");
}


function closeUnmatchedCards() {
    let els = document.getElementsByClassName('unMatch');
    Array.from(els).forEach(el => {
        el.classList.remove('unMatch');
        el.classList.remove('show');
        el.classList.remove('open');
    });
}


function restartClick() {
    firstClick = null;
    secondClick = null;
}

function moveCounter() {
    moves++;
    counter.innerHTML = moves;
    lastMoves.innerHTML = moves;
}


function restarValue() {
    // show again stars
    for (let i = 0; i < 3; i++) {
        allStars[i].classList.remove('hide');
    }
    //show again cups
    for (let i = 0; i < 3; i++) {
        allStars[i].classList.remove('hide');
    }

    // empty matched cards variables
    machedCard = 0;
    startGame = 0;
    moves = 0;
    counter.textContent = 0;
    li1 = null;
    li2 = null;
    // hide the modal
    modal.classList.remove('showed');
    modal.classList.add('hide');
}

function switchDeck(deck){
    console.log(`Switching decks to ${deck}`)
    switch(deck){
        case "batman":
            console.log("deck is batman");
            selectedDeck = batFamilyDeck;
            break;
        case "xmen":
            selectedDeck = xMenDeck;
            break;
        case "justiceLeague":
            selectedDeck = justiceLeagueDeck;
            break;
        case "avengers":
            selectedDeck = avengersDeck;
            break;
        case "legionOfDoom":
            selectedDeck = legionOfDoomDeck;
            break;
        case "roguesGallery":
            selectedDeck = roguesDeck;
            break;
        case "girlpower":
            selectedDeck = girlPowerDeck;
            break;
        default:
            selectedDeck = girlPowerDeck;
            break;
    }
    gameStart()

    document.getElementById("deck-selector").style.display = "none";
    document.getElementById("card-deck").classList.remove('hide');
    document.getElementById("selected-deck").textContent=deck;
    document.getElementById("result").classList.add('hide');
    document.getElementById("deck-modal").classList.add('hide');

    return selectedDeck;
}

function selectDeck() {
    document.getElementById("deck-selector").style.display = "grid";
    document.getElementById("deck-modal").classList.remove('hide');
    document.getElementById("card-deck").classList.add('hide');
    document.getElementById("result").classList.remove('show');
    document.getElementById("result").classList.add('hide');
};


//****Game logic****



// newCard function
const newCard = cardClass => {
    // we create a new li element with a class "card"
    let li = document.createElement("li");
    li.setAttribute('id','getHeroCards');
    li.classList.add("card");
    li.classList.add("hideImage");
    // we create a "i" element called icon and we applied to it a "fa" class, then we applied a class form the array of cards
    let icon = document.createElement("i");
    li.appendChild(icon);
    icon.classList.add("fa");
    icon.classList.add(cardClass);
    return li;
};


const pickACard = card => {

    card.addEventListener('click', function (e) {
        // we start the time at the first click
        if (startGame === 0) {
            timer();
            startGame++;
        }
        let li = e.currentTarget;
        //console.log(li);
        //if the card is already open ignore it
        if (lock || li.classList.contains('open') && li.classList.contains('show')) {
            // console.log("this card is already open");
            return true;
        }

        let icon = li.getElementsByClassName('fa')[0].className;

        if (firstClick === null && secondClick === null) {

            firstClick = icon;
            li1 = li; // element of firstClick
            console.log("firstClick", firstClick);

        } else if (firstClick !== null && secondClick === null) {
            secondClick = icon;
            li2 = li; // element secondClick
            console.log(secondClick, "secondClick");


            if (firstClick === secondClick) {


                li1.classList.add('match');
                li1.classList.add('true');
                li2.classList.add('match');
                li2.classList.add('true');
                score.textContent += 5;
                machedCard++;
                if (machedCard === 8) {
                    endOfGame()
                    modal.classList.remove('hide')
                    modal.classList.add('showed')
                }

                // console.log('Right Choice ');
            } else {
                // console.log('Wrong Choice ');
                li1.classList.add('unMatch');
                li2.classList.add('unMatch');
                score.textContent -= 1;
                setTimeout(function () {
                    closeUnmatchedCards()
                }, 750)
            }
            moveCounter();
            restartClick();
        }
        displaySymbol(li);
    })
};

function updateImage(id){
    cNumber = id;
    let apiUrl = `https://www.superheroapi.com/api.php/10230570277709138/${cNumber}`;
    // console.log(apiUrl);
    return(fetch(apiUrl)
    .then((response) => response.json())
    .then(data => {
        newHero = {"name": data.name, "id": data.id, "image": data.image.url}
        //console.log(newHero);
        replaceImage = document.getElementsByClassName("img"+id);
        replaceImage[0].src = newHero.image;
        replaceImage[1].src = newHero.image;
        //console.log(`the replacement for ${newHero.name} image is, ${newHero.image}`);
    }
    )
    .catch(error => {
        console.log(error);
    }))
}

function gameStart() {
    // we store in a variable our "ul" element with inside the class "desk" and we store inside it our "li" element, created before.
    // list[0] because one the console appear as an object
    // we restart the variables
    // Show again the stars
    restarValue();
    // we restart the click
    restartClick();
    // // we stop the time
    endOfGame();
    //  we clear the time string
    time.innerHTML = '00:00';
    // we grab all the cards
    let list = document.getElementsByClassName("deck");

    // we empty the current board of cards
    list[0].innerHTML = '';

    // We first shuffle the array of cards
    let cardsShuffled = shuffle(selectedDeck);

    for (let card of cardsShuffled) {
        //console.log(card)
        let li = newCard(card);
        list[0].appendChild(li);
        let image = document.createElement("img");
        image.src = 'https://www.superherodb.com/pictures2/portraits/10/100/'+card+'.jpg';
        image.className = "img"+card;
        li.appendChild(image);  
    }

    let cards = list[0].getElementsByClassName("card") // it's an html collection
    for (let card of cards) {

        pickACard(card);
    }

    selectedDeck.map(id => updateImage(id)); //Update images for cards
}

gameStart();


Array.from(buttonRestart).forEach(el => {
    el.addEventListener('click', function () {
        gameStart()
    })
});