function tellFortune() {
    let myArray = [
        "You will be recognized for your incredible work ethic",
        "You will rekindle and old friendship",
        "You will reignite an old flame",
        "You will win the lottery",
        "You will uncover a lost civilization",
        "You will make first contact",
        "You will get to compete on a game show",
        "You will fail",
        "You will land your dream job",
        "You will get a promotion",
    ];
for(arr of myArray) {
    var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
}
document.getElementById("message").innerHTML = randomItem;
// document.body.innerHTML = randomItem;
}
