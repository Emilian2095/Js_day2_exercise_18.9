function piCalculator(randomNumber){
    let pi = Math.PI;
    //  randomNumber = Math.floor(Math.random());
     return randomNumber * (pi/180);
}

console.log(piCalculator(90));

// ex 7

function calculate(width, height, length) {
    area = width * height;
    volume = width * height * length;
    return area, volume;
    
}

calculate(2, 7, 5)
document.write(`The area of the box is: ${area}`);
document.write(`<br/>`);
document.write(`the volume of thus box is: ${volume}`);

// intermediate ex
document.write("<br/> <br>")
function bigLetters() {
    let word = "i am a developer";
    let capitalized = word.charAt(0).toUpperCase() + word.slice(1)
    return capitalized
}
document.write(bigLetters())

document.write("<br/> <br>");

// intermediate ex2

const grades = (Math, Physics, English) =>{
sum = Math + Physics + English;
average = sum /3;
return sum, average 
}
console.log(grades(3, 4, 5));

document.write(`Sum: ${sum}`);
document.write("<br/>")
document.write(`Average: ${average}`);

document.write("<br/> <br>");

const minutes = (totalMinutes) =>{
    let hours = Math.floor(totalMinutes / 60);
    let allMinutes =  totalMinutes % 60;
    return `${totalMinutes} minutes = ${hours}hours and ${allMinutes}minutes`
};
document.write(minutes(200));


