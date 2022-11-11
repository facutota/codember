var fs = require('fs');

fs.readFile('users.txt', 'utf8', function(err, data) {
  
    if (err) {
    return console.log(err);
  }
  let myArray = data.split("\r\n\r\n");

  let input = new Array();
  var o = 0;
  for (var i = 0; i < myArray.length; i++) {
   
  
    if(myArray[i].indexOf("age:") !== -1){
        if(myArray[i].indexOf("usr:") !== -1){
            if(myArray[i].indexOf("eme:") !== -1){
                if(myArray[i].indexOf("psw:") !== -1){
                    if(myArray[i].indexOf("loc:") !== -1){
                        if(myArray[i].indexOf("fll:") !== -1){
                            input[o] = o + " " + myArray[i];
                            o++;
                        }
                    }
                }
            }
        }
    }
  }
  
  console.log(input);
  console.log(input.length);
  console.log(input[input.length-1]);

});

