var fs = require('fs');
var StatMode = require('stat-mode');

fs.readdir('./', 'utf-8', function(err, data) {
    console.log(data);
    fs.writeFile('./tekst.txt', data, function(err){
        if (err) throw err;
        console.log('Zapisano');
    })
})