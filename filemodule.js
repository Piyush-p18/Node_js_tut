const fs = require('fs')

fs.readFile('file.txt' , 'utf8' , (err, data) => {
    console.log(err,data);
})

console.log("Finished reading file")

const a = fs.readFileSync('file.txt');
console.log(a.toString())

console.log("Finished reading file again")

fs.writeFile('file2.txt' , "This is file 2" , ()=>{
    console.log("written")
})

const b = fs.writeFileSync('file2.txt' , "This is file 2 in sync")
console.log(b)
