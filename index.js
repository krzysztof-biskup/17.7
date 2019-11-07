var fs = require('fs');

fs.readdir('./', 'utf-8', function(err, data) {
    var stringfyData = data.join('\n');
    fs.writeFile('./tekst.txt', stringfyData, function(err){
        if (err) throw err;
        console.log('Zapisano');
    })
})