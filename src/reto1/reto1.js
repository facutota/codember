var fs = require('fs');

//leo el archivo users
fs.readFile('users.txt', 'utf8', function(err, data) {
  
    if (err) {
    return console.log(err);
  }
  //como los usuarios estan separados por salto de linea uso Spil para eliminarlo y me los convierte en un array
  let myArray = data.split("\r\n\r\n");

  //creo otro array para colocar los usuarios validos
  let input = new Array();
  var o = 0;

  //itero el array
  for (var i = 0; i < myArray.length; i++) {
   
  //veo si el array tiene todo los keys
    if(myArray[i].indexOf("age:") !== -1){
        if(myArray[i].indexOf("usr:") !== -1){
            if(myArray[i].indexOf("eme:") !== -1){
                if(myArray[i].indexOf("psw:") !== -1){
                    if(myArray[i].indexOf("loc:") !== -1){
                        if(myArray[i].indexOf("fll:") !== -1){
                            //si los tiene los agrego al nuevo array
                            input[o] = o + " " + myArray[i];
                            o++;
                        }
                    }
                }
            }
        }
    }
  }
  //imprimo el nuevo array
  console.log(input);
  //imprimo la cantidad de usuarios validos
  console.log(input.length);
  //imprimo el ultimo usuario valido
  console.log(input[input.length-1]);

});

