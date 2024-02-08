var fs = require('fs');

fs.readFile('./Files/text_file.txt', 'utf8', function(error, data){
    console.log(data);
});

console.log('This is my text file content:');