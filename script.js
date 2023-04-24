let universeChar = {
    marvel: ['Iron Man', 'Captain America', 'Thor', 'Black Widow', 'Hawkeye', 'Doctor Strange', 'Spider-Man', 'Black Panther'],
    dc: ['Superman', 'Batman', 'Wonder Woman', 'The Flash', 'Cyborg', 'Shazam', 'Aquaman', 'Green Lantern'],
    harrypotter: ['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Ginny Weasley', 'Draco Malfoy', 'Luna Lovegood', 'Albus Dumbledore', 'Remus Lupin']
  };
  
  let keys = Object.keys(universeChar);
  let randomIndex = Math.floor(Math.random() * keys.length);
  let randomKey = keys[randomIndex];
  let randomChar = universeChar[randomKey][Math.floor(Math.random() * universeChar[randomKey].length)];
  
  switch(randomKey) {
    case 'marvel': 
      console.log(`Your recruiter to the Avengers is ${randomChar}.`);
      break;
    case 'dc': 
      console.log(`Your recruiter to the Justice League is ${randomChar}.`);
      break;
    case 'harrypotter':
      console.log(`Your recruiter to Hogwarts is ${randomChar}.`);
      break;
  }