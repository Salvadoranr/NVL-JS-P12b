function separateNumbers() {
    var oddNumber = [];
    var parNumber = [];
    var number = 0;
    for (var index = 0; index < 50; index++) {
        number = Math.floor((Math.random() * 100) + 1)
        if (number % 2) {
            oddNumber.push(number)
        } else {
            parNumber.push(number)
        }

    }
}