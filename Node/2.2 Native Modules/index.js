const fs = require("fs"); //importing file system module

// "file name and extension" "data" 
// "callback if error throw error other console log that file has been saved"
// cd karke terminal me path waha ka daal le .... jaha pe dalna hai

fs.writeFile("message.txt","Abhishek Rawat" , (err) => {
    if (err) throw err;
    console.log("the file has been saved!");
});

//read the file msg.txt
// const fs = require('fs');

// fs.readFile("message.txt","utf-8" ,(err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });
