const http = require("http");
const fs = require("fs");
const port = 3000;
var requests = require("requests");

const homeFile = fs.readFileSync("home.html", "utf-8");

const replaceVal = (tempVal, orgVal) => {
  let temperature = tempVal.replace("{%tempVal%}", orgVal.main.temp);
  temperature = temperature.replace("{%tempMin%}", orgVal.main.temp_min);
  temperature = temperature.replace("{%tempMax%}", orgVal.main.temp_max);
  temperature = temperature.replace("{%country%}", orgVal.sys.country);
  temperature = temperature.replace("{%location%}", orgVal.name);
  temperature = temperature.replace("{%tempStatus%}", orgVal.weather[0].main);

  return temperature;
};

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    requests(
      "https://api.openweathermap.org/data/2.5/weather?q=London&appid=a6e4e1684a3746816c730767f9c036a2"
    )
      .on("data", (chunk) => {
        const objData = JSON.parse(chunk);

        // array
        const arrData = [objData];

        // console.log(arrData[0].main.temp);

        const realTimeData = arrData
          .map((val) => replaceVal(homeFile, val))
          .join("");
        res.write(realTimeData);
        res.end();
        // console.log(realTimeData);
      })

      .on("end", (err) => {
        // if (err) return console.log("connection closed due to errors", err);

        res.end();
      });
  }
});

server.listen(port, "127.0.0.1");
