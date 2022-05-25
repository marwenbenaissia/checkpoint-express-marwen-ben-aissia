let date = new Date();
let currenthour = date.getHours();
console.log(currenthour);
let currentDay = date.getDay();
console.log(currentDay);
const logger = (req, res, next) => {
    if (currenthour>8 && currenthour<17 && currentDay>=0 && currentDay<6){
        next();
    }
    else{
        res.send("<h2>sorry ...... </h2>")
    }
}
module.exports = logger;
