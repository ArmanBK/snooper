const https = require('https');

let url = "https://www.reddit.com/r/popular.json";

https.get(url, (res) => {
    let body = "";

    res.on("data", (chunk) => {
        body += chunk;
    });

    res.on("end", () => {
        try {
            let json = JSON.parse(body);
            // do something with JSON   
            console.log(json)


        } catch (error) {
            console.error(error.message);
        };
    });

}).on("error", (error) => {
    console.error(error.message);
});

//download one picture
//const file = fs.createWriteStream("file.jpg");
//const request = http.get(URLPic, function (response) {
//    response.pipe(file);
//});




//https://stackoverflow.com/questions/11944932/how-to-download-a-file-with-node-js-without-using-third-party-libraries
//?t=all
//.json?count=24