const fs = require("fs");

fs.readFile("a.txt", "utf-8", function(err, data) {
    if (err) {
        return console.error(err);
    }
    
    // Remove all whitespace and then add a space between remaining words
    const newData = data.replace(/\s+/g, ' ').split(' ').join(' ');

    fs.writeFile("a.txt", newData, "utf-8", function(err) {
        if (err) {
            return console.error(err);
        }
        console.log(newData);
    });
});
