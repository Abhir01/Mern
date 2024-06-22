// random betn 1 - 6
var randomno = Math.floor((Math.random()*6)+1);
// console.log(randomno);

var randImagesrc = "images/" + "dice" + randomno + ".png";


// console.log(randImagesrc);
document.querySelectorAll("img")[0].setAttribute("src" ,"randImagesrc");