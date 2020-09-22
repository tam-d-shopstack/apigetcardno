var express = require("express");
var app = express();

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

// Genarator CardNo random contained 15 digits of any numbers (0-9)
function generatorCardNo() {
  var minm = 10; 
  var maxm = 99;
  const randomNumber = Math.floor(Math 
    .random() * (maxm - minm + 1)) + minm; 
  const uniqueValue = String(new Date().getTime())
  return uniqueValue + String(randomNumber);
}

//Create Method get cardno from api with url /cardno
app.get("/cardno", (req, res, next) => {
  res.json({cardNO:generatorCardNo()});
});