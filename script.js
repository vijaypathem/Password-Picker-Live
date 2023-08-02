const nouns = [
    'Mango','Elephant','River','Tiger','Train',
    'Temple','Ocean','Cow','Mountain','Book',
    'Elephant','Cloud','Bird','Lake','Star',
    'Flower', 'Moon','Sun','Tree','House',
    'Apple','Dinosaur', 'Goat', 'Lion',
    'Man', 'Ball', 'Duck', 'Panda'
];

const adjectives = [
    'Happy','Green','Small','Big','Sweet',
    'Blue','White','Red','Black','Yellow',
    'Soft','Hard','Hot','Cold','Loud','Quiet',
    'Strong','Weak','Fast','Slow','Sleepy',
    'Wet', 'Fat', 'White','Fluffy','Fast', 'Smelly',
    'Proud', 'Brave', 
    'Red', 'Orange',
];

const specialChars = "!@#$%^&*()_+=-[]{}|;:,.<>?";

function generatePassword(){
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const number = Math.floor(Math.random() * 100);
    const specialChar = specialChars[Math.floor(Math.random() * specialChars.length)];

    const password = adjective + noun + specialChar + number
    passwordContainer.innerText = password;
}
