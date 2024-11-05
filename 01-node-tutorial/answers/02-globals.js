console.log(__dirname);

require('dotenv').config();

setInterval(()=>{
    console.log(`Hello World!`)
}, 1000)

console.log("MY_VAR:", process.env.VAR);