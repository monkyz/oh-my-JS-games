/start the game
function Card(n, s) {
    var number = n;
    var suit = s;
    //getters
    this.getNumber = function () {
        return number;
    };
    this.getSuit = function () {
        return suit;
    };
    this.getValue = function () {

        if (number > 10) {
            return 10;
        } else if (number === 1) {
            return 11;
        } else {
            return number;
        }
    };
}

var deal = function () {
    var randNum = Math.floor(Math.random() * 13) + 1;
    var randSuit = Math.floor(Math.random() * 4) + 1;
    //the card
    return new Card(randNum, randSuit);
};
