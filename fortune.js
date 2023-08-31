function tellFortune() {
    let myArray = [
        "You will succeed in all things",
        "You will succeed in most things",
        "You will succeed in some things",
        "You will succeed in a few things",
        "You will fail in a few things",
        "You will fail in some things",
        "You will fail in most things",
        "You will fail in all things",
        "You will win the lottery",
        "You will get a promotion",
    ];
for(arr of myArray) {
    var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
}
document.getElementById("message").innerHTML = randomItem;
// document.body.innerHTML = randomItem;
}
