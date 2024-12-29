const fs = require("fs");

fs.readFile("a.txt", "utf-8", function(err, data){
    data = "the modified data" + " " + data;
    fs.writeFile("a.txt", data, "utf-8", function(err){
        console.log(data)
    })
})