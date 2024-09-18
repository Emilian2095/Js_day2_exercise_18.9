let favoriteFoods = ["pizza", "hamburger", "ice cream", "chocolate"];

function random(mn, mx) {
    return Math.random() * (mx - mn) + mn;
}
function randomFood(){
    document.write(favoriteFoods[Math.floor(random(1,5)) - 1]);
    
}
randomFood()