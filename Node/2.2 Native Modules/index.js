const fs = require("fs"); //importing file system module

// "file name and extension" "data" 
// "callback if error throw error other console log that file has been saved"
// cd karke terminal me path waha ka daal le .... jaha pe dalna hai

// fs.writeFile("message.txt","Abhishek Rawat" , (err) => {
//     if (err) throw err;
//     console.log("the file has been saved!");
// });
// fs.writeFile("new.txt","i added something/nothing to this file" , (err) => {
//     if (err) throw err;
//     console.log("the file has been saved!");
// });

// fs.readFile("message.txt","utf-8" ,(err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

fs.readFile("new.txt","utf-8" ,(err, data) => {  //path , options , err/data
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
