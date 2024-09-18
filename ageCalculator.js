
function ageCalculator() {
    
 let birthYear = parseInt(prompt("Enter your birth year"));
 let currentYear = new Date().getFullYear();

age = currentYear - birthYear;
age1 = age-1;
document.write(`You are either ${age} or ${age1} years old`)
 return age, age1;   
}
ageCalculator();