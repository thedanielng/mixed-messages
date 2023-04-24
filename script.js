let randomNumber = (num) => {
    return Math.floor(Math.random() * num);
};

let universeChar = {
    marvel: ['Iron Man', 'Captain America', 'Thor', 'Black Widow', 'Hawkeye', 'Doctor Strange', 'Spider-Man', 'Black Panther'],
    dc: ['Superman', 'Batman', 'Wonder Woman', 'The Flash', 'Cyborg', 'Shazam', 'Aquaman', 'Green Lantern'],
    harrypotter: ['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Ginny Weasley', 'Draco Malfoy', 'Luna Lovegood', 'Albus Dumbledore', 'Remus Lupin']
}

let theUniverse = [];

for(let char in universeChar){
    switch(char){
        case 'marvel':
            theUniverse.push(`Your recruiter to the Avengers would be ${universeChar[char][randomNumber(universeChar[char].length)]}.`);
            break;
        case 'dc':
            theUniverse.push(`Your enemy in the DC Universe would be ${universeChar[char][randomNumber(universeChar[char].length)]}.`);
            break;
        case 'harrypotter':
            theUniverse.push(`You'll be cursed by ${universeChar[char][randomNumber(universeChar[char].length)]}.`);
            break;
    }
};

let message = theUniverse.join('\n');

console.log(message);