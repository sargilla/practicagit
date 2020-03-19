console.log('hola mundo');


console.log('Ya sacamos nuestra primera foto')


console.log('me re olvide')

const fs = require('fs');

let profes = JSON.parse(fs.readFileSync('profes.json','utf-8'));
console.log(profes);