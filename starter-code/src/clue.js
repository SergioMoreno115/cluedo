let mrGreen = {
    first_name: 'Jacob',
    last_name: 'Green',
    color: 'green',
    description: 'He has a lot of connections',
    age: 45,
    occupation: 'Entrepreneur'
};

let drOrchid = {
    first_name: 'Doctor',
    lst_name: 'Orchid',
    color: 'white',
    description: 'PhD in plant toxicology.Adopted daughter of Mr.Boddy',
    age: 26,
    ocupation: 'Scientist'
};

let profPlum = {
    first_name: 'Victor',
    last_name: 'Plum',
    color: 'purple',
    description: 'Billionare video game designer',
    age: 22,
    occupation: 'Designer'
};

let missScarlet = {

    first_name: 'Kasandra',
    last_name: 'Scarlet',
    color: 'red',
    description: 'She is an A-list movie star with a dark past',
    age: 31,
    occupation: 'Actor'
};

let mrsPeacock = {

    first_name: 'Eleanor',
    last_name: 'Peacock',
    color: 'blue',
    description: 'She is from a wealthy family and uses her status and money to earn popularity',
    age: 36,
    occupation: 'Socialité'

};
let mrMustard = {

    first_name: 'Jack',
    last_name: 'Mustard',
    color: 'yellow',
    description: 'He is a former football player who tries to get by on his former glory',
    age: 62,
    occupation: 'Retired Football player'
};

const charactersArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];
console.log(charactersArray[2].first_name);

// Rooms' Collection
const roomsArray = [
    { name: 'Dinning Room' },
    { name: 'Conservatory' },
    { name: 'Kitchen' },
    { name: 'Study' },
    { name: 'Library' },
    { name: 'Billiard Room' },
    { name: 'Lounge' },
    { name: 'Ballroom' },
    { name: 'Hall' },
    { name: 'Spa' },
    { name: 'Living Room' },
    { name: 'Observatory' },
    { name: 'Theater' },
    { name: 'Guest House' },
    { name: 'Patio' }
];
console.log(roomsArray[2].name);


// Weapons Collection
const weaponsArray = [
    { name: 'rope', weight: 10 },
    { name: 'knife', weight: 8 },
    { name: 'candlestick', weight: 2 },
    { name: 'dumbbell', weight: 30 },
    { name: 'poison', weight: 2 },
    { name: 'axe', weight: 15 },
    { name: 'bat', weight: 13 },
    { name: 'trophy', weight: 25 },
    { name: 'pistol', weight: 20 },
]
console.log(weaponsArray[7].weight);
console.log(weaponsArray.length);

const cartasArray = [charactersArray, roomsArray, weaponsArray];
console.log(cartasArray[2][6].name);

//Método ramdon para la obtención de un número dentro de la longitud de cada array + floor para el redondeo y obtener un número entero.

let randomSelector = function (array) {
    return Math.floor(Math.random() * array.length);
}

// Creamos éste array donde ir subiendo los resultados del ramdom
let misteryEnvelope = []


function tuputamadre() {
    // Creamos 3 variables donde almacenar las posiciones de los diferentes arrays.
    let character = charactersArray[randomSelector(charactersArray)]
    let weapon = weaponsArray[randomSelector(weaponsArray)]
    let room = roomsArray[randomSelector(roomsArray)]
    // vamos subiendo al nuevo array las posiciones obtenidas junto con sus sub-posiciones.
    misteryEnvelope.push(character.first_name);
    misteryEnvelope.push(character.last_name)
    misteryEnvelope.push(weapon.name);
    misteryEnvelope.push(room.name);
}


// Invocamos a la función
tuputamadre();


// Imprimimos la posición 0 que corresponde al nombre del asesino. Posición 1 que es el apellido. Posición 2 que corresponde al nombre del arma y posición 3 que es el nombre de la habitación.
console.log(misteryEnvelope[0] + " " + misteryEnvelope[1] + " killed Mr.Boddy using the " + misteryEnvelope[2] + " in the " + misteryEnvelope[3]);



// function diMiNombre(nombre){
//     console.log("Mi nombre es "+ nombre)
// }


// diMiNombre("Sergio");
