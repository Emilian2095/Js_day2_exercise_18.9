let min = -5;
let max = 25;
let medium = 10;

let temperature = Math.floor(Math.random() * (max-min) + min)
document.write(`The temperature is: ${temperature}`);
document.write("<br/>");
 if (temperature <= medium) {
    document.write("The weather is cold");
    
 }else if(temperature >= medium){
    document.write("The weather is moderate");
    
 };
 