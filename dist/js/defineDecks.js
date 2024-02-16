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
        id:69,
        auto: "Batman"
    },
    {   name: "cheeta",
        id:172,
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
    {   name: "blackpanther",
        id:106,
        auto: "Black Panther"
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
];

export const batFamily = characterIds.filter(function (el){
    return el.name === "batman"
            || el.name === "robin"
            || el.name === "nightwing"
            || el.name === "batgirl"
            || el.name === "huntress"
            || el.name === "batwoman"
            || el.name === "catwoman"
            || el.name === "oracle"
    }
);

//console.log(batFamily);

export const xMen = characterIds.filter(function (el){
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

//console.log(xMen);

export const justiceLeague = characterIds.filter(function (el){
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

//console.log(justiceLeague);

export const girlPower = characterIds.filter(function (el){
    return el.name === "wonderWoman"
            || el.name === "harleyQuinn"
            || el.name === "hawkgirl"
            || el.name === "supergirl"
            || el.name === "spiderGwen"
            || el.name === "rogue"
            || el.name === "captainMarvel"
            || el.name === "psylocke"
    }
);

//console.log(girlPower);

export const archEnemies = characterIds.filter(function (el){
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

//console.log(archEnemies);
