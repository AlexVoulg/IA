import fetch from "node-fetch";

console.log("Starting")
const result = await fetch("https://deelay.me/1000/https://google.com");
console.log(result)