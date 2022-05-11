const fs = require ("fs");

fs.readFile('\aprendices.csv', 'UTF-8',(err, data)=> {
    if(err){
        console.log("error: ", err);
    }
    else{
        for (let i = 0; i < data.length; i++) {
            if(data.charAt(i) === ";"){
                data= data.replace(";", " ");
            }
        }
        console.log(data);
    }
} )
// forma 2
console.log